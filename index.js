import express from 'express';
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 4000;

function connect(){
    const uri =
      "mongodb+srv://adminuser:mniks@MDB90@cluster0.1hs7w.mongodb.net/productsdb?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    });

}

app.use(express.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
