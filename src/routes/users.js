const { Router } = require('express')
const USERS = require('../utils/users_const')
const router = Router()

router.get('/', async (req, res) => {
    console.log(req.params)
    res.json({ USERS })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = USERS.find(user => user.id == +id)
    if (!user) {
        return res.status(404).json({
            message: 'User is not defined'
        })
    }
    res.status(200).json(user)
})

module.exports = router
