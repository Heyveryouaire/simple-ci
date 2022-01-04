const users = require("../assets/json/users.json")

const Router = require("express").Router()

Router.get('/:id', (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === Number(id))
    if (user) {
        return res.json(user)
    } else {
        return res.json({
            error: "No user found"
        })
    }
})

Router.get('/', (req, res) => {
    res.json(users)
})

module.exports = Router