const topics = [
  {
    number: "I",
    id: "interview-tips",
    title: "Interview Tips",
    description: "Effective preparation strategies and common questions for web development interviews",
    content: `
### Overview
Interviews often test both technical knowledge and problem-solving skills. Prepare by practicing coding exercises, reviewing common data structures and algorithms, and understanding web fundamentals.

### Tips
- Review JavaScript, HTML, and CSS basics.
- Practice whiteboard-style problems.
- Be ready to explain your thought process.
- Ask clarifying questions before coding.
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
console.log(a); // undefined
var a = 10;

foo(); // works!
function foo() { console.log("Hello"); }

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
function makeCounter() {
  let count = 0;
  return function() { return ++count; };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

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
setTimeout(() => console.log("Hello"), 1000);

2. **Promises**:
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));

3. **Async/Await**:
async function fetchData() {
  const res = await fetch('/api/data');
  const data = await res.json();
  console.log(data);
}
`
  },
  {
    number: "V",
    id: "memory-leak",
    title: "Memory Leak",
    description: "Detecting and preventing memory leaks in JavaScript applications",
    content: `
### Overview
Memory leaks occur when your program holds references to objects that are no longer needed, preventing garbage collection.

### Common Causes
- Unremoved event listeners
- Global variables
- Closures holding large objects

### Prevention
- Remove listeners when not needed
- Use local scope for variables
- Monitor memory with browser dev tools
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
`
  },
  {
    number: "VII",
    id: "web-architectural-patterns",
    title: "Web Application Architectural Patterns",
    description: "Overview of key architectural approaches for building scalable web applications",
    content: `
### Overview
Choosing the right architecture helps maintainability, scalability, and performance.

### Common Patterns
- Monolithic
- Layered (n-Tier)
- Microservices
- Event-Driven
- Serverless
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

### Benefits
- Easier to maintain
- Clear separation of concerns
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

### Benefits
- Independent deployment
- Scalability per service
- Fault isolation

### Challenges
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

### Example
exports.handler = async (event) => {
  return { statusCode: 200, body: 'Hello from Lambda!' };
};
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

### Benefits
- Clear separation
- Easier testing and maintenance
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

### Use Cases
- Popular in frameworks like Vue and Angular
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

### Benefits
- Independent development and deployment
- Smaller codebases
- Teams can work autonomously
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

### Benefits
- Testable core logic
- Flexible integration points
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

### Benefits
- Optimized read/write paths
- Easier scaling
`
  },
  {
    number: "XVIII",
    id: "ai-model-hosting",
    title: "Tips on Hosting Pretrained AI Models",
    description: "Guidelines for serving and scaling pretrained AI models in production",
    content: `
### Overview
- Use GPU-enabled hosting for heavy models
- Containerize models for easy deployment
- Monitor resource usage and latency
`
  },
  {
    number: "XIX",
    id: "promises-await-async",
    title: "Promises, await, and async",
    description: "Controlling asynchronous flow with promises and the async/await syntax",
    content: `
### Example
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data);
}
`
  },
  {
    number: "XX",
    id: "fetch",
    title: "Fetch API",
    description: "Making network requests using the modern Fetch API",
    content: `
### Overview
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
`
  },
  {
    number: "XXI",
    id: "defer",
    title: "Defer Attribute",
    description: "Improving performance by deferring script execution until HTML parsing is complete",
    content: `
### Overview
<script src="script.js" defer></script>
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
    id: "single-sign-on",
    title: "Single Sign-On (SSO)",
    description: "Allowing users to authenticate once and access multiple applications securely",
    content: `
### Overview
- Centralized authentication
- Reduces password fatigue
- Examples: OAuth, SAML
`
  },
  {
    number: "XXVI",
    id: "web-push-notifications",
    title: "Web Push Notifications",
    description: "Sending timely updates to users via browser-based notifications",
    content: `
### Overview
- Requires service worker registration
- Push API triggers notifications
- Useful for engagement
`
  },
  {
    number: "XXVII",
    id: "html5-canvas",
    title: "HTML5 Canvas",
    description: "Drawing graphics and animations dynamically using JavaScript",
    content: `
### Example
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 50);
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
### Overview
- Key/value storage in browser
- Persists across sessions
- Not secure for sensitive info
localStorage.setItem('name', 'Wayne');
const name = localStorage.getItem('name');
`
  },
  {
    number: "XXXI",
    id: "web-workers",
    title: "Web Workers",
    description: "Running background tasks without blocking the main UI thread",
    content: `
### Overview
- Executes JS in separate thread
- Offloads heavy computations
const worker = new Worker('worker.js');
worker.onmessage = (e) => console.log(e.data);
worker.postMessage('start');
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
const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('password').digest('hex');
`
  },
];

export default topics;