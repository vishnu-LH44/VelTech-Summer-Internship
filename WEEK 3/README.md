# Week 3: JavaScript Validation & JDBC Data Infrastructure
**South Central Railway WWO Vijayawada Division - Full Stack Intern Weekly Report**

## Theory Notes

### 1. Client-Side Interactivity with JavaScript (JS)
- **JS Scripting Engine:** Runs in the browser. You can test code in the browser console.
- **Variables & Data Types:**
  - Used to store tracking info. Declarations: `let`, `const`, `var`.
  - Data Types: Strings (text), Numbers (numeric scalars), Booleans (true/false logicals).
- **Function Call Modules:** Defining logical execution routines using parameterized functions and `return` conditions to encapsulate code.
- **DOM (Document Object Model) Manipulation:**
  - Selecting and updating HTML elements on the fly.
  - Core command: `document.getElementById('id_name')`.
- **Event-Driven Actions:** Hooking programmatic actions directly to user inputs (e.g., `onclick`, `onsubmit`, `onchange`).
- **Client-Side Form Validation:** Intercepting submission workflows to verify text fields are not left blank and match target formats (e.g., email or passwords) before sending to the backend.

### 2. Backend Data Persistence via JDBC (Java Database Connectivity)
- **JDBC Engine Foundations:** Allows Java Runtime to interact with backend Relational Database Management Systems (RDBMS).
- **The 4 Core JDBC Driver Architectures:**
  1. **Type 1 (JDBC-ODBC Bridge):** Employs local native database client software to proxy queries through system DSNs. Legacy/Testing.
  2. **Type 2 (JDBC-Native API):** Translates Java requests directly into specific C/C++ native client files provided by DB vendors (e.g., Oracle OCI).
  3. **Type 3 (JDBC-Net Pure Java):** Flexible middleware-proxy. Java client speaks through network sockets to an application server proxy, which translates and executes queries.
  4. **Type 4 (100% Pure Java Driver):** High-performance driver provided directly by vendors. Establishes direct communication to the engine via custom internal sockets, eliminating translation overhead.

## Files in this Directory
- **`JDBC/CRUDOperations.java`**: Java program implementing Create, Read, Update, and Delete operations using JDBC.
- **`JDBC/DatabaseConnection.java`**: Java program demonstrating how to establish a database connection using JDBC.
- **`JDBC/jdbc (2).docx`**: Document containing detailed theory notes on JDBC.
- **`WEEK3PRAC.HTML`**: HTML practice file for implementing JavaScript concepts and validation.
- **`lightbulb_111547856_1000.jpg`**: Image asset used for practice tasks.
- **`README.md`**: This file, providing an overview of Week 3's contents.
