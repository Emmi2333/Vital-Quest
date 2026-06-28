const MODULE_ID = "vital-quest";

const STRIXHAVEN_COLLEGES = {
  silverquill: {
    label: "Silverquill",
    theme: "Eloquence, language, rhetoric, shadow, radiance",
    description: "Words have weight. Intention and expression shape magic."
  },
  prismari: {
    label: "Prismari",
    theme: "Art, performance, emotion, elemental expression",
    description: "Magic is spectacle, emotion, and the fire of creation."
  },
  quandrix: {
    label: "Quandrix",
    theme: "Mathematics, patterns, nature, possibility",
    description: "Reality is a theorem waiting to be questioned."
  },
  lorehold: {
    label: "Lorehold",
    theme: "History, archaeology, spirits, living memory",
    description: "The past is not dead; it is a conversation."
  },
  witherbloom: {
    label: "Witherbloom",
    theme: "Life, death, nature, potions, survival",
    description: "Magic grows from the cycle of vitality and decay."
  }
};

const CAMPUS_EVENTS = [
  "A debate in the cafeteria becomes magically binding until someone defines every key term.",
  "A professor's enchanted notes escape and begin correcting students in the halls.",
  "A campus statue whispers a forgotten name to anyone who walks past alone.",
  "A club recruitment booth accidentally summons an audience of harmless minor spirits.",
  "A library shelf refuses to open unless asked a sincere question.",
  "A student's familiar delivers love letters to the wrong people all morning.",
  "The gardens bloom out of season around a student carrying unstable magic.",
  "A portrait challenges passersby to defend an unpopular opinion."
];

const RUMORS = [
  "Someone saw lights moving under the Biblioplex after curfew.",
  "A Silverquill professor rejected a thesis so hard the ink fled the page.",
  "One of the dorm mirrors has started showing tomorrow morning.",
  "A Quandrix student claims a staircase has been counting people incorrectly.",
  "The Witherbloom greenhouse has a plant that only grows near secrets.",
  "A Prismari rehearsal set fire to the concept of silence.",
  "Lorehold students found a spirit who refuses to say which century it died in."
];

const SCHOOL_DAY_ORDER = ["moonday", "toilsday", "wandsday", "thelsday", "fryday", "standday", "sunsday"];
const TEXT_SEPARATOR = " · ";

const CALENDAR_TIME_BLOCKS = [
  { key: "morning", label: "Morning", defaultTime: "8:00 AM", icon: "fa-sun" },
  { key: "day", label: "Day", defaultTime: "11:00 AM", icon: "fa-cloud-sun" },
  { key: "afternoon", label: "Afternoon", defaultTime: "2:00 PM", icon: "fa-mug-hot" },
  { key: "night", label: "Night", defaultTime: "7:00 PM", icon: "fa-moon" }
];

const CAMPUS_EVENT_LOCATIONS = [
  "Biblioplex",
  "Central Campus",
  "Firejolt Cafe",
  "Dormitories",
  "Silverquill Hall",
  "Prismari Theater",
  "Quandrix Labs",
  "Lorehold Excavation Yard",
  "Witherbloom Greenhouse",
  "Strixhaven Stadium"
];

const EXAM_CHECK_OPTIONS = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
  "Acrobatics",
  "Animal Handling",
  "Arcana",
  "Athletics",
  "Deception",
  "History",
  "Insight",
  "Intimidation",
  "Investigation",
  "Medicine",
  "Nature",
  "Perception",
  "Performance",
  "Persuasion",
  "Religion",
  "Sleight of Hand",
  "Stealth",
  "Survival"
];

const EXAM_CHECK_KEYS = {
  Strength: { type: "ability", key: "str" },
  Dexterity: { type: "ability", key: "dex" },
  Constitution: { type: "ability", key: "con" },
  Intelligence: { type: "ability", key: "int" },
  Wisdom: { type: "ability", key: "wis" },
  Charisma: { type: "ability", key: "cha" },
  Acrobatics: { type: "skill", key: "acr" },
  "Animal Handling": { type: "skill", key: "ani" },
  Arcana: { type: "skill", key: "arc" },
  Athletics: { type: "skill", key: "ath" },
  Deception: { type: "skill", key: "dec" },
  History: { type: "skill", key: "his" },
  Insight: { type: "skill", key: "ins" },
  Intimidation: { type: "skill", key: "itm" },
  Investigation: { type: "skill", key: "inv" },
  Medicine: { type: "skill", key: "med" },
  Nature: { type: "skill", key: "nat" },
  Perception: { type: "skill", key: "prc" },
  Performance: { type: "skill", key: "prf" },
  Persuasion: { type: "skill", key: "per" },
  Religion: { type: "skill", key: "rel" },
  "Sleight of Hand": { type: "skill", key: "slt" },
  Stealth: { type: "skill", key: "ste" },
  Survival: { type: "skill", key: "sur" }
};

const STUDENT_DIE_SKILL_OPTIONS = [
  "Acrobatics",
  "Animal Handling",
  "Arcana",
  "Athletics",
  "Deception",
  "History",
  "Insight",
  "Intimidation",
  "Investigation",
  "Medicine",
  "Nature",
  "Perception",
  "Performance",
  "Persuasion",
  "Religion",
  "Sleight of Hand",
  "Stealth",
  "Survival"
];

const OFFICIAL_EXTRACURRICULARS = [
  {
    name: "Dead Languages Society",
    skills: "Athletics, History",
    npcMembers: "Drazhomir Yarnask, Quentillius A. Melentor III",
    description: "Linguistics lovers translate ancient and near-extinct languages from Strixhaven's deep repository of tomes."
  },
  {
    name: "Distinguished Society of Fine Artists",
    skills: "Performance, Sleight of Hand",
    npcMembers: "Cadoras Damellawar, Nora Ann Wu",
    description: "Painters, sculptors, printmakers, and mosaic artists gather to create fine works and discuss new techniques."
  },
  {
    name: "Dragonchess Club",
    skills: "Deception, Investigation",
    npcMembers: "Bhedum \"Rampart\" Sooviij, Tilana Kapule",
    description: "Dragonchess experts discuss strategy, compete, and test homemade variations of game rules."
  },
  {
    name: "Dragonsguard Historical Society",
    skills: "Arcana, History",
    npcMembers: "Bhedum \"Rampart\" Sooviij",
    description: "Historians discuss, debate, and deep dive into members' favorite eras and historical mysteries."
  },
  {
    name: "Fantastical Horticulture Club",
    skills: "Nature, Survival",
    npcMembers: "Urzmaktok Grojsh",
    description: "Green-thumbed experts use magic and gardening to cultivate unusual campus vegetation."
  },
  {
    name: "Future Entrepreneurs of Strixhaven",
    skills: "Insight, Persuasion",
    npcMembers: "Grayson Wildemere",
    description: "Enterprising students discuss business theories and create small student-focused start-ups."
  },
  {
    name: "Intramural Gymnastics Club",
    skills: "Acrobatics, Performance",
    npcMembers: "Zanther Bowen",
    description: "Graceful gymnasts hone their craft and compete in dazzling floor routines."
  },
  {
    name: "Intramural Silkball Club",
    skills: "Athletics, Intimidation",
    npcMembers: "Javenesh Stoutclaw, Melwythorne, Tilana Kapule",
    description: "Hardy athletes train and compete in the muddy, rough-and-tumble Strixhaven game of silkball."
  },
  {
    name: "Intramural Water-Dancing Club",
    skills: "Athletics, Performance",
    npcMembers: "Larine Arneza",
    description: "Swimming enthusiasts combine athletic skill with choreographed aquatic performance."
  },
  {
    name: "Live-Action Roleplaying Guild",
    skills: "Animal Handling, Performance",
    npcMembers: "Cadoras Damellawar, Rosimyffenbip \"Rosie\" Wuzfeddlims",
    description: "Storytelling enthusiasts enact fantastical narratives with special rules and mascots."
  },
  {
    name: "Mage Tower Cheer Squad",
    skills: "Perception, Persuasion",
    npcMembers: "Zanther Bowen",
    description: "Cheerleaders inspire school spirit for the official Strixhaven Mage Tower teams."
  },
  {
    name: "Playactors Drama Guild",
    skills: "Arcana, Deception",
    npcMembers: "Quentillius A. Melentor III, Rubina Larkingdale",
    description: "Actors create productions of brilliant stagecraft, often with magic, music, and new takes on classics."
  },
  {
    name: "Strixhaven Iron-Lifters Society",
    skills: "Athletics, Medicine",
    npcMembers: "Greta Gorunn",
    description: "Bodybuilders support each other in developing strong muscles and stronger friendships."
  },
  {
    name: "Strixhaven Show Band Association",
    skills: "Sleight of Hand, Performance",
    npcMembers: "Aurora Luna Wynterstarr, Rubina Larkingdale",
    description: "Music enthusiasts perform rousing concerts with hurdy-gurdies, bagpipes, flutes, drums, and more."
  },
  {
    name: "Strixhaven Star",
    skills: "Investigation, Insight",
    npcMembers: "Grayson Wildemere, Mina Lee",
    description: "Truth seekers and wordsmiths report on campus news in the monthly Strixhaven Star newspaper."
  },
  {
    name: "Student-Mages of Faith",
    skills: "Insight, Religion",
    npcMembers: "Melwythorne, Shuvadri Glintmantle",
    description: "Pious students share prayers, theological debates, and celebrations of high holidays."
  }
];

const OFFICIAL_JOBS = [
  {
    name: "Biblioplex",
    positions: "Book clerk, book shelver, café worker, cleanup crew member, garden tender, store worker",
    coworker: "Drazhomir Yarnask",
    description: "Students work among towering shelves, campus readers, study spaces, gardens, and the café tucked inside Strixhaven's grand library."
  },
  {
    name: "Bow's End Tavern",
    positions: "Assistant manager, cleanup crew member, cook, host, server",
    coworker: "Javenesh Stoutclaw",
    description: "A lively student tavern where workers handle food, guests, cleanup, and the endless social gravity of campus nightlife."
  },
  {
    name: "Campus Grounds",
    positions: "Graffiti eraser, lawn manicurist, litter retriever, sidewalk sweeper, statuary repairer, trash collector",
    coworker: "Shuvadri Glintmantle",
    description: "Grounds workers keep Strixhaven presentable by cleaning paths, repairing statuary, and tending the magical campus landscape."
  },
  {
    name: "Campus Magic Labs",
    positions: "Cleanup crew member, specimen preparer, volunteer lab partner",
    coworker: "Urzmaktok Grojsh",
    description: "A practical, unpredictable workplace for students willing to clean, prep, and occasionally stand near experimental magic."
  },
  {
    name: "Dormitories",
    positions: "Cleanup crew member, events assistant, front-desk worker, resident assistant",
    coworker: "Nora Ann Wu",
    description: "Dormitory jobs place students close to daily campus life, residence problems, visitors, and late-night student drama."
  },
  {
    name: "Firejolt Café",
    positions: "Barista, cashier, cleanup crew member, server",
    coworker: "Mina Lee",
    description: "A busy campus café where student workers serve coffee, snacks, gossip, and desperately needed pre-exam caffeine."
  },
  {
    name: "Intramural Fields",
    positions: "Cleanup crew member, crowd manager, equipment assistant, groundskeeper, referee",
    coworker: "Rosimyffenbip “Rosie” Wuzfeddlims",
    description: "Athletic field work keeps competitions moving, crowds organized, gear ready, and games from becoming total magical chaos."
  },
  {
    name: "Strixhaven Performing Arts Society",
    positions: "Cleanup crew member, general assistant, refreshments expert, stagehand, ticket taker, usher",
    coworker: "Larine Arneza",
    description: "Students support performances from behind the curtain, handling stages, audiences, refreshments, and society events."
  },
  {
    name: "Strixhaven Stadium",
    positions: "Cleanup crew member, entertainment assistant, equipment assistant, groundskeeper, refreshments expert, ticket taker, usher",
    coworker: "Aurora Luna Wynterstarr, Greta Gorunn",
    description: "Stadium workers help major sporting and magical events run smoothly before, during, and after the roar of the crowd."
  }
];

const ACADEMIC_STANDING_LEVELS = [
  { min: 75, label: "Honored Scholar" },
  { min: 50, label: "Distinguished" },
  { min: 25, label: "Commended" },
  { min: 5, label: "Good Standing" },
  { min: -4, label: "Watched" },
  { min: -20, label: "Concern" },
  { min: -40, label: "Probation" },
  { min: -60, label: "Final Warning" },
  { min: -80, label: "Expulsion Review" },
  { min: -100, label: "Expelled" }
];

const JOURNAL_ARCHIVE = {
  root: { key: "root", name: "Vital Quest" },
  folders: [
    { key: "overview", name: "Overview" },
    { key: "students", name: "Student Records" },
    { key: "faculty", name: "Faculty" },
    { key: "classes", name: "Classes" },
    { key: "exams", name: "Exams" },
    { key: "clubs", name: "Clubs" },
    { key: "jobs", name: "Jobs" },
    { key: "campus", name: "Campus" },
    { key: "calendar", name: "Calendar" },
    { key: "story", name: "Story" },
    { key: "tools", name: "Tools & Generated Notes" }
  ]
};

const STUDENT_COLLEGE_FOLDERS = [
  ...Object.entries(STRIXHAVEN_COLLEGES).map(([key, college]) => ({
    key: `student-college-${key}`,
    collegeKey: key,
    name: college.label
  })),
  { key: "student-college-unassigned", collegeKey: "unassigned", name: "Unassigned" }
];

const DEFAULT_FACULTY_ROLES = [
  "Professor",
  "Dean",
  "Instructor",
  "Librarian",
  "Coach",
  "Researcher",
  "Advisor",
  "Staff"
];

const DEFAULT_FACULTY_DEPARTMENTS = [
  ...Object.values(STRIXHAVEN_COLLEGES).map((college) => college.label),
  "General Studies",
  "Biblioplex",
  "Dormitories",
  "Campus Grounds",
  "Staff"
];

const CLASS_COLLEGE_OPTIONS = [
  ...Object.values(STRIXHAVEN_COLLEGES).map((college) => college.label),
  "General / Unassigned"
];

function defaultCampusLocation(name = "New Campus Location") {
  return {
    id: foundry.utils.randomID(),
    name,
    type: "Campus Location",
    college: "General / Unassigned",
    sceneId: "",
    description: "",
    notableNpc: "",
    secrets: "",
    notes: ""
  };
}

let vitalQuestJournalLock = false;
let vitalQuestRefreshTimer = null;
let vitalQuestJournalWriteTimer = null;

function defaultStudent(name = "New Student", type = "npc") {
  return {
    id: foundry.utils.randomID(),
    type,
    actorId: "",
    name,
    player: "",
    college: "Silverquill",
    year: "1st Year",
    dormName: "",
    dorm: "",
    advisor: "",
    advisorFacultyId: "",
    academicStandingScore: 10,
    academicStanding: "Good Standing",
    attendance: "Present",
    currentClasses: "Magical Physiologies; Beginning Inkomancy",
    selectedClassIds: [],
    homework: "No urgent homework recorded.",
    exams: "No active exam pressure recorded.",
    clubs: "",
    job: "",
    leadership: "",
    reputation: "Unknown",
    dailySchedule: "Morning classes, afternoon study, evening free.",
    discipline: "Clean record",
    relationships: "",
    activeEvents: "",
    achievements: "",
    semesterProgress: "Settling into the term.",
    privateNotes: "",
    relationshipLinks: []
  };
}

function defaultRelationshipLink(targetActorId = "") {
  return {
    id: foundry.utils.randomID(),
    targetActorId,
    score: 0,
    status: "Acquaintance",
    notes: "",
    lastScene: ""
  };
}

function relationshipStatusFromScore(score) {
  const value = Number(score || 0);
  if (value >= 10) return "Beloved";
  if (value >= 3) return "Friend";
  if (value <= -10) return "Enemy";
  if (value <= -3) return "Rival";
  return "Acquaintance";
}

function ordinalYearLabel(yearNumber) {
  const number = Number(yearNumber || 1);
  const suffix = number % 100 >= 11 && number % 100 <= 13
    ? "th"
    : number % 10 === 1
      ? "st"
      : number % 10 === 2
        ? "nd"
        : number % 10 === 3
          ? "rd"
          : "th";
  return `${number}${suffix} Year`;
}

function getSchoolYearOptions(selectedYear = "") {
  const count = Math.max(1, Number(game.settings?.get(MODULE_ID, "schoolYearCount") || 4));
  const selected = String(selectedYear || "").trim();
  const options = Array.from({ length: count }, (_value, index) => {
    const label = ordinalYearLabel(index + 1);
    return {
      label,
      selected: selected === label || selected === String(index + 1)
    };
  });
  if (selected && !options.some((option) => option.selected)) {
    options.push({ label: selected, selected: true });
  }
  return options;
}

function classNamesFromIds(classIds = [], classes = []) {
  const ids = new Set(classIds);
  return classes
    .filter((classRecord) => ids.has(classRecord.id))
    .map((classRecord) => classRecord.name)
    .filter(Boolean);
}

function syncStudentClassSummary(student, classes = []) {
  student.selectedClassIds = Array.isArray(student.selectedClassIds) ? student.selectedClassIds : [];
  const validIds = new Set(classes.map((classRecord) => classRecord.id));
  student.selectedClassIds = student.selectedClassIds.filter((id) => validIds.has(id));
  student.currentClasses = classNamesFromIds(student.selectedClassIds, classes).join("; ");
}

function syncAllStudentClassSummaries(data) {
  (data.students || []).forEach((student) => syncStudentClassSummary(student, data.classes || []));
}

function facultyDisplayName(faculty) {
  if (!faculty) return "";
  const actor = faculty.actorId ? game.actors?.get(faculty.actorId) : null;
  return actor?.name || faculty.name || "Unnamed Faculty";
}

function facultyOptions(facultyRows = [], selectedId = "") {
  return [
    { id: "", label: "Choose faculty...", selected: !selectedId },
    ...facultyRows.map((faculty) => ({
      id: faculty.id,
      label: facultyDisplayName(faculty),
      role: faculty.role || "",
      selected: faculty.id === selectedId
    }))
  ];
}

function facultyNameById(facultyRows = [], facultyId = "") {
  return facultyDisplayName(facultyRows.find((faculty) => faculty.id === facultyId)) || "";
}

function normalizeOptionList(options = [], fallback = []) {
  const source = Array.isArray(options) ? options : [];
  const clean = source
    .flatMap((entry) => String(entry || "").split(/\r?\n/))
    .map((entry) => entry.trim())
    .filter(Boolean);
  const merged = clean.length ? clean : fallback;
  return [...new Set(merged.map((entry) => String(entry || "").trim()).filter(Boolean))];
}

function optionListWithSelected(options = [], selected = "") {
  const clean = normalizeOptionList(options);
  const value = String(selected || "").trim();
  if (value && !clean.includes(value)) clean.push(value);
  return clean.map((label) => ({
    label,
    value: label,
    selected: label === value
  }));
}

function textareaOptionList(value = "", fallback = []) {
  return normalizeOptionList(String(value || "").split(/\r?\n/), fallback);
}

function academicStandingFromScore(score = 5) {
  const value = Math.max(-100, Math.min(100, Number(score || 0)));
  return ACADEMIC_STANDING_LEVELS.find((level) => value >= level.min)?.label || "Expelled";
}

function defaultExamResult(studentId = "") {
  return {
    id: foundry.utils.randomID(),
    studentId,
    studied: false,
    studiedTogether: false,
    allNighter: false,
    studyMethod: "skip",
    studySkill: "",
    studyRoll: 0,
    studySuccess: "pending",
    rerollsEarned: 0,
    studentDice: "",
    cheated: false,
    cheatingDc: 13,
    cheatingAttempted: "no",
    cheatingSkill: "",
    cheatingRoll: 0,
    cheatingDeceptionRoll: 0,
    cheatingSleightRoll: 0,
    cheatingOutcome: "none",
    testOneRoll: 0,
    testTwoRoll: 0,
    finalResult: "Pending",
    standingDelta: 0,
    standingApplied: false,
    notes: ""
  };
}

function normalizeExamRecord(exam, students = []) {
  exam.name = exam.name || "New Exam";
  exam.classId = exam.classId || "";
  exam.className = exam.className || "";
  exam.professor = exam.professor || "";
  exam.due = exam.due || "";
  exam.status = exam.status || "Planned";
  exam.dc = Number(exam.dc || 13);
  exam.checkOne = exam.checkOne || "Arcana";
  exam.checkTwo = exam.checkTwo || "History";
  exam.stakes = exam.stakes || "";
  exam.notes = exam.notes || "";
  exam.results = Array.isArray(exam.results) ? exam.results : [];

  for (const student of students || []) {
    if (!exam.results.some((result) => result.studentId === student.id)) {
      exam.results.push(defaultExamResult(student.id));
    }
  }

  exam.results.forEach((result) => normalizeExamResult(result, exam));
}

function normalizeExamResult(result, exam) {
  result.id = result.id || foundry.utils.randomID();
  if (result.studied === undefined) result.studied = ["normal", "together", "allNighter"].includes(result.studyMethod);
  if (result.studiedTogether === undefined) result.studiedTogether = result.studyMethod === "together";
  if (result.allNighter === undefined) result.allNighter = result.studyMethod === "allNighter";
  result.studyMethod = result.studyMethod || "skip";
  result.studySuccess = result.studySuccess || "pending";
  if (result.cheated === undefined) result.cheated = result.cheatingAttempted === "yes";
  result.cheatingDc = Number(result.cheatingDc || 13);
  result.cheatingAttempted = result.cheatingAttempted || "no";
  result.cheatingOutcome = result.cheatingOutcome || "none";
  result.testOneRoll = Number(result.testOneRoll || 0);
  result.testTwoRoll = Number(result.testTwoRoll || 0);
  result.studyRoll = Number(result.studyRoll || 0);
  result.cheatingRoll = Number(result.cheatingRoll || 0);
  result.cheatingDeceptionRoll = Number(result.cheatingDeceptionRoll || 0);
  result.cheatingSleightRoll = Number(result.cheatingSleightRoll || 0);
  result.studyMethod = result.allNighter ? "allNighter" : result.studiedTogether ? "together" : result.studied ? "normal" : "skip";
  result.cheatingAttempted = result.cheated ? "yes" : "no";
  result.rerollsEarned = examRerollsEarned(result);
  result.finalResult = examFinalResult(result, exam);
  result.standingDelta = examStandingDelta(result.finalResult);
  result.standingApplied = Boolean(result.standingApplied);
  result.notes = result.notes || "";
}

function examRerollsEarned(result) {
  if (result.allNighter) return 2;
  if (result.studied || result.studiedTogether) return 1;
  return 0;
}

function examFinalResult(result, exam) {
  if (result.cheated) {
    const deception = Number(result.cheatingDeceptionRoll || 0);
    const sleight = Number(result.cheatingSleightRoll || 0);
    if (!deception || !sleight) return "Pending";
    const cheatingDc = Number(result.cheatingDc || 13);
    const passes = [deception, sleight].filter((roll) => roll >= cheatingDc).length;
    return passes === 2 ? "Aced" : "Caught Cheating";
  }

  const first = Number(result.testOneRoll || 0);
  const second = Number(result.testTwoRoll || 0);
  if (!first || !second) return "Pending";
  const dc = Number(exam.dc || 13);
  const passes = [first, second].filter((roll) => roll >= dc).length;
  if (passes === 2) return "Aced";
  if (passes === 1) return "Passed";
  return "Failed";
}

function examStandingDelta(result) {
  return {
    Aced: 6,
    Passed: 3,
    Failed: -4,
    "Caught Cheating": -15,
    Pending: 0
  }[result] ?? 0;
}

function activePlayerOwnersForActor(actor) {
  if (!actor) return [];
  const ownership = actor.ownership || {};
  const ownerLevel = CONST.DOCUMENT_OWNERSHIP_LEVELS?.OWNER ?? 3;
  return game.users
    .filter((user) => user.active && !user.isGM)
    .filter((user) => Number(ownership[user.id] ?? ownership.default ?? 0) >= ownerLevel);
}

function examRollFieldLabel(field, checkLabel = "") {
  return {
    testOneRoll: checkLabel || "First Exam Check",
    testTwoRoll: checkLabel || "Second Exam Check",
    cheatingDeceptionRoll: "Cheating: Deception",
    cheatingSleightRoll: "Cheating: Sleight of Hand"
  }[field] || checkLabel || "Exam Check";
}

function getExamCheckConfig(checkLabel = "") {
  return EXAM_CHECK_KEYS[checkLabel] || EXAM_CHECK_KEYS.Arcana;
}

function fallbackCheckBonus(actor, checkLabel = "") {
  const config = getExamCheckConfig(checkLabel);
  if (config.type === "ability") return Number(actor?.system?.abilities?.[config.key]?.mod || 0);
  const skill = actor?.system?.skills?.[config.key];
  if (!skill) return 0;
  if (Number.isFinite(Number(skill.total))) return Number(skill.total);
  const ability = skill.ability || "int";
  const abilityMod = Number(actor?.system?.abilities?.[ability]?.mod || 0);
  const profMultiplier = Number(skill.value ?? skill.proficient ?? 0);
  const prof = Number(actor?.system?.attributes?.prof || 0);
  return abilityMod + (prof * profMultiplier);
}

async function rollActorExamCheck(actor, checkLabel = "", options = {}) {
  const mode = options.mode || "normal";
  const studyDice = Math.max(0, Math.min(10, Number(options.studyDice || 0)));
  const bonus = fallbackCheckBonus(actor, checkLabel);
  const d20 = mode === "advantage" ? "2d20kh" : mode === "disadvantage" ? "2d20kl" : "1d20";
  const studyFormula = studyDice > 0 ? ` + ${studyDice}d4` : "";
  const formula = `${d20} + ${bonus}${studyFormula}`;
  const roll = await new Roll(formula).evaluate({ async: true });
  await roll.toMessage({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor: [
      `Vital Quest Exam Check: ${checkLabel}`,
      mode !== "normal" ? mode[0].toUpperCase() + mode.slice(1) : "Normal roll",
      studyDice ? `${studyDice} study d4${studyDice === 1 ? "" : "s"}` : ""
    ].filter(Boolean).join(" • ")
  });
  return Number(roll.total || 0);
}

