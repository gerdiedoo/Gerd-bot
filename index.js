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
// })
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
    if(message.content === 'test1') {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        
        const player = createAudioPlayer()
            player.on('error', error => {
            console.error('Error:', error.message, 'with track', error.resource.metadata.title);
        });
        const resource = createAudioResource('test2.mp3', {
            metadata: {
                title: 'A good song!',
            },
        });
        player.play(resource);
        // player.play(location)
        connection.subscribe(player)
        console.log(`playing ${resource.metadata.title} in ${message.member.voice.channel.id}`)
    }
})


// client.on("ready", async () => {
//     const currentguild = await client.guilds.fetch(ChannelId);
//     const connection = voice.joinVoiceChannel({
//         channelId:ChannelId,
//         guildId: GuildId,
//         adapterCreator: currentguild.voiceAdapterCreator
//     });
//     const audioplayer = voice.createAudioPlayer();
//     connection.subscribe(audioplayer);
//     connection.on('stateChange', (oldState, newState) => {
// 	console.log(`Connection transitioned from ${oldState.status} to ${newState.status}`);
//     });
//     audioplayer.on('stateChange', (oldState, newState) => {
// 	console.log(`Audio player transitioned from ${oldState.status} to ${newState.status}`);
//     });
//     console.log("Bot's up and runnin'!");
// });

// const ChannelId = "874609249391607838"

// client.on("messageCreate", (message)=>{
//     if(message.content == "secret_shit"){
        
//     }

// })

// const connection = joinVoiceChannel({
// 	channelId: channel.id,
// 	guildId: channel.guild.id,
// 	adapterCreator: channel.guild.voiceAdapterCreator,
// });


// client.on("ready", () => {
//     if(message.content == "secret_shit"){
//         const channel = client.channels.cache.get(ChannelId);
//         if (!channel) return console.error("The channel does not exist!");
//         channel.join().then(connection => {
//             // Yay, it worked!
//             console.log("Successfully connected.");
//         }).catch(e => {

//             // Oh no, it errored! Let's log it to console :)
//             console.error(e);
//         });
//     }
// });

client.login(process.env.TOKEN)