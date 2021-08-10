const router = require('express').Router()
const verify = require('./verifyToken')
const Session = require('../modals/session_modal')
const Joi = require('@hapi/joi')

//get all sessions 

router.get('/sessions',verify, (req,res)=>{
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    Session.find().then(result=>res.send(result))
                   .catch(err=>console.log(err))
})

//get one session

router.get('/:ref',verify, async (req,res)=>{
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    const session = await Session.findOne({ref:req.params.ref})
    if (!session) res.status(404).send('session not found')
    res.send(session)
})

// post a session
function session_validation(data, res) {
    const schema = Joi.object({
        ref: Joi.string().required(),
        clientId: Joi.number().required(),
        employeeId: Joi.number().required(), 
        vehiculeId:Joi.number(),
        date:Joi.date().required
    })
    const { error } = schema.validate(data)
    if (error) {
        res.status(400).send(error.details[0].message)
    }
    return (!error)
}

router.post('/add',verify,async (req,res)=>{
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    if(!session_validation) {return}
    const session = await Session.findOne({ref:req.body.ref})
    if(session) return res.status(400).send('ref already exists')
    const sess = new Session ({
        ref:req.body.ref,
        clientId:req.body.clientId,
        employeeId:req.body.employeeId,
        date:req.body.date,
    })
    if (req.body.vehiculeId) sess.vehiculeId=req.body.vehiculeId
    sess.save()
        .then(result => res.send(result))
        .catch(err=>res.status(400).send(err.message))
})

//put a session 
router.put('/:ref',verify,async (req,res)=>{
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    if(!session_validation) {return}
    const session = await Session.findOne({ref:req.params.ref})
    if(!session) return res.status(400).send('session doesnt exist')
    let sess= await Session.updateOne(
        { ref: req.params.ref },
        {
            $set: {
                ref:req.body.ref,
                clientId: req.body.clientId,
                employeeId:req.body.employeeId,
                date:req.body.date,
            },
            $unset:{
                vehiculeId :1
            }

        }
    )
    if (req.body.vehiculeId) sess = await Session.updateOne(
        {ref:req.body.ref},
        {  
            $set:{
                vehiculeId:req.body.vehiculeId
            }
        }
    )
    res.send('updated')

})

//delete a session

router.delete('/:ref', verify, async (req, res) => {
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    const session = await Session.findOne({ ref: req.params.ref })
    if (!session) return res.status(404).send('session not found!')
    Session.deleteOne({ref: req.params.ref }).then(() => res.send(session))
})

module.exports=router