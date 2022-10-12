import { Router } from "express"
import Task from "../models/Task";
import { renderTasks, createTask,aboutTask, renderTaskEdit, editTask, delteTask, doneTask } from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);
router.post("/tasks/add",createTask) ;
router.get("/about",aboutTask);
router.get("/edit/:id",renderTaskEdit);
router.post("/edit/:id",editTask);
router.get("/delete/:id",delteTask);
router.get("/taggdone/:id",doneTask);


export default router;