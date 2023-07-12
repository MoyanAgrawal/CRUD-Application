const mongoose=require ('mongoose')
const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    salary:{
        type: Number,
        default: 30000
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    desig:{
        type:String
    },
    city:{
        type:String,
        default:"Noida"
    }
})
const Employee =new mongoose.model("Employee",EmployeeSchema)
module.exports=Employee