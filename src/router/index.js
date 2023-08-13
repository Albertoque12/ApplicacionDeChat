const usersController = require('../users/users.controller')

const router = app => {
    app.use('/users', usersController)
}

module.exports = router