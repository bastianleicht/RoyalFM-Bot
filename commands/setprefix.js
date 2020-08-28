/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 * 
 */
// jshint esversion: 8
const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    // if (!args[1]) {
    //     const embed = new Discord.MessageEmbed()
    //         .setColor("#ff0000")
    //         .addField('Error:', "Please input something to be the new prefix!");

    //     message.channel.send(embed);
    //     return;
    // }
    // if (message.author.id === config.owner) {
    //     const newPrefix = args[1];
    //     sql.run(`UPDATE guilds SET prefix = replace(prefix, '${row.prefix}', '${newPrefix}') WHERE guildId = ${message.guild.id}`);
    //     const embed = new Discord.MessageEmbed()
    //         .setColor("#68ca55")
    //         .addField('Success:', `The prefix for **${message.guild.name}** is now **${newPrefix}**`);

    //     message.channel.send(embed);
    //     return;
    // }
    // if (!message.member.hasPermission("ADMINISTRATOR")) {
    //     const embed = new Discord.MessageEmbed()
    //         .setColor("#ff0000")
    //         .addField('No Permissions:', "I'm sorry, but you don't have the `ADMINISTRATOR` permission to use this command.");

    //     message.channel.send(embed);
    //     return;
    // }
    // const newPrefix = args.slice(1).join(" ");
    // sql.run(`UPDATE guilds SET prefix = replace(prefix, '${row.prefix}', '${newPrefix}') WHERE guildId = ${message.guild.id}`);
    // const embed = new Discord.MessageEmbed()
    //     .setColor("#68ca55")
    //     .addField('Success:', `The prefix for **${message.guild.name}** is now **${newPrefix}**`);

    // message.channel.send(embed);
};

module.exports.help = {
    name: "setprefix"
};