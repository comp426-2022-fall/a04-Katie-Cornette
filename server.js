import minimist from "minimist" 
import express from "express"
import { roll } from "./lib/roll.js"
 
const express = require('express') 
const app = express();
const args = minimist(process.argv.slice(2)); 

const port = args.port ? args.port: 5000

app.get('/app/, (req, res) => {
	res.send('200 OK');
}); 


