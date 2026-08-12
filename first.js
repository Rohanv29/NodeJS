// console.log("Rohan Verma");
const { log } = require('console')
const fs=require('fs')
fs.writeFile("output.txt","writing File",(err)=>{
    if(err) console.log("Error Occured");
    else console.log('File written successfully');
    
})
