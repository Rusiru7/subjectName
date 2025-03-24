const {createServer} = require ('node:http');

const localHost ='127.0.0.1';
const port =3000;

const server = createServer((req,res) =>{
    res.statusCode =200;
    res.setHeader('Content-type','text/plain')
    res.end("Hello ode JS");
});

server.listen(port,localHost,()=>{
console.log(`Running on ;${localHost}:${port}`);
});