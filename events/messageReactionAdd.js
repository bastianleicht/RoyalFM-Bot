/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
module.exports = async (client, messageReaction, user) => {

    // const message = messageReaction.message;
    // const welcomechannel = message.guild.channels.cache.find(c => c.name === 'welcome');
    // const verifychannel = message.guild.channels.cache.find(c => c.name === 'verify');
    // const member = message.guild.members.cache.get(user.id);
    // if (member.user.bot) return;

    // const a = message.guild.roles.cache.get('703919314801262592'); // Valorant
    // const b = message.guild.roles.cache.get('703919347948584990'); // Fortnite
    // const c = message.guild.roles.cache.get('703919383180869663'); // LoL

    // const verify = message.guild.roles.cache.get("704037554109808671"); // Verify role

    // if (messageReaction.emoji.name === '✅' && message.channel.id === verifychannel.id) {
    //     member.roles.add(verify).catch(console.error);
    //     messageReaction.users.remove(member).catch(console.error);
    // }

    // // Adds/removes a user from role via the welcome
    // if (['🇦', '🇧', '🇨'].includes(messageReaction.emoji.name) && message.channel.id === welcomechannel.id) {
    //     switch (messageReaction.emoji.name) {
    //         case '🇦':
    //             member.roles.add(a).catch(console.error);
    //             break;
    //         case '🇧':
    //             member.roles.add(b).catch(console.error);
    //             break;
    //         case '🇨':
    //             member.roles.add(c).catch(console.error);
    //             break;
    //         default:
    //             break;
    //     }
    // }
};