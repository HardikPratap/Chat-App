import express from "express"

const router = express.Router()

router.get("/chat",(req,res)=>{
    res.send("Messages POint")
})

export default router