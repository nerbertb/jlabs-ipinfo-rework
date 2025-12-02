import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/connectDB.js';
import ipinfoRoutes from './routes/ipinfoRoutes.js';

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

connectDB();

app.use(express.json());


app.use('/ipinfo', ipinfoRoutes);

app.get('/', (req, res) => {
  res.json({
    message: "Backend is now running"
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});