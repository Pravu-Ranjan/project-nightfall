const manager = require('../service/index')

module.exports = {
  updateUserDetails: async (req, res, next) => {
    try {
      const id = req.params.id
      const { first_name, last_name } = req.body
      let query = { first_name: first_name, last_name: last_name }
      if (!id) {
        throw new Error(`User not found`)
      } else {
        const result = await manager.userManager.findByIdAndUpdate(id, query)
        res
          .status(200)
          .send({ message: 'User updated', data: result, error: false })
      }
    } catch (error) {
      next(error.message)
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const id = req.params.id
      if (!id) {
        throw new Error(`User not found`)
      } else {
        const result = await manager.userManager.findByIdAndDelete(id)
        if (result) {
          res.status(200).send({
            message: 'Your account has been deleted successfully',
            error: false,
          })
        } else {
          throw new Error(
            `Cannot delete your account at this moment. Try after some time`
          )
        }
      }
    } catch (error) {
      next(error.message)
    }
  },
}
