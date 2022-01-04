const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = require("./routes/users.js")
const PORT = process.env.PORT || 3000

app.use("/users", users)

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

app.listen(PORT, () => console.log('Server is running!'))