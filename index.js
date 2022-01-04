const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = [
    {
        id: 1,
        name: "Jean"
    }, {
        id: 2,
        name: "Pierre"
    }
]

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/user/:id', (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === Number(id))
    if(user){
        return res.json(user)
    }else{
        return res.json({
            error: "No user found"
        })
    }
})

app.get("/", (req, res) => {
    res.json({
        message: "Hello"
    })
})

app.get("*", (req, res) => {
    res.json({
        error: "404"
    })
})

app.listen(80, () => console.log('Server is running!'))