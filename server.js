import minimist from "minimist" 
import express from "express"
import { roll } from "./lib/roll.js"
 
const express = require('express') 
const app = express();
const args = minimist(process.argv.slice(2)); 

//app.use
app.use(express.urlencoded({extended:tre})); 
const port = args.port ? args.port: 5000

//checking endpoint
app.get('/app/', (req, res) => {
	res.send('200 OK');
}); 

//endpoint app roll
app.get('/app/roll/', (req, res) => {
	res.send(roll(6,2,1));
}

//endpoint app accept
app.get('/app/roll/', (req, res, next) => {
	sides = parseInt(req.params.sides); 
	dice = paraseInt(req.params.dice);
	rolls = parseInt(req.params.dice); 
	res.send(roll(sides,dice,rolls));
}


