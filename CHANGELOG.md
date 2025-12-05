# Changelog
All notable changes to this project will be documented in this file.

The format follows **Keep a Changelog**  
and this project adheres to **Semantic Versioning (SemVer)**.

---

## [Unreleased]
### Added
- Pending features and improvements that are still under development.

---

## [1.0.0] - 2025-12-05
### Added
- Initial stable release of **Botanix**.
- Complete bot structure using:
  - `src/handlers` (commands, events, interactions)
  - Prefix & Slash command system
  - Utils system (embeds, permissions, logging)
  - Event listeners (guild, client, moderation)
- MongoDB integration with schemas:
  - Anti-link  
  - Anti-invite  
  - Anti-spam  
  - Anti-raid  
  - Logging settings
- `.env` support for configuration and secrets.
- Rate-limiting and basic security practices.
- Full README documentation.
- Added `SECURITY.md`, `CONTRIBUTING.md`, and `CODE_OF_CONDUCT.md`.

### Changed
- Structured the codebase into cleaner categories.
- Improved consistency in command folders and filenames.

### Fixed
- Various internal bugs related to startup and imports.
- Incorrect paths in some handlers.

---

## [0.2.0] - 2025-12-01
### Added
- New moderation commands.
- Database connection handler.
- Global event loader.

### Fixed
- Environment variable loading issues.
- Command registration inconsistencies.

---

## [0.1.0] - 2025-11-25
### Added
- First prototype version of the bot.
- Basic prefix commands.
- Basic event listeners.
- Initial project structure setup.

---

## Legend
- **Added** — New features  
- **Changed** — Updates or design changes  
- **Fixed** — Bug fixes  
- **Removed** — Something that was deleted  
- **Deprecated** — Marked for future removal  
