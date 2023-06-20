const Movie = require("../../models/Movie");

exports.receiveMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    return next(error);
  }
};
exports.updateMovieById = async (req, res, next) => {
  try {
    await req.movie.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    return next(error);
  }
};
exports.deleteMovieById = async (req, res, next) => {
  try {
    await req.movie.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.getMovieById = async (req, res, next) => {
  try {
    res.status(200).json(req.movie);
  } catch (error) {
    next(error);
  }
};
exports.createMovie = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.posterImage = req.file.path;
    }
    console.log(req.body.posterImage);
    const movie = await Movie.create(req.body);
    res.json(movie);
  } catch (error) {
    next(error);
  }
};
