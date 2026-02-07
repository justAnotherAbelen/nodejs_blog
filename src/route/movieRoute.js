import express from 'express'
/// or using the import 

//create crouter : 
const router = express.Router()

router.get("/hello",(req,res) =>{
    res.json({message:"hello world"})
})
//// same endpoint " "
router.get("/",(req,res) =>{
    res.json({httpMethod : "get"})
})
router.post("/",(req,res) =>{
    res.json({httpMethod : "post"})
})
router.put("/",(req,res) =>{
    res.json({httpMethod : "put"})
})
router.delete("/",(req,res) =>{
    res.json({httpMethod : "delete"})
})
export default router;