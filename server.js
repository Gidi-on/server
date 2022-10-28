const express = require("express");
const cors = require("cors");
const port = 7000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/backend/track1", (req, res) => {
  console.log(req.body);
  res.json({
    slackUsername: "Aribaba",
    backend: true,
    age: 21,
    bio: "Aspiring pro dev.",
  });
});

app.listen(port, () => {
  console.log(`CORS enabled sample app listening on port ${port}`);
});
