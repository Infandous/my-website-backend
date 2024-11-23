// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const projectRoutes = require('./routes/projectRoutes');
const emailRoutes = require('./routes/emailRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//API routes
app.use('/api/projects', projectRoutes);
app.use('/api/send-email', emailRoutes);

//start server
app.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`);
});