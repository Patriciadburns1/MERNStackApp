const mongoose = require('mongoose'); 
const config = require('config'); 
const db = config.get('mongoURI');  


const connectDB = async () => {
    try{
        await mongoose.connect(db, {useNewUrlParser:true})
        console.log("Mongo DB connected")
    }
    catch(error){
        console.log(error)
        //want to exit the process and we pass it a one exit with failure 
        process.exit(1); 
    }   
}

 module.exports = connectDB; 