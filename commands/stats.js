/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
        .setTitle('RoyalFM Music Bot')
        .setColor(3447003)
        .addField(':desktop: Servers', `${client.guilds.cache.size}`, true)
        .addField(':thinking: RAM usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField(':floppy_disk: Version', config.version, true)
        .setFooter(`www.royalfm.de`)
        .setTimestamp();

    message.channel.send(embed);
};

module.exports.help = {
    name: "stats"
};