async function recordExamRollResult({ examId, resultId, field, total }) {
  if (!game.user?.isGM) {
    game.socket?.emit(`module.${MODULE_ID}`, {
      type: "recordExamRoll",
      payload: { examId, resultId, field, total }
    });
    return;
  }
  const data = await getCampaignData();
  const exam = data.exams?.find((entry) => entry.id === examId);
  const result = exam?.results?.find((entry) => entry.id === resultId);
  if (!exam || !result || !field) return;
  result[field] = Number(total || 0);
  if (field === "cheatingDeceptionRoll" || field === "cheatingSleightRoll") result.cheatingRoll = Number(total || 0);
  normalizeExamResult(result, exam);
  await setCampaignData(data, { render: false });
  updateOpenExamResultRows(examId, resultId, result);
}

function updateOpenExamResultRows(examId, resultId, result) {
  Object.values(ui.windows || {}).forEach((app) => {
    if (!(app instanceof StrixhavenCampaignManager)) return;
    app._updateExamResultRow?.(examId, resultId, result);
  });
}

async function fulfillExamRollRequest(payload = {}, options = {}) {
  const actor = payload.actorId ? game.actors?.get(payload.actorId) : null;
  if (!actor) {
    ui.notifications.warn("Vital Quest could not find the linked actor for this exam roll.");
    return;
  }
  if (!game.user?.isGM && !actor.isOwner) {
    ui.notifications.warn("You do not own this actor sheet.");
    return;
  }
  const total = await rollActorExamCheck(actor, payload.checkLabel, options);
  await recordExamRollResult({ ...payload, total });
  ui.notifications.info(`Vital Quest recorded ${examRollFieldLabel(payload.field, payload.checkLabel)}: ${total}.`);
}

function showExamRollPrompt(payload = {}) {
  const actor = payload.actorId ? game.actors?.get(payload.actorId) : null;
  if (!actor) {
    ui.notifications.warn("Vital Quest could not find the linked actor for this exam roll.");
    return;
  }
  const title = `Vital Quest Exam Roll: ${actor.name}`;
  const label = examRollFieldLabel(payload.field, payload.checkLabel);
  new Dialog({
    title,
    content: `
      <form class="vital-quest-roll-dialog">
        <p><strong>${escapeHtml(label)}</strong></p>
        <p>${escapeHtml(actor.name)} has been called to roll ${escapeHtml(payload.checkLabel || label)}.</p>
        <div class="vq-roll-dialog-grid">
          <label>
            <span>Roll Mode</span>
            <select name="rollMode">
              <option value="normal">Normal</option>
              <option value="advantage">Advantage</option>
              <option value="disadvantage">Disadvantage</option>
            </select>
          </label>
          <label>
            <span>Study Dice d4s</span>
            <input type="number" name="studyDice" min="0" max="10" step="1" value="0">
          </label>
        </div>
      </form>
    `,
    buttons: {
      roll: {
        icon: '<i class="fas fa-dice-d20"></i>',
        label: `Roll ${payload.checkLabel || "Check"}`,
        callback: async (html) => {
          const form = html?.[0]?.querySelector?.(".vital-quest-roll-dialog") || html?.querySelector?.(".vital-quest-roll-dialog");
          await fulfillExamRollRequest(payload, {
            mode: form?.querySelector("[name='rollMode']")?.value || "normal",
            studyDice: Number(form?.querySelector("[name='studyDice']")?.value || 0)
          });
        }
      },
      cancel: {
        label: "Not Now"
      }
    },
    default: "roll"
  }, {
    classes: ["vital-quest-roll-window"]
  }).render(true);
}

async function sendExamRollRequest(payload = {}) {
  const actor = payload.actorId ? game.actors?.get(payload.actorId) : null;
  if (!actor) {
    ui.notifications.warn("No actor sheet is linked to this student, so Vital Quest cannot push that roll yet.");
    return;
  }

  const owners = activePlayerOwnersForActor(actor);
  if (!owners.length) {
    showExamRollPrompt(payload);
    ui.notifications.info(`${actor.name} has no active player owner, so the roll prompt opened for the GM.`);
    return;
  }

  game.socket?.emit(`module.${MODULE_ID}`, {
    type: "promptExamRoll",
    targetUserIds: owners.map((user) => user.id),
    payload
  });
  ui.notifications.info(`Sent ${examRollFieldLabel(payload.field, payload.checkLabel)} to ${owners.map((user) => user.name).join(", ")}.`);
}

function inferSelectedClassIdsFromSummary(student, classes = []) {
  if (Array.isArray(student.selectedClassIds) && student.selectedClassIds.length) return;
  const summary = String(student.currentClasses || "").toLowerCase();
  if (!summary) {
    student.selectedClassIds = [];
    return;
  }
  student.selectedClassIds = classes
    .filter((classRecord) => classRecord.name && summary.includes(String(classRecord.name).toLowerCase()))
    .map((classRecord) => classRecord.id);
}

function defaultFaculty(name = "New Faculty") {
  return {
    id: foundry.utils.randomID(),
    actorId: "",
    name,
    role: "Professor",
    college: "General Studies",
    office: "",
    schedule: "",
    status: "Available",
    notes: ""
  };
}

function actorHasPlayerOwner(actor) {
  return Object.values(actor.ownership || actor.data?.ownership || {})
    .some((level) => Number(level) >= CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER);
}

function getPlayerCharacterActors() {
  return game.actors
    ? [...game.actors].filter((actor) => actor.type === "character" && actorHasPlayerOwner(actor))
    : [];
}

function getActorPlayerNames(actor) {
  if (!actor) return "";
  const ownership = actor.ownership || actor.data?.ownership || {};
  return game.users
    .filter((user) => !user.isGM && Number(ownership[user.id] || 0) >= CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER)
    .map((user) => user.name)
    .join(", ");
}

function getActorPlayerOwnerIds(actor) {
  if (!actor) return [];
  const ownership = actor.ownership || actor.data?.ownership || {};
  return game.users
    .filter((user) => !user.isGM && Number(ownership[user.id] || 0) >= CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER)
    .map((user) => user.id);
}

function schoolOverlayForActor(data, actor) {
  let student = data.students.find((entry) => entry.actorId === actor.id);
  if (!student) {
    student = {
      ...defaultStudent(actor.name, "player"),
      id: `actor-${actor.id}`,
      actorId: actor.id
    };
    data.students.push(student);
  }
  student.type = "player";
  student.actorId = actor.id;
  return student;
}

function displayStudent(student, actor = null, selectedId = "") {
  const sourceActor = actor || (student.actorId ? game.actors?.get(student.actorId) : null);
  const name = sourceActor?.name || student.name;
  const img = sourceActor?.img || "";
  const player = sourceActor ? getActorPlayerNames(sourceActor) : student.player;
  return {
    ...student,
    id: student.id,
    name,
    img,
    player,
    actorName: sourceActor?.name || "",
    hasActor: Boolean(sourceActor),
    selected: student.id === selectedId
  };
}

function inferActorSchoolCategory(actor) {
  const flagged = actor?.getFlag?.(MODULE_ID, "schoolCategory");
  if (["student", "faculty"].includes(flagged)) return flagged;
  const name = String(actor?.name || "").toLowerCase();
  if (/\b(professor|dean|teacher|instructor|librarian|staff|coach|advisor)\b/.test(name)) return "faculty";
  return "student";
}

function studentFromActor(actor, type = "npc") {
  return {
    ...defaultStudent(actor.name, type),
    id: type === "player" ? `actor-${actor.id}` : `npc-${actor.id}`,
    actorId: actor.id,
    name: actor.name,
    player: type === "player" ? getActorPlayerNames(actor) : ""
  };
}

function facultyFromActor(actor) {
  return {
    ...defaultFaculty(actor.name),
    id: `faculty-${actor.id}`,
    actorId: actor.id,
    name: actor.name,
    status: "Available",
    notes: "Created from a Foundry Actor sheet."
  };
}

function indexActorSheetsIntoCampaignData(data) {
  const actors = game.actors ? [...game.actors].filter((actor) => ["character", "npc"].includes(actor.type)) : [];
  let imported = 0;

  for (const actor of actors) {
    if (actor.type === "character" && actorHasPlayerOwner(actor)) {
      schoolOverlayForActor(data, actor);
      imported += 1;
      continue;
    }

    const category = inferActorSchoolCategory(actor);
    if (category === "faculty") {
      if (!data.faculty.some((entry) => entry.actorId === actor.id)) {
        data.faculty.push(facultyFromActor(actor));
        imported += 1;
      }
      continue;
    }

    if (!data.students.some((entry) => entry.actorId === actor.id)) {
      data.students.push(studentFromActor(actor, "npc"));
      imported += 1;
    }
  }

  return imported;
}

function duplicateData(data) {
  return foundry.utils.deepClone(data);
}

