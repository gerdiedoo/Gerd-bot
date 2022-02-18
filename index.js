const Discord = require("discord.js")
require("dotenv").config()

const TOKEN ="OTQ0MDk5MDc4NjA0NzI2Mzg0.Yg8qyA.wbZTzwGWd0DgIwCGYx7OqA2JuNE"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message)=>{
    if(message.content == "hi"){
        message.reply("Hellow World!")
    }
})

client.login(process.env.TOKEN)