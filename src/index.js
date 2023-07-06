const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Woho! Express on Vercel.')
})

app.listen(5200, () => {
	console.log('Running on port 5200');
})

module.exports = app;