import express,{NextFunction, Request,Response} from "express"
import {body,validationResult} from "express-validator"
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

const router = express.Router()


router.post("/",[
    body("email").isEmail()
    .withMessage("Email must be valid"),

    body("password").trim()
    .isLength({min:4,max:20})
    .withMessage("Password must be between 4 and 20 characters")
],
(req:Request,res:Response,next:NextFunction) =>{
    const errors = validationResult(req)
    
    const {email,password} = req.body
    
    try {
        if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array())
        }
        throw new DatabaseConnectionError()
        res.send({})
      } catch (error) {
          next(error)
      }
})


export {router as signupRouter}