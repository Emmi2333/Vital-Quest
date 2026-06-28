# Changelog

## 0.1.95

- Added screenshot assets for the package showcase page.
- Updated package metadata and README showcase text, including Simple Calendar Reborn dependency information.
- Allowed Vital Quest-only school events to appear in the live Simple Calendar agenda feed.
- Made the Vital Quest graduation-cap scene control visible to players as well as GMs; permission logic opens the GM screen for GMs and the student card for players.

## 0.1.94

- Removed the inactive Pick Different Day button from the student personal calendar event form.
- Added student-side deletion for personal calendar events from the phone Calendar app.
- Student personal event deletion also removes the linked private Simple Calendar note.
- Cleaned up the student personal event form action layout after removing the extra button.

## 0.1.93

- Added delete buttons to the DM calendar date contents window.
- Deleting a Vital Quest calendar event now removes its linked Simple Calendar note.
- Deleting a class, exam, club, job, campus location, or story record now removes linked scheduled calendar notes.
- Deleting a Simple Calendar note directly now removes the matching Vital Quest calendar event record.

## 0.1.92

- Changed the student personal calendar event form to use one Exact Time field instead of separate hour/minute boxes.
- Made the Part of Day selector seed the Exact Time field with that block's default time, matching the GM calendar planner behavior.

## 0.1.91

- Made Vital Quest calendar displays adapt to Simple Calendar's configured date and time formats.
- Updated the school clock, agenda notes, student planner items, and event date labels to prefer Simple Calendar formatted output.
- Kept fallback formatting for worlds where Simple Calendar is unavailable or does not return a formatted display.

## 0.1.90

- Fixed the student phone Profile house card so it uses the student's own college instead of the campaign focus college.

## 0.1.89

- Updated student phone class cards to show class time ranges instead of term labels.
- Updated student phone exam cards to hide DCs and exam skills, showing scheduled date/time instead.
- Added class start and end time fields to the GM Classes screen and class creation form.
- Replaced visible class term labels in the GM course catalog with class time ranges.

## 0.1.88

- Changed DM calendar date clicks to show a date contents window when events already exist.
- Added a Create New Event action at the top of populated date contents windows.
- Empty calendar dates now skip the contents window and open the add-event planner directly.
- Included Vital Quest fallback/private events in calendar day counts and contents previews.

## 0.1.87

- Student personal calendar events now create private Simple Calendar notes.
- Private student notes set Simple Calendar visibility to the owning player user instead of All Players.
- Vital Quest stores the linked Simple Calendar note ID and viewer user IDs for private student events.
- Avoided duplicate GM agenda entries when a private Vital Quest event successfully creates a Simple Calendar note.

## 0.1.86

- Fixed unreadable bottom action buttons in the student personal calendar event form.

## 0.1.85

- Changed player-created personal calendar events into a two-step flow: choose a day, then fill out event details.
- Replaced the student event time text field with separate hour and minute boxes.
- Saved student personal events as private Vital Quest calendar items targeted to that student.
- Added private student events to the GM calendar agenda without creating public Simple Calendar notes.

## 0.1.84

- Added a Calendar app to the player-facing magical student phone.
- Updated the Today app to show timed planner entries instead of generic upcoming items.
- Filtered student planner events so players only see party-wide events and events assigned to their own student record.
- Added player-created personal calendar events that save to Vital Quest and attempt to create a Simple Calendar note.

## 0.1.83

- Redesigned the player-facing Student Card into a magical cellphone-style interface.
- Added a phone home screen with app icons for Today, Classes, People, Campus Life, Story, and Profile.
- Added a phone dock and app-page navigation while preserving the existing player card command.
- Made the player card prefer the current user's linked student/actor record when available.

## 0.1.82

- Redesigned the Tools tab into a more user-friendly Control Room layout.
- Grouped settings, faculty dropdowns, Journal sync, generators, standing references, and reset controls into clearer cards.
- Added a Tools hero panel and more readable action/result boxes.
- Moved example standing changes into a collapsible reference drawer.

