const express=require('express');
const data=require('./data.json')
const cors=require('cors')

const app=express();
const port=process.env.PORT || 4000

app.use(cors());

app.get('/',(req,res)=>{
  res.send("Hello");
})
app.get('/services',(req,res)=>{
  res.send(data);
})
app.listen(port,()=>{
   console.log(`Example app listening on port ${port}`)
})