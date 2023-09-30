const express = require("express")
const router = require("./src/routers/todo.routers")
const app = express()

require("dotenv").config()
require("./src/config/database.connection")

const port = process.env.PORT || 8001

app.use(express.json()) 

//domain.com/api/todo için
const todoRouter = require("./src/routers/todo.routers")
app.use("/api", todoRouter)

app.get("/", (req, res)=>{
    res.send("Hoşgeldiniz");
})

app.listen(port, ()=>{
    console.log(`Server ${port} portundan başlatıldı...`);
})



