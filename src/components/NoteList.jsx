import AddNote from "./AddNote"
import IntroNote from "./IntroNote"
import Note from "./Note"
import ShoutoutNote from "./ShoutoutNote"
import { showFormattedDate } from '../../utils'

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="note-list">
      <IntroNote text="Welcome to notes app, here you can write your activity or task" date="Selasa, 27 Desember 2022" title='Shoutout'/>
      <ShoutoutNote date="Selasa, 27 Desember 2022" title='Shoutout'/>
      {notes.map((note) => 
        <Note key={note.id} id={note.id} text={note.text || note.body} title={note.title} date={note.date || showFormattedDate(note.createdAt)} handleDeleteNote={handleDeleteNote}/>
      )}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NoteList
