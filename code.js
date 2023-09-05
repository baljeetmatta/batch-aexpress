const express=require("express");
const app=express();
const path=require("path");

app.use(express.static("public"));
const orderRoutes=require("./routes/orderRoute")

app.use("/order",orderRoutes);

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/login.html"));

})
app.get("/",(req,res)=>{
    res.send("Home page")
})
// app.get("/orders/",(req,res)=>{
//     res.send("Orders Home PAge")
// })
// app.get("/orders/details",(req,res)=>{
//     res.send("Orders Home PAge")
// })
// app.get("/orders/history",(req,res)=>{
//     res.send("Orders Home PAge")
// })
app.get("/listTasks",(req,res)=>{
    res.send("List Taks end point handled");
})


app.listen(3000,(err)=>{
    console.log("Server started....");
})