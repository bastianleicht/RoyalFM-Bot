/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const Discord = require("discord.js");
const fs = require('fs');
const Enmap = require('enmap');
const config = require('./config.json');

const client = new Discord.Client();

client.commands = new Enmap();

let listeners = 0;
let connection;

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
     if (!file.endsWith('.js')) return;
     const evt = require(`./events/${file}`);
     let evtName = file.split('.')[0];
     console.log(`Loaded event '${evtName}'`);
     client.on(evtName, evt.bind(null, client));
    });
});

fs.readdir('./commands/', async (err, files) => {
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Loaded Command '${cmdName}'`);
        client.commands.set(cmdName, props);

    });
});

// client.on('guildCreate', async (guild) => {
//     try {
//         await connection.query(
//             `INSERT INTO Guilds VALUES('${guild.id}', '${guild.ownerID}')`
//         );
//         await connection.query(
//             `INSERT INTO guildconfig (guildId) VALUES('${guild.id}')`
//         );
//     } catch(err) {
//         console.log(err);
//     }
// });

(async () => {
    // connection = await require('./database/db.js');
    await client.login(config.token || process.env.TOKEN);
})();

// client.login(config.token);