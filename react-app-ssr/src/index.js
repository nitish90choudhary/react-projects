import express from "express";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

app.get('/', (req, res) => {
    const content= renderToString(<Home/>)
    res.send(content);
});

app.listen(3000, () => console.log("server is running"));
