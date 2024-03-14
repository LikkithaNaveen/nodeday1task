const express = require('express')
const app = express()

let datetime=new Date();


let date=("0"+datetime.getDate());
let month=("0"+datetime.getMonth())
let year=datetime.getFullYear();
let hours=datetime.getHours();
let minutes=datetime.getMinutes();
let seconds=datetime.getSeconds();

let timestampdate=Date.now();

timedate="TimeDate:"+date+"-"+month+"-"+year+""+hours+":"+minutes+":"+seconds+" "+"Timestamp:"+timestampdate
const fs = require('fs')
fs.writeFileSync("time.txt",timedate);