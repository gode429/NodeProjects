const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

//console.log(chalk.blue('Failure')); 

//console.log(process.argv[2]);
//console.log(process.argv);
//console.log(yargs.argv);

//yargs.version('1.1.0');

//create add coommand
yargs.command({
    command : 'add',
    describe: 'Add a Command',
    builder: {
        title : {
            describe : 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title,argv.body);
    }
})

//create remove coommand
yargs.command({
    command : 'remove',
    describe: 'Remove a Command',
    builder : {
        title: {
            describe : 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNotes(argv.title);
    }
})

yargs.parse();