const model = require('../model')

module.exports = {
  create: (data) => {
    return new Promise((resolve, reject) => {
      _create(data)
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  findByIdAndUpdate: (id, data) => {
    return new Promise((resolve, reject) => {
      _findByIdAndUpdate(id, data)
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  findOne: (data) => {
    return new Promise((resolve, reject) => {
      _findOne(data)
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  findByIdAndDelete: (data) => {
    return new Promise((resolve, reject) => {
      _findByIdAndDelete(data)
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}

// Required Function

const _create = async (query) => {
  const response = await model.user.create(query)
  return response
}

const _findByIdAndUpdate = async (id, query) => {
  const response = await model.user.findByIdAndUpdate(id, query, {
    new: true,
    upsert: true,
  })
  return response
}

const _findOne = async (query) => {
  const response = await model.user.findOne(query)
  return response
}

const _findByIdAndDelete = async (id) => {
  const response = await model.user.findByIdAndDelete(id, {
    new: true,
    upsert: true,
  })
  return response
}