## 0.1.81

- Redesigned the GM screen header into a polished command-crystal style topbar.
- Added a crest mark, subtitle, save hint, and improved Save Changes button styling.
- Reworked the GM tab navigation into a compact icon rail that avoids the awkward single Tools row.
- Added responsive behavior for smaller Foundry windows.

## 0.1.80

- Redesigned the Campus tab into a rules banner plus split-pane location directory/profile layout.
- Added saved campus location records seeded from the existing Strixhaven campus location list.
- Added editable location fields for name, type, college/area, Foundry scene ID, notable NPC, description, secrets, and DM notes.
- Updated Calendar planning to use the editable Campus location list.

## 0.1.79

- Redesigned the Jobs tab into a rules banner plus split-pane job directory/profile layout.
- Added a left-side Job Directory and right-side selected job record.
- Moved workplace details, positions, weekly wage, employment lists, relationship notes, and DM notes into the selected job profile.
- Preserved existing job wage and employment tracking behavior.

## 0.1.78

- Redesigned the Clubs tab into a rules banner plus split-pane club directory/profile layout.
- Added a left-side Club Directory and right-side selected club record.
- Moved club details, Student Die skills, overseer, enrollment, official NPC members, relationship notes, and DM notes into the selected club profile.
- Preserved existing club enrollment and Student Dice behavior.

## 0.1.77

- Changed the Classes tab College field into a dropdown.
- Added the five Strixhaven colleges plus `General / Unassigned` to the class college list.
- Updated class headers and grouping labels to display `General / Unassigned` cleanly.

## 0.1.76

- Removed the duplicate Add Exam button from the Exam Process banner.
- Changed the Exams tab so the page can scroll below the rules banner.
- Gave the split exam archive/profile area enough space to keep student exam records usable.

## 0.1.75

- Redesigned the Exams tab into a rules banner plus split-pane exam directory/profile layout.
- Moved the Strixhaven study, group study, all-nighter, and cheating rules to the top banner.
- Added a left-side exam archive grouped by class and a right-side selected exam record.
- Kept roll pushing, cheating resolution, student result tracking, and standing application inside the selected exam profile.

## 0.1.74

- Changed Faculty Role and College / Department fields into dropdowns.
- Added editable Faculty Roles and Faculty Departments option lists to the Tools tab.
- Updated Faculty creation to use the configured dropdown choices.
- Preserved existing custom faculty role/department values as selectable options on their records.

## 0.1.73

- Redesigned the Classes tab into a split-pane course catalog and selected class profile.
- Added class grouping on the left by college/department with independent scrolling.
- Moved class editing into a structured course dossier on the right while keeping Add Class and Save Changes workflows.

## 0.1.72

- Fixed Overview using Simple Calendar's internal month index as the displayed month.
- Fixed the large School Clock title falling back to an internal day label.
- Overview now prefers Simple Calendar's current month/year helpers and displays `Day N` using the human-facing day number.

## 0.1.71

- Fixed Simple Calendar Overview date labels showing the internal zero-based day number.
- Vital Quest now displays Simple Calendar's human-facing day number while preserving internal note lookup indices.

## 0.1.70

- Fixed pale dropdown option menus in Vital Quest creation dialogs.
- Forced readable option, selected-option, and hover colors for themed select menus.

## 0.1.69

- Fixed unreadable typed text in faculty profile fields and creation dialogs.
- Forced readable input, textarea, placeholder, and caret colors where Foundry theme styles conflicted.

## 0.1.68

- Redesigned the Faculty tab into a split-pane staff directory and selected faculty profile.
- Added faculty roster grouping by college/department with linked actor portraits when available.
- Replaced the old faculty table with structured faculty dossier fields and notes.
- Strengthened creation dialog styling so faculty/student creation forms use the Vital Quest dark UI even when Foundry omits custom dialog classes.

## 0.1.67

