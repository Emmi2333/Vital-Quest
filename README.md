# Vital Quest

![Vital Quest cover](https://raw.githubusercontent.com/Emmi2333/Vital-Quest/main/assets/screenshots/vital-quest-cover.png)

**Vital Quest** is a Foundry VTT campaign manager built for running a living Strixhaven-style magical school campaign. It gives the GM a wide campaign dashboard for school life while giving players a magical student-card interface for the information relevant to their characters.

> **Work in Progress:** Vital Quest is actively being developed. The current version is usable for campaign tracking and testing, but features, layouts, and data structures may continue to change between releases.

Vital Quest is not a replacement for actor sheets. Character mechanics such as hit points, spells, inventory, equipment, and ability scores stay on the normal Foundry actor sheet. Vital Quest focuses on the academy around those characters: classes, exams, clubs, jobs, schedules, relationships, faculty, campus events, story arcs, and student status.

## Required Dependency

Vital Quest requires **Simple Calendar Reborn**.

The calendar systems in Vital Quest are built around Simple Calendar Reborn so school schedules, class times, exams, private student events, and daily planners can stay tied to the world calendar.

- Required module ID: `foundryvtt-simple-calendar-reborn`
- Recommended version: `2.5.5` or newer
- Foundry version target: Foundry VTT 13

Install and enable **Simple Calendar Reborn** before using Vital Quest.

## What Is It For?

Vital Quest turns a Strixhaven campaign from scattered notes into a living school command center.

Use it to manage:

- Student records and academic standing
- Player characters and student NPCs
- Faculty, advisors, offices, and staff
- Classes, professors, course notes, and class times
- Exams, study rules, cheating checks, roll prompts, and outcomes
- Clubs, student dice skills, overseers, and members
- Campus jobs, wages, coworkers, and relationship hooks
- Calendar events for everyone or specific students
- Private student calendar events visible only to that player and the GM
- Campus locations, story hooks, mysteries, and school-life notes

## GM Campaign Screen

![GM overview](https://raw.githubusercontent.com/Emmi2333/Vital-Quest/main/assets/screenshots/gm-overview.png)

The GM screen is a wide dashboard separated into campaign tabs. It is designed to help the DM understand the school day at a glance: who is struggling, what classes are active, what exams are coming, what clubs and jobs matter, and what events are scheduled.

Major GM tabs include:

- Overview
- Students
- Faculty
- Classes
- Exams
- Clubs
- Jobs
- Campus
- Calendar
- Story
- Tools

## Student Record Manager

![Student manager](https://raw.githubusercontent.com/Emmi2333/Vital-Quest/main/assets/screenshots/student-manager.png)

Student records are split between player characters and student NPCs. The roster sits on the left, while the selected student opens as a dashboard-style academic and social record on the right.

Track school-life details such as:

- College, year, dorm name, and dorm number
- Academic standing
- Faculty advisor
- Current classes
- Clubs and jobs
- Student dice
- Relationships
- Private DM notes
- Linked actor sheet access

## Exams and Academic Standing

![Exam tracker](https://raw.githubusercontent.com/Emmi2333/Vital-Quest/main/assets/screenshots/exam-tracker.png)

Vital Quest supports Strixhaven-style exams with a simplified flow for preparation, testing, cheating, and outcomes.

The exam tracker supports:

- Exam and project records
- Class assignment
- Two required checks
- DC and cheating DC
- Roll prompts sent to players
- Advantage, disadvantage, and study dice options
- Aced, passed, failed, and caught cheating outcomes
- Academic standing changes instead of GPA

## Clubs, Jobs, and Campus Commitments

![Job tracker](https://raw.githubusercontent.com/Emmi2333/Vital-Quest/main/assets/screenshots/job-tracker.png)

Vital Quest tracks extracurriculars and campus employment as living campaign hooks instead of static book entries.

Clubs can track:

- Student die skills
- Faculty overseers
- Player and NPC members
- Book NPC members
- Relationship point notes

Jobs can track:

- Workplace
- Positions
- Coworkers
- Weekly pay in gold, silver, and copper
- Employed students
- Relationship point notes

## Player-Facing Magical Student Card

![Student calendar](https://raw.githubusercontent.com/Emmi2333/Vital-Quest/main/assets/screenshots/student-calendar.png)

Players can open a magical student-card interface through `/vq` or the Vital Quest scene-control icon. The student card is styled like an in-world magical device with apps for the character’s school life.

Player-facing apps include:

- Today
- Calendar
- Classes
- Exams
- Campus Life
- People
- Profile

Players only see the schedule entries that apply to everyone or to their own student record. Private student-created events are visible to that player and the GM.

## Calendar Planning

![Student calendar manager](https://raw.githubusercontent.com/Emmi2333/Vital-Quest/main/assets/screenshots/student-calendar-manager.png)

The calendar manager works with Simple Calendar Reborn to plan the school day.

The GM can click dates, inspect existing events, and add scheduled entries for:

- Classes
- Exams
- Clubs
- Jobs
- Campus events
- Story beats

Schedule entries can be assigned to all player characters or to a specific student. Vital Quest also reads the current Simple Calendar day and time to build the live schedule shown on the GM overview and player cards.

## Commands

```text
/vq
```

Opens the player-facing Vital Quest student card.

```text
/vqdm
```

Opens the Vital Quest GM screen for GMs. If a player uses this command, Vital Quest redirects them to the student card.

The graduation-cap scene-control icon is also available to both GMs and players. GMs open the GM screen; players open the student card.

## Installation

Install through the Foundry module installer or The Forge using the manifest URL:

```text
https://github.com/Emmi2333/Vital-Quest/releases/latest/download/module.json
```

Then enable both:

1. **Simple Calendar Reborn**
2. **Vital Quest**

## Release Package

GitHub releases should include:

- `module.json`
- `vital-quest.zip`

The zip should contain the module files with `module.json` at the top level.

## Status

Vital Quest is a **work-in-progress** module in active development. The current focus is Strixhaven school-year campaign management, with future room for expanded compendiums, journal templates, NPC packs, encounter helpers, and deeper campaign automation.
