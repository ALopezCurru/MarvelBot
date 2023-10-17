const {Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder} = require("discord.js")
const client = new Client({intents: [3276799]})
client.on("ready", async()=>{
    console.log("El bot ya esta listo")
})

const config = require("./config.json")

client.on("messageCreate", async message =>{
    if(message.content == "!Acciones"){
                const btnHeroe = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
            .setLabel("Descubre que heroe eres")
            .setEmoji("🍏")
            .setStyle("Primary")
            .setCustomId("btnheroe")
        ])

        //
       
        message.channel.send({
            components: [btnHeroe],
           
        })
    
    }
   
})

client.on("interactionCreate", async interaction =>{
 
    if(interaction.customId = "btnheroe"){
        interaction.reply({
            content: "Hola"
        }
        )
    }
 
})


client.login(config.token)
