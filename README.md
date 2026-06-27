# Vital Quest

A Foundry VTT campaign manager toolkit.

The first tool inside Vital Quest is a Strixhaven campaign manager for running a magical school year with classes, exams, clubs, relationships, rumors, and campus events.

## Module ID

```text
vital-quest
```

## Current Features

- Campaign dashboard
- Term, week, and day tracker
- Current college focus
- Class schedule tracker
- Exams and projects tracker
- Clubs and extracurriculars
- NPC relationship tracker
- Campus rumor/event generator
- Persistent world data stored in Foundry settings

## Installation

Place this folder inside Foundry's `Data/modules` directory as:

```text
vital-quest
```

Then enable **Vital Quest** from the world's module settings.

## GitHub Release Setup

For Foundry/The Forge installation from GitHub releases, update these fields in `module.json` after creating your GitHub repo:

```json
"url": "https://github.com/YOUR_GITHUB_USERNAME/vital-quest",
"manifest": "https://github.com/YOUR_GITHUB_USERNAME/vital-quest/releases/latest/download/module.json",
"download": "https://github.com/YOUR_GITHUB_USERNAME/vital-quest/releases/latest/download/vital-quest.zip"
```

Then create a release and attach:

- `module.json`
- `vital-quest.zip`

## Build a Release Zip Locally

From this folder in PowerShell:

```powershell
.\tools\package-module.ps1
```

This creates:

```text
vital-quest.zip
```

## Notes

This first version is a campaign-management shell. Compendium packs for NPCs, locations, items, journals, and roll tables can be added after the manager systems are finalized.
