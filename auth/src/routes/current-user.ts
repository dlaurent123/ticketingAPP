import express from "express"

const router = express.Router()


router.get("/api/users/currentUser",(req,res) =>{
    try {
        res.send("IT WORKS!")
      } catch (error) {
          res.send("no")
      }
})


export {router as currentUserRouter}