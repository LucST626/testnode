const express = require('express')
const app = express()

let texto = ""
app.get('/', (req, res) => {
    console.log("el usuario llamo a /")
  res.send('Hello World!')
})

app.get('/grab', (req, res) => {
    const data = req.query.data
    
  texto+=data
    res.send(`Received data: ${data}`);
})

app.get('/read', (req, res) => {
    res.send(texto);
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