- Changed Add Class, Add Exam, Add Custom Club, and Add Custom Job to open creation forms instead of inserting blank records.
- Added styled Vital Quest creation dialogs with structured fields and matching dark magical UI.
- Added official club/job starter choices that can inherit book data into new records.
- Applied the same styled creation dialog shell to student and faculty creation forms.

## 0.1.66

- Removed the parent Students tab scrollbar so the roster and selected student record act as separate panes.
- Made the GM screen body fixed-height, with normal tabs scrolling independently and the Students tab using split-pane scrolling.

## 0.1.65

- Made the Students roster panel independently scrollable from the selected student record.
- Added horizontal scrolling to Linked Sheets & Social Standing relationship rows for smaller GM windows.
- Preserved the two-column Students layout at narrower widths so the roster and dossier remain distinct.

## 0.1.64

- Changed the GM screen to a Save Changes workflow across tabs.
- Normal field edits, dropdowns, checkboxes, relationship point changes, class assignments, club enrollment, job enrollment, and exam result edits now wait for the top Save Changes button.
- Added an unsaved-state glow to the Save Changes button.

## 0.1.63

- Stopped relationship score and status edits from re-rendering the full Students tab.
- Updated relationship point adjustments in place to avoid jumping back to the top of the dossier.

## 0.1.62

- Stopped campaign data saves from automatically forcing an extra GM screen redraw.
- Reduced double-render scroll jumps after clicking buttons, changing fields, or updating student records.

## 0.1.61

- Fixed broad GM screen scroll resets by preserving scroll before clicks and changes run.
- Restored nested panel scroll positions independently, including the Students roster and profile areas.
- Prevented rerenders from accidentally saving the top of the page as the new scroll position.

## 0.1.60

- Fixed Students tab roster scrolling so the left roster can scroll independently.
- Preserved scroll position after student edits and relationship changes.
- Replaced relationship Last Scene with add/subtract point controls.
- Replaced manual Clubs/Job fields on student records with generated Campus Commitments from Clubs and Jobs tabs.
- Removed Attendance and Exams fields from Academic Progress.
- Added Student Dice summary from club skills and passed exam skills.

## 0.1.59

- Reworked the Students tab profile area into a Strixhaven Memories-style student dossier.
- Kept the student roster on the left and reorganized the selected student card on the right.
- Added memory-sheet panel styling for enrollment, relationships, report cards, extracurriculars, jobs, conduct, and DM notes.

## 0.1.58

- Redesigned the Calendar planning popout with a dark Vital Quest card style.
- Improved planner layout, spacing, participant selector readability, and button wrapping.
- Increased planner dialog width and added resilient dialog class handling.

## 0.1.57

- Added participation targeting to Calendar planning.
- Calendar entries can now apply to all player characters or one selected player character.
- Stored participant target data on Vital Quest calendar event records and Simple Calendar note text.

## 0.1.56

- Fixed malformed separator text in Overview student/job details.
- Tightened Overview student card sizing so single player cards stay compact.

## 0.1.55

- Split the Overview student card feed into Player Characters and Student NPCs.

## 0.1.54

- Reorganized the Overview tab into a fuller GM command dashboard.
- Improved the school clock presentation while preserving fallback controls.
- Added overview summaries for students, classes, exams, clubs, jobs, alerts, live schedule, and student card feed.
- Added Jobs to the fallback agenda builder.

## 0.1.53

- Made job wages adjustable with separate gold, silver, and copper fields.
- Updated job actor flags and Journal sync to use the configured weekly wage.

## 0.1.52

- Added a Jobs tab for Strixhaven campus employment.
- Added official job locations, positions, wages, NPC coworkers, and descriptions.
- Added player/NPC employee enrollment with one-job-at-a-time handling.
- Added campus job data to student records, actor flags, calendar planning, and Journal archive sync.

## 0.1.51

- Changed club cards from a tiled grid into long collapsible cards, matching the Exams tab style more closely.
- Rebalanced open club cards to use the wider space for setup fields, enrollment lists, and notes.

