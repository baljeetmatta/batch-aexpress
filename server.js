//const http=require("http");
const express=require("express");
const path=require("path");
//variable,function,object,class
//express object  1 default function 
//const server=http.createServer((req,res)=>{

//});g
//if(req.url=="/" && req.method=="GET")
const app=express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))


app.post("/getdata",(req,res)=>{

    console.log(req.body);
    res.send("Welcome "+req.body.yourname);

})
app.get("/",(req,res)=>{
    res.sendFile( path.join(__dirname,"./public/home.html"));
})

// app.get("/",(req,res)=>{

//     res.send("Welcome to express server....");
// })

// app.get("/index.html",(req,res)=>{

//     //console.log(__dirname);

//   //  res.send("Index Page");
  
//    res.sendFile( path.join(__dirname,"./index.html"));
// })

// app.get("*",(req,res)=>{

//     res.status(404).sendFile(path.join(__dirname,"./404.html"));
// })

app.listen(3000,(err)=>{
    console.log("Server Started...");

})


