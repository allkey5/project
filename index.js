import express from 'express';
import sequelize from './db.js';
import router from './router.js';
import fileUpload from 'express-fileupload';

const port = 5000;

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(fileUpload({}))
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => console.log("Server started on port " + port));
    } catch (e) {
        console.log(e);
    }
};

start();
