module.exports = (app) => {
  try {
    app.use('/api/nightfall_v1/auth', require('./auth'))
    app.use('/api/nightfall_v1/user', require('./user'))
    // app.use('/api/rbl_v1/user', require('./user'))
  } catch (e) {
    console.log('Error occurred----', e)
  }
}
