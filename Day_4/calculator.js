const readline = require("readline");

const rl = readline.createInterface(
    {
    input: process.stdin,
    output: process.stdout
    }
);

rl.question("Enter First Number: ", (firstNumber) => 
    {
    rl.question("Enter Second Number: ", (secondNumber) => 
        {
        rl.question("Enter Operator (+, -, *, /): ", (operator) => 
            {

            const num1 = Number(firstNumber);
            const num2 = Number(secondNumber);

            let result;

            switch (operator) 
            {
                case "+":
                    result = num1 + num2;
                    break;

                case "-":
                    result = num1 - num2;
                    break;

                case "*":
                    result = num1 * num2;
                    break;

                case "/":
                    if (num2 === 0) 
                        {
                        console.log("Division by zero is not allowed.");
                        rl.close();
                        return;
                    }
                    result = num1 / num2;
                    break;

                default:
                    console.log("Invalid Operator");
                    rl.close();
                    return;
            }

            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});