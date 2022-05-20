import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { mongoConnection } from './mongoConnection.js';

/*****************************************/

// import route1 from "./routes/route1.js"
// import route2 from "./routes/route2.js"
//...

/*****************************************/

dotenv.config();

const app = express();

app.use(cors());
app.use(json());


//app.use(route1)
//app.use(route2)
//...

const port = process.env.PORT || 5000;

app.listen(port, () => {

    mongoConnection();
    console.log('Hackaton2 API running!');

});