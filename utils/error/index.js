module.exports = errorHandler = (error, req, res, next) => {
  if (typeof error === 'string') {
    // custom application error
    return res.status(400).send({ error: true, message: error })
  } else if (error?.name === 'JsonWebTokenError') {
    // jwt authentication error
    return res.status(401).send({ error: true, message: 'Invalid Token' })
  } else if (error?.name === 'TokenExpiredError') {
    // jwt authentication error
    return res.status(401).send({ error: true, message: 'Expired Token' })
  } else {
    return res.status(500).send({ error: true, message: error })
  }
}
