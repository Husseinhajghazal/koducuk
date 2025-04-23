require("express-async-errors");

require("dotenv").config();

const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const { errorHandler } = require("./middleware/error-handler");
const { noRoute } = require("./middleware/no-route");

const app = express();

app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "hi" });
});

app.use(noRoute);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("server listening at: ", process.env.PORT || 5000);
});
