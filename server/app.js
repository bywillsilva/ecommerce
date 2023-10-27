const express = require("express");
const app = express();

app.use(express.json());
app.use((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
})

app.get("/", (req, res) => {
    res.send({"message": "Confirm"});
});

app.listen(3000, () => { console.log("Server running on 3000") });