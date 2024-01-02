const express = require("express");
const { createtodo, updateTodo } = require("./types");
const app = express();
const {todo} = require("./db");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.post("/todo", async function(req,res){
    const createpayload = req.body;
    const parsedpayload = createtodo.safeParse(createpayload);
    if(!parsedpayload.success)
    {
        res.status(411).json({
            msg : "You sent the wrong inputs."
        })
        return;
    }

    await todo.create({
        title : createpayload.title,
        description : createpayload.description,
    })

    res.json({
        msg : "todo created"
    })
})
app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json(todos);
})
app.put("/completed", async function(req,res){
    const updatepayload = req.body;
    const parsed = updateTodo.safeParse(updatepayload);
    if(!parsed.success)
    {
        res.status(411).json({
            msg : "You sent the wrong inputs."
        })
        return;
    }

    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : "Updated successfully"
    })
})


app.listen(3000,()=>{
    console.log("server started");
})