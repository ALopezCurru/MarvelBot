module.exports = {
    name: "Ping",
    description: "Test command",

    run: (client, message, args)=>{
        message.reply({
            content: `El ping del bot es de **${client.ws.ping}**`
        })
    }
}