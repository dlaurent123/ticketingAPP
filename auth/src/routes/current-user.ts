import express from "express"

const router = express.Router()


router.get("/",(req,res) =>{
    try {
        res.send("IT WORKS!")
      } catch (error) {
          res.send("no")
      }
})


export {router as currentUserRouter}