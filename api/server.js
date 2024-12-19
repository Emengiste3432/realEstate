import express from 'express';
const app = express();

const PORT = process.env.PORT || 3500;


import bodyParser from 'body-parser';


// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Optional: to handle URL-encoded data


// Import routes
import routes from './index.js'; // Adjust path as necessary
app.use('/api', routes);

// Start the server and store the instance in the 'server' variable
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${server.address().port}`);
});