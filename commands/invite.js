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
        .setTitle("Invite me to your Server!")
        .setDescription('[Admin Permissions](https://discord.com/api/oauth2/authorize?client_id=741655258328989812&permissions=8&redirect_uri=www.royalfm.de&scope=bot)\n\
                         [Minimal Permissions](https: //discord.com/api/oauth2/authorize?client_id=741655258328989812&permissions=45419840&redirect_uri=www.royalfm.de&scope=bot)\n\
                         [No Permissions](https: //discord.com/api/oauth2/authorize?client_id=741655258328989812&permissions=0&redirect_uri=www.royalfm.de&scope=bot)\n')
        .addField('Need support?', '[RoyalFM Discord](https://discord.gg/a8KfSEr)')
        .setFooter(`www.royalfm.de`)
        .setTimestamp();

    message.channel.send(embed);
};

module.exports.help = {
    name: "invite"
};