module.exports = (req, res, next) => {
  if (!req.credits) {
    return res.status(403).send({ error: "You must log in!" });
  }
  next();
};