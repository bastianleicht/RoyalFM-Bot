/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
exports.run = async (client, message, args) => {

    if (message.member.hasPermission('ADMINISTRATOR')) {

        if (isNaN(args[0])) return message.channel.send('Please enter a valid number!');
        if (args[0] > 100) return message.channel.send('Only 99 messages are allowed.');

        message.channel.bulkDelete(args[0]);
    } else {
        message.channel.send('⛔ You are not permitted to use that Command!');
    }
};
exports.help = {
    name: 'clear'
};