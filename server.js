const express = require("express")
const path = require("path")
const app = express()
app.use(express.static(path.join(__dirname, "dist")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"))
})
app.listen(process.env.PORT || 8080, () => console.log("Server started on port:", process.env.PORT || 8080))