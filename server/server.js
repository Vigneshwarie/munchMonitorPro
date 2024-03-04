const express = require('express');
const db = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
     res.send('Testing server entry point');
});

db.once('open', () => {
     app.listen(PORT, () => {
          console.log(`Server listening on port ${PORT}`);
     });
});

