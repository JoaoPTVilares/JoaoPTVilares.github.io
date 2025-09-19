---
sidebar_position: 6
title: Java Roadmap
---

# Java Roadmap

## 🌱 Beginner Level (Basics & Syntax)

**Focus:** Variables, conditionals, loops, basic input/output.

### 1. Simple Calculator

#### Exercise Title
Simple Calculator Application

#### Learning Objectives
- Use of variables to store data.
- Use of conditionals (`if`, `else if`, `else`) to control program flow.
- Use of loops (`while` or `do-while`) to allow repeated operations.
- Handling user input and output using `Scanner`.

#### Exercise Instructions (for students)
Write a Java program that functions as a simple calculator. The program should:

1. Prompt the user to enter two numbers.
2. Prompt the user to choose an operation:
    - `+` for addition
    - `-` for subtraction
    - `*` for multiplication
    - `/` for division
3. Perform the selected operation and display the result.
4. After displaying the result, ask the user if they want to perform another calculation.
5. If the user says "yes", repeat the process. If "no", exit the program.

**Constraints:**
- Handle division by zero gracefully.
- Use a loop to repeat the calculator until the user decides to quit.

#### 📘 Example Output

```
Enter first number: 10
Enter second number: 5
Enter operation (+, -, *, /): *
Result: 10 * 5 = 50

Do you want to perform another calculation? (yes/no): yes

Enter first number: 8
Enter second number: 0
Enter operation (+, -, *, /): /
Error: Cannot divide by zero.

Do you want to perform another calculation? (yes/no): no

Thank you for using the calculator!
```

#### 👩‍🏫 Teacher’s Answer Key (Sample Solution)

```java
import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String continueCalc;

        do {
            System.out.print("Enter first number: ");
            double num1 = scanner.nextDouble();

            System.out.print("Enter second number: ");
            double num2 = scanner.nextDouble();

            System.out.print("Enter operation (+, -, *, /): ");
            char operator = scanner.next().charAt(0);

            double result;
            boolean valid = true;

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    System.out.println("Result: " + num1 + " + " + num2 + " = " + result);
                    break;
                case '-':
                    result = num1 - num2;
                    System.out.println("Result: " + num1 + " - " + num2 + " = " + result);
                    break;
                case '*':
                    result = num1 * num2;
                    System.out.println("Result: " + num1 + " * " + num2 + " = " + result);
                    break;
                case '/':
                    if (num2 == 0) {
                        System.out.println("Error: Cannot divide by zero.");
                        valid = false;
                    } else {
                        result = num1 / num2;
                        System.out.println("Result: " + num1 + " / " + num2 + " = " + result);
                    }
                    break;
                default:
                    System.out.println("Invalid operation.");
                    valid = false;
            }

            System.out.print("\nDo you want to perform another calculation? (yes/no): ");
            continueCalc = scanner.next();

        } while (continueCalc.equalsIgnoreCase("yes"));

        System.out.println("Thank you for using the calculator!");
        scanner.close();
    }
}
```

---

### 2. Number Guessing Game
- Generate a random number and have the user guess it.

### 3. Even or Odd Checker
- Take a number input and check if it's even or odd.

### 4. Multiplication Table
- Print the multiplication table for a number (up to 10 or 12).

### 5. Palindrome Checker
- Check if a given string or number is a palindrome.

---

## 🛠️ Intermediate Level (OOP & Collections)

**Focus:** Classes/Objects, inheritance, arrays, ArrayList, file I/O.

6. **Bank Account System**
    - Create a class for bank accounts with deposit, withdraw, and check balance functions.
7. **Student Grade Management**
    - Use an ArrayList or array to manage students and grades; calculate average, highest, etc.
8. **Library Book System**
    - Classes for Book, Library; include search, borrow, and return features.
9. **To-Do List App**
    - Allow adding, removing, and marking tasks using a list.
10. **Simple File Logger**
    - Read and write user actions to a text file.

---

## 🚀 Advanced Level (GUI, Threads, Networking, Lambda)

**Focus:** GUI with Swing/JavaFX, concurrency, lambdas, streams.

11. **Chat Application (Console or GUI)**
    - Basic networking using Socket and ServerSocket.
12. **Multithreaded Download Simulator**
    - Use threads to simulate file downloads or task processing.
13. **GUI Calculator**
    - Use Swing or JavaFX to build a basic calculator.
14. **Stock Portfolio Tracker**
    - Read mock stock data, calculate portfolio value, and display in a table.
15. **Mini Database with CRUD**
    - Store data in a file or use JDBC with SQLite/MySQL.

---

## 🎯 Capstone Projects

- **E-commerce Simulation**
    - Cart system, product list, order processing.
- **Student Management System**
    - Full-fledged app with login, CRUD, sorting, search.
- **Personal Finance Tracker**
    - Income, expenses, budgeting features with charts (if using JavaFX).

---

## 💡 Bonus Ideas

- Turn some projects into pair programming or code review exercises.
- Challenge them with unit testing using JUnit.
- Encourage refactoring assignments where they improve messy code.
