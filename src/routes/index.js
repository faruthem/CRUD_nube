import { Router } from "express"
import Task from "../models/Task";

const router = Router();

router.get("/",async(req,res)=>{
    

    const tasks = await Task.find().lean();
    //console.log(tasks[0]);
    res.render("Index",{tasks:tasks});
});

router.post("/tasks/add",async(req,res)=>{

    try {
        const task =Task(req.body)
        const taskSaved = await task.save();
        console.log(taskSaved);
        //console.log(req.body);
        //res.send("Guardar");
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

    

});

router.get("/about",(req,res)=>{
    res.render("about");
});
router.get("/edit/:id",async(req,res)=>{
    //console.log(req.params.id)
  const task = await Task.findById(req.params.id).lean()

   // res.render("edit");
    res.render("edit",{task});
});

router.post("/edit/:id",(req,res)=>{
    console.log(req.body);
    res.send('Cambio recibido');
});


router.get("/delete",(req,res)=>{
    res.render("delete");
});

export default router;