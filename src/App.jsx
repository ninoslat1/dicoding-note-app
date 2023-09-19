import { lazy, useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getInitialData} from '../utils/index'

const NoteList = lazy(() => import('./components/NoteList'))

const App = () => {
	const [notes, setNotes] = useState([])
	const [searchText, setSearchText] = useState('');

	useEffect (() => { fetchData()},[])
	const fetchData = () => {
	 try {
		 const res = getInitialData()
		 setNotes(res)
		 console.log(res.date)
	 } catch(error) {
		 toast.error(error)
	 }
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes)
		toast.info("Your note has been deleted from list")
	};
	
	const addNote = ([text, title]) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			title,
			text,
			date: date.toLocaleDateString(),
		}
		const newNotes = [...notes, newNote]
		setNotes(newNotes);
	}


  return (
    <div className="App px-2">
	  <ToastContainer autoClose={1250} theme="colored" closeOnClick={false} pauseOnHover={false} hideProgressBar={true}/>
      <div className="container">
        <h1 className="text-black font-qs text-4xl font-bold pt-5">Welcome to Note App</h1>
        <SearchBar handleSearchNote={setSearchText}/>
        <NoteList notes={notes.filter((note) => note.title.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
}

export default App
