const {Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, SelectMenuBuilder, Component, StringSelectMenuBuilder} = require("discord.js")
const client = new Client({intents: [3276799]})
client.on("ready", async()=>{
    console.log("El bot ya esta listo")
})

const config = require("./config.json")

client.on("messageCreate", async message =>{
    if(message.content == "!Acciones"){
                
        const menu = new ActionRowBuilder()
        .addComponents([
            new StringSelectMenuBuilder()
            .setCustomId("idMenu")
            .setPlaceholder("Nada seleccionado")
            .addOptions([
                {
                    label: "Opcion 1",
                    emoji: "❤",
                    description: "Hola",
                    value: "Hola"
                },
                {
                    label: "Opcion 2",
                    emoji: "😒",
                    description: "Adios",
                    value: "Adios"
                }
            ])
        ])
    
        message.channel.send({
            components: [menu]
        })
    }
   
})

client.on("interactionCreate", async interaction =>{
 
   const entrada = interaction.values[0]
   if(entrada == "Hola"){
    interaction.update({
        content: "Hola"
    })
   }

   if(entrada == "Adios"){
    interaction.update({
        content: "Adios"
    })
   }
 
})


client.login(config.token)
