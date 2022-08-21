const express = require('express');
const app = express()
const mongoose = require('mongoose');

// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

mongoose.connect("mongodb+srv://ajay:ajay@cluster0.a9bjh.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const Admins = require('./Models/AdminModel');
const adminInput = {
    name:"Smile Boy!"
}

const admin = new Admins(adminInput);
// admin.save();
const adminRoutes = require('./Routes/adminRoute');
app.use('/admin',adminRoutes);

// app.get("/",(req,res)=>{
//     res.json({massage:"hello boyz"});
// })

app.listen(5000,()=>{
    console.log("server started at port 5000");
})