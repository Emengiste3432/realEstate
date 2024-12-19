import express from 'express';
import fs from 'fs';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

const router = express.Router();
const databasePath = './database.json';

// TESTING
const something = "randpm someonethgingsga"
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Use routes from the controller
app.use("/", houseController);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
module.exports = router;