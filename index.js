const port = 3000;

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./BE/routers/router');
const app = express();


app.use('/api', router);
app.use(express.static('BE/public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.status.sendFile('index.html');
});




app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
