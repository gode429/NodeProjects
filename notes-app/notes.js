const fs = require('fs');
const chalk = require('chalk');



const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch{
        return [];
    }
}

const saveNotes = function(notes) {
    const JsonData = JSON.stringify(notes);
    fs.writeFileSync('notes.json',JsonData);
}


const addNote = function(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    })

    if(duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.blue('New Note Added')); 
    }
    else{
        console.log(chalk.red.inverse('Note Already Taken')); 
    }
    
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter( note => {
        return note.title !== title;
    })
    if(updatedNotes.length !== notes.length){
        saveNotes(updatedNotes);
        console.log(chalk.blue('Note Deleted')); 
    }
    else{
        console.log(chalk.red.inverse('Note does not exist')); 
    }
}

module.exports = {
    addNote : addNote,
    removeNotes: removeNotes
}