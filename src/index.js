#!/usr/bin/env node
const fs = require('fs-extra');
const program = require('commander');
const { initFile } = require('./portfolio');
const { buy, sell } = require('./transactions');

// Initiate portfolio file
initFile();

// Init program
program
    .version('0.0.1')
    .description('Manage your crypto currency portfolio from terminal.');

// Register commands
program
    .command('buy')
    .description('Buy a coin')
    .action( () => {
        buy();
    });

program
    .command('sell')
    .description('Sell a coin')
    .action( () => {
        sell();
    });



// Parse arguments
program.parse(process.argv);