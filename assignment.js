const express=require("express");
const app=express();
const fs=require("fs")
app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/alltasks",(req,res)=>{
    fs.readFile("todo.txt","utf-8",(err,data)=>{
        let records=JSON.parse(data);
        res.json(records);
    });
})

app.post("/addTask",(req,res)=>{

fs.readFile("todo.txt","utf-8",(err,data)=>{
    let records=JSON.parse(data);
    let obj={};
    obj.title=req.body.title;
    records.push(obj);
    fs.writeFile("todo.txt",JSON.stringify(records),(err)=>{});
    res.send("Added");
    

})

})

app.listen(3000,(err)=>{
    if(!err)
    console.log("Server started..")
})