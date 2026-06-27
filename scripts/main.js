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

function duplicateData(data) {
  return foundry.utils.deepClone(data);
}

function defaultCampaignData() {
  return {
    calendar: {
      term: "First Term",
      week: 1,
      day: "Moonday",
      timeOfDay: "Morning",
      notes: "The school year is beginning."
    },
    focus: {
      college: "silverquill",
      currentArc: "Arrival at Strixhaven",
      activeMystery: ""
    },
    classes: [
      {
        id: foundry.utils.randomID(),
        name: "Magical Physiologies",
        professor: "",
        college: "General Studies",
        schedule: "Moonday morning",
        status: "Active",
        notes: ""
      },
      {
        id: foundry.utils.randomID(),
        name: "Beginning Inkomancy",
        professor: "",
        college: "Silverquill",
        schedule: "Wandsday afternoon",
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
  return duplicateData(data || defaultCampaignData());
}

async function setCampaignData(data) {
  await game.settings.set(MODULE_ID, "campaignData", data);
}

function registerSettings() {
  game.settings.register(MODULE_ID, "campaignData", {
    name: "Campaign Data",
    scope: "world",
    config: false,
    type: Object,
    default: defaultCampaignData()
  });
}

function fieldValue(form, name, fallback = "") {
  return form.querySelector(`[name="${name}"]`)?.value ?? fallback;
}

function numberValue(form, name, fallback = 0) {
  const value = Number(fieldValue(form, name, fallback));
  return Number.isFinite(value) ? value : fallback;
}

class StrixhavenCampaignManager extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "vital-quest-manager",
      title: game.i18n.localize("STRIXHAVEN.title"),
      template: `modules/${MODULE_ID}/templates/manager.hbs`,
      width: 980,
      height: 760,
      resizable: true,
      classes: ["strixhaven-manager"]
    });
  }

  async getData() {
    const data = await getCampaignData();
    const college = STRIXHAVEN_COLLEGES[data.focus?.college] || STRIXHAVEN_COLLEGES.silverquill;
    return {
      moduleId: MODULE_ID,
      data,
      college,
      colleges: Object.entries(STRIXHAVEN_COLLEGES).map(([key, value]) => ({
        key,
        ...value,
        selected: key === data.focus?.college
      }))
    };
  }

  activateListeners(html) {
    super.activateListeners(html);
    html.find("[data-action='save-overview']").on("click", this._saveOverview.bind(this));
    html.find("[data-action='advance-day']").on("click", this._advanceDay.bind(this));
    html.find("[data-action='generate-event']").on("click", this._generateEvent.bind(this));
    html.find("[data-action='generate-rumor']").on("click", this._generateRumor.bind(this));
    html.find("[data-action='add-row']").on("click", this._addRow.bind(this));
    html.find("[data-action='delete-row']").on("click", this._deleteRow.bind(this));
    html.find("[data-action='save-row']").on("change", this._saveRow.bind(this));
    html.find("[data-action='reset-manager']").on("click", this._resetManager.bind(this));
  }

  async _saveOverview(event) {
    event.preventDefault();
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
    const data = await getCampaignData();
    const defaults = {
      classes: { name: "New Class", professor: "", college: "", schedule: "", status: "Active", notes: "" },
      exams: { name: "New Exam or Project", className: "", due: "", status: "Upcoming", stakes: "", notes: "" },
      clubs: { name: "New Club", members: "", meeting: "", notes: "" },
      relationships: { name: "New NPC", role: "", college: "", score: 0, bond: "", notes: "" },
      quests: { title: "New Campaign Thread", type: "", status: "Active", notes: "" }
    };
    if (!data[collection] || !defaults[collection]) return;
    data[collection].push({ id: foundry.utils.randomID(), ...defaults[collection] });
    await setCampaignData(data);
    this.render();
  }

  async _deleteRow(event) {
    event.preventDefault();
    const collection = event.currentTarget.dataset.collection;
    const id = event.currentTarget.dataset.id;
    const data = await getCampaignData();
    if (!data[collection]) return;
    data[collection] = data[collection].filter((entry) => entry.id !== id);
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
    await setCampaignData(data);
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

function openManager() {
  new StrixhavenCampaignManager().render(true);
}

Hooks.once("init", () => {
  registerSettings();
  Handlebars.registerHelper("eq", (a, b) => a === b);
});

Hooks.once("ready", () => {
  game.modules.get(MODULE_ID).api = {
    openManager,
    getCampaignData,
    setCampaignData,
    defaultCampaignData
  };
});

Hooks.on("getSceneControlButtons", (controls) => {
  if (!game.user?.isGM) return;
  const notes = controls.find((control) => control.name === "notes");
  const tool = {
    name: "strixhaven-manager",
    title: game.i18n.localize("STRIXHAVEN.openManager"),
    icon: "fas fa-graduation-cap",
    button: true,
    onClick: () => openManager()
  };
  if (notes) notes.tools.push(tool);
  else controls.push({
    name: "strixhaven",
    title: "Strixhaven",
    icon: "fas fa-graduation-cap",
    layer: "NotesLayer",
    tools: [tool],
    activeTool: "strixhaven-manager"
  });
});
