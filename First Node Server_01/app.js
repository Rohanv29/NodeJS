// simple nodejs server
const { log } = require('console');
const http=require('http');

// function requestListener(req,res){
//     console.log(req);
    
// }
const server =http.createServer((req,res)=>{
    console.log(req);
    
});
// server.listen(3000); 
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server Running on ADDRESS http://localhost:${PORT}`);
    
})