import express from 'express';
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://adminuser:mniks@MDB90@cluster0.1hs7w.mongodb.net/productsdb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
