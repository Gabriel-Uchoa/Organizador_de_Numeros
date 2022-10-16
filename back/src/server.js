const express = require('express')
const cors = require('cors')

const app = express()
const port = 3333

app.use(express.json())
app.use(cors())


app.post('/', (req, res) => {
    const body = req.body

    const numbers = body.numbers.split(",").map(Number)
    var resultFinal = numbers

    resultFinal.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0
    })

    return res.status(201).json({ resultFinal })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})