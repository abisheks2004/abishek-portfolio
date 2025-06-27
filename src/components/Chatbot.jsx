// components/Chatbot.jsx
export default function useChatbot({ userMessage, setBotMessage, scrollToSection }) {
  const isThanglish = (text) => {
    const thanglishWords = [
      "saptiya", "da", "epdi", "sapten", "theriyuma", "unga", "iruken", "illa", "ennu", "padikren"
    ];
    return thanglishWords.some((word) => text.toLowerCase().includes(word));
  };

  const detectIntent = (msg) => {
    const message = msg.toLowerCase();
      if (message.includes("home")) return "home";
    if (message.includes("project")) return "projects";
if (message.includes("intro") || message.includes("about")) return "home";
    if (message.includes("skill")) return "skills";
    if (message.includes("contact") || message.includes("reach")) return "contact";
    if (["hi", "hello", "hey", "yo"].some(w => message.includes(w))) return "greet";
    if (message.includes("name")) return "name";
    if (message.includes("age") || message.includes("old")) return "age";
    if (message.includes("college")) return "college";
    if (message.includes("how are you")) return "feeling";
    if (message.includes("thank")) return "thanks";
    if (message.includes("saptiya") || message.includes("food") || message.includes("sapta")) return "eating";

    return "unknown";
  };

  const respond = (intent, isThanglishUser) => {
    const responses = {
      en: {
        projects: "Sure! Let me show you my project section.",
        about: "Alright! Here's a bit about me.",
        skills: "These are the tools and tech I work with.",
        contact: "Here’s how you can get in touch with me.",
        greet: "Hello! 👋 How can I help you?",
        name: "I'm Abishek S — a full-stack developer and student.",
        age: "I'm in my early 20s, pursuing B.E in CSE.",
        college: "I'm studying at K.S.R. College of Engineering, Tamil Nadu.",
        feeling: "I'm doing great! Hope you're doing well too.",
        thanks: "Thank you so much! 😊",
        eating: "Yeah I ate! What about you?",
        unknown: "Sorry, I didn’t get that.tell projects,about",
         home: "Taking you back to the home screen now!",
      },
      th: {
        projects: "Yes da! 🔥 Naan unga projects section ku kondu poren 🤯",
        about: "Okay da! Naa pathi konjam solluren 😎",
        skills: "Enna tools la velai panren-nu paathutu sollu! 💻",
        contact: "Contact panna, inga iruku da 📬",
        greet: "Vanakkam da! Enna venum? 😄",
        name: "Naan Abishek S da — full-stack developer cum college student!",
        age: "College la padikren da, so neeye guess paniko 😅",
        college: "K.S.R. College la padikren — Salem pakkam irukum 🎓",
        feeling: "Super da! Naan nalla iruken, neenga epdi?",
        thanks: "Thanks da! Romba santhosham 😁",
        eating: "Sapten da! Nee saptiya illa still work ah? 🍱",
        unknown: "Ennada solla try panra? 'projects' illa 'skills' nu sollu.",
        home: "Home screen ku thirumbi porom da 😎",
      }
    };

    const lang = isThanglishUser ? "th" : "en";
    const response = responses[lang][intent] || responses[lang].unknown;
    setBotMessage(response);

    if (["projects", "home","about", "skills", "contact"].includes(intent)) {
      scrollToSection(intent);
    }
  };

  return { detectIntent, isThanglish, respond };
}
