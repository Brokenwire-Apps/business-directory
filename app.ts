import express from "express";
import 'dotenv/config';
import serverDetails from "./src/types/server.type";

const serverDetails: serverDetails = {
    port: process.env.PORT || "3000",
    host: process.env.HOST || "localhost",
};

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

