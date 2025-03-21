const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    complaintid:{
        type:String,//data type
        required:true,//validate
    },
    serviceName:{
        type:String,
        required:true,

    },
    serviceProvider:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    bookingId:{
        type:String,
        required:true,
    },
    complaintCategory:{
        type:String,
        required:true,
    },
    urgencyLevel:{
        type:String,
        required:true,
    }
       
});
module.exports = mongoose.model(
    "ComplaintModel",//file name
    complaintSchema//function name
)