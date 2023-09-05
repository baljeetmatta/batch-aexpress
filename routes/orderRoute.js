const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Orders Home Page")
})
router.get("/details/:from/:to",(req,res)=>{
    res.send("Order details "+req.params.from+" "+req.params.to);

})

router.get("/history",(req,res)=>{
    res.send("Order history ")
})
module.exports=router;
