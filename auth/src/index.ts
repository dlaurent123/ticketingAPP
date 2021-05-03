import express from "express"
import {json} from "body-parser"

const PORT = 3000
const app = express()
app.use(json())

app.get("/api/users", (req,res) =>{
  try {
    res.send("IT WORKS!")
  } catch (error) {
      res.send("no")
  }
    
})

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}!`)
})