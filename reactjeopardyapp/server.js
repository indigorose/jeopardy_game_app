import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// app.get('/test', (req, res) => {
// 	res.send('CORS-enabled server is running!');
// });

// New route to handle requests to the jservice API
app.use('/api', async (req, res) => {
	console.log(`http://jservice.io/api${req.url}`);
	try {
		// Forward the request to the jservice API
		const apiResponse = await fetch(`http://jservice.io/api${req.url}`);
		const data = await apiResponse.json();
		res.send(data);
	} catch (error) {
		console.error('Error fetching data:', error);
		res.status(500).json({ error: 'Error fetching data' });
	}
});

const PORT = 5500;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
