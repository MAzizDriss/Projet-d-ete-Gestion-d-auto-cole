const mongoose=require('mongoose')
const schema = mongoose.Schema

const vehiculeSchema = new schema({
    id:{
        unique:true,
        type:Number,
        required:true,
    },
    marque:{
        type:String,
        required:true,
    },
    modele:{
        type:String,
        required:true,
    },
    serie:{
        unique:true,
        type:Number,
        required:true,
    },
    etat:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    dateAchat:{
        type:Date,
        required:true,
    },
    dateEntretien:{
        type:Date,
        required:true,
    },
    papier:{
        type:Boolean,
        required:true
    },
    disponibilite:{
        type:Boolean,
        required:true
    },
    service:{
        type:Boolean,
        required:true
    },
    imageLink:{
        type:String,
    }

},{timestamps:true})
const Vehicule = mongoose.model('Vehicule',vehiculeSchema)
module.exports=Vehicule