'use strict';
const fs = require('fs');

let path = process.cwd()+'/log.txt';
let out = process.argv[2]+'/log.txt';
// for(let i=0;i<100;i++){
//     fs.writeFileSync(path,i+'\r\n',{flag:'a+'});
// }

let s = 0;
let t = setInterval(function () {
    if(s == 30) {
        console.log("Done");
        clearInterval(t); 
    }
    fs.writeFileSync(out,s+'\r\n',{flag:'a+'});
    s++;
}, 500); 
