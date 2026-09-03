export default function useChatbot({ setBotMessage, goToSection }) {
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
    home: ["home", "start", "portfolio"],
    about: ["about", "resume"],
    projects: ["project", "projects", "work", "apps", "github", "code"],
    skills: ["skill", "skills", "tech", "tools", "stack", "framework"],
    achievements: ["achievements", "achievement", "award", "awards", "honor", "prize"],
    certificates: ["certificates", "certificate", "certification", "completed course", "course done"],
    contact: ["contact", "reach", "email", "phone"],
    selfIntro: ["tell me about yourself", "introduce yourself", "self intro"],
    strengths: ["strength", "strengths", "what are you good at", "strong points"],
    weaknesses: ["weakness", "weaknesses", "areas to improve", "improvement"],
    careerGoals: ["goal", "career", "future", "where do you see yourself", "aspiration"],
    experience: ["experience", "internship", "work experience", "previous work"],
    softSkills: ["communication", "teamwork", "leadership", "problem solving"],
    whyHire: ["why hire you", "why should we hire you", "your value"],
    hru: ["how are you"],
    greet: ["hi", "hello", "hey", "vanakkam", "vanakam", "mapla", "machan", "bro", "broo"],
    name: ["name", "who are you", "your name", "what is your name"],
    age: ["age", "old", "how old", "birthday"],
    college: ["college", "education", "study", "school", "degree", "course", "where do you study"],
    studies: ["what do you study", "studies", "course", "degree", "branch", "major", "department", "engineering"],
    feeling: ["how are you", "epdi iruka", "saptiya epdi", "enga iruka", "enna nadakuthu"],
    thanks: ["thanks", "thank you", "nandri", "tnx", "ty"],
    eating: ["saptiya", "food", "sapta", "soru", "lunch", "dinner"],
    focus: ["what are you doing", "ena panra", "busy", "focus", "doing now", "seiran"],
    hobbies: ["hobby", "hobbies", "free time", "pasam", "viruppam", "like to do", "interest"],
    hype: ["scene", "mass", "vera level", "semma", "super", "solid", "hype", "siii"],
    ok: ["seri", "okay", "fine", "cool", "ok"],
    more: ["aprm", "aprom", "sollu", "vera", "next", "then", "more", "mm"]
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
      achievements: "Here are some of my achievements & awards 🏆",
      certificates: "These are my certifications & completed courses 📜",
      contact: "Here’s how you can reach me 📩",
      selfIntro: "Sure! I'm Abishek S, a passionate full-stack developer and Computer Science Engineering graduate. I love building scalable web apps, exploring new technologies, and solving real-world problems with clean, efficient code. 🚀",
      strengths: "My key strengths include problem-solving, quick learning, and strong communication skills 💪",
      weaknesses: "I tend to over-focus on details sometimes, but I’m actively improving my time management ⏳",
      careerGoals: "My career goal is to become a versatile software engineer, contributing to impactful products 🚀",
      experience: "I have hands-on experience with full-stack development, projects, and internships in web technologies 💻",
      softSkills: "I excel in teamwork, adaptability, and presenting technical ideas clearly 🤝",
      whyHire: "I bring a mix of strong technical skills, continuous learning mindset, and dedication to delivering results ✅",
      hru: "I am fine! What about you?",
      greet: "Hey there! 👋 Vanakkam! 🙏",
      name: "I'm Abishek S.",
      age: "I'm 22 years old and a Computer Science Engineering graduate 🎓",
      college: "I studied at K.S.R. College of Engineering, Tamil Nadu.",
      studies: "I'm a Computer Science Engineering graduate 🎓",
      feeling: "I'm doing great! Hope you're good too 😄",
      thanks: "You're welcome! 😊",
      eating: "Yeah, I ate! What about you? 🍛",
      focus: "Right now I'm focusing on improving my coding skills 💻",
      hobbies: "I love coding, learning new tech, and a bit of gaming 🎮",
      hype: "🔥 Vera level support! Thanks bro! 🔥",
      ok: "Okay cool! 😎",
      more: "Hmm… want to know more? Ask about 👉 projects, skills, achievements.",
      unknown: "I’m a predefined chatbot 🤖. You can ask portfolio stuff like *projects, skills*."
    },
    th: {
      home: "Home screen ku thirumbi porom da 😎",
      projects: "Yes da! 🔥 Naan unga projects section ku kondu poren 🤯",
      skills: "Enna tools la velai panren-nu paathutu sollu! 💻",
      achievements: "Ithu dhaan en achievements & awards 🏆🔥",
      certificates: "Naan complete panra certifications inga 📜",
      contact: "Contact panna inga iruku da 📬",
      selfIntro: "Naan Abishek S da! Full-stack developer & CSE graduate. Web apps build panraen, pudhusaa tech kathukuraen, problem solving la romba interest! 🚀",
      strengths: "En strength naa problem-solving, fast learning, teamwork da 💪",
      weaknesses: "Konjam over-focus on details panra habit iruku, improve panraen ⏳",
      careerGoals: "Future la nalla software engineer aagi impact create pananum 🚀",
      experience: "Full-stack projects & internships la experience iruku da 💻",
      softSkills: "Teamwork, adaptability, clear communication la strong 🤝",
      whyHire: "Because naa technical ahum, learning mindset ahvum, result-oriented ahvum iruken ✅",
      greet: "Vanakkam mapla! 😌 Enna venum? 🔥",
      name: "Naan Abishek S da — full-stack developer!",
      age: "Naan 22 age da, B.E CSE graduate 🎓",
      college: "K.S.R. College la padichen da, Tamil Nadu la! 🎓",
      studies: "CSE graduate da machi! 🎓",
      feeling: "Super da! Naan nalla iruken, neenga epdi? 😎",
      thanks: "Thanks da! Romba santhosham 😁",
      eating: "Sapten da! Nee saptiya illa still work ah? 🍱",
      focus: "Ippo coding la focus panraen da! 💻",
      hobbies: "Coding, tech kathukaradhu, konjam gaming ahvum iruku da 🎮",
      hype: "🔥 Vera level da machi! Semma mass support! 💥",
      ok: "Seri machi! 😎",
      more: "Aprm vera edhavadhu kekka poriya? Projects ah, achievements ah illa strengths/self intro ah? 🤔",
      unknown: "Naan oru pre-defined chatbot 🤖 da! Portfolio ku related words dhaan kekkuven 👉 *projects, skills, achievements, certificates*."
    }
  };

  const respond = (intent, isThanglishUser) => {
    const lang = isThanglishUser ? "th" : "en";
    const reply = responses[lang][intent] || responses[lang].unknown;
    setBotMessage(reply);

    const navigable = ["home", "about", "projects", "skills", "achievements", "certificates", "contact"];
    if (navigable.includes(intent)) goToSection(intent);
  };

  return { detectIntent, isThanglish, respond };
}
