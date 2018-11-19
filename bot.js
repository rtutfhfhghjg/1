const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "511942218479566859"; // ايدي السررفر
var channel = "511942218945396767";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**gfdfgdg , fgdfjfgdjdj , 3 , hjghjgjhg , yttyty , 34453456 , Dream , Dream , Dream , jgdffdfjdfam , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login("NTAxNDAxMTE3MDA4MDY4NjI4.DtR1-A.lLmC0mtRuPTbz-G5fSFg4G7RF-8");
