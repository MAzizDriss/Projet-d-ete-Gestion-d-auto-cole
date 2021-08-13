const router = require('express').Router()
const verify = require('./verifyToken')
const Vehicule =require('../modals/car_modal')
const Joi = require('@hapi/joi')

router.get('/vehicules', verify, (req, res) => {
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    Vehicule.find().then(result => res.send(result))
        .catch(err => console.log(err))
})

router.get('/:id', verify, async (req, res) => {
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    const car = await Vehicule.findOne({id: req.params.id })
    if (!car) res.status(404).send('car not found')
    res.send(car)
})

//post one

function car_validation(data, res) {
    const schema = Joi.object({
        marque: Joi.string().required(),
        modele: Joi.string().required(),
        serie:Joi.number().required(),
        etat:Joi.number().required(),
        dateAchat:Joi.date().required(),
        dateEntretien:Joi.date().required(),
        disponibilite:Joi.required(),
        papier:Joi.required()
    })
    const { error } = schema.validate(data)
    if (error) {
        res.status(400).send(error.details[0].message)
    }
    return (!error)
}

router.post('/add', verify, async (req, res) => {
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    if (!car_validation(req.body, res)) { return }
    const car= await Vehicule.findOne().sort({ id: -1 })
    const vehicule = new Vehicule({
        id: (car) ? car.id + 1 : 1,
        marque: req.body.marque,
        modele: req.body.modele,
        serie:req.body.serie,
        etat:req.body.etat,
        dateAchat:req.body.dateAchat,
        dateEntretien:req.body.dateEntretien,
        disponibilite:req.body.disponibilite,
        papier:req.body.papier,
        service:true
    })
   vehicule.save()
        .then(result => res.send(result))
        .catch(err => res.status(400).send(err.message))
})
//put one
function car_update_validation(data, res) {
    const schema = Joi.object({
        marque: Joi.string().required(),
        modele: Joi.string().required(),
        etat:Joi.number().required(),
        dateEntretien:Joi.date().required(),
        service:Joi.required(),
    })
    const { error } = schema.validate(data)
    if (error) {
        res.status(400).send(error.details[0].message)
    }
    return (!error)
}

router.put('/:id', verify, async (req, res) => {
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    if (!car_update_validation(req.body, res)) { return }
    const car = await Vehicule.findOne({ id: req.params.id })
    if (!car) return res.status(400).send('car doesnt exist')
    const validation = await Vehicule.updateOne(
        { id: req.params.id },
        {
            $set: {
                marque: req.body.marque,
                modele: req.body.modele,
                etat:   req.body.etat,
                dateEntretien:req.body.dateEntretien,
                service:    req.body.service,
            }
        }
    )
    res.send('updated')

})


router.delete('/:id', verify, async (req, res) => {
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    const car = await Vehicule.findOne({ id: req.params.id })
    if (!car) return res.status(404).send('car not found!')
    Vehicule.deleteOne({ id: req.params.id }).then(() => res.send(car))
})


module.exports=router