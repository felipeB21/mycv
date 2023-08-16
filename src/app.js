const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "../public")));

const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server is woriking in PORT: ${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views/about.html"));
});