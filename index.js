const Discord = require("discord.js")
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType, AudioPlayerStatus } = require('@discordjs/voice');
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message)=>{
    if(message.content == "secret_message"){
        message.reply("to mo kai")
    }
})
// const ChannelId = "874609249391607838"

// const ChannelId = "533900818093572100"
// const GuildId = "349520930021572618"


client.on('messageCreate', message => {
    if(message.content === 'test') {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        console.log(`joining ${message.member.voice.channel.id}`)
    }
})

client.on('messageCreate', message => {
    const voiceChannel = message.member.voice.channel
    if(message.content === 'test1' && voiceChannel) {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        connection
        console.log(`joining ${message.member.voice.channel.id}`)
        const player = createAudioPlayer()
            player.on('error', error => {
            console.error('Error:', error.message, 'with track', error.resource.metadata.title);
        });
        const resource = createAudioResource('boto.mp3', {
            metadata: {
                title: 'A good song!',
            },
        });
        player.play(resource);
        connection.subscribe(player)
        console.log(`playing ${resource.metadata.title} in ${message.member.voice.channel.id}`)
    }
    if(message.content === 'test1' && !voiceChannel){
        message.reply(`join a channel first bitchhhh`)
    }
})



client.login(process.env.TOKEN)