## 0.1.50

- Fixed collapsed club cards stretching to match taller expanded cards in the same row.

## 0.1.49

- Made extracurricular club cards collapsible so configured clubs can be tucked away while keeping the name and enrollment count visible.

## 0.1.48

- Visually reworked club cards with wider layouts, clearer headers, stronger section styling, and cleaner member enrollment lists.

## 0.1.47

- Moved Book NPC Members lower on club cards so the core club setup is easier to read.

## 0.1.46

- Changed club Student Die skills into two structured skill dropdowns.
- Split club enrollment into Player Members and NPC Members sections.
- Added Faculty Overseer selection to extracurricular clubs.
- Stored extracurricular credit on linked actor sheets as Vital Quest flags.
- Updated club records and Journal sync to keep skill and overseer data.

## 0.1.45

- Restructured the Clubs tab into a Strixhaven extracurricular manager.
- Added the official extracurricular catalog with skills, NPC members, and descriptions.
- Added rules cards for Student Dice, relationship points, joining, quitting, and benefit limits.
- Added club membership checkboxes for enrolled students.
- Added fields for Student Die skills, NPC members, meeting timing, relationship notes, and DM notes.
- Updated club Journal sync data to include extracurricular mechanics.

## 0.1.44

- Improved dropdown readability across the GM screen and roll popup.
- Added dark option menu colors for selects where Chromium allows styling.
- Made selected and hovered dropdown options easier to read.

## 0.1.43

- Restyled the pushed exam roll popup with a darker, clearer Vital Quest card appearance.
- Improved popup label contrast, control spacing, button styling, and readability.
- Scoped roll popup styling so it does not affect unrelated Foundry dialogs.

## 0.1.42

- Added Advantage, Normal, and Disadvantage options to pushed exam roll popups.
- Added Study Dice d4 count to pushed exam roll popups.
- Vital Quest exam rolls now include actor skill/ability bonus, roll mode, and optional study d4s in the recorded total.

## 0.1.41

- Stopped exam checkbox changes from re-rendering the full GM screen.
- Stopped pushed roll result recordings from re-rendering the full GM screen.
- Added targeted in-place updates for exam result rows, totals, cheating state, and calculated outcomes.
- Further reduced scroll-jump risk in the Exams tab.

## 0.1.40

- Fixed GM screen scroll position resetting after exam checkbox changes and roll result updates.
- Restored scroll after Foundry finishes rendering, including delayed layout passes.
- Removed duplicate re-renders from exam result saves and pushed roll recordings.

## 0.1.39

- Added collapsible exam/project cards to save space in the Exams tab.
- Added compact exam card summaries showing class, DC, and selected checks.
- Preserved GM screen scroll position across saves, toggles, and re-renders.
- Polished exam card styling for collapsed and expanded states.

## 0.1.38

- Grouped the Cheated checkbox, Cheating DC, Deception roll, and Sleight of Hand roll into one cheating package card.
- Kept normal exam rolls and calculated outcome separate from cheating resolution controls.
- Improved cheating package styling with a distinct nested panel.

## 0.1.37

- Removed per-student exam check push buttons; exam checks are now pushed from the exam-level controls.
- Removed Studied, Group Study, and All-Nighter checkboxes from student exam records.
- Kept the Cheated checkbox as the switch between normal exam resolution and cheating resolution.
- Made exam outcomes calculate automatically from recorded roll totals and DCs.
- Normal exams now resolve as Failed for two failed checks, Passed for one success, and Aced for two successes.
- Cheating attempts now resolve as Caught Cheating unless both Deception and Sleight of Hand pass the cheating DC.

## 0.1.36

- Changed pushed exam rolls to open a roll prompt instead of rolling immediately.
- Roll prompts now appear for the owning player when a student actor has an active player owner.
- Unowned or offline-player actors now open the roll prompt for the GM instead of auto-rolling.
- Push-to-all exam checks now skip students marked as cheating.
- Removed the chat-message roll request flow in favor of direct popup dialogs.

