// Line below allows this to be running 24/7
const keepAlive = require("./server.js")
// Token hidden, courtesy of repl.it
const tooken = process.env['TOKEN']
const Discord = require("discord.js")
const intents  = new Discord.Intents(32767)
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: intents});

client.on('ready', () =>{
  console.log('Authed for user', client.user.username);
  client.user.setActivity("Slash Commands");
})

async function web(webhook, embed) {
	while(0 == 0) {
  		webhook.send({
			username: "CSRP | Server Owner",
			embeds: [embed],
		});
	}
}

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
	const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/981154379476402176/H_SpEVZpa20ohabSSyxFdOQRK2lZslMEyfY-yfa-tOujCdQqm_K1hDgtOMRfQ-Fp8CCd' });
	const embed = {
      "title": "Server Owned by Unknownagent#7297",
      "description": "CSRP is an ERLC Server owned and created by Unknownagent#7297.\n\nEnhot yau saty",
      "color": 16777215,
      "footer": {
        "text": "oomboooood by Unknownagent#7297"
      }
    }
	web(webhookClient, embed)
});

// Line below allows this to be running 24/7
keepAlive()

client.login(tooken)