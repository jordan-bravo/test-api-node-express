const express = require('express')
const app = express()
const port = 3333

app.get('/', (_req, res) => {
	res.send('Hello GET!')
	console.log('Received GET request at /')
})

app.post('/', (_req, res) => {
	res.send('Hello POST!')
	console.log('Received POST request at /')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
