<p align="center">
  <img src="assets/icon.png" width="128" height="128" alt="TokenUsage app icon">
</p>

<h1 align="center">TokenUsage for macOS</h1>

<p align="center">
  All your AI usage. One menu bar.
</p>

<p align="center">
  <a href="https://github.com/shinteni/tokenusage-macos/releases/download/v0.1.0/TokenUsage-macOS-universal.zip"><strong>Download for macOS</strong></a>
  ·
  <a href="https://shinteni.github.io/tokenusage-macos/">Product page</a>
  ·
  <a href="https://github.com/shinteni/tokenusage-macos/releases/tag/v0.1.0">Release notes</a>
</p>

> [!IMPORTANT]
> This repository hosts product documentation and prebuilt releases of
> TokenUsage. Source code is not included in this repository.

TokenUsage keeps AI subscription limits, token activity, reset windows, and
estimated spend within reach from the macOS menu bar. It brings multiple AI
tools into one compact view and can warn when a limit is low or usage is running
ahead of pace.

## Highlights

- Monitor multiple AI providers from one native menu bar app
- Review 30-day token activity by provider and model where supported
- Estimate spend when model pricing is available
- Receive low-limit and usage-pacing notifications
- Choose which metrics appear and how they are ordered
- Refresh automatically or on demand
- Open TokenUsage with a global keyboard shortcut
- Add native macOS widgets
- Use the interface in English, Simplified Chinese, or Japanese

## Supported providers

| Provider | Integration | Local token statistics |
| --- | --- | --- |
| Antigravity | Included | — |
| Claude | Included | Available |
| Codex | Included | Available |
| GitHub Copilot | Included | — |
| Cursor | Included | Available |
| Devin | Included | — |
| Grok | Included | Available |
| OpenRouter | Included | — |
| Z.AI | Included | — |

Integration depth and available metrics vary by provider. Provider APIs,
authentication flows, and returned fields may change without notice.

## Requirements

- macOS 15 or later
- Apple silicon or Intel Mac
- Relevant provider or CLI sign-in for the services you want to monitor

## Installation

1. Download `TokenUsage-macOS-universal.zip` from the
   [v0.1.0 release](https://github.com/shinteni/tokenusage-macos/releases/tag/v0.1.0).
2. Extract `TokenUsage.app`.
3. Move the app to the Applications folder.
4. Control-click the app, choose **Open**, and review the macOS warning before
   continuing.
5. Choose the providers you want to display.

### Gatekeeper notice

Version 0.1.0 uses an ad-hoc code signature and is not notarized. macOS may show
a Gatekeeper warning on first launch. The release archive has been checked for
ZIP integrity and the app bundle's embedded code signature has been verified
after repackaging.

## Data and accuracy

Token statistics for Claude, Codex, Cursor, and Grok may be assembled from usage
data already available on your Mac. Some integrations read local configuration,
CLI history, or authentication state, and some contact provider services. See
[Privacy and data access](PRIVACY.md) for the practical boundaries.

Cost figures are estimates. Models without known pricing may be excluded, and
provider-reported limits can change independently of TokenUsage.

## Verify the download

SHA-256 for `TokenUsage-macOS-universal.zip`:

```text
2d68b36057913e879a20146feb100edd1130371f6462aba01d013f1a37de5310
```

On macOS:

```sh
shasum -a 256 TokenUsage-macOS-universal.zip
```

The same value is recorded in [`checksums.txt`](checksums.txt).

## Feedback and support

Use [GitHub Issues](https://github.com/shinteni/tokenusage-macos/issues) for bug
reports and feature requests. Do not attach tokens, credential files, complete
logs, or screenshots containing account information.

For a security concern, follow [SECURITY.md](SECURITY.md) instead of opening a
public issue.

## Distribution and license status

This repository distributes a prebuilt application and its documentation. It
does not provide source code or build instructions.

The supplied application bundle contains the text `MIT License.` in its metadata,
but the original archive did not include a standalone license file, copyright
holder, or source attribution. This repository therefore does not make an
additional open-source licensing claim.
