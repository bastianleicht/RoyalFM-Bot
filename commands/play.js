/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
// jshint multistr: true 
const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    if (message.channel.type === 'dm') {
        const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .addField('Error!', "Please use that Command in a Server!")
            .setFooter(`www.royalfm.de`)
            .setTimestamp();

        message.channel.send(embed);
        return;
    }

    const voiceChannel = message.member.voice.channel;
      if (!voiceChannel) {
        const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .addField('Error!', "You must be in a Voice channel to use this command!")
            .setFooter(`www.royalfm.de`)
            .setTimestamp();

        message.channel.send(embed);
        return;
      }
      if (!args[0]) {
        const embed = new Discord.MessageEmbed()
        .setColor(3447003)
        .setTitle('Radio Station List:')
        .setDescription('`1`: **RoyalFM** Charts.\n\
                        `2`: **RoyalFM** Rap.\n\
                        `3`: **RoyalFM** Dance.')
        .setFooter(`www.royalfm.de`)
        .setTimestamp();

        message.channel.send(embed);
        return;
      }
      if (args[0] === "1") {
        const embed = new Discord.MessageEmbed()
          .setColor("#68ca55")
          .addField('Success!', "Now playing **RoyalFM #Charts** in " + `<#${message.member.voice.channel.id}>`)
          .setFooter(`www.royalfm.de`)
          .setTimestamp();

        message.channel.send(embed);
        message.member.voice.channel.join().then(connection => {
          require('http').get("http://schwabbelfm.stream.laut.fm/schwabbelfm", (res) => {
            connection.play(res).on('error', err => {
              client.logger.error(err);
              connection.play(res);
            });
          });
        });
        return;
      }
      if (args[0] === "2") {
        const embed = new Discord.MessageEmbed()
          .setColor("#68ca55")
          .addField('Success!', "Now playing **RoyalFM #Rap** in " + `<#${message.member.voice.channel.id}>`)
          .setFooter(`www.royalfm.de`)
          .setTimestamp();

        message.channel.send(embed);
        message.member.voice.channel.join().then(connection => {
          require('http').get("http://next.stream.laut.fm/next", (res) => {
            connection.play(res).on('error', err => {
              client.logger.error(err);
              connection.play(res);
            });
          });
        });
        return;
      }
      if (args[0] === "3") {
        const embed = new Discord.MessageEmbed()
          .setColor("#68ca55")
          .addField('Success!', "Now playing **RoyalFM #Dance** in " + `<#${message.member.voice.channel.id}>`)
          .setFooter(`www.royalfm.de`)
          .setTimestamp();

        message.channel.send(embed);
        message.member.voice.channel.join().then(connection => {
          require('http').get("http://radiovacedance.stream.laut.fm/radiovacedance", (res) => {
            connection.play(res).on('error', err => {
              client.logger.error(err);
              connection.play(res);
            });
          });
        });
        return;
      }
      const embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField('Error!', "Not a valid option!")
        .setFooter(`www.royalfm.de`)
        .setTimestamp();
      message.channel.send(embed);
};

module.exports.help = {
    name: "play"
};