## 0.1.35

- Added exam roll push buttons for Check 1 and Check 2.
- Added exam-level buttons to push each exam check to all linked students.
- Added per-student cheat roll buttons for Deception and Sleight of Hand.
- Player-owned actor sheets receive whispered roll-request buttons.
- Unowned or NPC sheets roll through the GM by default.
- Recorded player roll totals back into the matching exam result fields.

## 0.1.34

- Simplified per-student exam records into compact resolution cards.
- Replaced study bookkeeping fields with checkboxes for Studied, Group Study, All-Nighter, and Cheated.
- Removed visible Study Skill, Study Roll, Study Outcome, Rerolls, Cheating dropdown, and Cheating Outcome fields.
- Added Cheating DC tracking.
- Changed exam resolution to a manual Testing Outcome selector: Aced, Passed, Failed, or Caught Cheating.

## 0.1.33

- Simplified the Exams tab for a single-sitting exam flow.
- Removed visible exam status, due date, and stakes fields from exam setup.
- Changed Exam Check 1 and Check 2 into roll-type dropdowns.
- Added clearer Study, Study Together, All-Nighter, and Cheating rule cards below Exam Notes.
- Clarified that the DM sets the study DC based on the student's method and the exam.

## 0.1.32

- Applied Strixhaven exam rules to the Exams tab.
- Added exam setup cards with class, DC, two test checks, status, stakes, and notes.
- Added per-student Study Phase tracking with normal study, study together, all-nighter, skip, and reroll calculation.
- Added cheating tracking with cheating skill, roll, outcome, and caught-cheating consequences.
- Added Testing Phase roll tracking with automatic Ace, Pass, Fail, Pending, or Caught Cheating result.
- Added one-click Academic Standing application for exam results.

## 0.1.31

- Improved the Tools tab layout for Example Standing Changes.
- Changed standing examples from cramped bullet lists into cleaner modifier rows.
- Let the examples panel span wider in the Tools grid.

## 0.1.30

- Added Academic Standing reference cards to the Tools tab.
- Tools now shows the full standing ladder from Honored Scholar to Expelled.
- Added example standing changes for academics, discipline, redemption, clubs, and social events.

## 0.1.29

- Replaced GPA with a broad Academic Standing score system.
- Added automatic standing labels from -100 to +100.
- Student records now show Standing Score and calculated Standing Level.
- Journal academic summaries now use Standing Score instead of GPA.

## 0.1.28

- Added faculty-linked professor assignment to class records.
- Added faculty-linked advisor assignment to student enrollment records.
- Professor/advisor pickers are populated from the Faculty Directory.
- Linked selections store faculty IDs while keeping readable names for display.

## 0.1.27

- Fixed Faculty NPC creation not reliably adding the new record to the Faculty tab.
- Prevented create dialogs from resolving as cancelled before async actor creation finishes.
- Applied the same safer dialog handling to Student NPC creation.

## 0.1.26

- Changed Faculty creation to create a linked Foundry NPC actor.
- Added a dedicated Create Faculty NPC dialog.
- Faculty NPC actors are flagged as Vital Quest faculty records.
- New faculty records store the linked actor ID for events and activities.
- Added an open-sheet button to faculty rows.

## 0.1.25

- Restyled the Classes tab with a polished course-catalog hero.
- Improved class card hierarchy, spacing, field layout, and magical visual treatment.
- Made Add Class more prominent and easier to read.
- Reduced cramped field layout on class cards.

## 0.1.24

- Simplified class cards back into course catalog records.
- Removed class type, meeting days, start time, end time, and schedule summary from the Classes tab.
- Kept term, location, professor, college, status, and course notes.
- Calendar planning remains the place to schedule specific class sessions and events.

## 0.1.23

