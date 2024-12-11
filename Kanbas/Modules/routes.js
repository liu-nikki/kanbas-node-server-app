import * as modulesDao from "./dao.js";
import db from "../Database/index.js";

export default function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules",async (req, res) => {
    console.log(req.params)
    const { cid } = req.params;
    console.log(cid)
    const modules = await modulesDao.findModulesForCourse(cid);
    console.log('fetch')
    console.log(modules)
    res.json(modules);
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const module = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    const newModule = await modulesDao.createModule(module);
    res.send(newModule);
  });

  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await modulesDao.deleteModule(mid);
    res.send(status);

  });

  app.put("/api/modules/:moduleId", async (req, res) => {
   const { moduleId } = req.params;
   const moduleUpdates = req.body;
   const status = await modulesDao.updateModule(moduleId, moduleUpdates);
   res.send(status);
 });

}