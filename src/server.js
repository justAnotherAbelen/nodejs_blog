import express from 'express' // == const express = required('express')

/// import router : 
import router from './route/movieRoute.js'

/// create express instance : 
const app = express()

/// create port for server : 
const port = 5001 

///create server listen to the port using express instane 
const server = app.listen(port,()=>{
    console.log("hello nodejs")
    console.log(`server running on port : ${port}`)
})

// api route : 
app.use("/movie" , router)
// http://localhost:5001/movie/hello
// want to acces "/hello" , can acess to "/movie" on the movieRoutes first

/// app.get('') use to specify path to the app 
// .i.e want to acess '/hello' : base Url + whateer endpoint 
// => http://localhost:5001/hello

app.get('/hello', (req,res) =>{
    /// response 
    res.json({message: "hello world"})
})
app.get('/goodbye',(req,res) =>{
    res.json({message:"farewell world"})
})



// HTTP method : GET , POST , PUT , DELETE : 
// host locally : http://localhost:5001 (base Url)

// we can divide API endpoint into several independent directory like :
// auth : sign-in , sign-up (/auth)
// movie : menu , watch-list (/movie)
// user : profile (/user)

