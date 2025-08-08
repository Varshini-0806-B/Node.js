const express = require('express');
const app = express();

app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Sample product data
const products = [
    { id: 1, name: '💻 Laptop', price: 800 },
    { id: 2, name: '📱 Phone', price: 400 },
    { id: 3, name: '📟 Tablet', price: 600 }
];

// Helper: common HTML header + style
const htmlHeader = (
    `<html>
    <head>
        <title>My Express App</title>
        <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f4f8;
            color: #333;
            padding: 20px;
          }
      h1 {
        color: #007acc;
      }
      nav a {
        margin-right: 15px;
        text-decoration: none;
        color: #007acc;
      }
      nav a:hover {
        text-decoration: underline;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        background: #fff;
        padding: 10px;
        margin: 5px 0;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
`);

const htmlFooter = `
    </div>
  </body>
  </html>
`;

// Routes
app.get('/', (req, res) => {
  res.send(`
    ${htmlHeader}
    <h1>🏠 Welcome to My Express Server</h1>
    <p>This is a clean and styled home page served by Express!</p>
    ${htmlFooter}
  `);
});

app.get('/products', (req, res) => {
  const productList = products
  .map(p => <li>${p.name} — <strong>$${p.price}</strong></li>)
  .join('');
  res.send(`
    ${htmlHeader}
    <h1>🛍 Product List</h1>
    <ul>${productList}</ul>
    ${htmlFooter}
  `);
});

app.get('/about', (req, res) => {
  res.send(`
    ${htmlHeader}
    <h1>ℹ About Page</h1>
    <p>This app demonstrates serving beautiful dynamic HTML with Express!</p>
    ${htmlFooter}
  `);
});

app.get('/contact', (req, res) => {
  res.send(`
    ${htmlHeader}
    <h1>📞 Contact Page</h1>
    <p>Email: contact@example.com</p>
    ${htmlFooter}
  `);
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start server
app.listen(3000, () => {
  console.log('✅ Express server running at http://localhost:3000/');
});