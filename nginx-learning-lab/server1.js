// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello from Express Server 1",
//     port: 3001,
//   });
// });

// app.listen(3001, () => {
//   console.log("Server 1 running on port 3001");
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Express Server 1",
        port: 3001,
    });
});

app.get("/slow", async(req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    res.json({
        message: "Slow response from Server 1",
        port: 3001,
    });
});

app.listen(3001, () => {
    console.log("Server 1 running on port 3001");
});