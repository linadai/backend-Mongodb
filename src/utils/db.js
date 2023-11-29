//handle all the events related to the database
const mongoose = require('mongoose');
const logger = require('../utils/logger');
const  connectToDB = () =>{
    console.log("process.env.CONNECTION_STRING=",process.env.CONNECTION_STRING);
    const connectionString =process.env.CONNECTION_STRING;

    if(!connectionString){
        logger.error('connection string not defined');
        //正常退出， 非正常退出，人为正常退出， 人为非正常退出， 所以正常退出都写成process.exit(0); 
        //对于非正常退出我们可以自定义exit code
        process.exit(1);
    }

    const db = mongoose.connection;
    db.on('connected', ()=>{
        logger.info('connected to database');
    })
    db.on('error', (err)=>{
        logger.error(err);
        process.exit(2);//if there is an error, exit with code 2
    })
    db.on('disconnected', ()=>{
        logger.info('disconnected from database');
    })

    return mongoose.connect(connectionString)

}

module.exports = connectToDB;