import express from "express"

const Router = express.Router()

Router.get("/signup",(req,res)=>{
    res.send("Signup POint")
})
Router.get("/check",(req,res)=>{
    res.send("Check POint Auth")
})
Router.post("/login",(req,res)=>{
    res.send("Login POint")
})
Router.post("/logout",(req,res)=>{
    res.send("Logout POint")
})

export default Router