import Post from "../models/models.js";
import FileService from "./FileService.js";
class PostService {
    async create(post, picture) {
        const file = FileService.saveFile(picture);
        const createdPost = await Post.create({...post, picture: file});
        return createdPost;
    }
    async getAll() {
        const posts = await Post.findAll();
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('Cannot find id')
        }
        const post = await Post.findByPk(id);
        return post;
    }
    async update(id, post) {
        if (!id) {
            throw new Error('Cannot find id');
        }
        const new_post = await Post.findByPk(id);
        new_post.author = post.author;
        new_post.content = post.content;
        new_post.title = post.title;
        new_post.picture = post.picture;
        await new_post.save();
        return new_post;

    }
    async delete(id) {
        if (!id) {
            throw new Error('Cannot find id');
        }
        await Post.destroy({
            where: {
                id: id,
            },
        });
        return null;
    }
}
export default new PostService();