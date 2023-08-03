


// <!DOCTYPE html>
// <html>
// <head>
//   <title>Calculator</title>
// </head>
// <body>
//   <h1>Calculator Node.js</h1>
//   <form action="/calculate" method="POST">
//     <input type="text" name="num1" placeholder="Enter number 1" required><br><br>
//     <input type="text" name="num2" placeholder="Enter number 2" required><br><br>
//     <input type="text" name="operator" placeholder="Enter operator (+, -, *, /)" required><br><br>
//     <input type="submit" value="Calculate">
//   </form>
// </body>
// </html>


const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Calculator routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  res.send(`Result: ${result}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
