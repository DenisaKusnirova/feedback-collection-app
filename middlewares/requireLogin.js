module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(410).send({ error: "You must log in!" });
  }
  next();
};