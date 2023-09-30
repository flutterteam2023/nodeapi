const express = require("express")
const router = require("./src/routers/todo.routers")
const app = express()

require("dotenv").config()
require("./src/config/database.connection")

const port =   4000 || 5000 || 6000 || 7000 || 8000 || 9000



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



