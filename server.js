
const express = require('express');

const app = express()

app.use(express.json())

const PORT =  process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}, http://localhost:${PORT}`)
})