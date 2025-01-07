const mongoose = require('mongoose');
const News = require('./models/News'); // Path to your News model
require('dotenv').config(); // To use environment variables like DB connection URI

// Mock News Data
const newsData = [
    {
        title: "Breaking News: MERN Stack Tutorial Released",
        content: "A new MERN stack tutorial has just been released, covering the full process of building a web app with MongoDB, Express, React, and Node.js!",
        date: new Date(),
        author: "John Doe",
        category: "Technology"
    },
    {
        title: "Football: Messi Scores Hat-trick in Last Match",
        content: "Lionel Messi has scored a brilliant hat-trick in his last match against Real Madrid, continuing his legacy as one of the greatest players of all time.",
        date: new Date(),
        author: "Jane Smith",
        category: "Sports"
    },
    {
        title: "New Tech Gadgets Coming in 2025",
        content: "2025 is set to be a big year for new technology gadgets. Stay tuned for the release of the latest smartphones, wearables, and more.",
        date: new Date(),
        author: "Sam Lee",
        category: "Technology"
    },
    {
        title: "Global Economy Forecast for 2025",
        content: "Experts predict a slight growth in the global economy by 2025, with a focus on renewable energy and digital transformation.",
        date: new Date(),
        author: "Rachel Adams",
        category: "Economy"
    }
];

// Connect to MongoDB (no need for `useNewUrlParser` and `useUnifiedTopology` options)
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB...');
        // Insert Mock Data
        News.insertMany(newsData)
            .then(() => {
                console.log('Mock news data added to the database.');
                mongoose.disconnect(); // Disconnect once the data is added
            })
            .catch((error) => {
                console.error('Error inserting mock data:', error);
                mongoose.disconnect();
            });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
