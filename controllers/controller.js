import PostService from "../services/PostService.js";

class Controller {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getAll(req, res){
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getOne(req, res){
        try {
            const id = req.params.id;
            if(!id){
                throw new Error('Cannot find id');
            }
            const post = await PostService.getOne(id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async update(req, res){
        try {
            const id = req.params.id;
            if(!id){
                throw new Error('Cannot find id');
            }
            const post = await PostService.update(id, req.body);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async delete(req, res){
        try {
            const id = req.params.id;
            if(!id){
                throw new Error('Cannot find id');
            }
            await PostService.delete(id);
            return res.status(200).json();
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new Controller();  
