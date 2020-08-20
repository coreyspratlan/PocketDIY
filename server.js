const express = require("express");

const app = express();
const PORT = process.env.PORT || 3007;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/test", function (req, res) {
    res.json({
        test: "test"
    })
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));