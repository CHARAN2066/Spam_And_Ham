const express = require("express");
const { exec } = require("child_process");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.post("/predict", (req, res) => {
    const message = req.body.message;

    exec(`python3 predict.py "${message}"`, (error, stdout, stderr) => {
        if (error) {
            return res.send("Error");
        }
        res.json({ result: stdout.trim() });
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
