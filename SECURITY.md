# Security Policy

## 🔒 Supported Versions

The Botanix project follows a rolling-update model.  
Only the **latest commit on the main branch** is actively supported with security updates and patches.

| Version | Supported |
|---------|-----------|
| Main branch | ✔ Yes |
| Older commits | ✖ No |
| Forks | Community responsibility |

---

## 🛡️ Report a Vulnerability

If you discover a security vulnerability in Botanix, **do not open a public issue**.  
Instead, please contact the maintainer privately:

📧 **Email:** *your-email-here*  
(or the preferred contact method you want to add)

When reporting, include:

- A clear description of the issue  
- Steps to reproduce  
- Potential impact  
- Suggested fix (optional)

You will receive a response within **48–72 hours**.

---

## 🔐 Private Information & Token Safety

Botanix follows strict security guidelines to protect sensitive data:

### ❗ Never commit:
- `.env` files  
- Bot tokens (`BOT_TOKEN`)  
- Server IDs used privately  
- Database credentials  
- API keys  

Your `.env` file must **never** be uploaded to the repository.

### ✔ Always use:
- `.env.example` for templates  
- Git ignore rules (`.gitignore`)  
- Secure hosting providers (e.g., ShardCloud, Railway)  
- Discord’s "Privileged Intent" permissions responsibly  

---

## 🔥 Best Practices for Bot Security

- Rotate your bot token regularly if leaked  
- Restrict bot permissions when inviting it to servers  
- Use HTTPS/TLS for any external API calls  
- Avoid running untrusted code inside the bot  
- Validate all user inputs to prevent injections  
- Keep dependencies up-to-date using:

```bash
npm audit
npm update
