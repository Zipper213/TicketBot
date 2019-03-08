const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = ">";
const Owner = "ZippyTheDoggy";
const OwnerDiscord = "ZippyTheDoggy#9276";
const DiscordLink = "https://discord.gg/Xfqqwtm";
const BotName = "Ticket Bot";

Client.on('ready', () => {
	console.log(`Bot logged on with ${Client.user.tag}`);
});

Client.on('message', (message) => {

	let msg = message.content;
	let msgp = msg.substring(1);
	let channel = message.channel;
	let author = message.author;

	if(msgp === "test") {
		channel.send("Yay It works... I think?")
	} else if(msgp === "discord" & proccess.env.Discord) {
		channel.send("https://discord.gg/Xfqqwtm");
	}

});

Client.login(process.env.BOT_TOKEN);