function normalizeCollegeKey(value) {
  const college = String(value || "").trim().toLowerCase();
  const match = Object.entries(STRIXHAVEN_COLLEGES).find(([key, data]) => {
    return college === key || college === data.label.toLowerCase();
  });
  return match?.[0] || "unassigned";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function journalTextFormat() {
  return CONST?.JOURNAL_ENTRY_PAGE_FORMATS?.HTML ?? 1;
}

function actorLink(actorId) {
  const actor = actorId ? game.actors?.get(actorId) : null;
  return actor ? `@UUID[${actor.uuid}]{${escapeHtml(actor.name)}}` : "No actor linked";
}

function getJournalFlag(document, key) {
  try {
    return document?.getFlag?.(MODULE_ID, key);
  } catch (error) {
    console.debug("Vital Quest could not read a journal flag:", error);
    return null;
  }
}

function journalParentId(document) {
  const folder = document?.folder;
  if (typeof folder === "string") return folder || null;
  if (folder?.id) return folder.id;
  if (document?.parent?.id) return document.parent.id;
  if (typeof document?._source?.folder === "string") return document._source.folder || null;
  if (typeof document?.system?.folder === "string") return document.system.folder || null;
  return null;
}

function findJournalFolder(key, parent = null) {
  const parentId = parent?.id || null;
  return game.folders?.find((folder) => {
    const matchingKey = getJournalFlag(folder, "key") === key;
    const matchingParent = parent ? journalParentId(folder) === parentId : !journalParentId(folder);
    return folder.type === "JournalEntry" && matchingKey && matchingParent;
  });
}

async function getOrCreateJournalFolder(name, key, parent = null) {
  let existing = findJournalFolder(key, parent);
  if (!existing) {
    const parentId = parent?.id || null;
    existing = game.folders?.find((folder) => {
      const matchingName = folder.name === name;
      const matchingParent = parent ? journalParentId(folder) === parentId : !journalParentId(folder);
      return folder.type === "JournalEntry" && matchingName && matchingParent;
    });
  }
  if (!existing && parent) {
    existing = game.folders?.find((folder) => {
      const matchingKey = getJournalFlag(folder, "key") === key;
      const matchingName = folder.name === name;
      return folder.type === "JournalEntry" && (matchingKey || matchingName);
    });
  }
  if (existing) {
    const update = {};
    if (parent && journalParentId(existing) !== parent.id) update.folder = parent.id;
    if (!parent && journalParentId(existing)) update.folder = null;
    if (getJournalFlag(existing, "key") !== key || !getJournalFlag(existing, "archive")) {
      update.flags = {
        [MODULE_ID]: {
          archive: true,
          key
        }
      };
    }
    if (Object.keys(update).length) {
      await existing.update({
        ...update
      });
    }
    return existing;
  }
  return Folder.create({
    name,
    type: "JournalEntry",
    folder: parent?.id || null,
    sorting: "a",
    flags: {
      [MODULE_ID]: {
        archive: true,
        key
      }
    }
  });
}

async function mergeDuplicateJournalFolders(target, duplicates) {
  for (const duplicate of duplicates) {
    if (!duplicate || duplicate.id === target.id) continue;
    const entries = game.journal?.filter((entry) => journalParentId(entry) === duplicate.id) || [];
    for (const entry of entries) {
      await entry.update({ folder: target.id });
    }
    const childFolders = game.folders?.filter((folder) => folder.type === "JournalEntry" && journalParentId(folder) === duplicate.id) || [];
    for (const child of childFolders) {
      await child.update({ folder: target.id });
    }
    await duplicate.delete();
  }
}

async function repairVitalQuestJournalFolders(folders) {
  const allDefinitions = [
    JOURNAL_ARCHIVE.root,
    ...JOURNAL_ARCHIVE.folders,
    { key: "student-pcs", name: "Player Characters" },
    { key: "student-npcs", name: "Students" },
    { key: "npcs", name: "NPCs" },
    { key: "pcs", name: "Player Characters" },
    ...STUDENT_COLLEGE_FOLDERS
  ];
  const rootIds = new Set(
    (game.folders?.filter((folder) => folder.type === "JournalEntry" && folder.name === JOURNAL_ARCHIVE.root.name) || [])
      .map((folder) => folder.id)
  );
  for (const definition of allDefinitions) {
    const target = folders[definition.key];
    if (!target) continue;
    const duplicates = game.folders?.filter((folder) => {
      if (folder.type !== "JournalEntry" || folder.id === target.id) return false;
      const parentId = journalParentId(folder);
      const isInVitalQuestArea = definition.key === JOURNAL_ARCHIVE.root.key
        ? !parentId
        : !parentId || parentId === folders.root.id || rootIds.has(parentId);
      if (!isInVitalQuestArea) return false;
      return getJournalFlag(folder, "key") === definition.key || folder.name === definition.name;
    }) || [];
    await mergeDuplicateJournalFolders(target, duplicates);
  }
}

async function getVitalQuestJournalFolders() {
  const root = await getOrCreateJournalFolder(JOURNAL_ARCHIVE.root.name, JOURNAL_ARCHIVE.root.key);
  const folders = { root };
  for (const folder of JOURNAL_ARCHIVE.folders) {
    folders[folder.key] = await getOrCreateJournalFolder(folder.name, folder.key, root);
  }
  folders.studentPcs = await getOrCreateJournalFolder("Player Characters", "student-pcs", folders.students);
  folders.studentNpcs = await getOrCreateJournalFolder("Students", "student-npcs", folders.students);
  folders.pcs = folders.studentPcs;
  folders.npcs = folders.studentNpcs;
  folders.studentColleges = {};
  for (const collegeFolder of STUDENT_COLLEGE_FOLDERS) {
    folders.studentColleges[collegeFolder.collegeKey] = await getOrCreateJournalFolder(
      collegeFolder.name,
      collegeFolder.key,
      folders.studentNpcs
    );
  }
  await repairVitalQuestJournalFolders(folders);
  return folders;
}

function findJournalEntryByKey(journalKey) {
  return game.journal?.find((entry) => getJournalFlag(entry, "journalKey") === journalKey);
}

function getJournalFolderKey(document) {
  const folder = document?.folder;
  return folder ? getJournalFlag(folder, "key") : "";
}

function isStudentJournalFolderKey(key) {
  return key === "student-pcs" ||
    key === "student-npcs" ||
    key === "pcs" ||
    key === "npcs" ||
    key?.startsWith("student-college-");
}

function collegeLabelForStudentFolderKey(key) {
  const folder = STUDENT_COLLEGE_FOLDERS.find((entry) => entry.key === key);
  return folder?.collegeKey && folder.collegeKey !== "unassigned"
    ? STRIXHAVEN_COLLEGES[folder.collegeKey]?.label || folder.name
    : "";
}

function isVitalQuestArchiveFolder(document) {
  const key = getJournalFolderKey(document);
  return JOURNAL_ARCHIVE.folders.some((folder) => folder.key === key) ||
    key === JOURNAL_ARCHIVE.root.key ||
    isStudentJournalFolderKey(key);
}

function displayFieldForKind(kind) {
  return kind === "story" ? "title" : "name";
}

function collectionForJournalKind(kind) {
  return {
    student: "students",
    faculty: "faculty",
    class: "classes",
    exam: "exams",
    club: "clubs",
    job: "jobs",
    story: "quests"
  }[kind] || "";
}

function kindForJournalFolderKey(key) {
  if (isStudentJournalFolderKey(key)) return "student";
  return {
    npcs: "student",
    pcs: "student",
    faculty: "faculty",
    classes: "class",
    exams: "exam",
    clubs: "club",
    jobs: "job",
    story: "story"
  }[key] || "";
}

function defaultRecordForJournalKind(kind, name, entryId = "") {
  if (kind === "student") {
    return {
      ...defaultStudent(name, "npc"),
      id: entryId ? `journal-${entryId}` : foundry.utils.randomID(),
      journalEntryId: entryId
    };
  }
  if (kind === "faculty") {
    return {
      ...defaultFaculty(name),
      id: entryId ? `journal-${entryId}` : foundry.utils.randomID(),
      journalEntryId: entryId
    };
  }
  if (kind === "class") return { id: entryId ? `journal-${entryId}` : foundry.utils.randomID(), journalEntryId: entryId, name, professor: "", college: "", schedule: "", status: "Active", notes: "" };
  if (kind === "exam") return { id: entryId ? `journal-${entryId}` : foundry.utils.randomID(), journalEntryId: entryId, name, className: "", due: "", status: "Upcoming", stakes: "", notes: "" };
  if (kind === "club") return { id: entryId ? `journal-${entryId}` : foundry.utils.randomID(), journalEntryId: entryId, name, skills: "", skillOne: "", skillTwo: "", npcMembers: "", description: "", members: "", meeting: "", overseerFacultyId: "", overseer: "", studentIds: [], relationshipNotes: "", notes: "" };
  if (kind === "job") return { id: entryId ? `journal-${entryId}` : foundry.utils.randomID(), journalEntryId: entryId, name, positions: "", coworker: "", description: "", wageGold: 5, wageSilver: 0, wageCopper: 0, studentIds: [], relationshipNotes: "", notes: "" };
  if (kind === "story") return { id: entryId ? `journal-${entryId}` : foundry.utils.randomID(), journalEntryId: entryId, title: name, type: "", status: "Active", notes: "" };
  return null;
}

async function upsertJournalEntry(folder, journalKey, name, content, data, kind) {
  let entry = findJournalEntryByKey(journalKey);
  const flags = {
    [MODULE_ID]: {
      archive: true,
      journalKey,
      kind,
      data,
      updatedAt: new Date().toISOString()
    }
  };
  if (!entry) {
    entry = await JournalEntry.create({
      name,
      folder: folder?.id || null,
      flags
    });
  } else {
    await entry.update({
      name,
      folder: folder?.id || null,
      flags
    });
  }

  const pageData = {
    name: "Vital Quest Record",
    type: "text",
    text: {
      content,
      format: journalTextFormat()
    }
  };
  const existingPage = entry.pages?.find((page) => page.name === pageData.name);
  if (existingPage) await existingPage.update(pageData);
  else await entry.createEmbeddedDocuments("JournalEntryPage", [pageData]);
  return entry;
}

function recordListHtml(items) {
  const filtered = items.filter((item) => String(item || "").trim());
  if (!filtered.length) return "<p><em>Nothing recorded.</em></p>";
  return `<ul>${filtered.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function studentJournalHtml(student) {
  const relationshipRows = (student.relationshipLinks || []).map((link) => {
    const target = link.targetActorId ? game.actors?.get(link.targetActorId) : null;
    return `${target?.name || "Unlinked sheet"} — ${link.status || relationshipStatusFromScore(link.score)} (${link.score || 0}): ${link.notes || "No notes"}`;
  });
  return `
    <h1>${escapeHtml(student.name)}</h1>
    <p><strong>Vital Quest Student Record.</strong> Mechanical character data remains on the linked Foundry actor sheet.</p>
    <p><strong>Actor Sheet:</strong> ${actorLink(student.actorId)}</p>
    <h2>Enrollment</h2>
    ${recordListHtml([
      `Type: ${student.type === "player" ? "Player Character" : "Student NPC"}`,
      `Player: ${student.player || "—"}`,
      `College: ${student.college || "—"}`,
      `Year: ${student.year || "—"}`,
      `Dorm Name: ${student.dormName || "—"}`,
      `Dorm Number: ${student.dorm || "—"}`
    ])}
    <h2>Academic Status</h2>
    ${recordListHtml([
      `Standing: ${student.academicStanding || "—"}`,
      `Standing Score: ${student.academicStandingScore ?? "—"}`,
      `Attendance: ${student.attendance || "—"}`,
      `Classes: ${student.currentClasses || "—"}`,
      `Homework: ${student.homework || "—"}`,
      `Exams: ${student.exams || "—"}`
    ])}
    <h2>School Life</h2>
    ${recordListHtml([
      `Clubs: ${student.clubs || "—"}`,
      `Job: ${student.job || "—"}`,
      `Leadership: ${student.leadership || "—"}`,
      `Reputation: ${student.reputation || "—"}`,
      `Daily Schedule: ${student.dailySchedule || "—"}`,
      `Discipline: ${student.discipline || "—"}`,
      `Relationships: ${student.relationships || "—"}`,
      `Active Events: ${student.activeEvents || "—"}`,
      `Achievements: ${student.achievements || "—"}`,
      `Semester Progress: ${student.semesterProgress || "—"}`
    ])}
    <h2>Relationship Web</h2>
    ${recordListHtml(relationshipRows)}
    <h2>Private DM Notes</h2>
    <p>${escapeHtml(student.privateNotes || "No private notes recorded.")}</p>
  `;
}

function facultyJournalHtml(faculty) {
  return `
    <h1>${escapeHtml(faculty.name)}</h1>
    <p><strong>Vital Quest Faculty Record.</strong> If this professor or staff member has an Actor sheet, use the link below for sheet data.</p>
    <p><strong>Actor Sheet:</strong> ${actorLink(faculty.actorId)}</p>
    ${recordListHtml([
      `Role: ${faculty.role || "—"}`,
      `College/Department: ${faculty.college || "—"}`,
      `Office: ${faculty.office || "—"}`,
      `Schedule: ${faculty.schedule || "—"}`,
      `Status: ${faculty.status || "—"}`,
      `Notes: ${faculty.notes || "—"}`
    ])}
  `;
}

function rowJournalHtml(title, rows) {
  return `
    <h1>${escapeHtml(title)}</h1>
    ${recordListHtml(rows)}
  `;
}

function overviewJournalHtml(data) {
  return `
    <h1>Vital Quest Campaign Overview</h1>
    <h2>Calendar</h2>
    ${recordListHtml([
      `Term: ${data.calendar.term}`,
      `Week: ${data.calendar.week}`,
      `Day: ${data.calendar.day}`,
      `Time: ${data.calendar.timeOfDay}`,
      `Source: ${data.calendar.source}`,
      `Notes: ${data.calendar.notes}`
    ])}
    <h2>Campaign Focus</h2>
    ${recordListHtml([
      `College Focus: ${data.focus.college}`,
      `Current Arc: ${data.focus.currentArc}`,
      `Active Mystery: ${data.focus.activeMystery || "—"}`
    ])}
    <h2>Generated Table Notes</h2>
    ${recordListHtml([
      `Campus Event: ${data.generated.event || "—"}`,
      `Rumor: ${data.generated.rumor || "—"}`
    ])}
  `;
}

async function setupVitalQuestJournalArchive() {
  await getVitalQuestJournalFolders();
}

function expectedJournalKeysForData(data) {
  const keys = new Set(["overview:campaign"]);
  for (const student of data.students || []) keys.add(`student:${student.id}`);
  for (const faculty of data.faculty || []) keys.add(`faculty:${faculty.id}`);
  for (const classRecord of data.classes || []) keys.add(`class:${classRecord.id}`);
  for (const exam of data.exams || []) keys.add(`exam:${exam.id}`);
  for (const club of data.clubs || []) keys.add(`club:${club.id}`);
  for (const job of data.jobs || []) keys.add(`job:${job.id}`);
  for (const quest of data.quests || []) keys.add(`story:${quest.id}`);
  return keys;
}

async function pruneStaleJournalRecords(expectedKeys) {
  const prunableKinds = new Set(["student", "faculty", "class", "exam", "club", "job", "story"]);
  const entries = game.journal?.filter((entry) => {
    const key = getJournalFlag(entry, "journalKey");
    const kind = getJournalFlag(entry, "kind");
    return getJournalFlag(entry, "archive") && key && prunableKinds.has(kind) && !expectedKeys.has(key);
  }) || [];
  for (const entry of entries) {
    await entry.delete();
  }
}

async function syncVitalQuestToJournal(data) {
  const folders = await getVitalQuestJournalFolders();
  const playerActors = getPlayerCharacterActors();
  playerActors.forEach((actor) => schoolOverlayForActor(data, actor));
  const expectedKeys = expectedJournalKeysForData(data);
  await upsertJournalEntry(
    folders.overview,
    "overview:campaign",
    "Campaign Overview",
    overviewJournalHtml(data),
    { calendar: data.calendar, focus: data.focus, generated: data.generated },
    "overview"
  );

  for (const student of data.students) {
    const actor = student.actorId ? game.actors?.get(student.actorId) : null;
    const displayName = actor?.name || student.name || "Student";
    const collegeKey = normalizeCollegeKey(student.college);
    const studentFolder = student.type === "player"
      ? folders.studentPcs
      : folders.studentColleges[collegeKey] || folders.studentColleges.unassigned || folders.studentNpcs;
    await upsertJournalEntry(
      studentFolder,
      `student:${student.id}`,
      displayName,
      studentJournalHtml({ ...student, name: displayName }),
      { ...student, name: displayName, actorUuid: actor?.uuid || "" },
      "student"
    );
  }

  for (const faculty of data.faculty || []) {
    const actor = faculty.actorId ? game.actors?.get(faculty.actorId) : null;
    const displayName = actor?.name || faculty.name || "Faculty";
    await upsertJournalEntry(
      folders.faculty,
      `faculty:${faculty.id}`,
      displayName,
      facultyJournalHtml({ ...faculty, name: displayName }),
      { ...faculty, name: displayName, actorUuid: actor?.uuid || "" },
      "faculty"
    );
  }

  for (const classRecord of data.classes || []) {
    await upsertJournalEntry(
      folders.classes,
      `class:${classRecord.id}`,
      classRecord.name || "Class",
      rowJournalHtml(classRecord.name || "Class", [
        `Professor: ${classRecord.professor || "—"}`,
        `College: ${classRecord.college || "—"}`,
        `Schedule: ${classRecord.schedule || "—"}`,
        `Status: ${classRecord.status || "—"}`,
        `Notes: ${classRecord.notes || "—"}`
      ]),
      classRecord,
      "class"
    );
  }

  for (const exam of data.exams || []) {
    await upsertJournalEntry(
      folders.exams,
      `exam:${exam.id}`,
      exam.name || "Exam",
      rowJournalHtml(exam.name || "Exam", [
        `Class: ${exam.className || "—"}`,
        `Due: ${exam.due || "—"}`,
        `Status: ${exam.status || "—"}`,
        `Stakes: ${exam.stakes || "—"}`,
        `Notes: ${exam.notes || "—"}`
      ]),
      exam,
      "exam"
    );
  }

  for (const club of data.clubs || []) {
    await upsertJournalEntry(
      folders.clubs,
      `club:${club.id}`,
      club.name || "Club",
      rowJournalHtml(club.name || "Club", [
        `Skills: ${club.skills || "—"}`,
        `Faculty Overseer: ${facultyNameById(data.faculty || [], club.overseerFacultyId || "") || club.overseer || "—"}`,
        `NPC Members: ${club.npcMembers || club.members || "—"}`,
        `Student Members: ${(club.studentIds || []).length}`,
        `Meeting: ${club.meeting || "—"}`,
        `Description: ${club.description || "—"}`,
        `Relationship Notes: ${club.relationshipNotes || "—"}`,
        `Notes: ${club.notes || "—"}`
      ]),
      club,
      "club"
    );
  }

  for (const job of data.jobs || []) {
    await upsertJournalEntry(
      folders.jobs,
      `job:${job.id}`,
      job.name || "Campus Job",
      rowJournalHtml(job.name || "Campus Job", [
        `Wage: ${formatJobWage(job)}`,
        `Positions: ${job.positions || "â€”"}`,
        `Coworker: ${job.coworker || "â€”"}`,
        `Student Employees: ${(job.studentIds || []).length}`,
        `Description: ${job.description || "â€”"}`,
        `Relationship Notes: ${job.relationshipNotes || "â€”"}`,
        `Notes: ${job.notes || "â€”"}`
      ]),
      job,
      "job"
    );
  }

  for (const quest of data.quests || []) {
    await upsertJournalEntry(
      folders.story,
      `story:${quest.id}`,
      quest.title || "Campaign Thread",
      rowJournalHtml(quest.title || "Campaign Thread", [
        `Type: ${quest.type || "—"}`,
        `Status: ${quest.status || "—"}`,
        `Notes: ${quest.notes || "—"}`
      ]),
      quest,
      "story"
    );
  }
  await pruneStaleJournalRecords(expectedKeys);
}

function mergeById(currentRows = [], journalRows = []) {
  const rows = [...currentRows];
  for (const row of journalRows) {
    if (!row?.id) continue;
    const index = rows.findIndex((entry) => entry.id === row.id);
    if (index >= 0) rows[index] = { ...rows[index], ...row };
    else rows.push(row);
  }
  return rows;
}

async function ensureActorForJournalRecord(entry, kind, record) {
  if (!["student", "faculty"].includes(kind) || record.actorId) return record;
  if (record.type === "player") return record;
  const name = record.name || entry.name || (kind === "faculty" ? "New Faculty" : "New Student NPC");
  const actor = await Actor.create({
    name,
    type: "npc",
    flags: {
      [MODULE_ID]: {
        schoolCategory: kind
      }
    }
  }).catch((error) => {
    console.error("Vital Quest could not create an actor from a Journal record:", error);
    return null;
  });
  if (!actor) return record;
  record.actorId = actor.id;
  record.actorUuid = actor.uuid;
  vitalQuestJournalLock = true;
  try {
    await entry.update({
      flags: {
        [MODULE_ID]: {
          archive: true,
          journalKey: `${kind}:${record.id}`,
          kind,
          data: record,
          updatedAt: new Date().toISOString()
        }
      }
    });
  } finally {
    vitalQuestJournalLock = false;
  }
  return record;
}

async function pullVitalQuestFromJournal(data) {
  const entries = game.journal?.filter((entry) => {
    return (getJournalFlag(entry, "archive") && getJournalFlag(entry, "data")) || isVitalQuestArchiveFolder(entry);
  }) || [];
  const pulled = {
    students: [],
    faculty: [],
    classes: [],
    exams: [],
    clubs: [],
    jobs: [],
    quests: []
  };

  for (const entry of entries) {
    const folderKey = getJournalFolderKey(entry);
    const kind = getJournalFlag(entry, "kind") || kindForJournalFolderKey(folderKey);
    const flaggedData = getJournalFlag(entry, "data");
    const record = duplicateData(flaggedData) || defaultRecordForJournalKind(kind, entry.name, entry.id);
    if (!record) continue;
    const displayField = displayFieldForKind(kind);
    record[displayField] = entry.name || record[displayField];
    record.journalEntryId = record.journalEntryId || entry.id;
    if (kind === "student" && folderKey === "student-pcs") record.type = "player";
    if (kind === "student" && folderKey !== "student-pcs") record.type = record.type === "player" ? "player" : "npc";
    if (kind === "student" && folderKey?.startsWith("student-college-") && (!flaggedData || !record.college)) {
      record.college = collegeLabelForStudentFolderKey(folderKey) || record.college;
    }
    await ensureActorForJournalRecord(entry, kind, record);
    if (record.actorUuid && !record.actorId) {
      const actor = await fromUuid(record.actorUuid).catch(() => null);
      if (actor?.id) record.actorId = actor.id;
    }
    if (kind === "student") pulled.students.push(record);
    if (kind === "faculty") pulled.faculty.push(record);
    if (kind === "class") pulled.classes.push(record);
    if (kind === "exam") pulled.exams.push(record);
    if (kind === "club") pulled.clubs.push(record);
    if (kind === "job") pulled.jobs.push(record);
    if (kind === "story") pulled.quests.push(record);
    if (kind === "overview") {
      data.calendar = { ...data.calendar, ...(record.calendar || {}) };
      data.focus = { ...data.focus, ...(record.focus || {}) };
      data.generated = { ...data.generated, ...(record.generated || {}) };
    }
  }

  data.students = mergeById(data.students, pulled.students);
  data.faculty = mergeById(data.faculty || [], pulled.faculty);
  data.classes = mergeById(data.classes || [], pulled.classes);
  data.exams = mergeById(data.exams || [], pulled.exams);
  data.clubs = mergeById(data.clubs || [], pulled.clubs);
  data.jobs = mergeById(data.jobs || [], pulled.jobs);
  data.quests = mergeById(data.quests || [], pulled.quests);
  return normalizeCampaignData(data);
}

function removeJournalRecordFromCampaignData(data, entry) {
  const kind = getJournalFlag(entry, "kind") || kindForJournalFolderKey(getJournalFolderKey(entry));
  const collection = collectionForJournalKind(kind);
  if (!collection || !Array.isArray(data[collection])) return false;
  const record = getJournalFlag(entry, "data");
  const recordId = record?.id || `journal-${entry.id}`;
  const before = data[collection].length;
  data[collection] = data[collection].filter((item) => item.id !== recordId && item.journalEntryId !== entry.id);
  return data[collection].length !== before;
}

async function refreshVitalQuestFromJournal({ deletedEntry = null } = {}) {
  if (!game.user?.isGM || vitalQuestJournalLock) return;
  clearTimeout(vitalQuestRefreshTimer);
  vitalQuestRefreshTimer = setTimeout(async () => {
    try {
      const data = await getCampaignData();
      let updated = data;
      if (deletedEntry) {
        removeJournalRecordFromCampaignData(updated, deletedEntry);
      } else {
        updated = await pullVitalQuestFromJournal(updated);
      }
      await setCampaignData(updated);
      renderOpenVitalQuestApps();
    } catch (error) {
      console.error("Vital Quest live Journal refresh failed:", error);
      ui.notifications?.warn("Vital Quest could not refresh from the Journal archive. See console for details.");
    }
  }, 250);
}

function scheduleVitalQuestJournalWrite() {
  if (!game.user?.isGM || vitalQuestJournalLock) return;
  clearTimeout(vitalQuestJournalWriteTimer);
  vitalQuestJournalWriteTimer = setTimeout(async () => {
    if (vitalQuestJournalLock) return;
    vitalQuestJournalLock = true;
    try {
      const data = await getCampaignData();
      await syncVitalQuestToJournal(data);
    } catch (error) {
      console.error("Vital Quest live Journal write failed:", error);
      ui.notifications?.warn("Vital Quest could not update the Journal archive. See console for details.");
    } finally {
      vitalQuestJournalLock = false;
    }
  }, 500);
}

function renderOpenVitalQuestApps() {
  Object.values(ui.windows || {}).forEach((app) => {
    if (app instanceof StrixhavenCampaignManager || app instanceof VitalQuestStudentCard) {
      app._captureScrollPosition?.();
      app.render(false);
    }
  });
}

function getSimpleCalendarApi() {
  return globalThis.SimpleCalendar?.api ||
    game.modules.get("simple-calendar-reborn")?.api ||
    game.modules.get("foundryvtt-simple-calendar")?.api ||
    game.modules.get("simple-calendar")?.api ||
    null;
}

function normalizeCalendarPart(part) {
  if (part === null || typeof part === "undefined") return "";
  if (typeof part === "string" || typeof part === "number") return String(part);
  return String(part.name || part.label || part.numericRepresentation || part.value || part.id || "");
}

function simpleCalendarDisplayDay(date = {}) {
  const explicit = date.dayDisplay ??
    date.dayNumber ??
    date.dayOfMonth ??
    date.numericRepresentation ??
    date.display?.day ??
    date.display?.date;
  if (explicit !== null && typeof explicit !== "undefined" && explicit !== "") return normalizeCalendarPart(explicit);
  if (typeof date.day === "number") return String(date.day + 1);
  return normalizeCalendarPart(date.day);
}

function isUsefulCalendarDisplayName(value) {
  const label = normalizeCalendarPart(value).trim();
  return Boolean(label && !/^\d+$/.test(label) && !/^day\s+\d+$/i.test(label));
}

function simpleCalendarMonthName(date = {}, api = null) {
  const currentMonth = safeCalendarCall(() => api?.getCurrentMonth?.(), null) || {};
  const months = safeCalendarCall(() => api?.getAllMonths?.(), []) || [];
  const monthIndex = typeof date.month === "number" ? date.month : Number(date.month ?? currentMonth.numericRepresentation ?? 0);
  const fromIndex = months[monthIndex] || {};
  const candidates = [
    date.monthName,
    date.monthDisplay,
    date.monthLabel,
    currentMonth.name,
    currentMonth.label,
    fromIndex.name,
    fromIndex.label
  ];
  for (const candidate of candidates) {
    if (isUsefulCalendarDisplayName(candidate)) return normalizeCalendarPart(candidate);
  }
  return normalizeCalendarPart(date.monthName || currentMonth.name || date.month);
}

function simpleCalendarYearName(date = {}, api = null) {
  const currentYear = safeCalendarCall(() => api?.getCurrentYear?.(), null) || {};
  return normalizeCalendarPart(date.yearName || date.yearDisplay || currentYear.name || currentYear.numericRepresentation || date.year);
}

function simpleCalendarDayTitle(date = {}) {
  const weekday = date.weekday || date.weekDay || date.dayOfWeek;
  const candidates = [date.weekdayName, date.weekDayName, date.dayName, weekday];
  for (const candidate of candidates) {
    if (isUsefulCalendarDisplayName(candidate)) return normalizeCalendarPart(candidate);
  }
  return `Day ${simpleCalendarDisplayDay(date)}`;
}

function simpleCalendarFormattedTime(dateTime = {}, fallback = "") {
  const api = getSimpleCalendarApi();
  const formatted = safeCalendarCall(() => api?.formatDateTime?.(dateTime), null);
  if (typeof formatted === "string") return normalizeCalendarPart(formatted) || fallback;
  return normalizeCalendarPart(formatted?.time || "") || fallback;
}

function simpleCalendarFormattedDate(dateTime = {}, fallback = "") {
  const api = getSimpleCalendarApi();
  const formatted = safeCalendarCall(() => api?.formatDateTime?.(dateTime), null);
  if (typeof formatted === "string") return normalizeCalendarPart(formatted) || fallback;
  return normalizeCalendarPart(formatted?.date || "") || fallback;
}

function simpleCalendarCurrentFormattedTime(fallback = "") {
  const api = getSimpleCalendarApi();
  const display = safeCalendarCall(() => api?.currentDateTimeDisplay?.(), null);
  if (display?.time) return normalizeCalendarPart(display.time) || fallback;
  const current = safeCalendarCall(() => api?.currentDateTime?.(), null);
  if (current) return simpleCalendarFormattedTime(current, fallback);
  return fallback;
}

function simpleCalendarCurrentFormattedDate(fallback = "") {
  const api = getSimpleCalendarApi();
  const display = safeCalendarCall(() => api?.currentDateTimeDisplay?.(), null);
  if (display?.date) return normalizeCalendarPart(display.date) || fallback;
  const current = safeCalendarCall(() => api?.currentDateTime?.(), null);
  if (current) return simpleCalendarFormattedDate(current, fallback);
  return fallback;
}

function dateTimeForSimpleCalendar(date = {}, timeValue = "") {
  const { hour, minute } = timeStringToParts(timeValue || "8:00 AM");
  return {
    year: Number(date.year || 0),
    month: Number(date.month || 0),
    day: Number(date.day || 0),
    hour,
    minute,
    seconds: 0
  };
}

function readSimpleCalendarDate() {
  const api = getSimpleCalendarApi();
  if (!api) return null;

  let current = null;
  const attempts = [
    () => api.currentDateTime?.(),
    () => api.currentDate?.(),
    () => api.getCurrentDateTime?.(),
    () => api.getCurrentDate?.(),
    () => api.timestampToDate?.(api.timestamp?.())
  ];

  for (const attempt of attempts) {
    try {
      const value = attempt();
      if (value) {
        current = value;
        break;
      }
    } catch (error) {
      console.debug("Vital Quest could not read one Simple Calendar date shape:", error);
    }
  }

  if (!current) return {
    connected: true,
    source: "Simple Calendar Reborn",
    warning: "Simple Calendar was detected, but its current date could not be read."
  };

  const date = current.date || current;
  const time = current.time || current;
  const monthName = simpleCalendarMonthName(date, api);
  const year = simpleCalendarYearName(date, api);
  const displayDay = simpleCalendarDisplayDay(date);
  const hour = typeof time.hour === "number" ? time.hour : null;
  const minute = typeof time.minute === "number" ? time.minute : typeof time.minutes === "number" ? time.minutes : null;
  const second = typeof time.second === "number" ? time.second : typeof time.seconds === "number" ? time.seconds : null;
  const timeParts = [
    hour !== null ? String(hour).padStart(2, "0") : "",
    minute !== null ? String(minute).padStart(2, "0") : "",
    second !== null ? String(second).padStart(2, "0") : ""
  ].filter(Boolean);
  const fallbackDate = [monthName, displayDay, year].filter(Boolean).join(" ");
  const fallbackTime = timeParts.length ? timeParts.join(":") : normalizeCalendarPart(time.display || time.time || "");

  return {
    connected: true,
    source: "Simple Calendar Reborn",
    raw: current,
    day: simpleCalendarDayTitle(date),
    dateLabel: simpleCalendarCurrentFormattedDate(fallbackDate),
    timeLabel: simpleCalendarCurrentFormattedTime(fallbackTime),
    month: monthName,
    year,
    timestamp: typeof current.timestamp === "number" ? current.timestamp : null
  };
}

function syncCalendarDisplay(data) {
  const simpleCalendar = readSimpleCalendarDate();
  data.integrations = data.integrations || {};
  data.integrations.simpleCalendar = simpleCalendar || {
    connected: false,
    source: "Vital Quest fallback calendar"
  };

  if (simpleCalendar?.connected && !simpleCalendar.warning) {
    data.calendar.day = simpleCalendar.day || data.calendar.day;
    data.calendar.timeOfDay = simpleCalendar.timeLabel || data.calendar.timeOfDay;
    data.calendar.dateLabel = simpleCalendar.dateLabel || "";
    data.calendar.source = simpleCalendar.source;
  } else {
    data.calendar.source = "Vital Quest fallback calendar";
  }

  return data;
}

function normalizeScheduleToken(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function parseTimeToMinutes(value) {
  const raw = String(value || "").trim().toLowerCase();
  if (!raw) return null;
  const namedTimes = {
    dawn: 360,
    morning: 480,
    noon: 720,
    afternoon: 780,
    evening: 1080,
    night: 1260
  };
  if (namedTimes[raw] !== undefined) return namedTimes[raw];
  const match = raw.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/);
  if (!match) return null;
  let hour = Number(match[1]);
  const minute = Number(match[2] || 0);
  const period = match[3];
  if (period === "pm" && hour < 12) hour += 12;
  if (period === "am" && hour === 12) hour = 0;
  return (hour * 60) + minute;
}

function scheduleDayDistance(currentDay, itemDay) {
  const currentKey = normalizeScheduleToken(currentDay);
  const itemKey = normalizeScheduleToken(itemDay);
  const currentIndex = SCHOOL_DAY_ORDER.indexOf(currentKey);
  const itemIndex = SCHOOL_DAY_ORDER.indexOf(itemKey);
  if (currentIndex < 0 || itemIndex < 0) return 99;
  return (itemIndex - currentIndex + SCHOOL_DAY_ORDER.length) % SCHOOL_DAY_ORDER.length;
}

function scheduleMatchesDay(scheduleText, day) {
  const schedule = normalizeScheduleToken(scheduleText);
  const dayKey = normalizeScheduleToken(day);
  return Boolean(schedule && dayKey && schedule.includes(dayKey));
}

function normalizeClassRecord(classRecord) {
  classRecord.status = classRecord.status || "Active";
  classRecord.professor = classRecord.professor || "";
  classRecord.college = classRecord.college || "";
  classRecord.term = classRecord.term || "";
  classRecord.startTime = classRecord.startTime || "";
  classRecord.endTime = classRecord.endTime || "";
  classRecord.location = classRecord.location || "";
  classRecord.notes = classRecord.notes || "";
}

function classTimeRange(classRecord = {}) {
  const start = String(classRecord.startTime || "").trim();
  const end = String(classRecord.endTime || "").trim();
  if (start && end) return `${start} - ${end}`;
  if (start) return start;
  if (end) return `Ends ${end}`;
  return "Time pending";
}

function scheduledEventForSource(data, type, sourceId) {
  if (!sourceId) return null;
  return (data.calendarEvents || [])
    .filter((event) => event.type === type && event.sourceId === sourceId)
    .map(calendarEventToPlannerItem)
    .sort((a, b) => {
      const dateSort = a.dateKey.localeCompare(b.dateKey);
      if (dateSort) return dateSort;
      return (a.startMinutes ?? 9999) - (b.startMinutes ?? 9999);
    })[0] || null;
}

function scheduleLabelForSource(data, type, sourceId, fallback = "Date and time pending") {
  const event = scheduledEventForSource(data, type, sourceId);
  return event ? `${event.displayDate} ${TEXT_SEPARATOR} ${event.time}` : fallback;
}

function normalizeClubRecord(club) {
  const official = OFFICIAL_EXTRACURRICULARS.find((entry) => entry.name === club.name);
  const skillSource = club.skills || official?.skills || "";
  const parsedSkills = String(skillSource).split(/\s*,\s*|\s+or\s+/i).map((skill) => skill.trim()).filter(Boolean);
  club.name = club.name || official?.name || "New Extracurricular";
  club.skillOne = club.skillOne || parsedSkills[0] || "";
  club.skillTwo = club.skillTwo || parsedSkills[1] || "";
  club.skills = [club.skillOne, club.skillTwo].filter(Boolean).join(", ");
  club.npcMembers = club.npcMembers || official?.npcMembers || club.members || "";
  club.description = club.description || official?.description || club.notes || "";
  club.meeting = club.meeting || "Start of academic year";
  club.overseerFacultyId = club.overseerFacultyId || "";
  club.overseer = club.overseer || "";
  club.studentIds = Array.isArray(club.studentIds) ? club.studentIds : [];
  club.relationshipNotes = club.relationshipNotes || "";
  club.notes = club.notes || "";
  club.members = club.members || club.npcMembers || "";
}

function ensureOfficialExtracurriculars(data) {
  data.clubs = data.clubs || [];
  const existingNames = new Set(data.clubs.map((club) => club.name));
  for (const official of OFFICIAL_EXTRACURRICULARS) {
    if (existingNames.has(official.name)) continue;
    data.clubs.push({
      id: foundry.utils.randomID(),
      name: official.name,
      skills: official.skills,
      skillOne: official.skills.split(/\s*,\s*|\s+or\s+/i)[0] || "",
      skillTwo: official.skills.split(/\s*,\s*|\s+or\s+/i)[1] || "",
      npcMembers: official.npcMembers,
      description: official.description,
      meeting: "Start of academic year",
      overseerFacultyId: "",
      overseer: "",
      studentIds: [],
      relationshipNotes: "",
      notes: ""
    });
  }
}

function normalizeCampusLocation(location) {
  location.id = location.id || foundry.utils.randomID();
  location.name = location.name || "New Campus Location";
  location.type = location.type || "Campus Location";
  location.college = location.college || "General / Unassigned";
  location.sceneId = location.sceneId || "";
  location.description = location.description || "";
  location.notableNpc = location.notableNpc || "";
  location.secrets = location.secrets || "";
  location.notes = location.notes || "";
}

function normalizeJobRecord(job) {
  const official = OFFICIAL_JOBS.find((entry) => entry.name === job.name);
  job.name = job.name || official?.name || "New Campus Job";
  job.positions = job.positions || official?.positions || "";
  job.coworker = job.coworker || official?.coworker || "";
  job.description = job.description || official?.description || "";
  job.wageGold = Math.max(0, Number(job.wageGold ?? 5));
  job.wageSilver = Math.max(0, Number(job.wageSilver ?? 0));
  job.wageCopper = Math.max(0, Number(job.wageCopper ?? 0));
  job.studentIds = Array.isArray(job.studentIds) ? job.studentIds : [];
  job.relationshipNotes = job.relationshipNotes || "";
  job.notes = job.notes || "";
}

function formatJobWage(job) {
  const parts = [
    Number(job.wageGold || 0) ? `${Number(job.wageGold || 0)} gp` : "",
    Number(job.wageSilver || 0) ? `${Number(job.wageSilver || 0)} sp` : "",
    Number(job.wageCopper || 0) ? `${Number(job.wageCopper || 0)} cp` : ""
  ].filter(Boolean);
  return parts.length ? `${parts.join(" ")} per week` : "No weekly wage";
}

function ensureOfficialJobs(data) {
  data.jobs = data.jobs || [];
  const existingNames = new Set(data.jobs.map((job) => job.name));
  for (const official of OFFICIAL_JOBS) {
    if (existingNames.has(official.name)) continue;
    data.jobs.push({
      id: foundry.utils.randomID(),
      name: official.name,
      positions: official.positions,
      coworker: official.coworker,
      description: official.description,
      wageGold: 5,
      wageSilver: 0,
      wageCopper: 0,
      studentIds: [],
      relationshipNotes: "",
      notes: ""
    });
  }
}

async function syncStudentExtracurricularFlags(data, studentId) {
  const student = data.students?.find((entry) => entry.id === studentId);
  const actorId = student?.actorId || (String(studentId).startsWith("actor-") ? String(studentId).replace("actor-", "") : "");
  const actor = actorId ? game.actors?.get(actorId) : null;
  const memberships = (data.clubs || [])
    .filter((club) => (club.studentIds || []).includes(studentId))
    .map((club) => ({
      id: club.id,
      name: club.name,
      skillOne: club.skillOne || "",
      skillTwo: club.skillTwo || "",
      skills: [club.skillOne, club.skillTwo].filter(Boolean),
      overseer: facultyNameById(data.faculty || [], club.overseerFacultyId || "") || club.overseer || ""
    }));
  if (student) student.clubs = memberships.map((club) => club.name).join("; ");
  if (actor) await actor.setFlag(MODULE_ID, "extracurriculars", memberships);
}

async function syncStudentJobFlags(data, studentId) {
  const student = data.students?.find((entry) => entry.id === studentId);
  const actorId = student?.actorId || (String(studentId).startsWith("actor-") ? String(studentId).replace("actor-", "") : "");
  const actor = actorId ? game.actors?.get(actorId) : null;
  const job = (data.jobs || []).find((entry) => (entry.studentIds || []).includes(studentId));
  const jobRecord = job ? {
    id: job.id,
    name: job.name,
    wage: formatJobWage(job),
    wageGold: Number(job.wageGold || 0),
    wageSilver: Number(job.wageSilver || 0),
    wageCopper: Number(job.wageCopper || 0),
    positions: job.positions || "",
    coworker: job.coworker || ""
  } : null;
  if (student) student.job = jobRecord?.name || "";
  if (actor) await actor.setFlag(MODULE_ID, "campusJob", jobRecord);
}

function buildSchoolAgenda(data) {
  const currentDay = data.calendar?.day || "";
  const currentMinutes = parseTimeToMinutes(data.calendar?.timeOfDay);
  const items = [];

  for (const classRecord of data.classes || []) {
    normalizeClassRecord(classRecord);
    items.push({
      type: "Class",
      icon: "fa-chalkboard-user",
      title: classRecord.name || "Unnamed Class",
      subtitle: [classRecord.professor, classRecord.location].filter(Boolean).join(" • "),
      day: "Scheduled on Calendar",
      time: classTimeRange(classRecord),
      startMinutes: parseTimeToMinutes(classRecord.startTime),
      status: classRecord.status || "Active",
      source: "Classes"
    });
  }

  for (const exam of data.exams || []) {
    items.push({
      type: "Exam",
      icon: "fa-file-pen",
      title: exam.name || "Unnamed Exam",
      subtitle: [exam.className, exam.stakes].filter(Boolean).join(" • "),
      day: exam.due || "Unscheduled",
      time: "Due",
      startMinutes: null,
      status: exam.status || "Upcoming",
      source: "Exams"
    });
  }

  for (const club of data.clubs || []) {
    items.push({
      type: "Club",
      icon: "fa-people-group",
      title: club.name || "Unnamed Club",
      subtitle: club.members || "",
      day: club.meeting || "Unscheduled",
      time: "Meeting",
      startMinutes: null,
      status: "Club",
      source: "Clubs"
    });
  }

  for (const job of data.jobs || []) {
    items.push({
      type: "Job",
      icon: "fa-coins",
      title: job.name || "Campus Job",
      subtitle: [job.coworker, formatJobWage(job)].filter(Boolean).join(TEXT_SEPARATOR),
      day: "Scheduled in Calendar",
      time: "Shift",
      startMinutes: null,
      status: "Job",
      source: "Jobs"
    });
  }

  const today = items
    .filter((item) => scheduleMatchesDay(item.day, currentDay))
    .sort((a, b) => (a.startMinutes ?? 9999) - (b.startMinutes ?? 9999));

  const upcoming = items
    .filter((item) => !scheduleMatchesDay(item.day, currentDay) || (currentMinutes !== null && item.startMinutes !== null && item.startMinutes >= currentMinutes))
    .sort((a, b) => {
      const daySort = scheduleDayDistance(currentDay, a.day) - scheduleDayDistance(currentDay, b.day);
      if (daySort) return daySort;
      return (a.startMinutes ?? 9999) - (b.startMinutes ?? 9999);
    })
    .slice(0, 8);

  return {
    currentDay,
    currentTime: data.calendar?.timeOfDay || "",
    source: data.calendar?.source || "Vital Quest fallback calendar",
    today,
    upcoming
  };
}

function buildOverviewSummary(data, displayStudents = []) {
  const students = displayStudents || [];
  const watchedStudents = students.filter((student) => Number(student.academicStandingScore ?? 10) < 5);
  const employedIds = new Set((data.jobs || []).flatMap((job) => job.studentIds || []));
  const clubbedIds = new Set((data.clubs || []).flatMap((club) => club.studentIds || []));
  const activeExams = (data.exams || []).filter((exam) => !/complete|done|archived/i.test(exam.status || ""));
  const activeClasses = (data.classes || []).filter((classRecord) => !/inactive|archived/i.test(classRecord.status || ""));
  const activeJobs = (data.jobs || []).filter((job) => (job.studentIds || []).length);
  const activeClubs = (data.clubs || []).filter((club) => (club.studentIds || []).length);
  const alerts = [];
  if (watchedStudents.length) alerts.push(`${watchedStudents.length} student${watchedStudents.length === 1 ? "" : "s"} need academic attention.`);
  if (activeExams.length) alerts.push(`${activeExams.length} exam${activeExams.length === 1 ? "" : "s"} or project${activeExams.length === 1 ? "" : "s"} are active.`);
  if (activeJobs.length) alerts.push(`${activeJobs.length} job site${activeJobs.length === 1 ? "" : "s"} currently employ students.`);
  if (activeClubs.length) alerts.push(`${activeClubs.length} club${activeClubs.length === 1 ? "" : "s"} have enrolled students.`);
  return {
    studentsTotal: students.length,
    playerCount: students.filter((student) => student.type === "player").length,
    npcCount: students.filter((student) => student.type !== "player").length,
    watchedCount: watchedStudents.length,
    classCount: activeClasses.length,
    examCount: activeExams.length,
    clubCount: activeClubs.length,
    jobCount: activeJobs.length,
    employedCount: employedIds.size,
    clubMemberCount: clubbedIds.size,
    alerts: alerts.length ? alerts : ["No urgent school-life alerts. The campus is merely suspicious in the normal way."],
    playerFeed: students.filter((student) => student.type === "player").slice(0, 8).map((student) => ({
      ...student,
      job: student.job || "",
      clubs: student.clubs || "",
      standingScore: student.academicStandingScore ?? "",
      standing: student.academicStanding || "Unknown",
      detailLine: [student.college, student.year, student.job ? `Job: ${student.job}` : "", student.clubs ? `Clubs: ${student.clubs}` : ""].filter(Boolean).join(TEXT_SEPARATOR)
    })),
    npcFeed: students.filter((student) => student.type !== "player").slice(0, 8).map((student) => ({
      ...student,
      job: student.job || "",
      clubs: student.clubs || "",
      standingScore: student.academicStandingScore ?? "",
      standing: student.academicStanding || "Unknown",
      detailLine: [student.college, student.year, student.job ? `Job: ${student.job}` : "", student.clubs ? `Clubs: ${student.clubs}` : ""].filter(Boolean).join(TEXT_SEPARATOR)
    }))
  };
}

function buildStudentCommitments(data, studentId) {
  const commitments = [];
  for (const club of data.clubs || []) {
    if (!(club.studentIds || []).includes(studentId)) continue;
    commitments.push({
      type: "Club",
      icon: "fa-people-group",
      name: club.name || "Unnamed Club",
      detail: [club.skillOne, club.skillTwo].filter(Boolean).join(TEXT_SEPARATOR) || "No Student Die skills set",
      note: club.meeting || "No meeting timing set"
    });
  }
  for (const job of data.jobs || []) {
    if (!(job.studentIds || []).includes(studentId)) continue;
    commitments.push({
      type: "Job",
      icon: "fa-coins",
      name: job.name || "Campus Job",
      detail: formatJobWage(job),
      note: job.coworker ? `Coworker: ${job.coworker}` : "No coworker set"
    });
  }
  return commitments;
}

function addStudentDieSkill(counts, skill) {
  if (!skill || !STUDENT_DIE_SKILL_OPTIONS.includes(skill)) return;
  counts.set(skill, (counts.get(skill) || 0) + 1);
}

function buildStudentDice(data, studentId) {
  const counts = new Map();
  for (const club of data.clubs || []) {
    if (!(club.studentIds || []).includes(studentId)) continue;
    addStudentDieSkill(counts, club.skillOne);
    addStudentDieSkill(counts, club.skillTwo);
  }
  for (const exam of data.exams || []) {
    for (const result of exam.results || []) {
      if (result.studentId !== studentId) continue;
      normalizeExamResult(result, exam);
      if (!["Passed", "Aced"].includes(result.finalResult)) continue;
      addStudentDieSkill(counts, exam.checkOne);
      addStudentDieSkill(counts, exam.checkTwo);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([skill, count]) => ({
      skill,
      count,
      dice: `${count}d4`
    }));
}

function getCurrentSimpleCalendarParts() {
  const api = getSimpleCalendarApi();
  const current = readSimpleCalendarDate();
  const rawDate = current?.raw?.date || current?.raw || {};
  const currentMonth = safeCalendarCall(() => api?.getCurrentMonth?.()) || {};
  const currentYear = safeCalendarCall(() => api?.getCurrentYear?.()) || {};
  const months = safeCalendarCall(() => api?.getAllMonths?.()) || [];
  const monthIndex = typeof rawDate.month === "number"
    ? rawDate.month
    : Math.max(0, months.findIndex((month) => normalizeCalendarPart(month.name || month.label) === normalizeCalendarPart(currentMonth.name || currentMonth.label)));
  return {
    api,
    current,
    rawDate,
    currentMonth,
    currentYear,
    months,
    monthIndex,
    year: typeof rawDate.year === "number" ? rawDate.year : Number(currentYear.numericRepresentation ?? currentYear.year ?? currentYear.name ?? 0)
  };
}

function safeCalendarCall(fn, fallback = null) {
  try {
    return fn();
  } catch (error) {
    console.debug("Vital Quest Simple Calendar call failed:", error);
    return fallback;
  }
}

function buildSimpleCalendarMonth(data) {
  const { api, current, rawDate, currentMonth, monthIndex, year } = getCurrentSimpleCalendarParts();
  if (!api || !current?.connected) {
    return {
      connected: false,
      title: data.calendar?.dateLabel || "Fallback Calendar",
      source: data.calendar?.source || "Vital Quest fallback calendar",
      days: []
    };
  }

  const monthName = normalizeCalendarPart(currentMonth.name || currentMonth.label || current.month || "Current Month");
  const daysFromMonth = Array.isArray(currentMonth.days) ? currentMonth.days : [];
  const dayCount = daysFromMonth.length ||
    Number(currentMonth.numberOfDays || currentMonth.numberOfLeapYearDays || currentMonth.length || 30);
  const currentDayIndex = typeof rawDate.day === "number" ? rawDate.day : -1;
  const days = Array.from({ length: Math.max(1, dayCount) }, (_, index) => {
    const day = daysFromMonth[index] || {};
    const dayNumber = day.numericRepresentation ?? day.number ?? index + 1;
    const noteCount = safeCalendarCall(() => api.getNotesForDay?.(year, monthIndex, index)?.length, 0) || 0;
    const fallbackEventCount = (data.calendarEvents || [])
      .filter((event) => !event.noteId)
      .filter((event) => calendarDateKey(event.date || {}) === calendarDateKey({ year, month: monthIndex, day: index }))
      .length;
    return {
      index,
      number: dayNumber,
      name: normalizeCalendarPart(day.name || day.label || ""),
      isToday: index === currentDayIndex,
      noteCount: noteCount + fallbackEventCount,
      payload: JSON.stringify({ year, month: monthIndex, day: index, dayNumber, monthName })
    };
  });

  return {
    connected: true,
    title: [monthName, normalizeCalendarPart(year)].filter(Boolean).join(" "),
    source: current.source || "Simple Calendar Reborn",
    days
  };
}

function nextSimpleCalendarDate(date) {
  const { months } = getCurrentSimpleCalendarParts();
  const month = Number(date.month || 0);
  const year = Number(date.year || 0);
  const day = Number(date.day || 0);
  const currentMonth = months[month] || {};
  const dayCount = Array.isArray(currentMonth.days)
    ? currentMonth.days.length
    : Number(currentMonth.numberOfDays || currentMonth.numberOfLeapYearDays || currentMonth.length || 30);
  if (day + 1 < dayCount) return { year, month, day: day + 1 };
  if (month + 1 < months.length) return { year, month: month + 1, day: 0 };
  return { year: year + 1, month: 0, day: 0 };
}

function noteTextSummary(note) {
  const page = note?.pages?.contents?.find((entry) => entry.type === "text") || note?.pages?.contents?.[0];
  const html = String(page?.text?.content || "");
  const div = document.createElement("div");
  div.innerHTML = html;
  const summary = (div.textContent || div.innerText || "").replace(/\s+/g, " ").trim();
  return summary.length > 180 ? `${summary.slice(0, 177)}...` : summary;
}

function simpleCalendarNoteData(entry) {
  return entry?.getFlag?.("foundryvtt-simple-calendar-reborn", "noteData") ||
    entry?.getFlag?.("foundryvtt-simple-calendar", "noteData") ||
    null;
}

function calendarNoteToAgendaItem(note, label) {
  const noteData = simpleCalendarNoteData(note) || {};
  const startDate = noteData.startDate || {};
  const endDate = noteData.endDate || startDate;
  const startMinutes = (Number(startDate.hour || 0) * 60) + Number(startDate.minute || 0);
  const endMinutes = (Number(endDate.hour ?? startDate.hour ?? 0) * 60) + Number(endDate.minute ?? startDate.minute ?? 0);
  const fallbackTime = `${String(startDate.hour ?? 0).padStart(2, "0")}:${String(startDate.minute ?? 0).padStart(2, "0")}`;
  const time = noteData.allDay
    ? "All day"
    : simpleCalendarFormattedTime(startDate, fallbackTime);
  return {
    type: "Calendar",
    icon: "fa-calendar-check",
    title: note?.name || "Calendar Note",
    subtitle: noteTextSummary(note),
    day: label,
    time,
    startMinutes,
    endMinutes,
    status: noteData.allDay ? "All Day" : "Scheduled",
    source: "Simple Calendar",
    noteId: note?.id || ""
  };
}

function getSimpleCalendarNotesForDate(date, label) {
  const api = getSimpleCalendarApi();
  if (!api?.getNotesForDay) return [];
  const notes = safeCalendarCall(() => api.getNotesForDay(Number(date.year || 0), Number(date.month || 0), Number(date.day || 0)), []) || [];
  return notes.filter(Boolean).map((note) => calendarNoteToAgendaItem(note, label));
}

function buildCalendarDayContents(data, date = {}) {
  const displayDate = calendarEventDateLabel({ date });
  const simpleCalendarItems = getSimpleCalendarNotesForDate(date, displayDate).map((item) => {
    const linkedEvent = (data.calendarEvents || []).find((event) => event.noteId && event.noteId === item.noteId);
    return {
      ...item,
      eventId: linkedEvent?.id || "",
      visibility: linkedEvent?.visibility || ""
    };
  });
  const vitalQuestItems = (data.calendarEvents || [])
    .filter((event) => !event.noteId)
    .filter((event) => calendarDateKey(event.date || {}) === calendarDateKey(date))
    .map((event) => calendarEventToAgendaItem(event, displayDate));
  return [...simpleCalendarItems, ...vitalQuestItems]
    .sort((a, b) => (a.startMinutes ?? 9999) - (b.startMinutes ?? 9999))
    .map((item) => ({
      ...item,
      subtitle: item.subtitle || "",
      source: item.source || "Calendar"
    }));
}

function buildLivingCalendarSchedule(data) {
  const { api, current, rawDate } = getCurrentSimpleCalendarParts();
  const currentMinutes = parseTimeToMinutes(data.calendar?.timeOfDay) ?? 0;
  if (!api || !current?.connected || typeof rawDate.day !== "number") {
    return {
      connected: false,
      today: [],
      upcoming: buildSchoolAgenda(data).upcoming,
      source: data.calendar?.source || "Vital Quest fallback calendar"
    };
  }

  const todayDate = {
    year: typeof rawDate.year === "number" ? rawDate.year : 0,
    month: typeof rawDate.month === "number" ? rawDate.month : 0,
    day: rawDate.day
  };
  const tomorrowDate = nextSimpleCalendarDate(todayDate);
  const vitalQuestToday = (data.calendarEvents || [])
    .filter((event) => !event.noteId)
    .filter((event) => calendarDateKey(event.date || {}) === calendarDateKey(todayDate))
    .map((event) => calendarEventToAgendaItem(event, "Today"))
    .filter((item) => (item.endMinutes ?? item.startMinutes ?? 0) >= currentMinutes);
  const vitalQuestTomorrow = (data.calendarEvents || [])
    .filter((event) => !event.noteId)
    .filter((event) => calendarDateKey(event.date || {}) === calendarDateKey(tomorrowDate))
    .map((event) => calendarEventToAgendaItem(event, "Tomorrow"));
  const todayNotes = [...getSimpleCalendarNotesForDate(todayDate, "Today"), ...vitalQuestToday]
    .filter((item) => item.status === "All Day" || (item.endMinutes ?? item.startMinutes ?? 0) >= currentMinutes)
    .sort((a, b) => (a.startMinutes ?? 9999) - (b.startMinutes ?? 9999));
  const tomorrowNotes = [...getSimpleCalendarNotesForDate(tomorrowDate, "Tomorrow"), ...vitalQuestTomorrow]
    .sort((a, b) => (a.startMinutes ?? 9999) - (b.startMinutes ?? 9999));

  return {
    connected: true,
    today: todayNotes,
    upcoming: [...todayNotes, ...tomorrowNotes].slice(0, 12),
    source: "Simple Calendar Reborn"
  };
}

function calendarDateKey(date = {}) {
  const year = Number(date.year ?? 0);
  const month = Number(date.month ?? 0);
  const day = Number(date.day ?? 0);
  return `${String(year).padStart(6, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function currentSimpleCalendarDateKey() {
  const { current, rawDate } = getCurrentSimpleCalendarParts();
  if (!current?.connected || typeof rawDate.day !== "number") return "";
  return calendarDateKey(rawDate);
}

function calendarEventDateLabel(event = {}) {
  const date = event.date || {};
  const displayDay = date.dayNumber ?? (typeof date.day === "number" ? date.day + 1 : "");
  const fallback = [date.monthName || date.monthLabel || "", displayDay, date.year || ""].filter(Boolean).join(" ").trim() || "Unscheduled";
  return date.year !== undefined && date.month !== undefined && date.day !== undefined
    ? simpleCalendarFormattedDate(dateTimeForSimpleCalendar(date, "8:00 AM"), fallback)
    : fallback;
}

function calendarEventAudience(event = {}) {
  return (event.participantId || "all") === "all"
    ? "Everyone"
    : event.participantName || "Personal";
}

function calendarEventAppliesToStudent(event = {}, student = {}) {
  const participantId = event.participantId || "all";
  if (participantId === "all") return true;
  if (participantId === student.id) return true;
  if (student.actorId && event.participantActorId === student.actorId) return true;
  return false;
}

function calendarEventToPlannerItem(event = {}) {
  const block = CALENDAR_TIME_BLOCKS.find((entry) => entry.key === event.block);
  const rawTime = event.time || block?.defaultTime || "";
  const time = event.date ? simpleCalendarFormattedTime(dateTimeForSimpleCalendar(event.date, rawTime), rawTime) : rawTime;
  const typeLabel = {
    classes: "Class",
    exams: "Exam",
    clubs: "Club",
    jobs: "Job",
    campus: "Campus",
    story: "Story",
    personal: "Personal"
  }[event.type] || event.type || "Calendar";
  return {
    ...event,
    typeLabel,
    time,
    displayDate: calendarEventDateLabel(event),
    audience: calendarEventAudience(event),
    startMinutes: parseTimeToMinutes(rawTime) ?? parseTimeToMinutes(time) ?? 9999,
    dateKey: calendarDateKey(event.date || {}),
    isPersonal: event.type === "personal",
    canDelete: event.type === "personal"
  };
}

function calendarEventToAgendaItem(event = {}, label = "") {
  const item = calendarEventToPlannerItem(event);
  return {
    type: item.typeLabel,
    icon: item.isPersonal ? "fa-lock" : "fa-calendar-check",
    title: item.title || "Calendar Event",
    subtitle: [item.audience, item.details].filter(Boolean).join(TEXT_SEPARATOR),
    day: label || item.displayDate,
    time: item.time,
    startMinutes: item.startMinutes,
    endMinutes: (item.startMinutes ?? 0) + 60,
    status: "Scheduled",
    source: item.isPersonal ? "Vital Quest Private" : "Vital Quest",
    noteId: item.noteId || "",
    eventId: item.id || "",
    visibility: item.visibility || ""
  };
}

function buildStudentPlanner(data, student) {
  const currentKey = currentSimpleCalendarDateKey();
  const events = (data.calendarEvents || [])
    .filter((event) => calendarEventAppliesToStudent(event, student))
    .map(calendarEventToPlannerItem)
    .sort((a, b) => {
      const dateSort = a.dateKey.localeCompare(b.dateKey);
      if (dateSort) return dateSort;
      return (a.startMinutes ?? 9999) - (b.startMinutes ?? 9999);
    });
  const today = currentKey ? events.filter((event) => event.dateKey === currentKey) : [];
  const upcoming = currentKey
    ? events.filter((event) => event.dateKey > currentKey).slice(0, 10)
    : events.slice(0, 10);
  return {
    source: data.calendar?.source || "Vital Quest calendar",
    today,
    upcoming,
    all: events,
    currentDateKey: currentKey
  };
}

function timeStringToParts(value, fallback = "8:00 AM") {
  const raw = String(value || fallback).trim().toLowerCase();
  const match = raw.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/);
  if (!match) return { hour: 8, minute: 0 };
  let hour = Number(match[1]);
  const minute = Number(match[2] || 0);
  const period = match[3];
  if (period === "pm" && hour < 12) hour += 12;
  if (period === "am" && hour === 12) hour = 0;
  return { hour, minute };
}

async function createSimpleCalendarPlanningNote({ title, content, date, time, visibleUserIds = ["default"] }) {
  const api = getSimpleCalendarApi();
  if (!api?.addNote) return null;
  const { hour, minute } = timeStringToParts(time);
  const startDate = {
    year: Number(date.year || 0),
    month: Number(date.month || 0),
    day: Number(date.day || 0),
    hour,
    minute,
    seconds: 0
  };
  const endDate = {
    ...startDate,
    hour: Math.min(hour + 1, 23)
  };
  const viewers = Array.isArray(visibleUserIds) && visibleUserIds.length ? visibleUserIds : ["default"];
  return api.addNote(title, content, startDate, endDate, false, 0, [], "active", null, viewers, []);
}

async function removeSimpleCalendarPlanningNote(noteId) {
  if (!noteId) return false;
  const api = getSimpleCalendarApi();
  if (!api?.removeNote) return false;
  try {
    const result = api.removeNote(noteId);
    return typeof result?.then === "function" ? Boolean(await result) : Boolean(result);
  } catch (error) {
    console.warn("Vital Quest could not remove linked Simple Calendar note:", error);
    return false;
  }
}

async function removeLinkedCalendarEvents(data, predicate) {
  data.calendarEvents = Array.isArray(data.calendarEvents) ? data.calendarEvents : [];
  const matches = data.calendarEvents.filter(predicate);
  const noteIds = [...new Set(matches.map((event) => event.noteId).filter(Boolean))];
  for (const noteId of noteIds) await removeSimpleCalendarPlanningNote(noteId);
  if (matches.length) {
    const ids = new Set(matches.map((event) => event.id));
    data.calendarEvents = data.calendarEvents.filter((event) => !ids.has(event.id));
  }
  return matches.length;
}

function normalizeCampaignData(data) {
  data.students = data.students || [];
  data.faculty = data.faculty || [];
  data.classes = data.classes || [];
  data.exams = data.exams || [];
  data.clubs = data.clubs || [];
  data.jobs = data.jobs || [];
  if (!Array.isArray(data.campusLocations)) {
    data.campusLocations = CAMPUS_EVENT_LOCATIONS.map((name) => defaultCampusLocation(name));
  }
  data.tools = data.tools || {};
  data.tools.facultyRoles = normalizeOptionList(data.tools.facultyRoles, DEFAULT_FACULTY_ROLES);
  data.tools.facultyDepartments = normalizeOptionList(data.tools.facultyDepartments, DEFAULT_FACULTY_DEPARTMENTS);
  ensureOfficialExtracurriculars(data);
  ensureOfficialJobs(data);
  data.clubs.forEach(normalizeClubRecord);
  data.jobs.forEach(normalizeJobRecord);
  data.campusLocations.forEach(normalizeCampusLocation);
  data.calendarEvents = Array.isArray(data.calendarEvents) ? data.calendarEvents : [];
  data.classes.forEach(normalizeClassRecord);
  data.classes.forEach((classRecord) => {
    classRecord.professorFacultyId = classRecord.professorFacultyId || "";
  });
  data.students.forEach((student) => {
    student.type = student.type || (student.actorId ? "player" : "npc");
    student.dormName = student.dormName || "";
    student.dorm = student.dorm || "";
    student.advisor = student.advisor || "";
    student.advisorFacultyId = student.advisorFacultyId || "";
    student.academicStandingScore = Math.max(-100, Math.min(100, Number(student.academicStandingScore ?? 10)));
    student.academicStanding = academicStandingFromScore(student.academicStandingScore);
    student.selectedClassIds = Array.isArray(student.selectedClassIds) ? student.selectedClassIds : [];
    student.job = student.job || "";
    inferSelectedClassIdsFromSummary(student, data.classes);
    syncStudentClassSummary(student, data.classes);
    student.relationshipLinks = Array.isArray(student.relationshipLinks) ? student.relationshipLinks : [];
    student.relationshipLinks.forEach((link) => {
      link.status = link.status || relationshipStatusFromScore(link.score);
      link.notes = link.notes || "";
      link.lastScene = link.lastScene || "";
    });
  });
  if (!data.students.length && Array.isArray(data.relationships)) {
    data.students = data.relationships
      .filter((entry) => /student/i.test(`${entry.role || ""} ${entry.notes || ""}`))
      .map((entry) => ({
        ...defaultStudent(entry.name || "Student"),
        id: entry.id || foundry.utils.randomID(),
        college: entry.college || "Silverquill",
        reputation: entry.bond || "Unknown",
        relationships: entry.notes || "",
        privateNotes: entry.notes || ""
      }));
  }
  if (!data.students.length) data.students.push(defaultStudent("New Student"));
  data.exams.forEach((exam) => normalizeExamRecord(exam, data.students));
  return data;
}

function defaultCampaignData() {
  return {
    calendar: {
      term: "First Term",
      week: 1,
      day: "Moonday",
      timeOfDay: "Morning",
      source: "Vital Quest fallback calendar",
      dateLabel: "",
      notes: "The school year is beginning."
    },
    focus: {
      college: "silverquill",
      currentArc: "Arrival at Strixhaven",
      activeMystery: ""
    },
    tools: {
      facultyRoles: [...DEFAULT_FACULTY_ROLES],
      facultyDepartments: [...DEFAULT_FACULTY_DEPARTMENTS]
    },
    students: [
      defaultStudent("Mira")
    ],
    classes: [
      {
        id: foundry.utils.randomID(),
        name: "Magical Physiologies",
        professor: "",
        college: "General Studies",
        term: "First Term",
        startTime: "09:00",
        endTime: "10:00",
        location: "Biblioplex Lecture Hall",
        status: "Active",
        notes: ""
      },
      {
        id: foundry.utils.randomID(),
        name: "Beginning Inkomancy",
        professor: "",
        college: "Silverquill",
        term: "First Term",
        startTime: "13:00",
        endTime: "14:00",
        location: "Silverquill Scriptorium",
        status: "Active",
        notes: ""
      }
    ],
    exams: [
      {
        id: foundry.utils.randomID(),
        name: "First Practical Evaluation",
        className: "General Studies",
        due: "Week 3",
        status: "Upcoming",
        stakes: "Academic standing and early reputation",
        notes: ""
      }
    ],
    clubs: [
      {
        id: foundry.utils.randomID(),
        name: "Dead Languages Society",
        members: "",
        meeting: "Weekly",
        notes: ""
      }
    ],
    jobs: [],
    campusLocations: CAMPUS_EVENT_LOCATIONS.map((name) => defaultCampusLocation(name)),
    calendarEvents: [],
    relationships: [
      {
        id: foundry.utils.randomID(),
        name: "Mira",
        role: "Student",
        college: "Silverquill",
        score: 0,
        bond: "Curious acquaintance",
        notes: ""
      }
    ],
    faculty: [
      {
        ...defaultFaculty("Professor Sharpbeak"),
        college: "Silverquill",
        office: "Silverquill Hall",
        schedule: "Office hours after rhetoric lecture",
        notes: "Placeholder faculty record for the Journal archive."
      }
    ],
    quests: [
      {
        id: foundry.utils.randomID(),
        title: "First Week at Strixhaven",
        type: "School Arc",
        status: "Active",
        notes: "Introduce classes, campus rhythms, and first social ties."
      }
    ],
    generated: {
      event: "",
      rumor: ""
    }
  };
}

async function getCampaignData() {
  const data = game.settings.get(MODULE_ID, "campaignData");
  return syncCalendarDisplay(normalizeCampaignData(duplicateData(data || defaultCampaignData())));
}

async function setCampaignData(data, { render = false } = {}) {
  await game.settings.set(MODULE_ID, "campaignData", data);
  if (render && game.ready && !vitalQuestJournalLock) {
    renderOpenVitalQuestApps();
    scheduleVitalQuestJournalWrite();
  } else if (game.ready && !vitalQuestJournalLock) {
    scheduleVitalQuestJournalWrite();
  }
}

function registerSettings() {
  game.settings.register(MODULE_ID, "campaignData", {
    name: "Campaign Data",
    scope: "world",
    config: false,
    type: Object,
    default: defaultCampaignData()
  });

  game.settings.register(MODULE_ID, "schoolYearCount", {
    name: "Number of School Years",
    hint: "Controls the Year dropdown on Vital Quest student enrollment records.",
    scope: "world",
    config: false,
    type: Number,
    default: 4,
    range: {
      min: 1,
      max: 10,
      step: 1
    }
  });

  game.settings.registerMenu(MODULE_ID, "openStudentCard", {
    name: "Open Vital Quest Student Card",
    label: "Open Student Card",
    hint: "Open the player-facing Vital Quest crystal card.",
    icon: "fas fa-gem",
    type: VitalQuestStudentCard,
    restricted: false
  });

  game.settings.registerMenu(MODULE_ID, "openManager", {
    name: "Open Vital Quest GM Screen",
    label: "Open GM Screen",
    hint: "Open the GM-only Vital Quest campaign manager.",
    icon: "fas fa-graduation-cap",
    type: StrixhavenCampaignManager,
    restricted: true
  });

  if (game.keybindings) {
    game.keybindings.register(MODULE_ID, "openStudentCard", {
      name: "Open Vital Quest Student Card",
      hint: "Open the player-facing Vital Quest crystal card.",
      editable: [
        {
          key: "KeyV",
          modifiers: ["Control", "Shift"]
        }
      ],
      restricted: false,
      onDown: () => {
        openStudentCard();
        return true;
      },
      precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
    });

    game.keybindings.register(MODULE_ID, "openGMScreen", {
      name: "Open Vital Quest GM Screen",
      hint: "Open the GM-only Vital Quest campaign manager.",
      editable: [
        {
          key: "KeyG",
          modifiers: ["Control", "Shift"]
        }
      ],
      restricted: true,
      onDown: () => {
        openManager();
        return true;
      },
      precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
    });
  }
}

function fieldValue(form, name, fallback = "") {
  return form.querySelector(`[name="${name}"]`)?.value ?? fallback;
}

function numberValue(form, name, fallback = 0) {
  const value = Number(fieldValue(form, name, fallback));
  return Number.isFinite(value) ? value : fallback;
}

async function advanceSimpleCalendarDay() {
  const api = getSimpleCalendarApi();
  if (!api) return false;
  const attempts = [
    () => api.changeDateTime?.({ day: 1 }),
    () => api.changeDate?.({ day: 1 }),
    () => api.advanceTime?.(24 * 60 * 60),
    () => api.advanceTime?.({ days: 1 }),
    () => api.setDateTime && api.currentDateTime ? (() => {
      const current = api.currentDateTime();
      return api.setDateTime({ ...current, day: Number(current.day || current.date?.day || 0) + 1 });
    })() : null
  ];

  for (const attempt of attempts) {
    try {
      const result = attempt();
      if (result !== null && typeof result !== "undefined") {
        if (typeof result.then === "function") await result;
        return true;
      }
    } catch (error) {
      console.debug("Vital Quest Simple Calendar advance attempt failed:", error);
    }
  }
  return false;
}

function optionList(options = [], selected = "") {
  return options
    .map((option) => {
      const value = typeof option === "string" ? option : option.value;
      const label = typeof option === "string" ? option : option.label;
      return `<option value="${escapeHtml(value || "")}" ${value === selected ? "selected" : ""}>${escapeHtml(label || value || "")}</option>`;
    })
    .join("");
}

function fieldFromDialog(html, name, fallback = "") {
  return html[0]?.querySelector(`[name="${name}"]`)?.value ?? fallback;
}

function numberFromDialog(html, name, fallback = 0) {
  const value = Number(fieldFromDialog(html, name, fallback));
  return Number.isFinite(value) ? value : fallback;
}

async function promptClassCreation(data) {
  const faculty = facultyOptions(data.faculty || [], "");
  return promptVitalQuestRecordCreation({
    title: "Create Class",
    intro: "Add a course to the Strixhaven class catalog. Use start and end time for the usual class block; specific dates still belong on the Calendar tab.",
    submitLabel: "Add Class",
    form: `
      <div class="vq-create-grid two">
        <label><span>Class Name</span><input name="name" value="New Class" autofocus></label>
        <label><span>Status</span><input name="status" value="Active"></label>
        <label><span>Professor</span><select name="professorFacultyId">${optionList(faculty.map((entry) => ({ value: entry.id, label: entry.label })))}</select></label>
        <label><span>College / Department</span><input name="college" placeholder="Silverquill, General Studies, etc."></label>
        <label><span>Start Time</span><input name="startTime" placeholder="9:00 AM"></label>
        <label><span>End Time</span><input name="endTime" placeholder="10:00 AM"></label>
        <label><span>Location</span><input name="location" placeholder="Room, hall, classroom, or campus location"></label>
      </div>
      <label><span>Course Notes</span><textarea name="notes" placeholder="Lessons, homework style, professor quirks, exam hooks, schedule notes..."></textarea></label>
    `,
    build: (html) => {
      const professorFacultyId = fieldFromDialog(html, "professorFacultyId", "");
      return {
        id: foundry.utils.randomID(),
        name: fieldFromDialog(html, "name", "New Class").trim() || "New Class",
        professor: facultyNameById(data.faculty || [], professorFacultyId),
        professorFacultyId,
        college: fieldFromDialog(html, "college", ""),
        term: "",
        startTime: fieldFromDialog(html, "startTime", ""),
        endTime: fieldFromDialog(html, "endTime", ""),
        location: fieldFromDialog(html, "location", ""),
        status: fieldFromDialog(html, "status", "Active"),
        notes: fieldFromDialog(html, "notes", "")
      };
    }
  });
}

async function promptExamCreation(data) {
  const classOptions = [{ value: "", label: "Choose class..." }, ...(data.classes || []).map((entry) => ({ value: entry.id, label: entry.name }))];
  const skillOptions = EXAM_CHECK_OPTIONS.map((skill) => ({ value: skill, label: skill }));
  return promptVitalQuestRecordCreation({
    title: "Create Exam / Project",
    intro: "Create a test record. The live date and exact time are scheduled from the Calendar tab.",
    submitLabel: "Add Exam",
    form: `
      <div class="vq-create-grid two">
        <label><span>Exam / Project Name</span><input name="name" value="New Exam" autofocus></label>
        <label><span>Class</span><select name="classId">${optionList(classOptions)}</select></label>
        <label><span>DC</span><input type="number" name="dc" value="13" min="1"></label>
        <label><span>Cheating DC Default</span><input type="number" name="cheatingDc" value="13" min="1"></label>
        <label><span>Check 1</span><select name="checkOne">${optionList(skillOptions, "Arcana")}</select></label>
        <label><span>Check 2</span><select name="checkTwo">${optionList(skillOptions, "History")}</select></label>
      </div>
      <label><span>Exam Notes</span><textarea name="notes" placeholder="Study context, stakes, practical test setup, special rules, professor expectations..."></textarea></label>
    `,
    build: (html) => {
      const classId = fieldFromDialog(html, "classId", "");
      const className = (data.classes || []).find((entry) => entry.id === classId)?.name || "";
      const exam = {
        id: foundry.utils.randomID(),
        name: fieldFromDialog(html, "name", "New Exam").trim() || "New Exam",
        classId,
        className,
        due: "",
        status: "Planned",
        dc: numberFromDialog(html, "dc", 13),
        checkOne: fieldFromDialog(html, "checkOne", "Arcana"),
        checkTwo: fieldFromDialog(html, "checkTwo", "History"),
        stakes: "",
        notes: fieldFromDialog(html, "notes", ""),
        results: []
      };
      normalizeExamRecord(exam, data.students || []);
      const cheatingDc = numberFromDialog(html, "cheatingDc", 13);
      exam.results.forEach((result) => {
        result.cheatingDc = cheatingDc;
        normalizeExamResult(result, exam);
      });
      return exam;
    }
  });
}

async function promptClubCreation(data) {
  const officialOptions = [{ value: "", label: "Custom extracurricular" }, ...OFFICIAL_EXTRACURRICULARS.map((entry) => ({ value: entry.name, label: entry.name }))];
  const skillOptions = [{ value: "", label: "Choose skill..." }, ...STUDENT_DIE_SKILL_OPTIONS.map((skill) => ({ value: skill, label: skill }))];
  const faculty = facultyOptions(data.faculty || [], "");
  return promptVitalQuestRecordCreation({
    title: "Create Extracurricular",
    intro: "Add a club or society. Student enrollment still happens on the club card after creation.",
    submitLabel: "Add Club",
    form: `
      <label><span>Start from official club</span><select name="officialName">${optionList(officialOptions)}</select></label>
      <div class="vq-create-grid two">
        <label><span>Club Name</span><input name="name" value="New Extracurricular" autofocus></label>
        <label><span>Meeting / Timing</span><input name="meeting" value="Start of academic year"></label>
        <label><span>Student Die Skill 1</span><select name="skillOne">${optionList(skillOptions)}</select></label>
        <label><span>Student Die Skill 2</span><select name="skillTwo">${optionList(skillOptions)}</select></label>
        <label class="vq-create-wide"><span>Faculty Overseer</span><select name="overseerFacultyId">${optionList(faculty.map((entry) => ({ value: entry.id, label: entry.label })))}</select></label>
      </div>
      <label><span>Description</span><textarea name="description" placeholder="What the club does, tone, events, competitions..."></textarea></label>
      <label><span>Book NPC Members</span><input name="npcMembers" placeholder="Official or expected NPC members"></label>
      <label><span>Relationship Point Notes</span><textarea name="relationshipNotes" placeholder="+1 or -1 relationship point choices, rivalries, friendships..."></textarea></label>
      <label><span>DM Notes</span><textarea name="notes"></textarea></label>
      <p class="vq-create-hint">Tip: if you choose an official club, blank fields inherit its skills, NPC members, and description.</p>
    `,
    build: (html) => {
      const official = OFFICIAL_EXTRACURRICULARS.find((entry) => entry.name === fieldFromDialog(html, "officialName", ""));
      const officialSkills = String(official?.skills || "").split(/\s*,\s*|\s+or\s+/i).filter(Boolean);
      const overseerFacultyId = fieldFromDialog(html, "overseerFacultyId", "");
      const enteredName = fieldFromDialog(html, "name", "").trim();
      return {
        id: foundry.utils.randomID(),
        name: !enteredName || (official && enteredName === "New Extracurricular") ? official?.name || "New Extracurricular" : enteredName,
        skills: "",
        skillOne: fieldFromDialog(html, "skillOne", "") || officialSkills[0] || "",
        skillTwo: fieldFromDialog(html, "skillTwo", "") || officialSkills[1] || "",
        npcMembers: fieldFromDialog(html, "npcMembers", "") || official?.npcMembers || "",
        description: fieldFromDialog(html, "description", "") || official?.description || "",
        members: "",
        meeting: fieldFromDialog(html, "meeting", "Start of academic year"),
        overseerFacultyId,
        overseer: facultyNameById(data.faculty || [], overseerFacultyId),
        studentIds: [],
        relationshipNotes: fieldFromDialog(html, "relationshipNotes", ""),
        notes: fieldFromDialog(html, "notes", "")
      };
    }
  });
}

async function promptJobCreation() {
  const officialOptions = [{ value: "", label: "Custom campus job" }, ...OFFICIAL_JOBS.map((entry) => ({ value: entry.name, label: entry.name }))];
  return promptVitalQuestRecordCreation({
    title: "Create Campus Job",
    intro: "Add a campus workplace. Students can hold one job at a time and earn the configured weekly wage.",
    submitLabel: "Add Job",
    form: `
      <label><span>Start from official job location</span><select name="officialName">${optionList(officialOptions)}</select></label>
      <div class="vq-create-grid three">
        <label><span>Job Location</span><input name="name" value="New Campus Job" autofocus></label>
        <label><span>Gold / Week</span><input type="number" name="wageGold" value="5" min="0"></label>
        <label><span>Silver / Week</span><input type="number" name="wageSilver" value="0" min="0"></label>
        <label><span>Copper / Week</span><input type="number" name="wageCopper" value="0" min="0"></label>
        <label class="vq-create-wide"><span>Possible Positions</span><input name="positions" placeholder="Book clerk, server, cleanup crew..."></label>
      </div>
      <label><span>Coworker NPCs</span><input name="coworker" placeholder="NPC coworkers"></label>
      <label><span>Description</span><textarea name="description" placeholder="Workplace duties, tone, useful hooks..."></textarea></label>
      <label><span>Relationship Point Notes</span><textarea name="relationshipNotes" placeholder="+1 or -1 relationship point choices with coworkers..."></textarea></label>
      <label><span>DM Notes</span><textarea name="notes"></textarea></label>
      <p class="vq-create-hint">Tip: if you choose an official job, blank fields inherit its positions, coworker, and description.</p>
    `,
    build: (html) => {
      const official = OFFICIAL_JOBS.find((entry) => entry.name === fieldFromDialog(html, "officialName", ""));
      const enteredName = fieldFromDialog(html, "name", "").trim();
      const job = {
        id: foundry.utils.randomID(),
        name: !enteredName || (official && enteredName === "New Campus Job") ? official?.name || "New Campus Job" : enteredName,
        positions: fieldFromDialog(html, "positions", "") || official?.positions || "",
        coworker: fieldFromDialog(html, "coworker", "") || official?.coworker || "",
        description: fieldFromDialog(html, "description", "") || official?.description || "",
        wageGold: numberFromDialog(html, "wageGold", 5),
        wageSilver: numberFromDialog(html, "wageSilver", 0),
        wageCopper: numberFromDialog(html, "wageCopper", 0),
        studentIds: [],
        relationshipNotes: fieldFromDialog(html, "relationshipNotes", ""),
        notes: fieldFromDialog(html, "notes", "")
      };
      normalizeJobRecord(job);
      return job;
    }
  });
}

async function promptVitalQuestRecordCreation({ title, intro, submitLabel, form, build }) {
  return new Promise((resolve) => {
    let submitted = false;
    new Dialog({
      title,
      content: `
        <form class="vital-quest-create-dialog">
          <section class="vq-create-hero">
            <span class="section-label">Vital Quest Record</span>
            <h2>${escapeHtml(title)}</h2>
            <p>${escapeHtml(intro)}</p>
          </section>
          <section class="vq-create-body">${form}</section>
        </form>
      `,
      buttons: {
        create: {
          label: submitLabel,
          icon: '<i class="fas fa-plus"></i>',
          callback: (html) => {
            submitted = true;
            resolve(build(html));
          }
        },
        cancel: {
          label: "Cancel",
          callback: () => {
            submitted = true;
            resolve(null);
          }
        }
      },
      default: "create",
      close: () => {
        if (!submitted) resolve(null);
      }
    }, {
      classes: ["vital-quest-dialog", "vq-create-dialog"],
      width: 620
    }, {
      classes: ["vital-quest-dialog", "vq-create-dialog"],
      width: 560
    }).render(true);
  });
}

async function promptNpcStudentCreation() {
  const yearOptions = getSchoolYearOptions("1st Year")
    .map((option) => `<option value="${escapeHtml(option.label)}" ${option.selected ? "selected" : ""}>${escapeHtml(option.label)}</option>`)
    .join("");
  return new Promise((resolve) => {
    let submitted = false;
    new Dialog({
      title: "Create Student NPC",
      content: `
        <form class="vital-quest-npc-dialog">
          <p>Create a Foundry NPC sheet and enroll it as a Vital Quest student record.</p>
          <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" value="New Student NPC" autofocus>
          </div>
          <div class="form-group">
            <label>College</label>
            <select name="college">
              <option value="Silverquill">Silverquill</option>
              <option value="Prismari">Prismari</option>
              <option value="Quandrix">Quandrix</option>
              <option value="Lorehold">Lorehold</option>
              <option value="Witherbloom">Witherbloom</option>
              <option value="General Studies">General Studies</option>
            </select>
          </div>
          <div class="form-group">
            <label>Year</label>
            <select name="year">${yearOptions}</select>
          </div>
          <div class="form-group">
            <label>Dorm Name</label>
            <input type="text" name="dormName" value="" placeholder="Dormitory, hall, or house residence">
          </div>
          <div class="form-group">
            <label>Dorm Number</label>
            <input type="text" name="dorm" value="" placeholder="Room or dorm number">
          </div>
        </form>
      `,
      buttons: {
        create: {
          label: "Create NPC Sheet",
          icon: '<i class="fas fa-user-plus"></i>',
          callback: async (html) => {
            submitted = true;
            const form = html[0].querySelector("form");
            const name = form.querySelector("[name='name']").value?.trim() || "New Student NPC";
            const college = form.querySelector("[name='college']").value || "Silverquill";
            const year = form.querySelector("[name='year']").value || "First Year";
            const dormName = form.querySelector("[name='dormName']").value || "";
            const dorm = form.querySelector("[name='dorm']").value || "";
            let actor = null;
            try {
              actor = await Actor.create({
                name,
                type: "npc",
                flags: {
                  [MODULE_ID]: {
                    schoolCategory: "student"
                  }
                }
              });
            } catch (error) {
              console.error("Vital Quest could not create an NPC actor:", error);
              ui.notifications.warn("Actor creation failed, so Vital Quest created a school record only.");
            }
            const student = actor ? studentFromActor(actor, "npc") : defaultStudent(name, "npc");
            student.name = name;
            student.college = college;
            student.year = year;
            student.dormName = dormName;
            student.dorm = dorm;
            resolve({ actor, student });
          }
        },
        cancel: {
          label: "Cancel",
          callback: () => {
            submitted = true;
            resolve(null);
          }
        }
      },
      default: "create",
      close: () => {
        if (!submitted) resolve(null);
      }
    }, {
      classes: ["vital-quest-dialog", "vq-create-dialog"],
      width: 560
    }).render(true);
  });
}

async function promptFacultyCreation(data = null) {
  const roles = normalizeOptionList(data?.tools?.facultyRoles, DEFAULT_FACULTY_ROLES);
  const departments = normalizeOptionList(data?.tools?.facultyDepartments, DEFAULT_FACULTY_DEPARTMENTS);
  return new Promise((resolve) => {
    let submitted = false;
    new Dialog({
      title: "Create Faculty NPC",
      content: `
        <form class="vital-quest-npc-dialog">
          <p>Create a Foundry NPC sheet and add it to the Vital Quest Faculty Directory.</p>
          <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" value="New Professor" autofocus>
          </div>
          <div class="form-group">
            <label>Role</label>
            <select name="role">
              ${optionList(roles.map((role) => ({ value: role, label: role })), "Professor")}
            </select>
          </div>
          <div class="form-group">
            <label>College / Department</label>
            <select name="college">
              ${optionList(departments.map((department) => ({ value: department, label: department })), "General Studies")}
            </select>
          </div>
          <div class="form-group">
            <label>Office</label>
            <input type="text" name="office" value="" placeholder="Office, classroom, or department">
          </div>
          <div class="form-group">
            <label>Status</label>
            <input type="text" name="status" value="Available" placeholder="Available, Busy, Away">
          </div>
          <div class="form-group">
            <label>Notes</label>
            <textarea name="notes" placeholder="Teaching style, secrets, office hours, event hooks..."></textarea>
          </div>
        </form>
      `,
      buttons: {
        create: {
          label: "Create Faculty NPC",
          icon: '<i class="fas fa-user-tie"></i>',
          callback: async (html) => {
            submitted = true;
            const form = html[0].querySelector("form");
            const name = form.querySelector("[name='name']").value?.trim() || "New Faculty";
            const role = form.querySelector("[name='role']").value || "Professor";
            const college = form.querySelector("[name='college']").value || "General Studies";
            const office = form.querySelector("[name='office']").value || "";
            const status = form.querySelector("[name='status']").value || "Available";
            const notes = form.querySelector("[name='notes']").value || "";
            let actor = null;
            try {
              actor = await Actor.create({
                name,
                type: "npc",
                flags: {
                  [MODULE_ID]: {
                    schoolCategory: "faculty"
                  }
                }
              });
            } catch (error) {
              console.error("Vital Quest could not create a faculty NPC actor:", error);
              ui.notifications.warn("Actor creation failed, so Vital Quest created a faculty record only.");
            }
            const faculty = actor ? facultyFromActor(actor) : defaultFaculty(name);
            faculty.name = name;
            faculty.role = role;
            faculty.college = college;
            faculty.office = office;
            faculty.status = status;
            faculty.notes = notes;
            resolve({ actor, faculty });
          }
        },
        cancel: {
          label: "Cancel",
          callback: () => {
            submitted = true;
            resolve(null);
          }
        }
      },
      default: "create",
      close: () => {
        if (!submitted) resolve(null);
      }
    }).render(true);
  });
}

class StrixhavenCampaignManager extends Application {
  constructor(options = {}) {
    super(options);
    this.studentSearch = "";
    this.selectedStudentId = null;
    this.selectedFacultyId = null;
    this.selectedClassId = null;
    this.selectedExamId = null;
    this.selectedClubId = null;
    this.selectedJobId = null;
    this.selectedCampusLocationId = null;
    this.activeGmTab = "overview";
    this.collapsedExamIds = new Set();
    this._lastScrollTop = null;
    this._lastShellScrollTop = null;
    this._scrollSnapshot = {};
  }

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "vital-quest-manager",
      title: "Vital Quest GM Screen",
      template: `modules/${MODULE_ID}/templates/manager.hbs`,
      width: 1160,
      height: 820,
      resizable: true,
      classes: ["strixhaven-manager", "vital-quest-gm-window"]
    });
  }

  render(force, options = {}) {
    return super.render(force, options);
  }

  _captureScrollPosition() {
    const root = this.element?.[0];
    if (!root) return;
    const readScroll = (selector) => {
      const element = root.querySelector(selector);
      return element ? element.scrollTop : null;
    };
    this._scrollSnapshot = {
      windowContent: readScroll(".window-content"),
      gmScreen: readScroll(".gm-screen"),
      activePage: readScroll("[data-gm-page].active"),
      studentWorkspace: readScroll(".student-workspace"),
      studentRoster: readScroll(".student-roster"),
      studentProfile: readScroll(".student-profile"),
      studentDossier: readScroll(".student-dossier"),
      examRoster: readScroll(".exam-roster"),
      examProfile: readScroll(".exam-profile"),
      clubRoster: readScroll(".club-roster"),
      clubProfile: readScroll(".club-profile"),
      jobRoster: readScroll(".job-roster"),
      jobProfile: readScroll(".job-profile"),
      campusRoster: readScroll(".campus-roster"),
      campusProfile: readScroll(".campus-profile")
    };
    this._lastScrollTop = this._scrollSnapshot.windowContent;
    this._lastShellScrollTop = this._scrollSnapshot.gmScreen;
  }

  _restoreScrollPosition() {
    const snapshot = this._scrollSnapshot || {};
    const root = () => this.element?.[0];
    const restoreOne = (selector, value) => {
      if (value === null || value === undefined) return;
      const element = root()?.querySelector(selector);
      if (element) element.scrollTop = value;
    };
    const restore = () => {
      restoreOne(".window-content", snapshot.windowContent ?? this._lastScrollTop);
      restoreOne(".gm-screen", snapshot.gmScreen ?? this._lastShellScrollTop);
      restoreOne("[data-gm-page].active", snapshot.activePage);
      restoreOne(".student-workspace", snapshot.studentWorkspace);
      restoreOne(".student-roster", snapshot.studentRoster);
      restoreOne(".student-profile", snapshot.studentProfile);
      restoreOne(".student-dossier", snapshot.studentDossier);
      restoreOne(".exam-roster", snapshot.examRoster);
      restoreOne(".exam-profile", snapshot.examProfile);
      restoreOne(".club-roster", snapshot.clubRoster);
      restoreOne(".club-profile", snapshot.clubProfile);
      restoreOne(".job-roster", snapshot.jobRoster);
      restoreOne(".job-profile", snapshot.jobProfile);
      restoreOne(".campus-roster", snapshot.campusRoster);
      restoreOne(".campus-profile", snapshot.campusProfile);
    };
    restore();
    requestAnimationFrame?.(restore);
    setTimeout(restore, 25);
    setTimeout(restore, 100);
    setTimeout(restore, 250);
  }

  _updateExamResultRow(examId, resultId, result) {
    const row = this.element?.find?.(`.exam-student-row[data-exam-id="${examId}"][data-result-id="${resultId}"]`);
    if (!row?.length) return;
    row.find("[data-exam-result-summary]").text(`${result.finalResult} · Standing ${result.standingDelta}`);
    row.find("[data-exam-calculated-outcome]").val(result.finalResult);
    row.find('[data-field="testOneRoll"]').val(result.testOneRoll);
    row.find('[data-field="testTwoRoll"]').val(result.testTwoRoll);
    row.find('[data-field="cheatingDc"]').val(result.cheatingDc);
    row.find('[data-field="cheatingDeceptionRoll"]').val(result.cheatingDeceptionRoll);
    row.find('[data-field="cheatingSleightRoll"]').val(result.cheatingSleightRoll);
    row.find('[data-field="cheated"]').prop("checked", Boolean(result.cheated));
    row.find(".exam-cheat-package").toggleClass("active", Boolean(result.cheated));
  }

  _updateRelationshipRow(relationshipId, link) {
    const root = this.element?.[0];
    if (!root || !relationshipId || !link) return;
    const scoreInput = root.querySelector(`[data-relationship-score="${relationshipId}"]`);
    if (scoreInput) scoreInput.value = Number(link.score || 0);
    const statusInput = root.querySelector(`[data-relationship-status="${relationshipId}"]`);
    if (statusInput) statusInput.value = link.status || relationshipStatusFromScore(link.score);
  }

  async getData() {
    const data = await getCampaignData();
    const college = STRIXHAVEN_COLLEGES[data.focus?.college] || STRIXHAVEN_COLLEGES.silverquill;
    const playerActors = getPlayerCharacterActors();
    playerActors.forEach((actor) => schoolOverlayForActor(data, actor));
    const allDisplayStudents = [
      ...playerActors.map((actor) => displayStudent(schoolOverlayForActor(data, actor), actor, this.selectedStudentId)),
      ...data.students
        .filter((student) => student.type !== "player")
        .map((student) => displayStudent(student, null, this.selectedStudentId))
    ];
    if (!this.selectedStudentId || !allDisplayStudents.some((student) => student.id === this.selectedStudentId)) {
      this.selectedStudentId = allDisplayStudents[0]?.id || null;
    }
    const query = this.studentSearch.trim().toLowerCase();
    const filteredStudents = allDisplayStudents.map((student) => ({
      ...student,
      selected: student.id === this.selectedStudentId
    })).filter((student) => {
      if (!query) return true;
      return [student.name, student.player, student.college, student.year, student.academicStanding, student.reputation, student.actorName]
        .some((value) => String(value || "").toLowerCase().includes(query));
    });
    const selectedStudent = allDisplayStudents.find((student) => student.id === this.selectedStudentId) || allDisplayStudents[0] || null;
    const playerStudents = filteredStudents.filter((student) => student.type === "player");
    const npcStudents = filteredStudents.filter((student) => student.type !== "player");
    const overviewSummary = buildOverviewSummary(data, allDisplayStudents);
    const studentCollegeGroups = STUDENT_COLLEGE_FOLDERS.map((folder) => {
      if (folder.collegeKey === "unassigned") {
        return {
          ...folder,
          students: npcStudents.filter((student) => normalizeCollegeKey(student.college) === "unassigned")
        };
      }
      return {
        ...folder,
        students: npcStudents.filter((student) => normalizeCollegeKey(student.college) === folder.collegeKey)
      };
    }).filter((group) => group.students.length);
    const selectedCollegeOptions = [
      ...Object.values(STRIXHAVEN_COLLEGES).map((collegeOption) => ({
        label: collegeOption.label,
        selected: normalizeCollegeKey(selectedStudent?.college) === normalizeCollegeKey(collegeOption.label)
      })),
      {
        label: "General Studies",
        selected: normalizeCollegeKey(selectedStudent?.college) === "unassigned" && selectedStudent?.college === "General Studies"
      },
      {
        label: "Unassigned",
        selected: normalizeCollegeKey(selectedStudent?.college) === "unassigned" && selectedStudent?.college !== "General Studies"
      }
    ];
    const selectedJournalRoute = selectedStudent?.type === "player"
      ? "Student Records > Player Characters"
      : `Student Records > Students > ${selectedStudent?.college || "Unassigned"}`;
    const selectedYearOptions = getSchoolYearOptions(selectedStudent?.year);
    const selectedAdvisorOptions = facultyOptions(data.faculty || [], selectedStudent?.advisorFacultyId || "");
    const selectedAdvisorName = facultyNameById(data.faculty || [], selectedStudent?.advisorFacultyId || "") || selectedStudent?.advisor || "No faculty advisor assigned";
    const selectedClassIds = new Set(selectedStudent?.selectedClassIds || []);
    const selectedCampusCommitments = selectedStudent ? buildStudentCommitments(data, selectedStudent.id) : [];
    const selectedStudentDice = selectedStudent ? buildStudentDice(data, selectedStudent.id) : [];
    const selectedClassOptions = (data.classes || []).map((classRecord) => ({
      ...classRecord,
      selected: selectedClassIds.has(classRecord.id),
      professorName: facultyNameById(data.faculty || [], classRecord.professorFacultyId || "") || classRecord.professor || "",
      professorOptions: facultyOptions(data.faculty || [], classRecord.professorFacultyId || "")
    }));
    const actorOptions = game.actors
      ? [...game.actors]
        .filter((actor) => ["character", "npc"].includes(actor.type))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((actor) => ({ id: actor.id, name: actor.name }))
      : [];
    const selectedRelationshipLinks = (selectedStudent?.relationshipLinks || []).map((link) => {
      const targetActor = link.targetActorId ? game.actors?.get(link.targetActorId) : null;
      return {
        ...link,
        targetName: targetActor?.name || "Unlinked sheet",
        targetImg: targetActor?.img || "",
        hasTarget: Boolean(targetActor),
        actorOptions: actorOptions.map((actor) => ({
          ...actor,
          selected: actor.id === link.targetActorId
        }))
      };
    });
    if (!this.selectedClassId || !(data.classes || []).some((classRecord) => classRecord.id === this.selectedClassId)) {
      this.selectedClassId = data.classes?.[0]?.id || null;
    }
    const classCatalog = (data.classes || []).map((classRecord) => ({
      ...classRecord,
      selected: classRecord.id === this.selectedClassId,
      collegeLabel: classRecord.college || "General / Unassigned",
      timeLabel: classTimeRange(classRecord),
      collegeOptions: optionListWithSelected(CLASS_COLLEGE_OPTIONS, classRecord.college || "General / Unassigned"),
      professorName: facultyNameById(data.faculty || [], classRecord.professorFacultyId || "") || classRecord.professor || "Choose professor",
      professorOptions: facultyOptions(data.faculty || [], classRecord.professorFacultyId || "")
    }));
    const selectedClass = classCatalog.find((classRecord) => classRecord.id === this.selectedClassId) || classCatalog[0] || null;
    const classCollegeGroups = Object.values(STRIXHAVEN_COLLEGES).map((collegeOption) => ({
      name: collegeOption.label,
      classes: classCatalog.filter((classRecord) => normalizeCollegeKey(classRecord.college) === normalizeCollegeKey(collegeOption.label))
    })).filter((group) => group.classes.length);
    const otherClasses = classCatalog.filter((classRecord) => !Object.values(STRIXHAVEN_COLLEGES).some((collegeOption) => normalizeCollegeKey(classRecord.college) === normalizeCollegeKey(collegeOption.label)));
    if (otherClasses.length) classCollegeGroups.push({ name: "General / Unassigned", classes: otherClasses });
    if (!this.selectedExamId || !(data.exams || []).some((exam) => exam.id === this.selectedExamId)) {
      this.selectedExamId = data.exams?.[0]?.id || null;
    }
    const examCards = (data.exams || []).map((exam) => ({
      ...exam,
      selected: exam.id === this.selectedExamId,
      collapsed: this.collapsedExamIds.has(exam.id),
      classSummary: exam.className || "No class selected",
      classOptions: [
        { id: "", label: "Choose class...", selected: !exam.classId },
        ...(data.classes || []).map((classRecord) => ({
          id: classRecord.id,
          label: classRecord.name || "Unnamed Class",
          selected: classRecord.id === exam.classId
        }))
      ],
      checkOneOptions: EXAM_CHECK_OPTIONS.map((option) => ({ label: option, selected: option === exam.checkOne })),
      checkTwoOptions: EXAM_CHECK_OPTIONS.map((option) => ({ label: option, selected: option === exam.checkTwo })),
      studentResults: (exam.results || []).map((result) => {
        const student = data.students.find((entry) => entry.id === result.studentId);
        return {
          ...result,
          studentName: student?.name || "Unknown Student",
          actorId: student?.actorId || "",
          standing: student?.academicStanding || "",
          standingScore: student?.academicStandingScore ?? ""
        };
      })
    }));
    const selectedExam = examCards.find((exam) => exam.id === this.selectedExamId) || examCards[0] || null;
    const examClassGroups = (data.classes || []).map((classRecord) => ({
      name: classRecord.name || "Unnamed Class",
      exams: examCards.filter((exam) => exam.classId === classRecord.id)
    })).filter((group) => group.exams.length);
    const unassignedExams = examCards.filter((exam) => !exam.classId || !(data.classes || []).some((classRecord) => classRecord.id === exam.classId));
    if (unassignedExams.length) examClassGroups.push({ name: "Unassigned Exams", exams: unassignedExams });
    if (!this.selectedClubId || !(data.clubs || []).some((club) => club.id === this.selectedClubId)) {
      this.selectedClubId = data.clubs?.[0]?.id || null;
    }
    const clubCards = (data.clubs || []).map((club) => ({
      ...club,
      selected: club.id === this.selectedClubId,
      studentCount: (club.studentIds || []).length,
      overseerName: facultyNameById(data.faculty || [], club.overseerFacultyId || "") || club.overseer || "No overseer assigned",
      overseerOptions: facultyOptions(data.faculty || [], club.overseerFacultyId || ""),
      skillOneOptions: [
        { label: "Choose skill...", value: "", selected: !club.skillOne },
        ...STUDENT_DIE_SKILL_OPTIONS.map((skill) => ({ label: skill, value: skill, selected: club.skillOne === skill }))
      ],
      skillTwoOptions: [
        { label: "Choose skill...", value: "", selected: !club.skillTwo },
        ...STUDENT_DIE_SKILL_OPTIONS.map((skill) => ({ label: skill, value: skill, selected: club.skillTwo === skill }))
      ],
      playerOptions: allDisplayStudents.filter((student) => student.type === "player").map((student) => ({
        id: student.id,
        name: student.name,
        detail: [student.player || "Player Character", student.college].filter(Boolean).join(" • "),
        selected: (club.studentIds || []).includes(student.id)
      })),
      npcOptions: allDisplayStudents.filter((student) => student.type !== "player").map((student) => ({
        id: student.id,
        name: student.name,
        detail: ["Student NPC", student.college].filter(Boolean).join(" • "),
        selected: (club.studentIds || []).includes(student.id)
      }))
    }));
    const selectedClub = clubCards.find((club) => club.id === this.selectedClubId) || clubCards[0] || null;
    if (!this.selectedJobId || !(data.jobs || []).some((job) => job.id === this.selectedJobId)) {
      this.selectedJobId = data.jobs?.[0]?.id || null;
    }
    const jobCards = (data.jobs || []).map((job) => ({
      ...job,
      selected: job.id === this.selectedJobId,
      studentCount: (job.studentIds || []).length,
      wageLabel: formatJobWage(job),
      playerOptions: allDisplayStudents.filter((student) => student.type === "player").map((student) => ({
        id: student.id,
        name: student.name,
        detail: [student.player || "Player Character", student.college].filter(Boolean).join(TEXT_SEPARATOR),
        selected: (job.studentIds || []).includes(student.id),
        alreadyEmployed: Boolean((data.jobs || []).some((entry) => entry.id !== job.id && (entry.studentIds || []).includes(student.id)))
      })),
      npcOptions: allDisplayStudents.filter((student) => student.type !== "player").map((student) => ({
        id: student.id,
        name: student.name,
        detail: ["Student NPC", student.college].filter(Boolean).join(TEXT_SEPARATOR),
        selected: (job.studentIds || []).includes(student.id),
        alreadyEmployed: Boolean((data.jobs || []).some((entry) => entry.id !== job.id && (entry.studentIds || []).includes(student.id)))
      }))
    }));
    const selectedJob = jobCards.find((job) => job.id === this.selectedJobId) || jobCards[0] || null;
    if (!this.selectedCampusLocationId || !(data.campusLocations || []).some((location) => location.id === this.selectedCampusLocationId)) {
      this.selectedCampusLocationId = data.campusLocations?.[0]?.id || null;
    }
    const campusLocationCards = (data.campusLocations || []).map((location) => ({
      ...location,
      selected: location.id === this.selectedCampusLocationId,
      collegeLabel: location.college || "General / Unassigned",
      collegeOptions: optionListWithSelected(CLASS_COLLEGE_OPTIONS, location.college || "General / Unassigned")
    }));
    const selectedCampusLocation = campusLocationCards.find((location) => location.id === this.selectedCampusLocationId) || campusLocationCards[0] || null;
    const facultyDirectory = (data.faculty || []).map((faculty) => {
      const actor = faculty.actorId ? game.actors?.get(faculty.actorId) : null;
      return {
        ...faculty,
        displayName: actor?.name || faculty.name || "Unnamed Faculty",
        img: actor?.img || "",
        hasActor: Boolean(actor),
        selected: faculty.id === this.selectedFacultyId,
        collegeLabel: faculty.college || "Unassigned",
        roleLabel: faculty.role || "Faculty",
        statusLabel: faculty.status || "Available",
        roleOptions: optionListWithSelected(data.tools?.facultyRoles, faculty.role || "Professor"),
        departmentOptions: optionListWithSelected(data.tools?.facultyDepartments, faculty.college || "General Studies")
      };
    });
    if (!this.selectedFacultyId || !facultyDirectory.some((faculty) => faculty.id === this.selectedFacultyId)) {
      this.selectedFacultyId = facultyDirectory[0]?.id || null;
    }
    const selectedFaculty = facultyDirectory.find((faculty) => faculty.id === this.selectedFacultyId) || facultyDirectory[0] || null;
    const facultyCollegeGroups = Object.values(STRIXHAVEN_COLLEGES).map((collegeOption) => ({
      name: collegeOption.label,
      faculty: facultyDirectory.filter((faculty) => normalizeCollegeKey(faculty.college) === normalizeCollegeKey(collegeOption.label))
    })).filter((group) => group.faculty.length);
    const staffFaculty = facultyDirectory.filter((faculty) => !Object.values(STRIXHAVEN_COLLEGES).some((collegeOption) => normalizeCollegeKey(faculty.college) === normalizeCollegeKey(collegeOption.label)));
    if (staffFaculty.length) facultyCollegeGroups.push({ name: "Staff & General Studies", faculty: staffFaculty });
    return {
      moduleId: MODULE_ID,
      data,
      college,
      collegeKey: data.focus?.college || "silverquill",
      toolSettings: {
        schoolYearCount: Math.max(1, Number(game.settings.get(MODULE_ID, "schoolYearCount") || 4)),
        facultyRolesText: normalizeOptionList(data.tools?.facultyRoles, DEFAULT_FACULTY_ROLES).join("\n"),
        facultyDepartmentsText: normalizeOptionList(data.tools?.facultyDepartments, DEFAULT_FACULTY_DEPARTMENTS).join("\n")
      },
      schoolAgenda: buildSchoolAgenda(data),
      livingSchedule: buildLivingCalendarSchedule(data),
      overviewSummary,
      calendarMonth: buildSimpleCalendarMonth(data),
      calendarPlanner: {
        timeBlocks: CALENDAR_TIME_BLOCKS
      },
      activeTabs: {
        overview: this.activeGmTab === "overview",
        students: this.activeGmTab === "students",
        faculty: this.activeGmTab === "faculty",
        classes: this.activeGmTab === "classes",
        exams: this.activeGmTab === "exams",
        clubs: this.activeGmTab === "clubs",
        jobs: this.activeGmTab === "jobs",
        campus: this.activeGmTab === "campus",
        calendar: this.activeGmTab === "calendar",
        story: this.activeGmTab === "story",
        tools: this.activeGmTab === "tools"
      },
      studentSearch: this.studentSearch,
      playerStudents,
      npcStudents,
      studentCollegeGroups,
      selectedStudent,
      selectedJournalRoute,
      selectedCollegeOptions,
      selectedYearOptions,
      selectedAdvisorOptions,
      selectedAdvisorName,
      selectedClassOptions,
      selectedCampusCommitments,
      selectedStudentDice,
      facultyDirectory,
      facultyCollegeGroups,
      selectedFaculty,
      classCatalog,
      classCollegeGroups,
      selectedClass,
      examCards,
      examClassGroups,
      selectedExam,
      clubCards,
      selectedClub,
      jobCards,
      selectedJob,
      campusLocationCards,
      selectedCampusLocation,
      selectedRelationshipLinks,
      actorOptions,
      studentStats: {
        playerCount: playerStudents.length,
        npcCount: npcStudents.length,
        totalCount: playerStudents.length + npcStudents.length,
        activeCollege: selectedStudent?.college || "Unassigned"
      },
      colleges: Object.entries(STRIXHAVEN_COLLEGES).map(([key, value]) => ({
        key,
        ...value,
        selected: key === data.focus?.college
      }))
    };
  }

  activateListeners(html) {
    super.activateListeners(html);
    this._restoreScrollPosition();
    html[0]?.addEventListener("click", () => this._captureScrollPosition(), true);
    html[0]?.addEventListener("change", () => this._captureScrollPosition(), true);
    html.find("[data-action='save-overview']").on("click", this._saveOverview.bind(this));
    html.find("[data-action='save-all-changes']").on("click", this._saveAllVisibleChanges.bind(this));
    html.find("[data-action='advance-day']").on("click", this._advanceDay.bind(this));
    html.find("[data-action='generate-event']").on("click", this._generateEvent.bind(this));
    html.find("[data-action='generate-rumor']").on("click", this._generateRumor.bind(this));
    html.find("[data-action='add-row']").on("click", this._addRow.bind(this));
    html.find("[data-action='delete-row']").on("click", this._deleteRow.bind(this));
    html.find("[data-action='save-row']").on("change", this._markUnsaved.bind(this));
    html.find("[data-action='save-exam-result']").on("change", this._markUnsaved.bind(this));
    html.find("[data-action='toggle-exam-collapse']").on("click", this._toggleExamCollapse.bind(this));
    html.find("[data-action='push-exam-roll']").on("click", this._pushExamRoll.bind(this));
    html.find("[data-action='push-exam-roll-all']").on("click", this._pushExamRollAll.bind(this));
    html.find("[data-action='apply-exam-standing']").on("click", this._applyExamStanding.bind(this));
    html.find("[data-action='open-calendar-day']").on("click", this._openCalendarDay.bind(this));
    html.find("[data-action='add-student']").on("click", this._addStudent.bind(this));
    html.find("[data-action='add-faculty']").on("click", this._addFaculty.bind(this));
    html.find("[data-action='select-student']").on("click", this._selectStudent.bind(this));
    html.find("[data-action='select-faculty']").on("click", this._selectFaculty.bind(this));
    html.find("[data-action='select-class']").on("click", this._selectClass.bind(this));
    html.find("[data-action='select-exam']").on("click", this._selectExam.bind(this));
    html.find("[data-action='select-club']").on("click", this._selectClub.bind(this));
    html.find("[data-action='select-job']").on("click", this._selectJob.bind(this));
    html.find("[data-action='select-campus-location']").on("click", this._selectCampusLocation.bind(this));
    html.find("[data-action='save-student']").on("change", this._markUnsaved.bind(this));
    html.find("[data-action='toggle-student-class']").on("change", this._markUnsaved.bind(this));
    html.find("[data-action='toggle-club-student']").on("change", this._markUnsaved.bind(this));
    html.find("[data-action='toggle-job-student']").on("change", this._markUnsaved.bind(this));
    html.find("[data-action='add-relationship']").on("click", this._addRelationship.bind(this));
    html.find("[data-action='save-relationship']").on("change", this._markUnsaved.bind(this));
    html.find("[data-action='adjust-relationship-score']").on("click", this._adjustRelationshipScore.bind(this));
    html.find("[data-action='delete-relationship']").on("click", this._deleteRelationship.bind(this));
    html.find("[data-action='student-search']").on("input", this._searchStudents.bind(this));
    html.find("[data-action='open-actor']").on("click", this._openStudentActor.bind(this));
    html.find("[data-action='sync-journal']").on("click", this._syncJournal.bind(this));
    html.find("[data-action='save-tools-settings']").on("click", this._saveToolsSettings.bind(this));
    html.find("[data-action='reset-manager']").on("click", this._resetManager.bind(this));
    html.find("[data-crystal-tab]").on("click", this._switchTab.bind(this));
    html.find("[data-gm-tab]").on("click", this._switchGmTab.bind(this));
    html.find(".club-card summary input, .club-card summary select, .club-card summary button").on("click", (event) => event.stopPropagation());
  }

  _switchTab(event) {
    event.preventDefault();
    const tab = event.currentTarget.dataset.crystalTab;
    const root = this.element[0];
    root.querySelectorAll("[data-crystal-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.crystalTab === tab);
    });
    root.querySelectorAll("[data-crystal-page]").forEach((page) => {
      page.classList.toggle("active", page.dataset.crystalPage === tab);
    });
  }

  _switchGmTab(event) {
    event.preventDefault();
    const tab = event.currentTarget.dataset.gmTab;
    this.activeGmTab = tab;
    const root = this.element[0];
    root.querySelectorAll("[data-gm-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.gmTab === tab);
    });
    root.querySelectorAll("[data-gm-page]").forEach((page) => {
      page.classList.toggle("active", page.dataset.gmPage === tab);
    });
  }

  _markUnsaved() {
    const button = this.element?.[0]?.querySelector("[data-action='save-all-changes']");
    button?.classList.add("unsaved");
  }

  _readFormControl(input) {
    if (!input) return "";
    if (input.type === "checkbox") return input.checked;
    if (input.type === "number") return Number(input.value || 0);
    return input.value;
  }

  _applyOverviewFields(data) {
    const form = this.element?.[0];
    if (!form) return;
    data.calendar.term = fieldValue(form, "calendar.term", data.calendar.term);
    data.calendar.week = Math.max(1, numberValue(form, "calendar.week", data.calendar.week));
    data.calendar.day = fieldValue(form, "calendar.day", data.calendar.day);
    data.calendar.timeOfDay = fieldValue(form, "calendar.timeOfDay", data.calendar.timeOfDay);
    data.calendar.notes = fieldValue(form, "calendar.notes", data.calendar.notes);
    data.focus.college = fieldValue(form, "focus.college", data.focus.college);
    data.focus.currentArc = fieldValue(form, "focus.currentArc", data.focus.currentArc);
    data.focus.activeMystery = fieldValue(form, "focus.activeMystery", data.focus.activeMystery);
  }

  async _saveAllVisibleChanges(event) {
    event.preventDefault();
    this._captureScrollPosition();
    const root = this.element?.[0];
    if (!root) return;
    const data = await getCampaignData();
    this._applyOverviewFields(data);

    root.querySelectorAll("[data-action='save-student']").forEach((input) => {
      const id = input.dataset.id;
      const field = input.dataset.field;
      const actorId = input.dataset.actorId || "";
      let student = data.students.find((entry) => entry.id === id);
      if (!student && actorId) {
        const actor = game.actors?.get(actorId);
        student = { ...defaultStudent(actor?.name || "Player Character", "player"), id, actorId };
        data.students.push(student);
      }
      if (!student || !field) return;
      if (student.type === "player" && ["name", "player", "actorId"].includes(field)) return;
      student[field] = this._readFormControl(input);
      if (field === "academicStandingScore") {
        student.academicStandingScore = Math.max(-100, Math.min(100, Number(student.academicStandingScore || 0)));
        student.academicStanding = academicStandingFromScore(student.academicStandingScore);
      }
      if (field === "advisorFacultyId") student.advisor = facultyNameById(data.faculty || [], student.advisorFacultyId);
    });

    const classSelections = new Map();
    root.querySelectorAll("[data-action='toggle-student-class']").forEach((input) => {
      const studentId = input.dataset.studentId;
      if (!studentId) return;
      if (!classSelections.has(studentId)) classSelections.set(studentId, []);
      if (input.checked) classSelections.get(studentId).push(input.dataset.classId);
    });
    for (const [studentId, selectedClassIds] of classSelections.entries()) {
      const student = data.students.find((entry) => entry.id === studentId);
      if (!student) continue;
      student.selectedClassIds = selectedClassIds.filter(Boolean);
      syncStudentClassSummary(student, data.classes || []);
    }

    root.querySelectorAll("[data-action='save-relationship']").forEach((input) => {
      const student = data.students.find((entry) => entry.id === input.dataset.studentId);
      const link = student?.relationshipLinks?.find((entry) => entry.id === input.dataset.relationshipId);
      const field = input.dataset.field;
      if (!link || !field) return;
      link[field] = this._readFormControl(input);
      if (field === "score") link.status = relationshipStatusFromScore(link.score);
    });

    root.querySelectorAll("[data-action='save-row']").forEach((input) => {
      const collection = input.dataset.collection;
      const id = input.dataset.id;
      const field = input.dataset.field;
      const row = data[collection]?.find((entry) => entry.id === id);
      if (!row || !field) return;
      row[field] = this._readFormControl(input);
    });

    for (const classRecord of data.classes || []) {
      classRecord.professor = facultyNameById(data.faculty || [], classRecord.professorFacultyId) || classRecord.professor || "";
    }
    syncAllStudentClassSummaries(data);

    for (const exam of data.exams || []) {
      exam.className = data.classes?.find((classRecord) => classRecord.id === exam.classId)?.name || exam.className || "";
    }

    root.querySelectorAll("[data-action='save-exam-result']").forEach((input) => {
      const exam = data.exams?.find((entry) => entry.id === input.dataset.examId);
      const result = exam?.results?.find((entry) => entry.id === input.dataset.resultId);
      const field = input.dataset.field;
      if (!exam || !result || !field) return;
      result[field] = this._readFormControl(input);
      normalizeExamResult(result, exam);
    });

    const clubSelections = new Map();
    root.querySelectorAll("[data-action='toggle-club-student']").forEach((input) => {
      const clubId = input.dataset.clubId;
      if (!clubId) return;
      if (!clubSelections.has(clubId)) clubSelections.set(clubId, []);
      if (input.checked) clubSelections.get(clubId).push(input.dataset.studentId);
    });
    for (const club of data.clubs || []) {
      if (clubSelections.has(club.id)) club.studentIds = clubSelections.get(club.id).filter(Boolean);
      club.skills = [club.skillOne, club.skillTwo].filter(Boolean).join(", ");
      club.overseer = facultyNameById(data.faculty || [], club.overseerFacultyId);
      for (const studentId of club.studentIds || []) await syncStudentExtracurricularFlags(data, studentId);
    }

    const assignedJobStudentIds = new Set();
    const jobSelections = new Map();
    root.querySelectorAll("[data-action='toggle-job-student']").forEach((input) => {
      const jobId = input.dataset.jobId;
      const studentId = input.dataset.studentId;
      if (!jobId || !studentId) return;
      if (!jobSelections.has(jobId)) jobSelections.set(jobId, []);
      if (!input.checked || assignedJobStudentIds.has(studentId)) return;
      assignedJobStudentIds.add(studentId);
      jobSelections.get(jobId).push(studentId);
    });
    for (const job of data.jobs || []) {
      if (jobSelections.has(job.id)) job.studentIds = jobSelections.get(job.id);
      else if ([...jobSelections.keys()].length) job.studentIds = [];
      normalizeJobRecord(job);
      for (const studentId of job.studentIds || []) await syncStudentJobFlags(data, studentId);
    }

    const yearCountInput = root.querySelector('[name="tools.schoolYearCount"]');
    if (yearCountInput) {
      const yearCount = Math.max(1, Math.min(10, Number(yearCountInput.value || 4)));
      await game.settings.set(MODULE_ID, "schoolYearCount", yearCount);
    }
    const roleOptionsInput = root.querySelector('[name="tools.facultyRoles"]');
    if (roleOptionsInput) data.tools.facultyRoles = textareaOptionList(roleOptionsInput.value, DEFAULT_FACULTY_ROLES);
    const departmentOptionsInput = root.querySelector('[name="tools.facultyDepartments"]');
    if (departmentOptionsInput) data.tools.facultyDepartments = textareaOptionList(departmentOptionsInput.value, DEFAULT_FACULTY_DEPARTMENTS);

    await setCampaignData(normalizeCampaignData(data), { render: false });
    root.querySelector("[data-action='save-all-changes']")?.classList.remove("unsaved");
    ui.notifications.info("Vital Quest changes saved.");
    this.render();
  }

  async _saveOverview(event) {
    event.preventDefault();
    this._captureScrollPosition();
    const data = await getCampaignData();
    const form = this.element[0];
    data.calendar.term = fieldValue(form, "calendar.term", data.calendar.term);
    data.calendar.week = Math.max(1, numberValue(form, "calendar.week", data.calendar.week));
    data.calendar.day = fieldValue(form, "calendar.day", data.calendar.day);
    data.calendar.timeOfDay = fieldValue(form, "calendar.timeOfDay", data.calendar.timeOfDay);
    data.calendar.notes = fieldValue(form, "calendar.notes", data.calendar.notes);
    data.focus.college = fieldValue(form, "focus.college", data.focus.college);
    data.focus.currentArc = fieldValue(form, "focus.currentArc", data.focus.currentArc);
    data.focus.activeMystery = fieldValue(form, "focus.activeMystery", data.focus.activeMystery);
    await setCampaignData(data);
    ui.notifications.info("Strixhaven overview saved.");
    this.render();
  }

  async _advanceDay(event) {
    event.preventDefault();
    this._captureScrollPosition();
    const advancedCalendar = await advanceSimpleCalendarDay();
    if (advancedCalendar) {
      ui.notifications.info("Advanced Simple Calendar Reborn by one day.");
      this.render();
      return;
    }

    const data = await getCampaignData();
    const days = ["Moonday", "Toilsday", "Wandsday", "Thelsday", "Fryday", "Standday", "Sunsday"];
    const current = days.indexOf(data.calendar.day);
    const next = current >= 0 ? (current + 1) % days.length : 0;
    data.calendar.day = days[next];
    data.calendar.timeOfDay = "Morning";
    if (next === 0) data.calendar.week = Math.max(1, Number(data.calendar.week || 1) + 1);
    await setCampaignData(data);
    ui.notifications.info(`Advanced to ${data.calendar.day}, Week ${data.calendar.week}.`);
    this.render();
  }

  async _openCalendarDay(event) {
    event.preventDefault();
    this._captureScrollPosition();
    const date = JSON.parse(event.currentTarget.dataset.date || "{}");
    const data = await getCampaignData();
    const dayContents = buildCalendarDayContents(data, date);
    if (dayContents.length) {
      const shouldCreate = await this._showCalendarDayContents(date, dayContents);
      if (!shouldCreate) return;
    }
    const result = await this._showCalendarPlanner(date, data);
    if (!result) return;

    const note = await createSimpleCalendarPlanningNote(result);
    if (!note) {
      ui.notifications.warn("Vital Quest could not create a Simple Calendar note. Make sure Simple Calendar Reborn is active and ready.");
      return;
    }

    data.calendarEvents = data.calendarEvents || [];
    data.calendarEvents.push({
      id: foundry.utils.randomID(),
      title: result.title,
      type: result.type,
      sourceId: result.sourceId,
      participantId: result.participantId || "all",
      participantName: result.participantName || "All Player Characters",
      participantActorId: result.participantActorId || "",
      date: result.date,
      time: result.time,
      block: result.block,
      noteId: note.id || "",
      details: result.details || ""
    });
    await setCampaignData(data);
    ui.notifications.info("Added Vital Quest event to Simple Calendar.");
    this.render();
  }

  _showCalendarDayContents(date, items = []) {
    const dayLabel = calendarEventDateLabel({ date });
    const itemHtml = items.map((item) => `
      <article class="day-content-item" data-event-id="${escapeHtml(item.eventId || "")}" data-note-id="${escapeHtml(item.noteId || "")}">
        <time>${escapeHtml(item.time || "All day")}</time>
        <div>
          <strong>${escapeHtml(item.title || "Calendar Event")}</strong>
          <span>${escapeHtml([item.type, item.source].filter(Boolean).join(TEXT_SEPARATOR))}</span>
          ${item.subtitle ? `<p>${escapeHtml(item.subtitle)}</p>` : ""}
        </div>
        <button type="button" class="icon danger" data-action="delete-calendar-content" data-event-id="${escapeHtml(item.eventId || "")}" data-note-id="${escapeHtml(item.noteId || "")}" data-title="${escapeHtml(item.title || "Calendar Event")}">
          <i class="fas fa-trash"></i>
        </button>
      </article>
    `).join("");
    return new Promise((resolve) => {
      let resolved = false;
      let dialogApp = null;
      const finish = (value) => {
        if (resolved) return;
        resolved = true;
        resolve(value);
        dialogApp?.close();
      };
      dialogApp = new Dialog({
        title: `Contents: ${dayLabel}`,
        content: `
          <section class="vq-day-contents">
            <header class="day-contents-hero">
              <div>
                <span class="section-label">Calendar Contents</span>
                <h2>${escapeHtml(dayLabel)}</h2>
                <p>${items.length} scheduled item${items.length === 1 ? "" : "s"} found for this date.</p>
              </div>
              <button type="button" class="primary" data-action="create-day-event">
                <i class="fas fa-calendar-plus"></i> Create New Event
              </button>
            </header>
            <div class="day-content-list">
              ${itemHtml}
            </div>
          </section>
        `,
        buttons: {
          close: {
            icon: '<i class="fas fa-times"></i>',
            label: "Close",
            callback: () => finish(false)
          }
        },
        default: "close",
        render: (html) => {
          html.closest(".app").addClass("vital-quest-dialog vq-planner-dialog vq-day-contents-dialog");
          html.find("[data-action='create-day-event']").on("click", () => finish(true));
          html.find("[data-action='delete-calendar-content']").on("click", async (clickEvent) => {
            const deleted = await this._deleteCalendarContentItem(clickEvent);
            if (deleted) finish(false);
          });
        },
        close: () => finish(false)
      }, {
        classes: ["vital-quest-dialog", "vq-planner-dialog", "vq-day-contents-dialog"],
        width: 620,
        resizable: true
      }).render(true);
    });
  }

  async _deleteCalendarContentItem(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const eventId = button.dataset.eventId || "";
    const noteId = button.dataset.noteId || "";
    const title = button.dataset.title || "Calendar Event";
    const confirmed = await Dialog.confirm({
      title: "Delete Calendar Event?",
      content: `<p>Delete <strong>${escapeHtml(title)}</strong>? If this item has a Simple Calendar note, that note will be deleted too.</p>`
    });
    if (!confirmed) return false;

    const data = await getCampaignData();
    const linkedEvent = eventId
      ? data.calendarEvents?.find((entry) => entry.id === eventId)
      : noteId
        ? data.calendarEvents?.find((entry) => entry.noteId === noteId)
        : null;
    const linkedNoteId = noteId || linkedEvent?.noteId || "";
    if (linkedEvent) {
      await removeLinkedCalendarEvents(data, (calendarEvent) => {
        if (eventId && calendarEvent.id === eventId) return true;
        if (noteId && calendarEvent.noteId === noteId) return true;
        return false;
      });
    } else if (linkedNoteId) {
      const removed = await removeSimpleCalendarPlanningNote(linkedNoteId);
      if (!removed) ui.notifications.warn("Vital Quest could not remove the Simple Calendar note. It may already be gone.");
    }
    await setCampaignData(data);
    ui.notifications.info("Deleted calendar event.");
    this.render();
    return true;
  }

  _showCalendarPlanner(date, data) {
    const playerActors = getPlayerCharacterActors();
    const participantOptions = [
      { id: "all", label: "All Player Characters", detail: "Push this schedule item to the whole party" },
      ...playerActors.map((actor) => {
        const student = schoolOverlayForActor(data, actor);
        return {
          id: student.id,
          actorId: actor.id,
          label: actor.name,
          detail: [student.college, student.year].filter(Boolean).join(TEXT_SEPARATOR)
        };
      })
    ];
    const optionGroups = {
      classes: (data.classes || []).map((entry) => ({ id: entry.id, label: entry.name || "Unnamed Class", detail: [entry.professor, entry.location].filter(Boolean).join(" • ") })),
      exams: (data.exams || []).map((entry) => ({ id: entry.id, label: entry.name || "Unnamed Exam", detail: entry.className || "" })),
      clubs: (data.clubs || []).map((entry) => ({ id: entry.id, label: entry.name || "Unnamed Club", detail: entry.meeting || "" })),
      jobs: (data.jobs || []).map((entry) => ({ id: entry.id, label: entry.name || "Campus Job", detail: entry.coworker || "Campus employment" })),
      campus: (data.campusLocations?.length ? data.campusLocations : CAMPUS_EVENT_LOCATIONS.map((name) => ({ id: name, name })))
        .map((entry) => ({ id: entry.id || entry.name, label: entry.name || "Campus location", detail: entry.type || "Campus location" })),
      story: (data.quests || []).map((entry) => ({ id: entry.id, label: entry.title || "Story Event", detail: entry.status || "" }))
    };
    const typeLabels = {
      classes: "Classes",
      exams: "Exams",
      clubs: "Clubs",
      jobs: "Jobs",
      campus: "Campus",
      story: "Story"
    };
    const selectHtml = Object.entries(optionGroups).map(([type, options]) => `
      <label class="planner-record-select" data-record-type="${type}" style="${type === "classes" ? "" : "display:none"}">
        <span>${typeLabels[type]}</span>
        <select name="record-${type}">
          ${options.length ? options.map((option) => `<option value="${escapeHtml(option.id)}" data-label="${escapeHtml(option.label)}">${escapeHtml(option.label)}${option.detail ? ` — ${escapeHtml(option.detail)}` : ""}</option>`).join("") : `<option value="">No ${escapeHtml(typeLabels[type])} available</option>`}
        </select>
      </label>
    `).join("");
    const participantHtml = participantOptions.map((option) => `
      <option value="${escapeHtml(option.id)}" data-label="${escapeHtml(option.label)}" data-actor-id="${escapeHtml(option.actorId || "")}">
        ${escapeHtml(option.label)}
      </option>
    `).join("");
    const blockButtons = CALENDAR_TIME_BLOCKS.map((block, index) => `
      <button type="button" class="planner-block ${index === 0 ? "active" : ""}" data-block="${block.key}" data-time="${block.defaultTime}">
        <i class="fas ${block.icon}"></i>
        <span>${block.label}</span>
      </button>
    `).join("");
    const typeButtons = Object.entries(typeLabels).map(([type, label], index) => `
      <button type="button" class="planner-type ${index === 0 ? "active" : ""}" data-type="${type}">${label}</button>
    `).join("");
    const dayLabel = `${date.monthName || "Selected Month"} ${date.dayNumber || Number(date.day || 0) + 1}`;

    return new Promise((resolve) => {
      new Dialog({
        title: `Plan ${dayLabel}`,
        content: `
          <form class="vq-calendar-planner">
            <section class="planner-intro-card">
              <span class="section-label">Calendar Contract</span>
              <p>Choose who participates, when it happens, and what kind of school event the calendar should remember.</p>
            </section>
            <input type="hidden" name="block" value="morning">
            <input type="hidden" name="type" value="classes">
            <section class="planner-section">
              <span class="section-label">Participation</span>
              <label class="planner-participant-select">
                <span>Schedule Applies To</span>
                <select name="participant">${participantHtml}</select>
                <small>Use All Player Characters for party-wide schedules, or choose one student for personal commitments.</small>
              </label>
            </section>
            <section class="planner-section">
              <span class="section-label">Time of Day</span>
              <div class="planner-button-grid">${blockButtons}</div>
            </section>
            <section class="planner-reveal">
              <span class="section-label">What happens?</span>
              <div class="planner-button-grid five">${typeButtons}</div>
              <div class="planner-selects">${selectHtml}</div>
              <div class="planner-field-grid">
                <label>
                  <span>Exact Time</span>
                  <input type="text" name="time" value="8:00 AM" placeholder="8:00 AM">
                </label>
              </div>
              <label class="planner-details-field">
                <span>DM Details</span>
                <textarea name="details" placeholder="Lesson note, exam pressure, club meeting, school event, or story beat..."></textarea>
              </label>
            </section>
          </form>
        `,
        buttons: {
          create: {
            icon: '<i class="fas fa-calendar-plus"></i>',
            label: "Add Calendar Note",
            callback: (html) => {
              const form = html[0].querySelector("form");
              const type = form.elements.type.value;
              const select = form.querySelector(`[name="record-${type}"]`);
              const selected = select?.selectedOptions?.[0];
              const label = selected?.dataset?.label || selected?.textContent || typeLabels[type];
              const block = form.elements.block.value;
              const blockLabel = CALENDAR_TIME_BLOCKS.find((entry) => entry.key === block)?.label || "Day";
              const time = form.elements.time.value || CALENDAR_TIME_BLOCKS.find((entry) => entry.key === block)?.defaultTime || "8:00 AM";
              const details = form.elements.details.value || "";
              const participant = form.elements.participant?.selectedOptions?.[0];
              const participantId = participant?.value || "all";
              const participantName = participant?.dataset?.label || "All Player Characters";
              const participantActorId = participant?.dataset?.actorId || "";
              const title = `${blockLabel}: ${label}`;
              const content = `
                <h2>${escapeHtml(title)}</h2>
                <p><strong>Vital Quest Type:</strong> ${escapeHtml(typeLabels[type])}</p>
                <p><strong>Participants:</strong> ${escapeHtml(participantName)}</p>
                <p><strong>Time:</strong> ${escapeHtml(time)}</p>
                <p><strong>Details:</strong> ${escapeHtml(details || "No additional details entered.")}</p>
              `;
              resolve({ title, content, date, time, block, type, sourceId: selected?.value || "", details, participantId, participantName, participantActorId });
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancel",
            callback: () => resolve(null)
          }
        },
        default: "create",
        render: (html) => {
          html.closest(".app").addClass("vital-quest-dialog vq-planner-dialog");
          html.find(".planner-block").on("click", (clickEvent) => {
            const button = clickEvent.currentTarget;
            html.find(".planner-block").removeClass("active");
            button.classList.add("active");
            html.find("[name='block']").val(button.dataset.block);
            html.find("[name='time']").val(button.dataset.time);
          });
          html.find(".planner-type").on("click", (clickEvent) => {
            const button = clickEvent.currentTarget;
            html.find(".planner-type").removeClass("active");
            button.classList.add("active");
            html.find("[name='type']").val(button.dataset.type);
            html.find(".planner-record-select").hide();
            html.find(`[data-record-type='${button.dataset.type}']`).show();
          });
        },
        close: () => resolve(null)
      }, {
        classes: ["vital-quest-dialog", "vq-planner-dialog"],
        width: 680,
        resizable: true
      }).render(true);
    });
  }

  async _generateEvent(event) {
    event.preventDefault();
    const data = await getCampaignData();
    data.generated.event = CAMPUS_EVENTS[Math.floor(Math.random() * CAMPUS_EVENTS.length)];
    await setCampaignData(data);
    this.render();
  }

  async _generateRumor(event) {
    event.preventDefault();
    const data = await getCampaignData();
    data.generated.rumor = RUMORS[Math.floor(Math.random() * RUMORS.length)];
    await setCampaignData(data);
    this.render();
  }

  async _addRow(event) {
    event.preventDefault();
    const collection = event.currentTarget.dataset.collection;
    if (collection === "faculty") return this._addFaculty(event);
    const data = await getCampaignData();
    const promptByCollection = {
      classes: promptClassCreation,
      exams: promptExamCreation,
      clubs: promptClubCreation,
      jobs: promptJobCreation
    };
    if (promptByCollection[collection]) {
      const created = await promptByCollection[collection](data);
      if (!created) return;
      data[collection] = data[collection] || [];
      data[collection].push(created);
      if (collection === "classes") syncAllStudentClassSummaries(data);
      if (collection === "classes") this.selectedClassId = created.id;
      if (collection === "exams") this.selectedExamId = created.id;
      if (collection === "clubs") this.selectedClubId = created.id;
      if (collection === "jobs") this.selectedJobId = created.id;
      this.activeGmTab = collection;
      await setCampaignData(data);
      this.render();
      return;
    }
    const defaults = {
      classes: { name: "New Class", professor: "", professorFacultyId: "", college: "", term: "", startTime: "", endTime: "", location: "", status: "Active", notes: "" },
      exams: { name: "New Exam", classId: "", className: "", due: "", status: "Planned", dc: 13, checkOne: "Arcana", checkTwo: "History", stakes: "", notes: "", results: [] },
      clubs: { name: "New Extracurricular", skills: "", skillOne: "", skillTwo: "", npcMembers: "", description: "", members: "", meeting: "Start of academic year", overseerFacultyId: "", overseer: "", studentIds: [], relationshipNotes: "", notes: "" },
      jobs: { name: "New Campus Job", positions: "", coworker: "", description: "", wageGold: 5, wageSilver: 0, wageCopper: 0, studentIds: [], relationshipNotes: "", notes: "" },
      campusLocations: defaultCampusLocation(),
      faculty: { name: "New Faculty", role: "Professor", college: "", office: "", schedule: "", status: "Available", notes: "", actorId: "" },
      relationships: { name: "New NPC", role: "", college: "", score: 0, bond: "", notes: "" },
      quests: { title: "New Campaign Thread", type: "", status: "Active", notes: "" }
    };
    if (!data[collection] || !defaults[collection]) return;
    const created = collection === "campusLocations" ? defaults[collection] : { id: foundry.utils.randomID(), ...defaults[collection] };
    data[collection].push(created);
    if (collection === "campusLocations") {
      this.selectedCampusLocationId = created.id;
      this.activeGmTab = "campus";
    }
    await setCampaignData(data);
    this.render();
  }

  async _addStudent(event) {
    event.preventDefault();
    this.activeGmTab = "students";
    const created = await promptNpcStudentCreation();
    if (!created?.student) return;
    const data = await getCampaignData();
    const student = created.student;
    data.students.push(student);
    this.selectedStudentId = student.id;
    await setCampaignData(data);
    vitalQuestJournalLock = true;
    try {
      await syncVitalQuestToJournal(data);
    } finally {
      vitalQuestJournalLock = false;
    }
    this.render();
    if (created.actor) created.actor.sheet?.render(true);
  }

  async _addFaculty(event) {
    event.preventDefault();
    this.activeGmTab = "faculty";
    const data = await getCampaignData();
    const created = await promptFacultyCreation(data);
    if (!created?.faculty) return;
    data.faculty = data.faculty || [];
    data.faculty.push(created.faculty);
    this.selectedFacultyId = created.faculty.id;
    await setCampaignData(data);
    vitalQuestJournalLock = true;
    try {
      await syncVitalQuestToJournal(data);
    } finally {
      vitalQuestJournalLock = false;
    }
    this.render();
    if (created.actor) created.actor.sheet?.render(true);
  }

  _selectStudent(event) {
    event.preventDefault();
    this.activeGmTab = "students";
    this.selectedStudentId = event.currentTarget.dataset.id;
    this.render();
  }

  _selectFaculty(event) {
    event.preventDefault();
    this.activeGmTab = "faculty";
    this.selectedFacultyId = event.currentTarget.dataset.id;
    this.render();
  }

  _selectClass(event) {
    event.preventDefault();
    this.activeGmTab = "classes";
    this.selectedClassId = event.currentTarget.dataset.id;
    this.render();
  }

  _selectExam(event) {
    event.preventDefault();
    this.activeGmTab = "exams";
    this.selectedExamId = event.currentTarget.dataset.id;
    this.render();
  }

  _selectClub(event) {
    event.preventDefault();
    this.activeGmTab = "clubs";
    this.selectedClubId = event.currentTarget.dataset.id;
    this.render();
  }

  _selectJob(event) {
    event.preventDefault();
    this.activeGmTab = "jobs";
    this.selectedJobId = event.currentTarget.dataset.id;
    this.render();
  }

  _selectCampusLocation(event) {
    event.preventDefault();
    this.activeGmTab = "campus";
    this.selectedCampusLocationId = event.currentTarget.dataset.id;
    this.render();
  }

  _searchStudents(event) {
    this.studentSearch = event.currentTarget.value || "";
    const query = this.studentSearch.trim().toLowerCase();
    this.element[0].querySelectorAll(".student-roster-card").forEach((card) => {
      card.hidden = query && !String(card.dataset.search || "").toLowerCase().includes(query);
    });
  }

  async _saveStudent(event) {
    this._captureScrollPosition();
    const input = event.currentTarget;
    const id = input.dataset.id;
    const field = input.dataset.field;
    const data = await getCampaignData();
    const actorId = input.dataset.actorId || "";
    let student = data.students.find((entry) => entry.id === id);
    if (!student && actorId) {
      const actor = game.actors?.get(actorId);
      student = {
        ...defaultStudent(actor?.name || "Player Character", "player"),
        id,
        actorId
      };
      data.students.push(student);
    }
    if (!student) return;
    if (student.type === "player" && ["name", "player", "actorId"].includes(field)) return;
    student[field] = input.type === "number" ? Number(input.value || 0) : input.value;
    if (field === "academicStandingScore") {
      student.academicStandingScore = Math.max(-100, Math.min(100, Number(student.academicStandingScore || 0)));
      student.academicStanding = academicStandingFromScore(student.academicStandingScore);
    }
    if (field === "advisorFacultyId") student.advisor = facultyNameById(data.faculty || [], student.advisorFacultyId);
    await setCampaignData(data);
    this.render();
  }

  async _toggleStudentClass(event) {
    this._captureScrollPosition();
    const input = event.currentTarget;
    const studentId = input.dataset.studentId;
    const classId = input.dataset.classId;
    const data = await getCampaignData();
    const student = data.students.find((entry) => entry.id === studentId);
    if (!student || !classId) return;
    student.selectedClassIds = Array.isArray(student.selectedClassIds) ? student.selectedClassIds : [];
    if (input.checked && !student.selectedClassIds.includes(classId)) student.selectedClassIds.push(classId);
    if (!input.checked) student.selectedClassIds = student.selectedClassIds.filter((id) => id !== classId);
    syncStudentClassSummary(student, data.classes || []);
    await setCampaignData(data);
    this.render();
  }

  async _toggleClubStudent(event) {
    this._captureScrollPosition();
    const input = event.currentTarget;
    const clubId = input.dataset.clubId;
    const studentId = input.dataset.studentId;
    const studentName = input.dataset.studentName || "";
    const data = await getCampaignData();
    const club = data.clubs?.find((entry) => entry.id === clubId);
    if (!club || !studentId) return;
    club.studentIds = Array.isArray(club.studentIds) ? club.studentIds : [];
    if (input.checked && !club.studentIds.includes(studentId)) club.studentIds.push(studentId);
    if (!input.checked) club.studentIds = club.studentIds.filter((id) => id !== studentId);
    const names = data.students
      .filter((student) => club.studentIds.includes(student.id))
      .map((student) => student.name)
      .filter(Boolean);
    if (club.studentIds.includes(studentId) && studentName && !names.includes(studentName)) names.push(studentName);
    club.members = names.join(", ");
    await syncStudentExtracurricularFlags(data, studentId);
    await setCampaignData(data);
    this.render();
  }

  async _toggleJobStudent(event) {
    this._captureScrollPosition();
    const input = event.currentTarget;
    const jobId = input.dataset.jobId;
    const studentId = input.dataset.studentId;
    const data = await getCampaignData();
    const job = data.jobs?.find((entry) => entry.id === jobId);
    if (!job || !studentId) return;
    data.jobs = data.jobs || [];
    for (const entry of data.jobs) {
      entry.studentIds = Array.isArray(entry.studentIds) ? entry.studentIds : [];
      if (entry.id !== jobId || input.checked) entry.studentIds = entry.studentIds.filter((id) => id !== studentId);
    }
    job.studentIds = Array.isArray(job.studentIds) ? job.studentIds : [];
    if (input.checked && !job.studentIds.includes(studentId)) job.studentIds.push(studentId);
    await syncStudentJobFlags(data, studentId);
    await setCampaignData(data);
    this.render();
  }

  _openStudentActor(event) {
    event.preventDefault();
    const actorId = event.currentTarget.dataset.actorId;
    const actor = actorId ? game.actors?.get(actorId) : null;
    if (actor) actor.sheet?.render(true);
    else ui.notifications.warn("No Foundry actor is linked to this Vital Quest record yet.");
  }

  async _addRelationship(event) {
    event.preventDefault();
    this.activeGmTab = "students";
    const studentId = event.currentTarget.dataset.studentId;
    const data = await getCampaignData();
    const student = data.students.find((entry) => entry.id === studentId);
    if (!student) return;
    student.relationshipLinks = Array.isArray(student.relationshipLinks) ? student.relationshipLinks : [];
    const firstActor = [...(game.actors || [])].find((actor) => ["character", "npc"].includes(actor.type) && actor.id !== student.actorId);
    student.relationshipLinks.push(defaultRelationshipLink(firstActor?.id || ""));
    await setCampaignData(data);
    this.render();
  }

  async _saveRelationship(event) {
    this._captureScrollPosition();
    const input = event.currentTarget;
    const studentId = input.dataset.studentId;
    const relationId = input.dataset.relationshipId;
    const field = input.dataset.field;
    const data = await getCampaignData();
    const student = data.students.find((entry) => entry.id === studentId);
    const link = student?.relationshipLinks?.find((entry) => entry.id === relationId);
    if (!link) return;
    link[field] = input.type === "number" ? Number(input.value || 0) : input.value;
    if (field === "score") link.status = relationshipStatusFromScore(link.score);
    await setCampaignData(data, { render: false });
    if (["score", "status"].includes(field)) this._updateRelationshipRow(relationId, link);
  }

  async _adjustRelationshipScore(event) {
    event.preventDefault();
    this._captureScrollPosition();
    const button = event.currentTarget;
    const relationId = button.dataset.relationshipId;
    const direction = Number(button.dataset.direction || 0);
    const root = this.element?.[0];
    const amountInput = root?.querySelector?.(`[data-relationship-adjust="${relationId}"]`);
    const amount = Math.max(0, Number(amountInput?.value || 0));
    if (!amount) return;
    const scoreInput = root?.querySelector?.(`[data-relationship-score="${relationId}"]`);
    const statusInput = root?.querySelector?.(`[data-relationship-status="${relationId}"]`);
    const score = Number(scoreInput?.value || 0) + (direction * amount);
    if (scoreInput) scoreInput.value = score;
    if (statusInput) statusInput.value = relationshipStatusFromScore(score);
    this._markUnsaved();
  }

  async _deleteRelationship(event) {
    event.preventDefault();
    this._captureScrollPosition();
    this.activeGmTab = "students";
    const studentId = event.currentTarget.dataset.studentId;
    const relationId = event.currentTarget.dataset.relationshipId;
    const data = await getCampaignData();
    const student = data.students.find((entry) => entry.id === studentId);
    if (!student) return;
    student.relationshipLinks = (student.relationshipLinks || []).filter((entry) => entry.id !== relationId);
    await setCampaignData(data);
    this.render();
  }

  async _setupJournal(event) {
    event.preventDefault();
    await setupVitalQuestJournalArchive();
    ui.notifications.info("Vital Quest Journal folders are ready.");
  }

  async _indexActors(event) {
    event.preventDefault();
    const data = await getCampaignData();
    const imported = indexActorSheetsIntoCampaignData(data);
    await setCampaignData(data);
    ui.notifications.info(`Vital Quest indexed ${imported} actor sheet${imported === 1 ? "" : "s"} into school records.`);
    this.render();
  }

  async _syncJournal(event) {
    event.preventDefault();
    let imported = 0;
    let data = await getCampaignData();
    vitalQuestJournalLock = true;
    try {
      await setupVitalQuestJournalArchive();
      imported = indexActorSheetsIntoCampaignData(data);
      data = await pullVitalQuestFromJournal(data);
      await syncVitalQuestToJournal(data);
      await setCampaignData(data);
    } finally {
      vitalQuestJournalLock = false;
    }
    ui.notifications.info(`Vital Quest Journal archive synced${imported ? `, with ${imported} actor sheet${imported === 1 ? "" : "s"} indexed` : ""}.`);
    this.render();
  }

  async _saveToolsSettings(event) {
    event.preventDefault();
    this.activeGmTab = "tools";
    const form = this.element[0];
    const yearCount = Math.max(1, Math.min(10, numberValue(form, "tools.schoolYearCount", 4)));
    await game.settings.set(MODULE_ID, "schoolYearCount", yearCount);
    const data = await getCampaignData();
    data.tools = data.tools || {};
    data.tools.facultyRoles = textareaOptionList(fieldValue(form, "tools.facultyRoles", ""), DEFAULT_FACULTY_ROLES);
    data.tools.facultyDepartments = textareaOptionList(fieldValue(form, "tools.facultyDepartments", ""), DEFAULT_FACULTY_DEPARTMENTS);
    await setCampaignData(normalizeCampaignData(data), { render: false });
    ui.notifications.info("Vital Quest tool settings saved.");
    this.render();
  }

  async _pullJournal(event) {
    event.preventDefault();
    const confirm = await Dialog.confirm({
      title: "Pull from Vital Quest Journal Archive?",
      content: "<p>This will merge Vital Quest Journal records back into the campaign manager. Actor sheets remain linked, not copied.</p>"
    });
    if (!confirm) return;
    const data = await getCampaignData();
    const updated = await pullVitalQuestFromJournal(data);
    await setCampaignData(updated);
    ui.notifications.info("Vital Quest pulled structured records from the Journal archive.");
    this.render();
  }

  async _deleteRow(event) {
    event.preventDefault();
    const collection = event.currentTarget.dataset.collection;
    const id = event.currentTarget.dataset.id;
    const data = await getCampaignData();
    if (!data[collection]) return;
    const calendarTypeByCollection = {
      classes: "classes",
      exams: "exams",
      clubs: "clubs",
      jobs: "jobs",
      campusLocations: "campus",
      quests: "story"
    };
    const calendarType = calendarTypeByCollection[collection];
    if (calendarType) {
      await removeLinkedCalendarEvents(data, (calendarEvent) => calendarEvent.type === calendarType && calendarEvent.sourceId === id);
    }
    data[collection] = data[collection].filter((entry) => entry.id !== id);
    if (collection === "classes") syncAllStudentClassSummaries(data);
    await setCampaignData(data);
    this.render();
  }

  async _saveRow(event) {
    const input = event.currentTarget;
    const collection = input.dataset.collection;
    const id = input.dataset.id;
    const field = input.dataset.field;
    const data = await getCampaignData();
    const row = data[collection]?.find((entry) => entry.id === id);
    if (!row) return;
    row[field] = input.type === "number" ? Number(input.value || 0) : input.value;
    if (collection === "classes") {
      if (field === "professorFacultyId") row.professor = facultyNameById(data.faculty || [], row.professorFacultyId);
      syncAllStudentClassSummaries(data);
    }
    if (collection === "exams" && field === "classId") {
      row.className = data.classes?.find((classRecord) => classRecord.id === row.classId)?.name || "";
    }
    if (collection === "clubs") {
      if (field === "skillOne" || field === "skillTwo") row.skills = [row.skillOne, row.skillTwo].filter(Boolean).join(", ");
      if (field === "overseerFacultyId") row.overseer = facultyNameById(data.faculty || [], row.overseerFacultyId);
      if (["skillOne", "skillTwo", "overseerFacultyId", "name"].includes(field)) {
        for (const studentId of row.studentIds || []) await syncStudentExtracurricularFlags(data, studentId);
      }
    }
    if (collection === "jobs" && ["name", "positions", "coworker", "wageGold", "wageSilver", "wageCopper"].includes(field)) {
      normalizeJobRecord(row);
      for (const studentId of row.studentIds || []) await syncStudentJobFlags(data, studentId);
    }
    const shouldRender = ["professorFacultyId", "startTime", "endTime", "classId", "dc", "checkOne", "checkTwo", "skillOne", "skillTwo", "overseerFacultyId", "wageGold", "wageSilver", "wageCopper"].includes(field);
    await setCampaignData(data, { render: !shouldRender });
    if (shouldRender) this.render();
  }

  async _saveExamResult(event) {
    const input = event.currentTarget;
    const examId = input.dataset.examId;
    const resultId = input.dataset.resultId;
    const field = input.dataset.field;
    const data = await getCampaignData();
    const exam = data.exams?.find((entry) => entry.id === examId);
    const result = exam?.results?.find((entry) => entry.id === resultId);
    if (!exam || !result) return;
    result[field] = input.type === "checkbox" ? input.checked : input.type === "number" ? Number(input.value || 0) : input.value;
    normalizeExamResult(result, exam);
    await setCampaignData(data, { render: false });
    this._updateExamResultRow(examId, resultId, result);
  }

  _toggleExamCollapse(event) {
    event.preventDefault();
    const examId = event.currentTarget.dataset.examId;
    if (!examId) return;
    if (this.collapsedExamIds.has(examId)) this.collapsedExamIds.delete(examId);
    else this.collapsedExamIds.add(examId);
    this.render(false);
  }

  async _pushExamRoll(event) {
    event.preventDefault();
    this._captureScrollPosition();
    const button = event.currentTarget;
    await sendExamRollRequest({
      examId: button.dataset.examId,
      resultId: button.dataset.resultId,
      actorId: button.dataset.actorId,
      field: button.dataset.field,
      checkLabel: button.dataset.checkLabel
    });
  }

  async _pushExamRollAll(event) {
    event.preventDefault();
    this._captureScrollPosition();
    const button = event.currentTarget;
    const data = await getCampaignData();
    const exam = data.exams?.find((entry) => entry.id === button.dataset.examId);
    if (!exam) return;
    let sent = 0;
    let skipped = 0;
    for (const result of exam.results || []) {
      normalizeExamResult(result, exam);
      if (result.cheated) {
        skipped += 1;
        continue;
      }
      const student = data.students?.find((entry) => entry.id === result.studentId);
      await sendExamRollRequest({
        examId: exam.id,
        resultId: result.id,
        actorId: student?.actorId || "",
        field: button.dataset.field,
        checkLabel: button.dataset.checkLabel
      });
      sent += 1;
    }
    ui.notifications.info(`Vital Quest sent ${sent} roll prompt${sent === 1 ? "" : "s"} and skipped ${skipped} cheating student${skipped === 1 ? "" : "s"}.`);
  }

  async _applyExamStanding(event) {
    event.preventDefault();
    this.activeGmTab = "exams";
    const examId = event.currentTarget.dataset.examId;
    const resultId = event.currentTarget.dataset.resultId;
    const data = await getCampaignData();
    const exam = data.exams?.find((entry) => entry.id === examId);
    const result = exam?.results?.find((entry) => entry.id === resultId);
    const student = data.students?.find((entry) => entry.id === result?.studentId);
    if (!exam || !result || !student || result.standingApplied) return;
    normalizeExamResult(result, exam);
    student.academicStandingScore = Math.max(-100, Math.min(100, Number(student.academicStandingScore || 0) + Number(result.standingDelta || 0)));
    student.academicStanding = academicStandingFromScore(student.academicStandingScore);
    student.exams = `${exam.name}: ${result.finalResult} (${result.standingDelta >= 0 ? "+" : ""}${result.standingDelta} standing)`;
    result.standingApplied = true;
    await setCampaignData(data);
    this.render();
  }

  async _resetManager(event) {
    event.preventDefault();
    const confirm = await Dialog.confirm({
      title: "Reset Strixhaven Manager?",
      content: "<p>This will reset the manager data for this world. Are you sure?</p>"
    });
    if (!confirm) return;
    await setCampaignData(defaultCampaignData());
    this.render();
  }

}

