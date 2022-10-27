const express = require('express')

const app = express()

const data = {
    'slackUsername': 'Worldsalt3',
    'backend': true,
    'age': 23,
    'bio': 'I am Riliwan Hassan, a Frontend developer aiming to be fullstack developer.'
}

app.get('/', (req, res) => {
    res.send(data)
})      

const port = process.env.PORT || 5050
app.listen(port, () => console.log(`listening to port ${port}`))