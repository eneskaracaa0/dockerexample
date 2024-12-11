const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const database=require('./config/database.js');

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

database();


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`SERVER İS RUNNİNG ${PORT}`);
})

