const express = require('express');
const cors = require('cors');
const categories = require('./Data/categories');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Dummy product data
const products = [
    { id: 1, name: 'Laptop', price: '€999', image: 'laptop.jpg', description: 'Een krachtige laptop voor dagelijks gebruik.' },
    { id: 2, name: 'Smartphone', price: '€699', image: 'smartphone.jpg', description: 'Een smartphone met veel functies.' },
    { id: 3, name: 'Tablet', price: '€499', image: 'tablet.jpg', description: 'Een compacte en krachtige tablet.' },
    { id: 4, name: 'Smartwatch', price: '€199', image: 'smartwatch.jpg', description: 'Een stijlvol horloge met slimme functies.' },
    { id: 5, name: 'Bluetooth Speaker', price: '€129', image: 'speaker.jpg', description: 'Draadloze speaker voor muziek onderweg.' },
    { id: 6, name: 'Wireless Headphones', price: '€179', image: 'headphones.jpg', description: 'Comfortabele draadloze koptelefoon met noise cancelling.' },
];

// Eerste endpoint 
app.get('/products', (req, res) => {
    res.json(products);
});

// Twede endpoint 
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product niet gevonden');
    }
});

// Category endpoints -- Youssri
app.get('/categories', (req, res) => {
    res.json(categories);
});

app.get('/categories/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (category) {
        res.json(category);
    } else {
        res.status(404).send('Categorie niet gevonden');
    }
});



app.listen(port, () => {
    console.log(`Backend draait op http://localhost:${port}`);
});

