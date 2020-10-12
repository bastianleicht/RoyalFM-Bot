/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
module.exports = async (player, oldState, newState) => {

    const oldChannel = oldState.channel ? oldState.channel.id : null;
    const newChannel = newState.channel ? newState.channel.id : null;

    if (oldChannel === newChannel) {
        return;
    }

    const botWasInOldChannel = oldChannel === player.channel.id;
    const botIsInNewChannel = newChannel === player.channel.id;

    if (botWasInOldChannel && !botIsInNewChannel && newState.id === player.client.user.id) {
        console.log('UPDATING BOT CHANNEL');
        player.updateChannel(newState.channel);
        player.updateListeners();
        player.updateDispatcherStatus();
        return;
    }

    if ((!oldChannel && botIsInNewChannel) || botIsInNewChannel) {
        console.log(`User ${newState.member.displayName} has joined ${player.channel.name}.`);
        player.updateListeners();
        player.updateDispatcherStatus();
        player.newChannel.then(connection => {
            require('http').get("http://schwabbelfm.stream.laut.fm/schwabbelfm", (res) => {
                connection.play(res).on('error', err => {
                    connection.play(res);
                });
            });
        });
        return;
    }

    if ((!newChannel && botWasInOldChannel) || botWasInOldChannel) {
        console.log(`User ${oldState.member.displayName} has left ${player.channel.name}.`);
        player.updateListeners();
        player.updateDispatcherStatus();
    }

};