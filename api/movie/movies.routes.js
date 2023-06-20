const express = require("express");
const router = express.Router();
const uploader = require("../../middlewares/uploader");
const Movie = require("../../models/Movie");
const {
  createMovie,
  deleteMovieById,
  getMovieById,
  receiveMovies,
  updateMovieById,
} = require("./movies.controllers");

router.param("movieId", async (req, res, next, movieId) => {
  try {
    const movie = await Movie.findById(movieId);
    if (!movie)
      return res.status(404).json({
        msg: "There is not movie with this id",
      });
    req.movie = movie;
    next();
  } catch (error) {
    next(error);
  }
});

router.get("/", receiveMovies);
router.post("/", uploader.single("posterImage"), createMovie);
router.put("/:movieId", updateMovieById);
router.delete("/:movieId", deleteMovieById);
router.get("/:movieId", getMovieById);

module.exports = router;
