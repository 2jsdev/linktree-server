require('dotenv').config()

console.log(process.env.PORT) 
console.log(process.env.NAME_APP) 

const Server = require("./server")


const server = new Server()


server.execute()