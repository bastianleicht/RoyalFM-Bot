/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const Discord = require('discord.js');
const mysql = require('mysql2');
const config = require('../config.json');

module.exports = mysql.createConnection({
    user: config.database.username,
    password: config.database.password,
    database: config.database.database
});