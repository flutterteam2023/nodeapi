const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("connected mongo db database");
})
.catch((e)=>{
    console.log("Veritabanına bağlanılamadı: " +e);
})