const router = require('express').Router()
const verify = require('./verifyToken')
const Session = require('../modals/session_modal')
const User = require('../modals/user_modal')
const Employee = require('../modals/employee_modal')
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
        date:Joi.required()
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
    if(!session_validation(req.body,res)) {return}
    const session = await Session.findOne({ref:req.body.ref})
    if(session) return res.status(400).send('ref already exists')
    const sess = new Session ({
        ref:req.body.ref,
        clientId:req.body.clientId,
        employeeId:req.body.employeeId,
        date:req.body.date,
    })
    if (req.body.vehiculeId) sess.vehiculeId=req.body.vehiculeId
    const client = await User.findOne({id:req.body.clientId})
    const emp = await Employee.findOne({id:req.body.employeeId})
    if(!client)return res.status(400).send('client ID doesnt exist')
    if(!emp)return res.status(400).send('Employee ID doesnt exist')
    const action1= await User.updateOne({id:req.body.clientId},{
        $push:{
            'sessions':req.body.ref
        }
    })
    const action2=await Employee.updateOne({id:req.body.employeeId},{
        $push:{
           'sessions':req.body.ref
        }
    })
    sess.save()
        .then(result => res.send(result))
        .catch(err=>res.status(400).send(err.message))
})

//put a session 
router.put('/:ref',verify,async (req,res)=>{
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    if(!session_validation(req.body,res)) {return}
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
    if (session.employeeId!==req.body.employeeId){
        let action = await Employee.updateOne({id:session.employeeId},{
            $pull:{sessions:session.ref}
        })
        action = await Employee.updateOne({id:req.body.employeeId},{
            $push:{sessions:req.body.ref}
        })
    }
    else if(req.body.ref!==session.ref){
        let action = await Employee.updateOne({id:session.employeeId},{
            $pull:{sessions:session.ref},
            $push:{sessions:req.body.ref}
        })
    }
    if (session.clientId!==req.body.clientID){
        let action2 = await User.updateOne({id:session.clientId},{
            $pull:{sessions:session.ref}
        })
        action = await User.updateOne({id:req.body.clientId},{
            $push:{sessions:req.body.ref}
        })
    }
    else if(req.body.ref!==session.ref){
        let action = await User.updateOne({id:session.clientId},{
            $pull:{sessions:session.ref},
            $push:{sessions:req.body.ref}
        })
    }
    res.send('updated')

})

//delete a session

router.delete('/:ref', verify, async (req, res) => {
    const role = req.user.userData.role
    if (role !== "Admin") return res.status(401).send('bad request')
    const session = await Session.findOne({ ref: req.params.ref })
    if (!session) return res.status(404).send('session not found!')
    const ref=session.ref
    const employeeId=session.employeeId
    const clientId=session.clientId
    let action1=await Employee.updateOne({id:employeeId},
        {
            $pull:  {sessions:ref}
        })
    action1=await User.updateOne({id:clientId},
         {
               $pull:{'sessions':ref}
          })
    Session.deleteOne({ref: req.params.ref }).then(() => res.send(session))
})

module.exports=router