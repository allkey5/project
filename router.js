import Router from "express";
import Post from "./models/models.js";
import Controller from "./controllers/controller.js"

const router = new Router();

router.get('/', async(req, res) => {
    res.status(200).json('aaaaaaaaaa');
})
router.post('/posts', Controller.create)
router.get('/posts/:id', Controller.getOne)
router.get('/posts', Controller.getAll)
router.put('/posts/:id', Controller.update)
router.delete('/posts/:id', Controller.delete)

export default router;