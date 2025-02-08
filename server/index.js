import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';

import defaultData from './default.js';

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));



