const express=require('express')
const app=express();
const mongoose=require('mongoose')
const {MONGOURI}=require('./keys');
const cors = require("cors");
const PORT=8000

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

mongoose.connect(MONGOURI)
mongoose.connection.on("connected",()=>{
    console.log("Connected to mongoose successfully");
})

mongoose.connection.on("error",(err)=>{
    console.log("Error connecting with database",err);
})

require('./models/User')
require('./models/Medics')



app.use(express.json());
app.use(cors(corsOptions));
app.use(cors({ methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }))
app.use(cors());
app.use(require('./routes/auth'))
app.use(require('./routes/medics'))



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})