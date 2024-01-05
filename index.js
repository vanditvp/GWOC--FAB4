var c=28;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/ankita3'; // Replace 'your_database_name' with your actual database name

// Function to connect to MongoDB
async function connectToMongoDB() {
  const client = new MongoClient(mongoURI, { useUnifiedTopology: true });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Access the database and collection
    const database = client.db('ankita3'); // Replace 'your_database_name' with your actual database name
    const collection = database.collection('products'); // Replace 'products' with your actual collection name

    // Initialize or retrieve products in case they don't exist
    let products = await collection.find().toArray();
    if (products.length === 0) {
      // Insert initial products
      const initialProducts = [
        { id: 'sproduct1', name: 'A Boy', price: 7900, image: 'sproduct1.jpg' },
        { id: 'sproduct2', name: 'Albert Einstein', price: 7800, image: 'sproduct2.jpg' },
        { id: 'sproduct3', name: 'Master-Piece', price: 7700, image: 'sproduct3.jpg' },
        { id: 'sproduct4', name: 'Millions of Strings', price: 7600, image: 'sproduct4.jpg' },
        { id: 'sproduct5', name: 'Beauty Of Strings', price: 7500, image: 'sproduct5.jpg' },
        { id: 'sproduct6', name: 'Black String Overloaded', price: 7400, image: 'sproduct6.jpg' },
        { id: 'sproduct7', name: '64-Palms', price: 7300, image: 'sproduct7.jpg' },
        { id: 'sproduct8', name: 'My-Sweet-Home', price: 7200, image: 'sproduct8.jpg' },
        { id: 'sproduct9', name: 'Wheels', price: 1694, image: 'sproduct9.jpg' },
        { id: 'sproduct10', name: 'Love You Dad', price: 8000, image: 'sproduct10.jpg' },
        { id: 'sproduct11', name: 'Moms-Love', price: 3706, image: 'sproduct11.jpg' },
        { id: 'sproduct12', name: 'Culture', price: 6046, image: 'sproduct12.jpg' },
        { id: 'sproduct13', name: 'The Puppy', price: 6500, image: 'sproduct13.jpg' },
        { id: 'sproduct14', name: 'Sudarshana', price: 7400, image: 'sproduct14.jpg' },
        { id: 'sproduct15', name: 'The Dog', price: 3240, image: 'sproduct15.jpg' },
        { id: 'sproduct16', name: '3d-effect', price: 4567, image: 'sproduct16.jpg' },
        { id: 'sproduct17', name: 'Love in the Air', price: 4500, image: 'sproduct17.jpg' },
        { id: 'sproduct18', name: 'Beautiful Eyes', price: 8700, image: 'sproduct18.jpg' },
        { id: 'sproduct19', name: 'Beauty And Brain', price: 6700, image: 'sproduct19.jpg' },
        { id: 'sproduct20', name: 'Smilie', price: 10000, image: 'sproduct20.jpg' },
        { id: 'sproduct21', name: 'Cutie', price: 6500, image: 'sproduct21.jpg' },
        { id: 'sproduct22', name: 'Good Things Starts With A', price: 7249, image: 'sproduct22.jpg' },
        { id: 'sproduct23', name: 'Oops', price: 7856, image: 'sproduct23.jpg' },
        { id: 'sproduct24', name: 'The Lion', price: 4567, image: 'sproduct24.jpg' },
        { id: 'sproduct25', name: 'Stay Calm', price: 7400, image: 'sproduct25.jpg' },
        { id: 'sproduct26', name: 'The Reception', price: 3240, image: 'sproduct26.jpg' },
        { id: 'sproduct27', name: 'Focus', price: 4567, image: 'sproduct27.jpg' },
        // Add more products as needed
    ];
    
      await collection.insertMany(initialProducts);
      console.log('Initial products inserted');
      products = initialProducts;
    }

    // Endpoint to get all products
    app.get('/getProducts', (req, res) => {
      res.json(products);
    });
    app.post('/addProduct', async (req, res) => {
      const newProduct = req.body;
      // Validate the new product data (you can add more validation if needed)
      if (newProduct && newProduct.name && newProduct.price && newProduct.image) {
  
          // Add the new product to the array and MongoDB collection
          const newProductId = `sproduct${c++}`;
          products.push({
              id: newProductId,
              name: newProduct.name,
              price: parseFloat(newProduct.price),
              image: newProduct.image,
          });
  
          await collection.insertOne({
              id: newProductId,
              name: newProduct.name,
              price: parseFloat(newProduct.price),
              image: newProduct.image,
          });
  
          res.status(200).send('New product added successfully');
      } else {
          res.status(400).send('Invalid product data');
      }
  });
    // Endpoint to handle product deletion
    app.delete('/deleteProduct/:id', async (req, res) => {
      const productId = req.params.id;

      // Find the index of the product with the given ID in the array
      const index = products.findIndex(product => product.id === productId);

      // If the product is found, remove it from the array and database
      if (index !== -1) {
        products.splice(index, 1);
        await collection.deleteOne({ id: productId });
        res.status(200).send('Product deleted successfully');
      } else {
        // If the product is not found, send a not found response
        res.status(404).send('Product not found');
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } finally {
    // Close the MongoDB connection when the app is terminated
    // await client.close();
  }
}

// Connect to MongoDB and start the server
connectToMongoDB();
