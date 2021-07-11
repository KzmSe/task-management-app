const fs = require('fs')

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('book.json')
        const data = JSON.parse(buffer.toString())
        return data
    }catch(e) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    debugger

    if (!note) {
        return 'note not found by title.'
    }

    return note
}

const saveNote = (title, body) => {
    const notes = loadNotes()
    const duplicatedNote = notes.find((note) => note.title === title)

    if (!duplicatedNote) {
        notes.push(title, body)

        const notesJSON = JSON.stringify(notes)
        fs.writeFileSync('book.json', notesJSON)
            
        return title.concat(' ').concat(body).concat(' saved.')
    }

    return 'note cannot be saved due to duplication.'
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)

    if (notes.length != notesToKeep.length) {
        const notesJSON = JSON.stringify(notesToKeep)
        fs.writeFileSync('book.json', notesJSON)

        return title.concat(' removed.')
    }

    return 'note cannot be removed.'
}

module.exports = {
    loadNotes: loadNotes,
    readNote: readNote,
    saveNote: saveNote,
    removeNote: removeNote
}