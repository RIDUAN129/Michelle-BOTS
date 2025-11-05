const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`✅ Bot ${client.user.tag} sudah online!`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  } else if (message.content === '!halo') {
    message.reply('Halo Riduan! 😎');
  }
});

client.login(process.env.DISCORD_TOKEN);