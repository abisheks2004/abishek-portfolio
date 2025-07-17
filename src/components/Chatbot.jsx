export default function useChatbot({ userMessage, setBotMessage, scrollToSection }) {
  const thanglishWords = [
    "saptiya", "da", "epdi", "sapten", "theriyuma", "unga", "iruken",
    "illa", "ennu", "padikren", "machan", "machii", "dei", "ena", "panra",
    "pandira", "ippo", "enna seira", "seiran", "poitu", "vela", "mapla",
    "maplae", "vanakam", "vanakkam", "vanaakam", "broo", "broda", "dai",
    "scene", "mass", "vera level", "semma", "super", "solid", "hype",
    "enga iruka", "enna nadakuthu", "seri", "okay", "fine", "padippu",
    "studies", "aprm", "aprom", "sollu", "vera"
  ];

  const isThanglish = (text) =>
    thanglishWords.some((word) => text.toLowerCase().includes(word));

  const intentMap = {
    home: ["home", "start", "portfolio", "open", "intro", "about"],
    projects: ["project", "projects", "work", "apps", "github", "code"],
    skills: ["skill", "skills", "tech", "tools", "stack", "framework"],
    contact: ["contact", "reach", "email", "phone"],

    greet: [
      "hi", "hello", "hey", "yo", "vanakkam", "vanakam", "vanaakam",
      "mapla", "maplae", "machan", "machii", "bro", "broo", "broda", "dai"
    ],

    name: ["name", "who are you", "your name"],
    age: ["age", "old", "how old", "birthday"],

    college: [
      "college", "education", "study", "school", "degree", "course",
      "padippu", "padikren", "where do you study"
    ],

    studies: [
      "what do you study", "studies", "course", "degree", "branch",
      "major", "department", "engineering", "final year", "year"
    ],

    feeling: [
      "how are you", "epdi iruka", "saptiya epdi", "neenga epdi",
      "enga iruka", "enna nadakuthu"
    ],

    thanks: ["thanks", "thank you", "nandri", "tnx", "ty"],
    eating: ["saptiya", "food", "sapta", "soru", "lunch", "dinner"],

    focus: [
      "what are you doing", "ena panra", "ena pandra", "ippo enna",
      "busy", "focus", "doing now", "seiran", "vela", "enna seira"
    ],

    hobbies: [
      "hobby", "hobbies", "free time", "pasam", "viruppam", "like to do", "interest"
    ],

    hype: [
      "scene", "mass", "vera level", "semma", "super", "solid", "hype", "siii"
    ],

    ok: ["seri", "okay", "fine", "cool"],

    more: [
      "aprm", "aprom", "sollu", "vera", "next", "then", "more"
    ]
  };

  const detectIntent = (msg) => {
    const text = msg.toLowerCase();
    for (const [intent, keywords] of Object.entries(intentMap)) {
      if (keywords.some((kw) => text.includes(kw))) return intent;
    }
    return "unknown";
  };

  const responses = {
    en: {
      home: "Taking you to the home section now! 🏠",
      projects: "Sure! Let me show you my projects 🚀",
      skills: "Here are the tools & tech I use 🛠️",
      contact: "Here’s how you can reach me 📩",

      greet: "Hey there! 👋 Vanakkam! 😄",
      name: "I'm Abishek S — a full-stack developer & student.",
      age: "I'm in my early 20s, currently pursuing B.E CSE.",
      college: "I study at K.S.R. College of Engineering, Tamil Nadu.",
      studies: "I'm a Computer Science Engineering student in my final year 🎓",

      feeling: "I'm doing great! Hope you're good too 😄",
      thanks: "You're welcome! 😊",
      eating: "Yeah, I ate! What about you? 🍛",
      focus: "Right now I'm focusing on improving my coding skills 💻",
      hobbies: "I love coding, learning new tech, and a bit of gaming 🎮",
      hype: "🔥 Vera level support! Thanks bro! 🔥",
      ok: "Okay cool! 😎",

      more: "Hmm… want to know more? Ask about 👉 projects, skills, or my studies! 😎",

      unknown: "I’m a predefined chatbot 🤖. Please ask portfolio-related words like 👉 *home, about, projects, skills, or contact*.",
    },
    th: {
      home: "Home screen ku thirumbi porom da 😎",
      projects: "Yes da! 🔥 Naan unga projects section ku kondu poren 🤯",
      skills: "Enna tools la velai panren-nu paathutu sollu! 💻",
      contact: "Contact panna inga iruku da 📬",

      greet: "Vanakkam mapla! 😄 Enna venum? 🔥",
      name: "Naan Abishek S da — full-stack developer cum student!",
      age: "College la padikren da, so neeye guess paniko 😅",
      college: "K.S.R. College la padikren da, Tamil Nadu la! 🎓",
      studies: "CSE final year la padikren da machi! 🎓",

      feeling: "Super da! Naan nalla iruken, neenga epdi? 😎",
      thanks: "Thanks da! Romba santhosham 😁",
      eating: "Sapten da! Nee saptiya illa still work ah? 🍱",
      focus: "Ippo coding la focus panraen da! 💻",
      hobbies: "Coding, tech kathukaradhu, konjam gaming ahvum iruku da 🎮",
      hype: "🔥 Vera level da machi! Semma mass support! 💥",
      ok: "Seri machi! 😎",

      more: "Aprm vera edhavadhu kekka poriya? Projects ah illa skills ah? 🤔",

      unknown: "Naan oru pre-defined chatbot 🤖 da! Portfolio ku related words dhaan kekkuven 👉 *home, about, projects, skills, contact*.",
    }
  };

  const respond = (intent, isThanglishUser) => {
    const lang = isThanglishUser ? "th" : "en";
    const reply = responses[lang][intent] || responses[lang].unknown;
    setBotMessage(reply);

    const navigable = ["projects", "home", "skills", "contact"];
    if (navigable.includes(intent)) {
      scrollToSection(intent);
    }
  };

  return { detectIntent, isThanglish, respond };
}
