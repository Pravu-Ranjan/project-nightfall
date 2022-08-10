let express = require('express')
let router = express.Router()

const controller = require('../api/index')

router.put('/updateUserDetails/:id', controller.user.updateUserDetails)
router.delete('/deleteUser/:id', controller.user.deleteUser)
// router.get('/findUser/:contact_number', controller.user.findUser)
// router.get('/findAllUsers', controller.user.findAllUsers)
// router.put('/updateUser/:contact_number', controller.user.updateUser)
// router.put('/updateUser/spouse/:uuid', controller.user.updateUserSpouse)
module.exports = router