- Changed the Calendar tab's schedule view into a living Simple Calendar agenda.
- Upcoming Schedule now reads Simple Calendar notes for the current day and next day.
- Today's schedule filters out past timed entries as Simple Calendar time advances.
- Added a Remaining Today section driven by Simple Calendar notes.

## 0.1.22

- Added a Simple Calendar Reborn month board to the Calendar tab.
- Clicking a date opens a Vital Quest planning dialog.
- The planner supports Morning, Day, Afternoon, and Night time blocks.
- Planner categories now include Classes, Exams, Clubs, Campus, and Story.
- Creating a planner entry writes a note onto Simple Calendar Reborn and stores a Vital Quest event reference.

## 0.1.21

- Added schedule-aware fields to class cards: term, class type, location, meeting days, start time, and end time.
- Added a generated Calendar agenda that pulls from Classes, Exams, and Clubs.
- Calendar now uses the current Simple Calendar Reborn day/time as the planning anchor when available.
- Added Today at Strixhaven and Upcoming Schedule sections to the Calendar tab.

## 0.1.20

- Redesigned the Classes tab into tasteful course cards.
- Added labeled fields for class name, status, professor, college/department, schedule, and course notes.
- Added a clearer empty state and remove action for the course catalog.
- Class cards continue feeding the student Current Classes checkbox list.

## 0.1.19

- Changed student Current Classes from a freeform textarea to class checkboxes.
- Student class checkboxes are populated from the Classes tab.
- Class rename/delete actions now update student class summaries.
- Added styling for class checkbox rows.

## 0.1.18

- Fixed clipped text in GM screen dropdowns and form controls.
- Standardized GM input/select height and line-height for better Foundry rendering.

## 0.1.17

- Split student dorm tracking into Dorm Name and Dorm Number.
- Added Dorm Name to the Enrollment card and new student creation dialog.
- Existing Dorm values remain as Dorm Number.
- Synced Journal records now show both Dorm Name and Dorm Number.

## 0.1.16

- Moved the school-year count control into the GM Tools tab.
- Added a Campaign Settings card to Tools.
- Hid the school-year count from Foundry's normal module settings menu.
- Adjusted the Tools grid so additional tool panels wrap cleanly.

## 0.1.15

- Added a world setting for the number of school years.
- Changed student Year to a dropdown generated from the configured school-year count.
- Changed Dorm to Dorm Number.
- Removed manual Advisor editing from the Enrollment card; advisor assignment is reserved for future Faculty-tab logic.
- Updated new student creation to use the configured Year dropdown.

## 0.1.14

- Added per-student relationship link tracking.
- Student and NPC records can now link to other Foundry Actor sheets.
- Added relationship score, status, last scene, and notes fields.
- Relationship scores auto-suggest social status when changed.
- Linked relationship sheets can be opened directly from the student dossier.
- Synced student Journal records now include the relationship web summary.

## 0.1.13

- Fixed GM screen tab state resetting to Overview after selecting a student.
- The GM screen now remembers the active tab across renders.
- Student actions now keep the Students tab active.

## 0.1.12

- Revamped the GM Students tab into a roster-and-dossier layout.
- Added roster summary counts for total records, player characters, and student NPCs.
- Grouped student NPCs by college in the roster.
- Reworked the selected student view into an academic dossier with status tags, portrait area, journal route, and organized record sections.
- Added a college dropdown so changing house/college is clearer and syncs to the matching Journal folder.
- Cleaned GM tab labels to avoid corrupted emoji text in Foundry.

## 0.1.11

- Reworked the Journal student archive hierarchy.
- Student records now live under `Vital Quest > Student Records`.
- Added nested `Player Characters` and `Students` folders inside `Student Records`.
- Added college folders under `Student Records > Students` for Silverquill, Prismari, Quandrix, Lorehold, Witherbloom, and Unassigned.
- NPC student records now sync into their matching college folder.
- Plain Journal entries created inside a college folder now inherit that college when pulled into VQ.

## 0.1.10

