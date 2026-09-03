const NAVIGATION_MARKERS = {
  "[SECTION:home]": "home",
  "[SECTION:about]": "about",
  "[SECTION:skills]": "skills",
  "[SECTION:projects]": "projects",
  "[SECTION:achievements]": "achievements",
  "[SECTION:certificates]": "certificates",
  "[SECTION:contact]": "contact",
};

export default function useChatbot({ setBotMessage, setLoading, goToSection }) {
  const respond = async (messages) => {
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "AI request failed");

      let reply = data.message || "I couldn't generate a response right now.";

      Object.entries(NAVIGATION_MARKERS).forEach(([marker, section]) => {
        if (reply.includes(marker)) {
          reply = reply.replace(marker, "").trim();
          goToSection(section);
        }
      });

      setBotMessage(reply);
    } catch (error) {
      console.error("Portfolio AI error:", error);
      setBotMessage(
        "Sorry, I couldn't connect to my AI assistant right now. Please try again in a moment. 🤖"
      );
    } finally {
      setLoading(false);
    }
  };

  return { respond };
}