class VitalQuestStudentCard extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "vital-quest-student-card",
      title: "Vital Quest Student Card",
      template: `modules/${MODULE_ID}/templates/student-card.hbs`,
      width: 440,
      height: 760,
      resizable: true,
      classes: ["strixhaven-manager", "student-card-window"]
    });
  }

  async getData() {
    const data = await getCampaignData();
    const ownedActor = game.user?.character && game.user.character.type === "character"
      ? game.user.character
      : [...(game.actors || [])].find((actor) => actor.type === "character" && actor.isOwner);
    const fallbackActor = ownedActor || getPlayerCharacterActors()[0] || null;
    const rawStudent = fallbackActor
      ? schoolOverlayForActor(data, fallbackActor)
      : data.students.find((student) => student.type === "player") || data.students[0] || defaultStudent("Student");
    const student = displayStudent(rawStudent, fallbackActor, rawStudent.id);
    const selectedClassIds = new Set(student.selectedClassIds || []);
    const studentClasses = (selectedClassIds.size
      ? data.classes.filter((classRecord) => selectedClassIds.has(classRecord.id))
      : data.classes
    ).map((classRecord) => ({
      ...classRecord,
      professorLabel: classRecord.professor || facultyNameById(data.faculty || [], classRecord.professorFacultyId || "") || "Professor unassigned",
      scheduleLabel: [classTimeRange(classRecord), classRecord.location].filter(Boolean).join(TEXT_SEPARATOR) || "Time pending"
    }));
    const studentExams = (data.exams || [])
      .filter((exam) => !exam.classId || !selectedClassIds.size || selectedClassIds.has(exam.classId))
      .map((exam) => ({
        ...exam,
        scheduleLabel: scheduleLabelForSource(data, "exams", exam.id, "Date and time pending")
      }));
    const studentCommitments = buildStudentCommitments(data, student.id);
    const studentDice = buildStudentDice(data, student.id);
    const relationshipPeople = (student.relationshipLinks || []).map((link) => {
      const targetActor = link.targetActorId ? game.actors?.get(link.targetActorId) : null;
      return {
        name: targetActor?.name || "Unlinked contact",
        img: targetActor?.img || "",
        status: link.status || relationshipStatusFromScore(link.score),
        score: Number(link.score || 0),
        notes: link.notes || ""
      };
    });
    const knownPeople = relationshipPeople.length ? relationshipPeople : (data.relationships || []).map((person) => ({
      name: person.name,
      img: "",
      status: person.bond || person.role || "Known contact",
      score: Number(person.score || 0),
      notes: [person.role, person.college].filter(Boolean).join(TEXT_SEPARATOR)
    }));
    const agenda = buildSchoolAgenda(data);
    const studentPlanner = buildStudentPlanner(data, student);
    const studentCollegeKey = normalizeCollegeKey(student.college);
    const collegeKey = studentCollegeKey !== "unassigned" ? studentCollegeKey : data.focus?.college || "silverquill";
    const college = STRIXHAVEN_COLLEGES[collegeKey] || STRIXHAVEN_COLLEGES.silverquill;
    return {
      moduleId: MODULE_ID,
      data,
      college,
      collegeKey,
      student,
      studentClasses,
      studentExams,
      studentCommitments,
      studentDice,
      knownPeople,
      agenda,
      studentPlanner
    };
  }

  activateListeners(html) {
    super.activateListeners(html);
    html.find("[data-crystal-tab]").on("click", this._switchTab.bind(this));
    html.find("[data-action='student-add-calendar-event']").on("click", this._addPersonalCalendarEvent.bind(this));
    html.find("[data-action='student-delete-calendar-event']").on("click", this._deletePersonalCalendarEvent.bind(this));
  }

  _switchTab(event) {
    event.preventDefault();
    const tab = event.currentTarget.dataset.crystalTab;
    const root = this.element[0];
    root.querySelectorAll("[data-crystal-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.crystalTab === tab);
    });
    root.querySelectorAll("[data-crystal-page]").forEach((page) => {
      page.classList.toggle("active", page.dataset.crystalPage === tab);
    });
  }

  async _addPersonalCalendarEvent(event) {
    event.preventDefault();
    const data = await getCampaignData();
    const actor = game.user?.character && game.user.character.type === "character"
      ? game.user.character
      : [...(game.actors || [])].find((candidate) => candidate.type === "character" && candidate.isOwner);
    const rawStudent = actor
      ? schoolOverlayForActor(data, actor)
      : data.students.find((entry) => entry.type === "player") || data.students[0] || defaultStudent("Student");
    const student = displayStudent(rawStudent, actor, rawStudent.id);
    const { rawDate, current, monthIndex, year } = getCurrentSimpleCalendarParts();
    const defaultDate = {
      year: typeof rawDate.year === "number" ? rawDate.year : year,
      month: typeof rawDate.month === "number" ? rawDate.month : monthIndex,
      day: typeof rawDate.day === "number" ? rawDate.day : 0,
      dayNumber: typeof rawDate.day === "number" ? rawDate.day + 1 : 1,
      monthName: current?.month || ""
    };

    const daysFromMonth = Array.isArray(getCurrentSimpleCalendarParts().currentMonth?.days) ? getCurrentSimpleCalendarParts().currentMonth.days : [];
    const dayCount = daysFromMonth.length || 30;
    const monthTitle = [defaultDate.monthName || `Month ${Number(defaultDate.month || 0) + 1}`, defaultDate.year].filter(Boolean).join(" ");
    const dayButtons = Array.from({ length: dayCount }, (_, index) => {
      const day = daysFromMonth[index] || {};
      const dayNumber = day.numericRepresentation ?? day.number ?? index + 1;
      const dayName = normalizeCalendarPart(day.name || day.label || "");
      return `
        <button type="button" class="student-calendar-day ${index === Number(defaultDate.day || 0) ? "today" : ""}" data-year="${Number(defaultDate.year || 0)}" data-month="${Number(defaultDate.month || 0)}" data-day="${index}" data-day-number="${dayNumber}" data-month-name="${escapeHtml(defaultDate.monthName || `Month ${Number(defaultDate.month || 0) + 1}`)}">
          <strong>${escapeHtml(dayNumber)}</strong>
          ${dayName ? `<span>${escapeHtml(dayName)}</span>` : ""}
        </button>
      `;
    }).join("");
    const defaultExactTime = CALENDAR_TIME_BLOCKS[0]?.defaultTime || "8:00 AM";

    const result = await new Promise((resolve) => {
      let selectedDate = null;
      let resolved = false;
      let dialogApp = null;
      const finish = (value) => {
        if (resolved) return;
        resolved = true;
        resolve(value);
        dialogApp?.close();
      };
      dialogApp = new Dialog({
        title: "Add Personal Calendar Event",
        content: `
          <form class="vq-calendar-planner vq-student-personal-planner">
            <section class="planner-intro-card">
              <span class="section-label">Personal Schedule</span>
              <h2>${escapeHtml(student.name)}</h2>
              <p>Pick a day first. Then your crystal card will ask what you want to remember for that date.</p>
            </section>
            <section class="student-calendar-step active" data-step="calendar">
              <div class="student-calendar-month-header">
                <span class="section-label">Choose Date</span>
                <h3>${escapeHtml(monthTitle)}</h3>
              </div>
              <div class="student-calendar-day-grid">${dayButtons}</div>
            </section>
            <section class="student-calendar-step" data-step="form">
              <div class="student-calendar-month-header">
                <span class="section-label">Event Details</span>
                <h3 data-selected-date-label>Selected Day</h3>
              </div>
              <div class="planner-field-grid">
                <label>
                  <span>Event Title</span>
                  <input type="text" name="title" value="Personal Study" placeholder="Study, meet a friend, club prep...">
                </label>
                <label>
                  <span>Part of Day</span>
                  <select name="block">
                    ${CALENDAR_TIME_BLOCKS.map((block) => `<option value="${escapeHtml(block.key)}" data-time="${escapeHtml(block.defaultTime)}">${escapeHtml(block.label)}</option>`).join("")}
                  </select>
                </label>
                <label>
                  <span>Exact Time</span>
                  <input type="text" name="time" value="${escapeHtml(defaultExactTime)}" placeholder="8:00 AM">
                </label>
              </div>
              <label class="planner-details-field">
                <span>Details</span>
                <textarea name="details" placeholder="What should your card remember?"></textarea>
              </label>
              <div class="student-calendar-form-actions">
                <button type="button" class="primary" data-action="student-calendar-submit"><i class="fas fa-lock"></i> Save Private Event</button>
              </div>
            </section>
          </form>
        `,
        buttons: {
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancel",
            callback: () => finish(null)
          }
        },
        default: "cancel",
        render: (html) => {
          html.closest(".app").addClass("vital-quest-dialog vq-planner-dialog");
          const showStep = (step) => {
            html.find(".student-calendar-step").removeClass("active");
            html.find(`[data-step="${step}"]`).addClass("active");
          };
          html.find(".student-calendar-day").on("click", (clickEvent) => {
            const button = clickEvent.currentTarget;
            selectedDate = {
              year: Number(button.dataset.year || 0),
              month: Number(button.dataset.month || 0),
              day: Number(button.dataset.day || 0),
              dayNumber: Number(button.dataset.dayNumber || 1),
              monthName: button.dataset.monthName || defaultDate.monthName || `Month ${Number(defaultDate.month || 0) + 1}`
            };
            html.find(".student-calendar-day").removeClass("selected");
            button.classList.add("selected");
            html.find("[data-selected-date-label]").text(calendarEventDateLabel({ date: selectedDate }));
            showStep("form");
          });
          html.find("[name='block']").on("change", (changeEvent) => {
            const selected = changeEvent.currentTarget.selectedOptions?.[0];
            html.find("[name='time']").val(selected?.dataset?.time || "8:00 AM");
          });
          html.find("[data-action='student-calendar-submit']").on("click", () => {
            if (!selectedDate) {
              ui.notifications.warn("Choose a calendar day first.");
              showStep("calendar");
              return;
            }
            const title = fieldFromDialog(html, "title", "Personal Event").trim() || "Personal Event";
            const block = fieldFromDialog(html, "block", "day");
            const time = fieldFromDialog(html, "time", CALENDAR_TIME_BLOCKS.find((entry) => entry.key === block)?.defaultTime || "8:00 AM");
            const details = fieldFromDialog(html, "details", "");
            const content = `
              <h2>${escapeHtml(title)}</h2>
              <p><strong>Vital Quest Type:</strong> Personal</p>
              <p><strong>Participant:</strong> ${escapeHtml(student.name)}</p>
              <p><strong>Time:</strong> ${escapeHtml(time)}</p>
              <p><strong>Details:</strong> ${escapeHtml(details || "No additional details entered.")}</p>
            `;
            finish({ title, content, date: selectedDate, time, block, type: "personal", sourceId: "", details });
          });
        },
        close: () => finish(null)
      }, {
        classes: ["vital-quest-dialog", "vq-planner-dialog"],
        width: 620,
        resizable: true
      }).render(true);
    });

    if (!result) return;
    const visibleUserIds = actor ? getActorPlayerOwnerIds(actor) : [];
    const privateViewers = visibleUserIds.length ? visibleUserIds : [game.user?.id].filter(Boolean);
    const note = await createSimpleCalendarPlanningNote({
      ...result,
      visibleUserIds: privateViewers
    });
    if (!note) ui.notifications.warn("Personal event saved to Vital Quest, but Simple Calendar did not create a private note.");
    data.calendarEvents = data.calendarEvents || [];
    data.calendarEvents.push({
      id: foundry.utils.randomID(),
      title: result.title,
      type: "personal",
      sourceId: "",
      participantId: student.id,
      participantName: student.name,
      participantActorId: student.actorId || "",
      date: result.date,
      time: result.time,
      block: result.block,
      noteId: note?.id || "",
      details: result.details || "",
      visibility: "private",
      visibleUserIds: privateViewers,
      createdByUserId: game.user?.id || "",
      createdByUserName: game.user?.name || ""
    });
    await setCampaignData(data);
    ui.notifications.info("Personal schedule added to your Vital Quest card.");
    this.render();
  }

  async _deletePersonalCalendarEvent(event) {
    event.preventDefault();
    const eventId = event.currentTarget.dataset.eventId;
    if (!eventId) return;
    const data = await getCampaignData();
    const calendarEvent = (data.calendarEvents || []).find((entry) => entry.id === eventId);
    if (!calendarEvent || calendarEvent.type !== "personal") {
      ui.notifications.warn("Only personal student events can be deleted from the student card.");
      return;
    }

    const actor = game.user?.character && game.user.character.type === "character"
      ? game.user.character
      : [...(game.actors || [])].find((candidate) => candidate.type === "character" && candidate.isOwner);
    const rawStudent = actor
      ? schoolOverlayForActor(data, actor)
      : data.students.find((entry) => entry.type === "player") || data.students[0] || defaultStudent("Student");
    const student = displayStudent(rawStudent, actor, rawStudent.id);
    if (!calendarEventAppliesToStudent(calendarEvent, student)) {
      ui.notifications.warn("This event does not belong to your student card.");
      return;
    }

    const confirmed = await Dialog.confirm({
      title: "Delete Personal Event?",
      content: `<p>Delete <strong>${escapeHtml(calendarEvent.title || "Personal Event")}</strong> from your calendar?</p>`
    });
    if (!confirmed) return;

    await removeLinkedCalendarEvents(data, (entry) => entry.id === eventId);
    await setCampaignData(data);
    ui.notifications.info("Deleted personal calendar event.");
    this.render();
  }
}

