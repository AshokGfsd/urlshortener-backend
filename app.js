const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const urlRouter = require("./routes/urlRoutes");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const requestLogger = require("./utils/logger");
const unknownEndpoint = require("./utils/Error");
const { URL } = require("./utils/config");

app = express();
app.use(
  cors({
     origin: [
      "http://localhost:5173",
      "https://urlshotener-frontend.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/users", requestLogger, userRouter);
app.use("/url", requestLogger, urlRouter);
app.use(unknownEndpoint);

module.exports = app;
