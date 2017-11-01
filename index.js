#!/usr/bin/env node
'use strict';

const commander = require('commander');
const shell = require('shelljs');

commander
    .option('-b, --branch [branch]', 'Select a specific branch')
    .parse(process.argv);

if (commander) {

    if (commander.branch) {
        console.log('Download started');
        shell.exec('git clone -b ' + commander.branch + ' https://github.com/KevinPy/Iceberg.git', { silent: true });
        console.log('Download finished');
        shell.cd('Iceberg');
        console.log('Installation of node modules started');
        shell.exec('npm install', { silent: true });
        console.log('Installation of node modules finished');
        console.log('Iceberg is ready !');
    } else {
        console.log('Download started');
        shell.exec('git clone https://github.com/KevinPy/Iceberg.git', { silent: true });
        console.log('Download finished');
        shell.cd('Iceberg');
        console.log('Installation of node modules started');
        shell.exec('npm install', { silent: true });
        console.log('Installation of node modules finished');
        console.log('Iceberg is ready !');
    }

}
