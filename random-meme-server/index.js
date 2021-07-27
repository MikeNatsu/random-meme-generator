const express = require('express');
const app = express();
const cors = require('cors');
const memesReddit = require('reddit-image-fetcher');

app.use(cors());
app.get('/memes/:n', async (req, res) => {
	try {
		const { n } = req.params;
		const data = await memesReddit.fetch({
			type: 'meme',
			total: n,
			addSubreddit: ['memes', 'funny'],
		});
		res.send(data);
	} catch (error) {
		console.log(error);
	}
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
	console.log(`Server running on ${port}`);
});
