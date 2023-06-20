const express = require("express");

const app = express();
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./database");
const notFound = require("./middlewares/notfound");
const errorHandle = require("./middlewares/errorhandle");
const moviesRoutes = require("./api/movie/movies.routes");

// activate dB
connectDb();

//middlewars
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/movies", moviesRoutes);
// app.use("/movie");

app.use(notFound);
app.use(errorHandle);

//server activation
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
