import express from "express"

const router = express.Router()


router.post("/api/users/signup",(req,res) =>{
    try {
        res.send("IT WORKS!")
      } catch (error) {
          res.send("no")
      }
})


export {router as signupRouter}