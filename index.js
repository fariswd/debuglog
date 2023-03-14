const express = require("express");
const morgan = require("morgan");
const app = express();
var os = require("os");

const networkInterfaces = os.networkInterfaces();
const ipv4 = networkInterfaces.en0.find(
  (interface) => interface.family === "IPv4"
);

// morgan.token("debug", (req, res) => {
//   const q = req.query.q;
//   return `${q}`;
// });

// app.use(morgan(":debug"));

app.get("/", (req, res) => {
  const q = req.query.q;

  if (q) {
    console.log(q);
    res.send({ msg: q });
  } else {
    res.send({ msg: "empty query q" });
  }
});

app.listen(3000, () => {
  console.log(`listen on ${ipv4.address}:3000`);
});
