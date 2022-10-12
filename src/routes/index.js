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

router.post("/edit/:id",async(req,res)=>{
    const{id } = req.params

    await Task.findByIdAndUpdate(id, req.body)

    //console.log(req.body);
    //res.send('Cambio recibido');
    res.redirect('/');
});


router.get("/delete/:id",async(req,res)=>{
    const { id } = req.params;
    await Task.findByIdAndDelete(id)
    //res.render("delete");
    res.redirect('/');
});

router.get("/taggdone/:id",async(req,res)=>{
    const{id } = req.params;
    const task = await Task.findById(id)
    task.done = !task.done;
    await task.save();
    res.redirect("/");

});


export default router;