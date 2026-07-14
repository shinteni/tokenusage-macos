# Privacy and data access

TokenUsage is a usage monitor. To show provider limits and token activity, it
may need access to information already available to the signed-in macOS user.

## Local data it may read

Depending on the providers enabled, the app may read:

- CLI history and local usage logs
- Provider configuration and authentication state
- Environment variables used by provider CLIs
- macOS Keychain entries associated with supported services
- Local SQLite databases or JSON files used by supported tools

The exact files and credentials used vary by provider. TokenUsage is not a
sandboxed macOS app in version 0.1.0, so it can access files that the current
user is permitted to read.

## Network access

Some integrations contact provider services to retrieve quota, subscription,
or usage information. The app also contains pricing datasets and may use online
pricing sources to estimate cost. Network behavior and provider endpoints may
change as integrations evolve.

The bundled widget is designed to communicate with the main app through a local
loopback service.

## Accuracy

Token counts assembled from local logs are estimates of recorded activity, not
provider billing statements. Cost estimates depend on the model names and
pricing data available to the app. Unknown models may be omitted.

## Support reports

Do not post secrets in a GitHub issue. Before sharing diagnostic material,
remove:

- API keys, OAuth tokens, and session cookies
- Account identifiers and email addresses
- Full credential or configuration files
- Prompts, conversation content, and sensitive file paths

For a suspected vulnerability, follow [SECURITY.md](SECURITY.md).
