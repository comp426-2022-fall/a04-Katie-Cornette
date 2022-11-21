import minimist from "minimist" 
import express from "express"
import  roll  from './lib/roll.js'
 
//const express = require('express') 
const app = express();
const args = minimist(process.argv.slice(2)); 

//app.use
app.use(express.json());  
app.use(express.urlencoded({extended:true})); 
//const port = args.port ? args.port: 5000
let port = 5000;
if(args.port){
	port = args.port;
}
 
//checking endpoint
app.get('/app/', (req, res) => {
	res.status(200); 
	res.send("200 OK");
}); 

//endpoint app roll
app.get('/app/roll/', (req, res) => {
	res.send(roll(6,2,1));
}); 

//endpoint app accept
app.use('/app/roll/', (req, res, next) => {
	sides = parseInt(req.params.sides); 
	dice = paraseInt(req.params.dice);
	rolls = parseInt(req.params.rolls); 
	res.send(roll(sides,dice,rolls)).end() ;
}); 

//endpoint sides
app.get('/app/roll/:sides/', (req, res, next) => {
	sides = parseInt(req.params.sides);
	res.send(roll(side, 2, 1)).end();
}); 

//endpoint sides, dice
app.get('/app/roll/:sides/:dice/', (req, res, next) => {
	sides = parseInt(req.params.sides);
	dice = parseInt(req.params.dice);
	res.send(roll(sides,dice, 1)).end();
}); 
// endpoint sides, dice, and roll
app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
	sides = parseInt(req.params.sides);
	dice = parseInt(req.params.dice);
	rolls = parseInt(req.params.rolls);
	res.send(roll(sides,dice, rolls)).end();
}); 
//404 not found
app.use((req, res)=>  {
        res.status(404).send("404 NOT FOUND");
});
app.listen(port); 