function openManager() {
  if (!game.user?.isGM) {
    ui.notifications.warn("Only the GM can open the Vital Quest GM Screen.");
    return openStudentCard();
  }
  new StrixhavenCampaignManager().render(true);
}

function openStudentCard() {
  new VitalQuestStudentCard().render(true);
}

function registerLiveSyncHooks() {
  Hooks.on("createJournalEntry", (entry) => {
    if (isVitalQuestArchiveFolder(entry) || getJournalFlag(entry, "archive")) refreshVitalQuestFromJournal();
  });

  Hooks.on("updateJournalEntry", (entry) => {
    if (isVitalQuestArchiveFolder(entry) || getJournalFlag(entry, "archive")) refreshVitalQuestFromJournal();
  });

  Hooks.on("deleteJournalEntry", async (entry) => {
    if (isVitalQuestArchiveFolder(entry) || getJournalFlag(entry, "archive")) refreshVitalQuestFromJournal({ deletedEntry: entry });
    if (simpleCalendarNoteData(entry)) {
      const data = await getCampaignData();
      const before = data.calendarEvents?.length || 0;
      data.calendarEvents = (data.calendarEvents || []).filter((calendarEvent) => calendarEvent.noteId !== entry.id);
      if ((data.calendarEvents?.length || 0) !== before) {
        await setCampaignData(data);
        renderOpenVitalQuestApps();
      }
    }
  });

  Hooks.on("updateActor", (actor) => {
    if (actor.getFlag?.(MODULE_ID, "schoolCategory") || ["character", "npc"].includes(actor.type)) renderOpenVitalQuestApps();
  });

  Hooks.on("deleteActor", () => {
    renderOpenVitalQuestApps();
  });
}

