import express from 'express';
import { config } from 'dotenv';
import { createServer } from 'http';
const app = express();
var server = createServer(app);
config();

app.get("/", (req, res, next) => {
    res.status(200).send("hello docker app");
});

server.listen(3000, () => {
    console.log("app started and running " + server.address().port);
});
