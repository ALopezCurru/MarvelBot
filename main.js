const {Client, EmbedBuilder} = require("discord.js")
const client = new Client({intents: [3276799]})

const config = require("./config.json")

client.on("messageCreate", async message =>{
    if(message.content == "!hola"){
        const embed = new EmbedBuilder()
        .setTitle("Titulo")
        .setURL("https://imgur.com/gallery/mXnwmvG")
        .setDescription("Description")
        .setAuthor({
            name: "Tu nombre aqui",
            iconURL: "https://i.imgur.com/Q9D499j.png",
            url: "https://i.imgur.com/Q9D499j.png"
        })
        .setThumbnail("https://i.imgur.com/Q9D499j.png")
        .setImage("https://i.imgur.com/Q9D499j.png")
        .setFooter({
            text: "Hola",
            iconURL: "https://i.imgur.com/Q9D499j.png"
           
        })
        .setTimestamp()
        .setFields({
            name: "Nombre",
            value: "Alex",
            inline: true
        }, {
            name: "Nombre",
            value: "Lucas",
            inline: true
        })
       

        message.channel.send({
            embeds: [embed]
        })
    }
})

client.login(config.token)
console.log("El bot ya esta listo!");