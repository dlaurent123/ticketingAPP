import express from "express"
import {body} from "express-validator"

const router = express.Router()


router.post("/api/users/signup",(req,res) =>{
    const {email,password} = req.body

    try {
        res.send("IT WORKS!")
      } catch (error) {
          res.send("no")
      }
})


export {router as signupRouter}