/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.member.voice.channel) {
        const embed = new Discord.MessageEmbed()
          .setColor("#68ca55")
          .addField('Success!', "Voice channel successfully left!");

        message.channel.send(embed);
        message.member.voice.channel.leave();
        return;
      } else {
        const embed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .addField('Error!', "You are currently not in a voice channel!");

        message.channel.send(embed);
        return;
      }
};

module.exports.help = {
    name: "leave"
};