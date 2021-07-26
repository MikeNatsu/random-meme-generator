const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');

const api = 'https://namo-memes.herokuapp.com';

app.use(cors());
app.get('/memes/:n', async (req, res) => {
	try {
		const { n } = req.params;
		const data = await fetch(`${api}/memes/${n}`);
		console.log(data);
		const memes = await data.json();
		res.send(memes);
	} catch (error) {
		console.log(error);
	}
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
	console.log(`Server running on ${port}`);
});
