import  express from 'express';
import mongoose from 'mongoose';
import * as restify from 'express-restify-mongoose';
import User from './models/User.model.js';
import Animals from './models/Animal.model.js';
import Session from './models/Session.model.js';
import Charity from './models/Charity.model.js';
import Charity from './models/Adopted.model.js';
import bodyParser from 'body-parser';

const port = 10021;
const app = express();
const router = express.Router();
app.use(bodyParser.json());

await mongoose.connect("mongodb://localhost:27017/animal_shelter").then((data) => {
    console.log("yay")
}).catch(error => {
    console.log("error")
    return
});

restify.serve(router, Session);
restify.serve(router, Animals);
restify.serve(router, Adopted);
restify.serve(router, User);
restify.serve(router, Charity);

app.get('/health', async (req, res) => {
    const dbResponse = await mongoose.connection.db.command({ ping: 1 });
    if(dbResponse.ok === 1){
        res.status(200);
    }
});

app.use(router);

app.listen(port);