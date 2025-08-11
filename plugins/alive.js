const { cmd } = require("../command");

cmd(
  {
    pattern: "alive",
    react: "🤖",
    desc: "Show bot status",
    category: "main",
    filename: __filename,
    fromMe: false,
  },
  async (malvin, mek, m, { reply }) => {
    try {
      const from = mek.key.remoteJid;

      await malvin.sendPresenceUpdate("recording", from);

      // Alive Image & Caption
      await malvin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/vofmjs.jpg",
          },
          caption: `NICK MD 𝗜𝗦 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪
          
CREATED WITH LOVE BY YOUNGBOY05
  
𝗼𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗰𝗵𝗮𝗻𝗲𝗹 -: https://whatsapp.com/channel/0029VbAjU7X3QxRxL7WvbI0O

𝗚𝗶𝘁 𝗛𝘂𝗯 𝗥𝗲𝗽𝗼 -: https://github.com/Mulanation/NICK-MD

𝗢𝘄𝗻𝗲𝗿 -: https://t.me/youngboycybertech
          
`,
        },
        { quoted: mek }
      );

      // Delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Voice Message
      await malvin.sendMessage(
        from,
        {
          audio: {
            url: "https://files.catbox.moe/48y9bg.mp3",
          },
          mimetype: "m4a/mp3",
          ptt: true,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error("❌ Error in .alive command:", e);
      reply("❌ Error while sending alive message!");
    }
          })
