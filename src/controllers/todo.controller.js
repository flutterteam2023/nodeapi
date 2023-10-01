
const todo = require("../models/todo.model")


const todoDelete = async (req, res) => {
    const {id} = req.params
    try {
        const todoUpdate = await todo.findByIdAndDelete(id)
         if(todoUpdate){
            return res.status(200).json({
                success: true,
                message: "Silme işlemi başarılı"
            });
         }else{
            return res.status(400).json({
                success: false,
                message: "Silinemedi find by id and delete!"
            });
         }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Silinemedi!"
        })
    }
}

const todoUpdate = async (req, res) =>{
    const {id} = req.params
    try {
         const todoUpdate = await todo.findByIdAndUpdate(id, req.body)
         if(todoUpdate){
            return res.status(200).json({
                success: true,
                message: "güncelleme başarılı"
            });
         }else{
            return res.status(400).json({
                success: false,
                message: "Kayıt güncellenemedi find by id and update!"
            });
         }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıt güncellenemedi!"
        })
    }
}

const todoGetAll = async (req, res) =>{
    try {
       const todoGetAll = await todo.find({});
       return res.status(200).json({
        success: true,
        data: todoGetAll
       });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıtlar getirilemedi! Hata oluştu"
        })
    }
}

const todoAdd = async (req, res) =>{
    //console.log(req.body);
    try {
        //Eğer bu isimde değişken varsa kayıt etmesin diye kontrol
        const _todo = await todo.findOne({name: req.body.name})
        if(_todo){
            return res.status(400).json({
                success: false,
                message: "Bu isimde name parametresi var"
            })
        }
        //Eğer bu isimde değişken varsa kayıt etmesin diye kontrol

        const todoAdd = new todo(req.body)
        await todoAdd.save().then(()=>{
            return res.status("201").json(todoAdd)
        }).catch((e)=>{
            return res.status(400).json({
                success: false,
                message: "Kayıt oluşturulurken hata çıktı: " + e
            })
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıt oluşturulamadı!"
        })
    }
}

module.exports = {
    todoAdd,
    todoGetAll,
    todoUpdate,
    todoDelete
}