- Added automatic module-to-Journal syncing after Vital Quest data changes.
- Updating records in the GM screen now refreshes their matching Journal entries without pressing Sync.
- Deleting records in the GM screen now prunes stale VQ Journal records.
- Sync now mirrors the current module state instead of only adding new Journal records.

## 0.1.9

- Fixed Journal folder parenting so archive folders are created inside the parent `Vital Quest` folder.
- Sync now repairs duplicate VQ archive folders created at the Journal root by moving their contents under `Vital Quest`.
- Existing VQ-looking root folders are adopted instead of duplicated.
- Folder cleanup is scoped to VQ archive folders/root-level matching folders so unrelated campaign folders are not touched.

## 0.1.8

- Simplified the GM Tools Journal Archive panel to a single Sync button.
- Sync now creates/adopts the full Vital Quest Journal folder system under the parent `Vital Quest` folder.
- Added dedicated `Player Characters` and `NPCs` Journal folders under `Vital Quest`.
- Synced player-character records now go to `Player Characters`; synced NPC student records now go to `NPCs`.
- Existing matching Journal folders are reused and flagged for VQ instead of duplicated.
- The single Sync flow now builds folders, indexes Actor sheets, pulls Journal archive changes, and writes clean VQ records back to Journal.

## 0.1.7

- Added live Journal archive syncing for Vital Quest records.
- Journal entries created, renamed, moved, or deleted inside VQ archive folders now update the GM screen data automatically.
- Deleting a VQ Journal record removes the matching campaign-manager record.
- Adding a Journal entry to Student Records or Faculty now creates/links an NPC Actor sheet and places it in the matching VQ category.
- Changed Add Student to open a Student NPC creation dialog and create a linked Foundry NPC sheet.
- Open VQ windows now refresh when campaign-manager data or linked Actor sheets change.

## 0.1.6

- Added a Vital Quest Journal archive folder system.
- Added GM Tools controls to set up Journal folders, sync VQ records to Journal entries, and pull structured VQ records back into the manager.
- Added readable Journal records for overview, students, faculty, classes, exams, clubs, and story threads.
- Added Actor sheet indexing so player characters and NPC/faculty actors can be linked into the appropriate VQ school categories.
- Added a dedicated Faculty collection and editable Faculty tab.

## 0.1.5

- Split the Students roster into Player Characters and Student NPCs.
- Player characters are now detected from Foundry character actors with player owners.
- Player character name, player ownership, portrait, and actor link are pulled from the Foundry actor sheet.
- Vital Quest now stores only the school-life overlay for player characters.

## 0.1.4

- Redesigned the GM Students tab as a student status management system.
- Added searchable enrolled-student roster.
- Added dedicated dashboard-style student academic profiles.
- Added school-life tracking fields for enrollment, academic standing, classes, homework, exams, clubs, reputation, daily schedule, discipline, relationships, events, achievements, semester progress, and private DM notes.
- Kept Foundry actor combat/stat/inventory data separate from Vital Quest school status tracking.

## 0.1.3

- Added Simple Calendar Reborn integration adapter.
- Vital Quest now reads the current date/time from Simple Calendar when available.
- GM Advance Day now attempts to advance Simple Calendar before using the fallback calendar.
- Student Card and GM Screen now show the active calendar source.

## 0.1.1

- Added more ways to open Vital Quest inside Foundry.
- Added `/vq`, `/vitalquest`, and `/vital-quest` chat commands.
- Added `Ctrl+Shift+V` keybinding.
- Added a settings menu entry.
- Improved scene-control compatibility.

## 0.1.0

- Initial Vital Quest module shell.
- Added Strixhaven Campaign Manager as the first campaign tool.
- Added GM dashboard.
- Added school calendar tracking.
- Added college focus, campaign arc, and active mystery fields.
- Added classes, exams/projects, clubs, relationships, and campaign threads.
- Added campus event and rumor generators.
- Added persistent world storage through Foundry settings.
