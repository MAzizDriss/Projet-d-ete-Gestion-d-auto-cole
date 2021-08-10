const router = require('express').Router()
const verify = require('./verifyToken')
const User = require('../modals/user_modal')
//get all the clients data

router.get('/clients', verify, (req, res) => {
    user = req.user
    if (user.userData.role !== "Admin") return res.status(401).send('bad request')
    User.find({role:"User"}).then((result) => {
        res.send(result)
    }).catch(err => console.log(err))
})

//get one client 
router.get('/client/:id',verify,async (req,res)=>{
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    const user = await User.findOne({id:req.params.id})
    if (!user) return res.status(404).send('User not found !')
    res.send(user)
})

//perform a delete request
router.delete('/client/:id', verify, async (req, res) => {
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    const user = await User.find({ id: req.params.id })
    if (user.length === 0) return res.status(404).send('user not found!')
    User.deleteOne({ id: req.params.id }).then(() => res.send(user))
})

//perform a put request
router.put('/client/:id', verify, async (req, res) => {
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    User.updateOne(
        { id: req.params.id },
        {
            $set: {
                name: req.body.name,
                payment: req.body.payment,
            }

        }
    ).then(() =>
        res.send('updated !'))
})

module.exports = router