let port = 3000;

if (process.env.NODE_ENV == 'production') {
	port=80;
}

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./BE/routers/router');
const app = express();


app.use('/api', router);
app.use(express.static('BE/public'));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
	res.status(200).sendFile(__dirname+'/BE/public/index.html');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
