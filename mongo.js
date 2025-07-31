const { keyboard } = require("@testing-library/user-event/dist/keyboard");
const { type } = require("@testing-library/user-event/dist/type");
// const mongoose=require("mongoose")

const mongoose = require("mongoose");

require("dotenv").config();


mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB Atlas connected");
})
.catch((err) => {
    console.log("Connection failed:", err);
});   



// require("dotenv").config();          
// require("dotenv").config({ path: __dirname + "/.env" });
// const path = require("path");

// require("dotenv").config({ path: path.resolve(__dirname, ".env") });
// require("dotenv").config();


                                               
    

// console.log("Working directory:", process.cwd());     
// console.log("Resolved __dirname:", __dirname);
// console.log("DB_URI:", process.env.DB_URI);   

// if (!process.env.DB_URI) {
//     console.error(" DB_URI is undefined. Check your .env file.");
//     process.exit(1);
// }

// mongoose.connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log(" MongoDB Atlas connected"))
// .catch(err => console.error(" MongoDB connection error:", err));


// mongoose.connect(process.env.DB_URI, {         
//     useNewUrlParser: true,
//     useUnifiedTopology: true,  
// })     
// .then(() => console.log("MongoDB Atlas connected"))
// .catch(err => console.error("MongoDB connection error:", err));  



// <----------old------------>
// mongoose.connect("mongodb://localhost:27017/form")  
// .then(()=>{
//     console.log("connected");
// })  
// .catch(()=>{
//     console.log('failed');       
// })       


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true 
    },
    batch:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true 
    },
    command:{
        type:String,
        required:true  
    },       
})   


const collection=mongoose.model("collection", newSchema);  
                                                                    
module.exports=collection         