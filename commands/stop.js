// jshint esversion: 8
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if (message.author.id != "350618993020764161") return message.channel.send(":no_entry: You are not the Bot owner!");

    try {
        await message.channel.send("Bot is shutting down!");
        process.exit();
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`);
    }

    

};

exports.help = {
    name: "stop"
};