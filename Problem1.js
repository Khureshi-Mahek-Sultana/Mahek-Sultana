class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }

    calculate(a, b, operation) {
        switch (operation.toLowerCase()) {
            case "add":
                return this.add(a, b);
            case "subtract":
                return this.subtract(a, b);
            case "multiply":
                return this.multiply(a, b);
            case "divide":
                return this.divide(a, b);
            default:
                return "Invalid operation";
        }
    }
}


const calc = new Calculator();
console.log(calc.calculate(10, 5, "add"));       
console.log(calc.calculate(10, 5, "subtract"));  
console.log(calc.calculate(10, 5, "multiply"));  
console.log(calc.calculate(10, 5, "divide"));    


//Output:
// 15
// 5
// 50
// 2