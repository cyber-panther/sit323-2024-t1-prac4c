const express = require("express");

const app = express();


const checkNumbers = (num1, num2) => {
    if (isNaN(num1))
        throw new Error("Invalid number num1");
    if (isNaN(num2))
        throw new Error("Invalid number num2");
}

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

app.get("/subtract", (req, res) => {
    try {
        var operation = "subtract"

        var num1 = parseFloat(req.query.num1);
        var num2 = parseFloat(req.query.num2);

        checkNumbers(num1, num2)

        const result = calculate(num1, num2, operation);
        res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);

    } catch (error) {
        res.json(error.toString())
    }
});

app.get("/multiply", (req, res) => {
    try {
        var operation = "multiply"

        var num1 = parseFloat(req.query.num1);
        var num2 = parseFloat(req.query.num2);

        checkNumbers(num1, num2)

        const result = calculate(num1, num2, operation);
        res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);

    } catch (error) {
        res.json(error.toString())
    }
});

app.get("/divide", (req, res) => {
    try {
        var operation = "divide"

        var num1 = parseFloat(req.query.num1);
        var num2 = parseFloat(req.query.num2);

        checkNumbers(num1, num2)

        const result = calculate(num1, num2, operation);
        res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);

    } catch (error) {
        res.json(error.toString())
    }
});

app.get("/exponential", (req, res) => {
    try {
        var operation = "exponential"

        var num1 = parseFloat(req.query.num1);
        var num2 = parseFloat(req.query.num2);

        checkNumbers(num1, num2)

        const result = calculate(num1, num2, operation);
        res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);

    } catch (error) {
        res.json(error.toString())
    }
});

app.get("/squareRoot", (req, res) => {
    try {
        var operation = "squareRoot"

        var num1 = parseFloat(req.query.num1);

        checkNumbers(num1, 0) // num2 is not required for squareRoot

        const result = calculate(num1, null, operation);
        res.json('Parameter ' + num1 + ' received for operation -> ' + operation + ': And the result is ' + result);

    } catch (error) {
        res.json(error.toString())
    }
});

app.get("/modulo", (req, res) => {
    try {
        var operation = "modulo"

        var num1 = parseFloat(req.query.num1);
        var num2 = parseFloat(req.query.num2);

        checkNumbers(num1, num2)

        const result = calculate(num1, num2, operation);
        res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);

    } catch (error) {
        res.json(error.toString())
    }
});

const port = 3040;
app.listen(port, () => {
    console.log("listening to port " + port);
})