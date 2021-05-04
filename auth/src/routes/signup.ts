import express,{Request,Response} from "express"
import {body,validationResult} from "express-validator"

const router = express.Router()


router.post("/",[
    body("email").isEmail()
    .withMessage("Email must be valid"),

    body("password").trim()
    .isLength({min:4,max:20})
    .withMessage("Password must be between 4 and 20 characters")
],
(req:Request,res:Response) =>{
    const errors = validationResult(req)
    
    const {email,password} = req.body
    
    try {
        if(!errors.isEmpty()){
        throw(errors)
        }
        res.send("IT WORKS!")
      } catch (error) {
          res.status(400).send(error.array())
      }
})


export {router as signupRouter}