function registerExamRollHooks() {
  game.socket?.on(`module.${MODULE_ID}`, async (message) => {
    if (message?.type === "recordExamRoll") {
      if (!game.user?.isGM) return;
      await recordExamRollResult(message.payload || {});
      return;
    }
    if (message?.type === "promptExamRoll") {
      const targets = Array.isArray(message.targetUserIds) ? message.targetUserIds : [];
      if (!targets.includes(game.user?.id)) return;
      showExamRollPrompt(message.payload || {});
    }
  });
}

Hooks.once("init", () => {
  registerSettings();
  Handlebars.registerHelper("eq", (a, b) => a === b);
});

Hooks.once("ready", () => {
  game.modules.get(MODULE_ID).api = {
    openStudentCard,
    openManager,
    getCampaignData,
    setCampaignData,
    defaultCampaignData
  };
  registerLiveSyncHooks();
  registerExamRollHooks();
  ui.notifications.info("Vital Quest is active. Use /vq for the Student Card or /vqdm for the GM Screen.");
});

Hooks.on("getSceneControlButtons", (controls) => {
  const tool = {
    name: "vital-quest",
    title: game.user?.isGM ? game.i18n.localize("STRIXHAVEN.openManager") : "Open Vital Quest Student Card",
    icon: "fas fa-graduation-cap",
    button: true,
    onClick: () => openManager()
  };
  if (Array.isArray(controls)) {
    const notes = controls.find((control) => ["notes", "journal"].includes(control.name));
    if (notes?.tools) notes.tools.push(tool);
    else controls.push({
      name: "vital-quest",
      title: "Vital Quest",
      icon: "fas fa-graduation-cap",
      layer: "NotesLayer",
      tools: [tool],
      activeTool: "vital-quest"
    });
    return;
  }

  const controlList = Object.values(controls || {});
  const notes = controls?.notes || controls?.journal || controlList.find((control) => ["notes", "journal"].includes(control.name));
  if (notes?.tools) {
    if (Array.isArray(notes.tools)) notes.tools.push(tool);
    else notes.tools[tool.name] = tool;
    return;
  }
  controls["vital-quest"] = {
    name: "vital-quest",
    title: "Vital Quest",
    icon: "fas fa-graduation-cap",
    layer: "NotesLayer",
    tools: { [tool.name]: tool },
    activeTool: "vital-quest"
  };
});

Hooks.on("chatMessage", (_log, content) => {
  const command = String(content || "").trim().toLowerCase();
  if (command === "/vq" || command === "/vitalquest" || command === "/vital-quest") {
    openStudentCard();
    return false;
  }
  if (command === "/vqdm" || command === "/vitalquestdm" || command === "/vital-quest-dm") {
    openManager();
    return false;
  }
  return true;
});
