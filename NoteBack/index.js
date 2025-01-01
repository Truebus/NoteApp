import express from 'express'; // ES Modules import
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import noteroute from './Router/NoteRouter.js'; // Ensure correct extension

const app = express();

dotenv.config();


app.use(express.json());
app.use(cors());

// Middleware for logging requests
app.use((req, res, next) => {
    console.log("hello versha");
    next();
});

const mongoose_url = process.env.MONGOOSE_URL;
mongoose.connect(mongoose_url)
  .then(() => {
      console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
      console.error('Error connecting to MongoDB Atlas:', err);
  });

app.use('/api/noteapp', noteroute); // Add the correct path prefix

app.listen(7000, () => {
    console.log("Server is running on port 5000");
});
