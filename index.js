const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = ">";
const Token = "NTUyOTkwNzU1Mzc1ODA4NTMy.D2Hv_Q.P_V3tETTvqlsS73K55E6s9y-G-E";

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
	}

});

Client.login(process.env.BOT_TOKEN || Token);
