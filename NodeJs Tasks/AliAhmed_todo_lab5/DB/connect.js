const mongoose= require('mongoose');
const mongooseUrl = process.env.DB || 'mongodb://localhost:27017/todoDB';
mongoose.connect(mongooseUrl);