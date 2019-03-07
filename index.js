const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = ">";

Client.on('ready', () => {
	console.log(`Bot logged on with ${Client.user.tag}`);
});

Client.on('message', (message) => {

	msg = message.content;
	msgp = msg.substring(1);
	channel = message.channel;
	author = message.author;

	if(msg == prefix + "test") {
		channel.send("Yay It works... I think?");
	}

});

Client.login(process.env.BOT_TOKEN);
