const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Express Server 2",
        port: 3002,
    });
});

app.get("/slow", async(req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    res.json({
        message: "Slow response from Server 2",
        port: 3002,
    });
});

app.listen(3002, () => {
    console.log("Server 2 running on port 3002");
});