# Contributing to Botanix

Thank you for your interest in contributing to **Botanix**!  
We welcome improvements, bug fixes, new features, documentation updates, and community feedback.

This document explains how to contribute safely and consistently.

---

# 📥 How to Contribute

## 1. Fork the Repository

Click the **Fork** button at the top of the repo to create your own copy.

## 2. Create a New Branch

Use a descriptive branch name:

```

git checkout -b feature/new-command

```

Examples:
- `fix/logging-bug`
- `feature/ban-system`
- `docs/update-readme`

## 3. Make Your Changes

Follow these rules:
- Keep code clean and readable
- Use consistent formatting
- Avoid unnecessary dependencies
- Write meaningful commit messages

Commit example:

```

git commit -m "feat: added moderation logging system"

```

## 4. Test Your Code

Before submitting, ensure:
- The bot starts without errors
- New features behave correctly
- Existing features still work

Run:

```

node index.js

```

---

# 🔄 Submitting a Pull Request (PR)

1. Push your branch:

```

git push origin feature/new-command

```

2. Open a Pull Request on GitHub  
3. Provide a clear description including:
   - What was changed  
   - Why it was changed  
   - Any related issues  

4. Maintainers will review your PR and request changes if needed  
5. Once approved, it will be merged into the project

---

# 🧹 Code Style Guidelines

To keep the project consistent:

- Use **modern JavaScript (ES6+)**
- Prefer:
  - `const` / `let` over `var`
  - Arrow functions when appropriate
  - Template strings
- Avoid deeply nested logic
- Keep functions small and modular

---

# 🔐 Security Rules

- **Never** include real tokens or `.env` files in PRs  
- Avoid adding features that expose server data  
- Validate all user input in bot commands  

If you discover a vulnerability, follow the steps in `SECURITY.md`.

---

# 🧪 Adding Commands or Events

### Commands

Place command files in:

```

/commands/category/yourCommand.js

````

Export them like:

```js
module.exports = {
  name: "ping",
  description: "Bot latency",
  execute(client, message, args) {
    message.reply("Pong!");
  }
};
````

### Events

Place event handlers in:

```
/events/eventName.js
```

Export your function:

```js
module.exports = (client, eventData) => {
  // event logic
};
```

---

# 📝 Documentation Improvements

Documentation contributions are welcome!
Feel free to update:

* README.md
* DEPLOY.md
* SECURITY.md
* Code comments

---

# ❤️ Thank You

Your contribution helps make Botanix better for everyone.
We appreciate every issue, PR, suggestion, and improvement you provide.

Happy coding!
