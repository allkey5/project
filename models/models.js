import {DataTypes} from 'sequelize';
import sequelize from '../db.js';

const Post = sequelize.define('posts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    author: {type: DataTypes.STRING, require: true},
    title: {type: DataTypes.STRING, require: true},
    content: {type: DataTypes.STRING, require: true},
    picture: {type: DataTypes.STRING},
}) 

export default Post;