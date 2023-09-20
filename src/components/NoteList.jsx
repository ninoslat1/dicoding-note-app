import AddNote from "./AddNote"
import IntroNote from "./IntroNote"
import Note from "./Note"
import ShoutoutNote from "./ShoutoutNote"
import { showFormattedDate } from '../../utils'

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div>
    <small className="text-black m-5">Shoutout Note</small>
      <div className="note-list">
        <IntroNote text="Welcome to notes app, here you can write your activity or task" date="Selasa, 27 Desember 2022" title='Shoutout'/>
        <ShoutoutNote date="Selasa, 27 Desember 2022" title='Shoutout'/>
        <AddNote handleAddNote={handleAddNote}/>
      </div>
    <small className="text-black m-5">Notes Collection</small>
      {notes.length > 0 ?
      (<div className="note-list">
        {notes.map((note) => 
          <Note key={note.id} id={note.id} text={note.text || note.body} title={note.title} date={note.date || showFormattedDate(note.createdAt)} handleDeleteNote={handleDeleteNote}/>
        )}
      </div>) : (<p className="text-black text-2xl p-20 text-center mx-auto">Notes collection is empty. Please add some notes from the green note on top</p>)}
    </div>
  )
}

export default NoteList
