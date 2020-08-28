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

    if (args[0] === null || args[0] === "") {
        const embed = new Discord.MessageEmbed()
            .setColor(3447003)
            .addField('Help Categories:', '`1.` Music Commands\n\
                    `2.` Miscellaneous\n\
                    `3.` Support Commands\n\
                    Do `help <number>` to select a category')
            .setThumbnail(client.user.avatarURL);

        message.channel.send(embed);
        return;
    }
    if (args[0] === "1") {
        const page1 = new Discord.MessageEmbed()
            .setColor(3447003)
            .setTitle("Music Commands")
            .setDescription('`play <radio number>`: Plays a radio station.\n\
                            `leave`: Make the bot leave the channel.\n\
                            `list`: Lists the possible radio stations to be played.\n');

        message.channel.send(page1);
        return;
    }
    if (args[0] === "2") {
        const page2 = new Discord.MessageEmbed()
            .setColor(3447003)
            .setTitle("Miscellaneous")
            .setDescription('`help`: Displays all help categories.\n\
                            `ping`: Pong!\n\
                            `stats`: Check RoyalFM\'s stats.\n\
                            `setprefix`: Set the prefix for your guild.\n');

        message.channel.send(page2);
        return;
    }
    if (args[0] === "3") {
        const page3 = new Discord.MessageEmbed()
            .setColor(3447003)
            .setTitle("Support Commands")
            .setDescription('`invite`: Grab the invite links for the bot.\n\
                            `website`: Grab the website and github link for the bot.\n\
                            `updates`: Displays the update notes so you know what\'s new in this version of the bot.');

        message.channel.send(page3);
        return;
    }
    const embed = new Discord.MessageEmbed()
        .setColor(3447003)
        .addField('Help Categories:', '`1.` Music Commands\n\
                `2.` Miscellaneous\n\
                `3.` Support Commands\n\
                Do `help <number>` to select a category')
        .setThumbnail(client.user.avatarURL);

    message.channel.send(embed);
    };

module.exports.help = {
    name: "help"
};