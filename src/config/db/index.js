const mongoose = require('mongoose');

async function connect()
{
    try 
    {
        await mongoose.connect('mongodb://127.0.0.1:27017/education_dev');
        console.log("Connect success!!")
    } 
    catch (error) 
    {
        console.log("Lỗi", error)
    }
}

module.exports = { connect };