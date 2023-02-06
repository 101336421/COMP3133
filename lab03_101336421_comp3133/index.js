const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/restrauntRoute');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://vaibhavguliani:#Lovely38@cluster0.qmkttoh.mongodb.net/?retryWrites=true&w=majority', {


  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(restaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });