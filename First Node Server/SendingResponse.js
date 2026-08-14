// Simple Node.js server
const { log } = require('console');
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    // res.setHeader('Content-Type','json')
    // res.setHeader('Content-Type','text/html')
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Hello Everyone</h1></body>');
    res.write('<html>');
    res.end();
});
const PORT=5000;
server.listen(PORT,()=>{
    console.log(`Server  running at http://localhost:${PORT}`);
    
})
