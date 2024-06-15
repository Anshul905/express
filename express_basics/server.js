const express = require("express")
const path = require("path")

const app = express()
const PORT = 3000;



// we res.sendFile(absolute path) for all static path 

// convention - public folder has static pages 
// builtin middileware - you can use this for index.html ( not for other static page with name other than index.html )
// app.use(express.static(path.join( __dirname , "public")))



// page creation ( url )
app.get( "/" , (req,res) => {
    // res.send('Welcome to my page')
    
    res.write('<h1> Hello, World! </h1>')
    res.write('Welcome to my page')
    res.send()
}  )



app.get( "/contactus" , (req,res,err) => {
    if (err) console.log(err);
    res.send('example@gmail.com')

    // any static page ( with or without inside public folder )
    // res.sendFile(path.join(__dirname,"/public/contactus.html"))

}  )











app.get( "/about" , (req,res,err) => {
    // res.send('About us page')

    // res.send({ 
    //     name: 'okok ',
    //     email: 'example@gmail.com',
    //     password: 'asd456'
    // } )
    res.json({ 
        name: 'okok ',
        email: 'example@gmail.com',
        password: 'asd456'
    } )


    // res.send( [ 
    //     { 
    //         name: 'okok ',
    //         email: 'example@gmail.com',
    //         password: 'asd456'
    //     },
    //     { 
    //         name: 'dumhsj ',
    //         email: 'examplesvsvv@gmail.com',
    //         password: '78465'
    //     }
    // ] )


    // res.json( [ 
    //     { 
    //         name: 'okok ',
    //         email: 'example@gmail.com',
    //         password: 'asd456'
    //     },
    //     { 
    //         name: 'dumhsj ',
    //         email: 'examplesvsvv@gmail.com',
    //         password: '78465'
    //     }
    // ] )

}  )










// serevr creation 
app.listen( PORT , (req,res) => {
    console.log(`Server is running at port no ${PORT}`);  
} ) 
