const express=require ("express");

const app=express();

const port=3002;

app.get("/", function(req,res){
    res.sendFile("/index.html",{root:__dirname});
});

app.use(express.static(__dirname));


app.listen(port,()=>{
    console.log("now listening on port "+port);
})