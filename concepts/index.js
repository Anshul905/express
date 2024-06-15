const { log } = require("console");
const express = require("express")
const path = require("path")
const app = express() ;
const PORT = 5000 ;



// create  
app.get("/" , (req,res)  => {
    res.sendFile( path.join( __dirname + "/public/form.html" ) )
})

//read 
const bodyParser = require("body-parser") 
app.use(bodyParser.urlencoded({extended:true}) )
app.post("/api/v1/login" , (req,res)  => {
    const data = req.body ;
    console.log(data);

    res.send(data)
    // res.send(`Done Mr. ${data.name}`)
    
})



// calculator app 

// middileware - body-parser to parse the data  
const bodyParser = require("body-parser"); 
const { log } = require("util");
app.use(bodyParser.urlencoded({extended:true}) )

app.get( "/cal" , (req,res,err) => {
    res.sendFile(__dirname + "/pages/cal.html" )
}  )

app.post( "/cal" , (req,res) => { 
    console.log( req.body );
    const output = parseInt(req.body.num1) + Number(req.body.num2) ;
    res.send( `sum is ${output}` )
    res.send("Thank you for using calculator")
})



// serevr creation 
app.listen( PORT , (req,res) => {
    console.log(`Server is running at port no ${PORT}`);  
} ) 
