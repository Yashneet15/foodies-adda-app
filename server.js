const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const restaurantRoutes = require('./routes/restaurant');
const orderRoutes = require('./routes/order');

app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));