module.exports = (req, res, next) => {
  if (req.credits < 5) {
    return res.status(403).send({ error: "You must add credits!" });
  }
  next();
};