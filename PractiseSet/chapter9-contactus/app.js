const express=require("express");
const app=express();

app.use((req,res,next)=>{
    console.log("first dummy middleware",req.url,req.method);
    next();
})

app.use((req,res,next)=>{
    console.log("second dummy middleware",req.url,req.method);
    next();
    
})
// app.use((req,res,next)=>{
//     console.log("third dummy middleware",req.url,req.method);
//     res.send("<h1>welcome to complete coding</h1>");
    
// })

app.get("/",(req,res,next)=>{
    console.log("Handling / for get",req.url,req.method);
     res.send("<h1>welcome to complete coding</h1>");
    
})

app.get("/contact-us",(req,res,next)=>{
    console.log("Handling /contactus for get",req.url,req.method);
     res.send(`<form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>`);
});
app.post("/contact-us",(req,res,next)=>{
       console.log("Handling /contactus for post",req.url,req.method);
       res.send(`thanks for your details`)
})
    


const PORT=3100;
app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
    
});