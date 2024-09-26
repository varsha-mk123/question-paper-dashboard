const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your_mongo_url' with your actual MongoDB connection string)
mongoose.connect('mongodb+srv://dashboardAdmin:dashboard@questionpapercluster.pqmef.mongodb.net/?retryWrites=true&w=majority&appName=QuestionPaperCluster', { useNewUrlParser: true, useUnifiedTopology: true });

// Basic route to check if server is running
app.get('/', (req, res) => {
    res.send('API is running');
});

// Question Paper routes
const questionPapersRouter = require('./routes/questionPapers');
app.use('/api/question-papers', questionPapersRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


// const cors = require('cors');
// app.use(cors());
