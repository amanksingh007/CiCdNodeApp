const express= require("express")
const app=express();

app.get("/health",(req,res)=>{
    return res.status(200).send({res:"Server Healthy"});
});

const PORT = process.env.port || 3000;
app.listen(PORT,()=>{
    console.log("App s Running on ${PORT}");
})