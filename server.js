import minimist from "minimist" 
import express from "express"
import { roll } from "./lib/roll.js" 

const app = express();
const args = minimist(process.argv.slice(2)); 

vars port = args.port ? args.port: 5000


