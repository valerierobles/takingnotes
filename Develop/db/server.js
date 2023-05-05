const express = require("express");
const path = require("path");
const api = require("./db/noteroute.js");
const html = require("./db/htmlroute.js");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
}); 

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});





