const mongoose=require('mongoose')
const schema = mongoose.Schema

const employeeSchema = new schema({
    id:{
        unique:true,
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:[true,'Verifiez le nom svp !'],
        minlength: 4
    },
    sessions:{
        type:Array,
        required:true,
    },
    salaire:{
        type:Number,
        required:true,
    },
    payment:{
        type:Boolean,
        required:true,
    },
    dayofpayment:{
        type:Number,
        required:true
    }

},{timestamps:true})
const Employee = mongoose.model('Session',employeeSchema)
module.exports=Employee