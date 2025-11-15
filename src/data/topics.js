const topics = [
  {
    number: "I",
    id: "interview-tips",
    title: "Interview Tips",
    description: "Effective preparation strategies and common questions for web development interviews",
    content: `
  ### Overview
  Interviews often test both technical knowledge and problem solving skills. Prepare by practicing coding exercises, reviewing common data structures and algorithms, and understanding web fundamentals.

  ### Personal Experience
  For my first interview I spent a lot of time practicing how to solve problems on LeetCode but I did not practice explaining my thought process. I realized later that interviewers care just as much about how I think as they care about whether I reach the correct answer. In other interviews I focused more on breaking down the problem, talking through each step, and explaining why I chose a certain approach. This made the conversations smoother and helped me perform better even when the questions were challenging.

  ### Tips
  1. Review JavaScript, HTML, and CSS basics
  2. Practice whiteboard style problems
  3. Explain your thought process clearly
  4. Ask clarifying questions before coding
  `
  },
  {
    number: "II",
    id: "js-hoisting",
    title: "JS Hoisting",
    description: "Understanding how variable and function declarations are moved to the top of their scope",
    content: `
### Overview
Hoisting is JavaScript's behavior of moving **declarations** to the top of the current scope before code execution.

### Example
\`\`\`js
console.log(a); // undefined
var a = 10;

foo(); // works!
function foo() { console.log("Hello"); }
\`\`\`

### Notes
- Only declarations are hoisted, not initializations.
- let/const are hoisted but cannot be accessed before declaration (Temporal Dead Zone).
`
  },
  {
    number: "III",
    id: "closure",
    title: "Closure",
    description: "Exploring closures and how they enable data privacy and state retention in JavaScript",
    content: `
### Overview
A closure is a function that **retains access to variables from its outer scope**, even after that outer function has returned.

### Example
\`\`\`js
function makeCounter() {
  let count = 0;
  return function() { return ++count; };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
\`\`\`

### Use Cases
- Data encapsulation
- Event handlers
- Memoization
`
  },
  {
    number: "IV",
    id: "asynchronous-programming",
    title: "Asynchronous Programming",
    description: "Mastering async flow control with callbacks, promises, and async/await",
    content: `
### Overview
JavaScript is single-threaded. Asynchronous programming allows tasks like network requests or timers to run without blocking the main thread.

### Patterns
1. **Callbacks**:
\`\`\`js
setTimeout(() => console.log("Hello"), 1000);
\`\`\`
2. **Promises**:
\`\`\`js
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));
\`\`\`
3. **Async/Await**:
\`\`\`js
async function fetchData() {
  const res = await fetch('/api/data');
  const data = await res.json();
  console.log(data);
}
\`\`\`
`
  },
  {
    number: "V",
    id: "var-vs-let-vs-const",
    title: "Var vs Let vs Const",
    description: "Understanding the differences between var, let, and const in JavaScript",
    content: `
### Overview
- **var**: function-scoped, can be redeclared and updated, hoisted with undefined
- **let**: block-scoped, can be updated but not redeclared, hoisted but in Temporal Dead Zone
- **const**: block-scoped, cannot be updated or redeclared, must be initialized at declaration

### Example
\`\`\`js
function example() {
  if (true) {
    var x = 1; // function-scoped
    let y = 2; // block-scoped
    const z = 3; // block-scoped
  }
  console.log(x); // 1
  console.log(y); // ReferenceError
  console.log(z); // ReferenceError
}
\`\`\`
`
  },
  {
    number: "VI",
    id: "classes-in-js",
    title: "Classes in JavaScript",
    description: "Using ES6 classes to write cleaner and more structured object-oriented code",
    content: `
### Overview
ES6 classes provide a syntactic sugar over JavaScript's prototype-based inheritance.

### Example
\`\`\`js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello, " + this.name);
  }
}

const john = new Person("John");
john.greet(); // Hello, John
\`\`\`
`
  },

  {
    number: "VII",
    id: "web-architectural-patterns",
    title: "Web Application Architectural Patterns",
    description: "Overview of key architectural approaches for building scalable web applications",
    content: `
### Overview
Choosing the right architecture helps maintainability, scalability, efficiency, robustness, security and performance.

### Common Patterns
- Monolithic
- Layered (n-Tier)
- Microservices
- Event-Driven
- Serverless
- MVC
- MVVM
- Micro-Frontends
- Hexagonal
- CQRS
`
  },
  {
    number: "VIII",
    id: "monolithic-architecture",
    title: "Monolithic Architecture",
    description: "A single, unified codebase structure that handles all parts of an application",
    content: `
### Overview
Monolithic applications keep all code in one codebase and deploy it as a single unit.

### Pros
- Simple to develop initially
- Easy to test locally

### Cons
- Hard to scale
- Changes in one area may affect the whole system
`
  },
  {
    number: "IX",
    id: "layered-architecture",
    title: "Layered (n-Tier) Architecture",
    description: "Dividing applications into layers such as presentation, business logic, and data",
    content: `
### Overview
Separates concerns into layers:
- Presentation: UI layer
- Business Logic: Processes rules and logic
- Data: Database or API layer

### Pros
- Easier to maintain
- Clear separation of concerns

### Cons
- Can lead to performance overhead due to multiple layers

`
  },
  {
    number: "X",
    id: "microservices-architecture",
    title: "Microservices Architecture",
    description: "Decoupling large systems into independent, deployable services",
    content: `
### Overview
Applications are split into small, independent services communicating over APIs.

### Pros
- Independent deployment
- Scalability per service
- Fault isolation

### Cons
- Complex orchestration
- More network calls
`
  },
  {
    number: "XI",
    id: "event-driven-architecture",
    title: "Event-Driven Architecture",
    description: "Designing systems that react to events and communicate asynchronously",
    content: `
### Overview
Components communicate by producing and consuming events.

### Pros
- Loose coupling
- Scalability
- Real-time processing

### Cons
- Complexity in managing event flow
- Debugging can be challenging

### Example
- User places order → OrderService emits "OrderCreated" event → EmailService listens and sends confirmation
`
  },
  {
    number: "XII",
    id: "serverless-faas",
    title: "Serverless / Function-as-a-Service (FaaS)",
    description: "Running code without managing servers using services like AWS Lambda",
    content: `
### Overview
Serverless functions execute on-demand and scale automatically. You pay only for execution time.

### Pros
- No server management
- Automatic scaling
- Cost-effective

### Cons
- Limited control over environment
- Limited execution time

### Example
\`\`\`js
exports.handler = async (event) => {
  return { statusCode: 200, body: 'Hello from Lambda!' };
};
\`\`\`
`
  },
  {
    number: "XIII",
    id: "mvc",
    title: "Model-View-Controller (MVC)",
    description: "Separating application concerns into models, views, and controllers",
    content: `
### Overview
- Model: handles data
- View: displays UI
- Controller: processes input

### Pros
- Clear separation
- Easier testing and maintenance

### Cons
- Can lead to tight coupling if not designed well
`
  },
  {
    number: "XIV",
    id: "mvvm",
    title: "Model-View-ViewModel (MVVM)",
    description: "Structuring applications for data-driven UI and clear separation of concerns",
    content: `
### Overview
- Model: data
- View: UI
- ViewModel: binds Model to View with reactive updates
- Popular in frameworks like Vue and Angular

### Pros
- Two-way data binding
- Easier UI management

### Cons
- Can lead to complex ViewModels
`
  },
  {
    number: "XV",
    id: "micro-frontends",
    title: "Micro-Frontends",
    description: "Splitting frontend applications into smaller, independently deployable modules",
    content: `
### Overview
Break frontend into multiple apps, each responsible for a feature.

### Pros
- Independent development and deployment
- Smaller codebases
- Teams can work autonomously

### Cons
- Integration complexity
- Consistent UX can be challenging
`
  },
  {
    number: "XVI",
    id: "hexagonal-architecture",
    title: "Hexagonal Architecture (Ports & Adapters)",
    description: "Building maintainable systems by isolating business logic from external dependencies",
    content: `
### Overview
Business logic is at the center, surrounded by adapters connecting to databases, UIs, or external APIs.

### Pros
- Testable core logic
- Flexible integration points

### Cons
- Initial complexity in setup
`
  },
  {
    number: "XVII",
    id: "cqrs",
    title: "Command Query Responsibility Segregation (CQRS)",
    description: "Separating read and write operations to improve scalability and performance",
    content: `
### Overview
- Commands: modify state
- Queries: read state

### Pros
- Optimized read/write paths
- Easier scaling

### Cons
- Increased complexity
`
  },
  {
    number: "XVIII",
    id: "ai-model-hosting",
    title: "Tips on Hosting Pretrained AI Models",
    description: "Guidelines for serving and scaling pretrained AI models in production",
    content: `
### Overview
- Choose appropriate hardware (GPU/TPU) based on model requirements
- Use containerization (Docker) for portability
- Implement caching for frequent requests
- Monitor performance and latency
- Consider using managed services (AWS SageMaker, Google AI Platform)
`
  },

  {
    number: "XIX",
    id: "promises-await-async",
    title: "Promises, await, and async",
    description: "Controlling asynchronous flow with promises and the async/await syntax",
    content: `
  ### Promises, Async, and Await

  A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

  ### The Three States of a Promise
  **1. Pending** – the initial state, before the result is known  
  **2. Fulfilled** – the operation completed successfully and a value is available  
  **3. Rejected** – the operation failed and a reason (error) is available  

  Once a promise is fulfilled or rejected, it becomes **settled** and cannot change state again.

  ### Promise Behavior
  A Promise is **eager** – when you create one, it immediately executes its internal code.  
  It does not wait for a "then" call; it starts resolving the asynchronous value right away.

  **Code Example:**  
      function getData() {
          return new Promise((resolve, reject) => {
              console.log("Fetching...");
              setTimeout(() => resolve("Data loaded"), 1000);
          });
      }

      const p = getData();  // Logs "Fetching..." immediately

  ### then(), catch(), and finally()
  - **then(onFulfilled, onRejected)** – handles a fulfilled or rejected value  
  - **catch(onRejected)** – handles rejections only  
  - **finally(onFinally)** – runs whether the promise is fulfilled or rejected  

  **Note:** "then" and "catch" callbacks **never run synchronously** – they are scheduled as **microtasks**, which execute after the current call stack clears.

  ### Promise.resolve()
  **Promise.resolve(value)** creates a promise that is already fulfilled with the given value.  
  Useful when you want to wrap a value in a promise or ensure a consistent asynchronous interface.

  **Code Example:**  
      Promise.resolve(42).then(v => console.log(v));  
      // Logs 42 asynchronously

  ### Async and Await
  Declaring a function with **async** makes it return a promise automatically.  
  Inside an async function, **await** pauses execution until the awaited promise settles and returns its result.

  **Code Example:**  
      async function fetchData() {
          const response = await fetch('/api/data');
          const data = await response.json();
          console.log(data);
      }

      fetchData();

  ### Microtasks vs Macrotasks
  - **Microtasks**: promise callbacks (then, catch, finally), queueMicrotask()  
  - **Macrotasks**: setTimeout, setInterval, I/O events, other timers  

  Microtasks always run **before** the next macrotask, so promise callbacks execute before timers.

  **Code Example:**  
      console.log("start");

      setTimeout(() => console.log("timeout"), 0);

      Promise.resolve().then(() => console.log("promise"));

      console.log("end");

  **Output Order:**  
      start  
      end  
      promise  
      timeout
  `
  },

  {
    number: "XX",
    id: "fetch",
    title: "Fetch API",
    description: "Making network requests using the modern Fetch API",
    content: `
### Overview
\`\`\`js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\`
`
  },
  {
    number: "XXI",
    id: "defer",
    title: "Defer Attribute",
    description: "Improving performance by deferring script execution until HTML parsing is complete",
    content: `
### Overview
\`\`\`html
<script src="script.js" defer></script>
\`\`\`
- Script executes after HTML parsing.
- Keeps page responsive.
`
  },
  {
    number: "XXII",
    id: "execution-stack",
    title: "Execution Stack",
    description: "Understanding the JavaScript call stack and how code executes sequentially",
    content: `
### Overview
- JS uses a single-threaded call stack.
- Functions are pushed onto the stack and popped when finished.
- Helps understand async behavior.

### Microtasks and Macrotasks
- Microtasks (promises) run after the current stack.
- Macrotasks (setTimeout) run after microtasks.
`
  },

  {
    number: "XXIII",
    id: "public-private-key",
    title: "Public-Key and Private-Key",
    description: "How asymmetric encryption works in securing communications",
    content: `
### Overview
- Public key: encrypt data
- Private key: decrypt data
- Used in SSL/TLS, signing, and authentication
`
  },
  {
    number: "XXIV",
    id: "cdn",
    title: "Content Delivery Network (CDN)",
    description: "Speeding up asset delivery by distributing content across global servers",
    content: `
### Overview
- Hosts static assets closer to users
- Reduces latency and bandwidth
- Popular CDNs: Cloudflare, AWS CloudFront
`
  },
  {
    number: "XXV",
    id: "http-status-codes",
    title: "HTTP Status Codes",
    description: "Understanding standard response codes used by servers",
    content: `
  ### Overview
  Status codes communicate the result of an HTTP request. They help the client understand whether a request succeeded, failed, or needs action.

  ### Categories
  1. 100 to 199 informational
  2. 200 to 299 success
  3. 300 to 399 redirection
  4. 400 to 499 client errors
  5. 500 to 599 server errors

  ### Example
  \`\`\`js
  app.get('/users', (req, res) => {
    res.status(200).send('OK');
  });
  \`\`\`
  `
  },
  {
    number: "XXVI",
    id: "http-headers",
    title: "HTTP Headers",
    description: "Key value pairs used to pass additional information with requests and responses",
    content: `
  ### Overview
  Headers let the client and server share important context about the request. They can describe content type, caching behavior, authentication info, and more.

  ### Common Types
  1. Request headers like Accept, Authorization, and Content Type
  2. Response headers like Content Length and Set Cookie
  3. Security related headers like Content Security Policy and Strict Transport Security

  ### Example
  \`\`\`js
  app.get('/data', (req, res) => {
    res.set('Content Type', 'application/json');
    res.send({ message: 'Hello world' });
  });
  \`\`\`
  `
  },
  {
    number: "XXVII",
    id: "url-parameters",
    title: "URL Parameters and Query Strings",
    description: "Passing data in URLs for routing and filtering",
    content: `
  ### Overview
  Routes often accept parameters in the path or query string. These are widely used in REST API design.

  ### Example
  \`\`\`js
  app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send('User id is ' + id);
  });

  app.get('/search', (req, res) => {
    const term = req.query.q;
    res.send('Search term is ' + term);
  });
  \`\`\`
  `
  },
  {
    number: "XXVIII",
    id: "cookies",
    title: "Cookies",
    description: "Storing small pieces of user data for session management and tracking",
    content: `
### Overview
- Small key/value data stored in browser
- Sent with every HTTP request
- Set via JS or HTTP headers
`
  },
  {
    number: "XXIX",
    id: "session-jwt-httponly",
    title: "Session, JWT, httpOnly",
    description: "Comparing session-based authentication and JWT-based token systems",
    content: `
### Overview
- Sessions: server stores session data
- JWT: token stores user info client-side
- httpOnly: prevents JS from reading cookies
`
  },
  {
    number: "XXX",
    id: "local-storage",
    title: "Local Storage",
    description: "Persisting small amounts of data on the client side",
    content: `
  ### Local Storage

  Local Storage is a simple key/value storage available in the browser. It allows data to **persist across sessions** (closing and reopening the browser).

  ### Key Features
  - Stores data as strings in key/value pairs
  - Maximum storage ~5-10MB depending on the browser
  - Synchronous API
  - Data persists even after closing the tab or browser
  - **Not secure for sensitive info** (e.g., passwords)

  ### Basic Operations
  **Set an item:**  
      localStorage.setItem('name', 'Wayne');

  **Get an item:**  
      const name = localStorage.getItem('name');
      console.log(name);  // Wayne

  **Remove an item:**  
      localStorage.removeItem('name');

  **Clear all items:**  
      localStorage.clear();

  ### Storing Objects
  Since Local Storage only stores strings, use **JSON.stringify** to store objects and **JSON.parse** to retrieve them:

      const user = { id: 1, name: 'Wayne' };
      localStorage.setItem('user', JSON.stringify(user));

      const storedUser = JSON.parse(localStorage.getItem('user'));
      console.log(storedUser.name);  // Wayne

  ### Use Cases
  - Saving user preferences (theme, language)
  - Persisting small amounts of app state
  - Caching lightweight data for offline access

  ### Notes
  - Accessing localStorage can throw errors if the browser disables it (e.g., in private mode)
  - Always check for availability:  
        if (typeof localStorage !== 'undefined') { /* safe to use */ }
  `
  },
  {
  number: "XXXI",
  id: "input-validation",
  title: "Input Validation",
  description: "Protecting APIs and applications by validating user input",
  content: `
### Overview
Validating inputs prevents malicious data from reaching your backend or database.

### Example
\`\`\`js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/submit', (req, res) => {
  const name = req.body.name;
  if (typeof name !== 'string' || name.length === 0) {
    return res.status(400).send('Invalid input');
  }
  res.send('Input accepted');
});
\`\`\`

### Notes
- Prevents SQL Injection and XSS
- Always validate on server-side, never rely solely on client-side checks
`
  },
  {
    number: "XXXII",
    id: "injection-attacks",
    title: "Injection Attacks",
    description: "Understanding SQL and script injection and how to prevent them",
    content: `
### Overview
- Occurs when untrusted input is executed
- Examples: SQL Injection, XSS
- Prevention: sanitize inputs, use parameterized queries
`
  },
  {
    number: "XXXIII",
    id: "web-security-best-practices",
    title: "Web Security Best Practices",
    description: "Essential steps to secure your web applications",
    content: `
### Tips
- Validate and sanitize inputs
- Use HTTPS
- Set secure headers
- Keep dependencies updated
`
  },
  {
    number: "XXXIV",
    id: "encryption",
    title: "Encryption",
    description: "Encoding data to protect confidentiality and integrity",
    content: `
### Overview
- Symmetric: same key to encrypt/decrypt
- Asymmetric: public/private keys
- Used in SSL/TLS, password storage
`
  },
  {
    number: "XXXV",
    id: "hashing",
    title: "Hashing",
    description: "Transforming data into fixed-length hashes for integrity and password protection",
    content: `
### Overview
- One-way function
- Used for passwords, checksums, digital signatures
\`\`\`js
const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('password').digest('hex');
\`\`\`
`
  },
];

export default topics;