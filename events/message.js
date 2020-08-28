/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const { prefix } = require('../config.json');

module.exports = (client, message) => {

    // if (message.content.includes('discord.gg/' || 'discordapp.com/invite/') !== message.member.hasPermission('ADMINISTRATOR')) {
    //     message.delete().then(message.channel.send(':no_entry: You are not Permitted to send Invite Links!'));
    // }

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    cmd.run(client, message, args, command);

};