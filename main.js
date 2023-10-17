const {Client, EmbedBuilder, Collection} = require("discord.js")
const client = new Client({intents: [3276799]})

const config = require("./config.json")
const fs = require("fs") //Libreria que nos lee los archivos del directorio

client.commands = new Collection()
const archivos = fs.readdirSync("./comandos/").filter((s) =>{s.endsWith(".js")})//Esto lee los arhivos de la carpeta comandos y filtra lo que son los archivos js 

for(arx of archivos){
    const comando = require("./comandos/" + arx)
    client.commands.set(comando.name, comando)
    console.log(`El comando ${arx} ha sido cargado correctamente`)
}


client.on("messageCreate", async message =>{
    const prefix = "!"
    if(!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase()

    const cmd = client.commands.get(command)

    if(cmd){
        cmd.run(client, message, args)
    }

    
})

client.login(config.token)
console.log("El bot ya esta listo!");