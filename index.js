const Discord = require("discord.js");
const config = require("./config.json");
const Intents = Discord.Intents
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES]});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('debug', (info) => {
  console.log(info)
})
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const messageContent = message.content.trim().toLowerCase()
  console.log({messageContent})
  if (messageContent === "nice" || messageContent === "noice") {
    await message.channel.send(messageContent)
  }
});

client.on('error', (error) => {
  console.error(error)
})

client.login(config.BOT_TOKEN);

