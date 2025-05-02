require("express-async-errors");

require("dotenv").config();

const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const { errorHandler } = require("./middleware/error-handler");
const { noRoute } = require("./middleware/no-route");

const app = express();

//MZ added code here
const userRouter = require("./api/user/router");
const courseRouter = require("./api/course/router");
const featureRouter = require("./api/feature/router");
const lessonRouter = require("./api/lesson/router");
const planRouter = require("./api/plan/router");
const questionRouter = require("./api/question/router");
const sectionRouter = require("./api/section/router");
const userCourseRouter = require("./api/user-course/router");

app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//MZ added code here
app.use("/api/user", userRouter);
app.use("/api/course", courseRouter);
app.use("/api/feature", featureRouter);
app.use("/api/lesson", lessonRouter);
app.use("/api/plan", planRouter);
app.use("/api/question", questionRouter);
app.use("/api/section", sectionRouter);
app.use("/api/user-course", userCourseRouter);

app.get("/api", (req, res) => {
  res.json({ message: "hi" });
});

app.use(noRoute);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("server listening at: ", process.env.PORT || 5000);
});
