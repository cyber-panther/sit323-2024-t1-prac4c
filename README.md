---

# Arithmetic Express Server

This Express.js server performs basic arithmetic operations based on query parameters.

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

## Usage

1. Start the server using `npm start`.
2. Send HTTP GET requests to perform arithmetic operations.

## Available Routes

- `/add`: Addition
- `/subtract`: Subtraction
- `/multiply`: Multiplication
- `/divide`: Division
- `/exponential`: Exponentiation
- `/squareRoot`: Square root
- `/modulo`: Modulo

## Query Parameters

- `num1`: First number (required)
- `num2`: Second number (required for all operations except square root)

### Example Usage

```
GET /add?num1=5&num2=3
```

Response:

```json
{
  "result": 8
}
```

## Error Handling

- **Invalid numbers**: If the provided parameters are not valid numbers, an error is returned.
- **Division by zero**: Division by zero is not allowed and will result in an error.
- **Square root of negative number**: Taking the square root of a negative number will result in an error.
- **Invalid operation**: If an invalid arithmetic operation is requested, an error is returned.

## Code Overview

### Import Express

The code begins by importing the Express.js library.

```javascript
const express = require("express");
```

### Initialize Express App

An instance of the Express application is created.

```javascript
const app = express();
```

### Helper Functions

Two helper functions are defined:

- `checkNumbers`: This function checks if the provided inputs are valid numbers. If not, it throws an error.

```javascript
const checkNumbers = (num1, num2) => {
    if (isNaN(num1))
        throw new Error("Invalid number num1");
    if (isNaN(num2))
        throw new Error("Invalid number num2");
}
```

- `calculate`: This function performs arithmetic calculations based on the provided operation (`add`, `subtract`, `multiply`, etc.).

```javascript
const calculate = (num1, num2, operation) => {
    var result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0)
                throw new Error("Division by zero is not allowed");
            result = num1 / num2;
            break;
        case "exponential":
            result = Math.pow(num1, num2);
            break;
        case "squareRoot":
            if (num1 < 0)
                throw new Error("Square root of a negative number is not allowed");
            result = Math.sqrt(num1);
            break;
        case "modulo":
            result = num1 % num2;
            break;
        default:
            throw new Error("Invalid operation");
    }
    return result;
}
```

### Route Definitions

Routes are defined for each arithmetic operation. For each route, the following steps are followed:

1. Parse the query parameters `num1` and `num2`.
2. Check if the numbers are valid using the `checkNumbers` function.
3. Perform the calculation using the `calculate` function.
4. Send a JSON response with the result of the calculation.

```javascript
app.get("/add", (req, res) => {
    try {
        var operation = "add"
        var num1 = parseFloat(req.query.num1);
        var num2 = parseFloat(req.query.num2);
        checkNumbers(num1, num2)
        const result = calculate(num1, num2, operation);
        res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);
    } catch (error) {
        res.json(error.toString())
    }
});

// Similar code is repeated for /subtract, /multiply, /divide, /exponential, /squareRoot, and /modulo
```

### Server Listening

The Express app listens on port 3040.

```javascript
const port = 3040;
app.listen(port, () => {
    console.log("listening to port " + port);
})
```

---
