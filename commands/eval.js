/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const Discord = require("discord.js");
const beautify = require("beautify");

module.exports = {
    name: "eval",
    aliases: ["e"],
    usage: "<code to eval>",

    run: async (client, message, args) => {
        if(message.author.id !== "350618993020764161") {
            return message.channel.send("⛔ You are not the Owner of the bot!")
                .then(m => m.delete(5000));
        }

        if(!args[0]){
            message.channel.send("Give me code to eval!")
                .then(m => m.delete(5000));
        }

        try {
            
            const toEval = args.join(" ");
            const evaluated = eval(toEval);
            const channel = message.channel;
            

            let embed = new Discord.MessageEmbed()
                .setColor("#00FF00")
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL)
                .setTitle("Eval")
                .addField("To evaluate:", `\`\`\`.js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
                .addField("Evaluated:", evaluated)
                .addField("Type of:", typeof(evaluated));
            
            channel.send(embed);

        } catch (e) {
            const channel = message.channel;
            let embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle(":x: Error!")
                .setDescription(e)
                .setFooter(client.user.username, client.user.displayAvatarURL);

            channel.send(embed);

        }
    }
};