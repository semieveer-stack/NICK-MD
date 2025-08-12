// plugins/developer.js
const { cmd } = require("../command");

cmd(
  {
    pattern: "developer",
    alias: ["dev", "creator"],
    desc: "Show developer info with image and intro text",
    category: "info",
    react: "👨‍💻",
    filename: __filename,
    fromMe: false,
  },
  async (malvin, mek, m, { reply }) => {
    const developerInfo = {
      name: "YOUNGBOY",
      number: "wa.me/263712779049",
      github: "https://github.com/Mulanation",
      note: "THANKS FOR CHOOSING MY BOT. I REALLY APPRECIATE YOUR LOVE. DON'T FORGET TO FORK AND STAR REPO",
      image:
        "",
    };

    // STEP 1: Intro reaction (optional)
    await malvin.sendMessage(mek.key.remoteJid, {
      react: { text: "👨‍💻", key: mek.key },
    });

    // STEP 2: Intro Message
    await malvin.sendMessage(
      mek.key.remoteJid,
      { text: "👋 *HEY I AM THE DEVELOPER!*" },
      { quoted: mek }
    );

    // STEP 3: Developer Info with Image
    const caption = `
*👨‍💻 Developer Info*

👤 *Name:* ${developerInfo.name} 

📞 *Contact:* ${developerInfo.number}

💻 *GitHub:* ${developerInfo.github}

📝 *Note:* ${developerInfo.note}
    `.trim();

    await malvin.sendMessage(
      mek.key.remoteJid,
      { image: { url: developerInfo.image }, caption },
      { quoted: mek }
    );
  }
);
