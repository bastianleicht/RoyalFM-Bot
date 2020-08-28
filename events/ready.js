/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const prefix = require("../config.json");

module.exports = (client, config) => {
    console.log(`Logged in as ${client.user.tag}!`);

                        //Listening to
    const activities = [` music in ${client.guilds.cache.size} guilds`, " -help"];
    setInterval(() => {
        let activity = activities[Math.floor(Math.random() * activities.length)];
        client.user.setActivity(activity, {
            type: "LISTENING"
        });
    }, 30000);


    setInterval(() => {
    try {
        listeners = client.voiceConnections
            .map(vc => vc.channel.members.filter(me => !(me.user.bot || me.selfDeaf || me.deaf)).size)
            .reduce((sum, members) => sum + members);
    } catch (error) {
        listeners = 0;
    }
    }, 30000);
};