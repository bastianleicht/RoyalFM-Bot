/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
// jshint multistr: true 
const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor(3447003)
    .setTitle('Radio Station List:')
    .setDescription('`1`: **RoyalFM** Charts.\n\
                    `2`: **RoyalFM** Rap.\n\
                    `3`: **RoyalFM** Dance.')
    .setFooter(`www.royalfm.de`, message.author.displayAvatarURL())
    .setTimestamp();

    message.channel.send(embed);
};

module.exports.help = {
    name: "list"
};
