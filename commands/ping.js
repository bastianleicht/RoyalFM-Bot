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

    let pong = new Discord.MessageEmbed()
        .setTitle("🏓 Pong!")
        .setColor(3447003)
        .setTimestamp()
        .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send(pong);
};

module.exports.help = {
    name: "ping"
};