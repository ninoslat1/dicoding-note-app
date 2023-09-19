import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNote = ({handleAddNote}) => {
  const [noteWord, setNoteWord] = useState('')
  const [noteTitle, setNoteTitle] = useState('')

  const titleLimit = 50
  const textLimit = 150;
  const toastId = useRef(null)

  const handleText = (event) => {
    if(noteWord.length > textLimit){
      if(! toast.isActive(toastId.current)) {
        toastId.current = toast.error('Your note description is exceed to limit amount')
      }
      setNoteWord("")
    }
      setNoteWord(event.target.value)
  }

  const handleTitle = (event) => {
    if(noteTitle.length > titleLimit){
      if(! toast.isActive(toastId.current)) {
        toastId.current = toast.error('Your note title is exceed to limit amount')
      }
      setNoteTitle("")
    }
      setNoteTitle(event.target.value)
  }

  const handleSaveClick = (e) => {
    if(noteTitle.length > titleLimit || noteWord > textLimit){
      setNoteWord("")
      setNoteTitle("")
    }

    if(noteWord.trim().length <= textLimit && noteTitle.trim().length <= titleLimit){
        handleAddNote([noteWord, noteTitle])
        setNoteWord("")
        setNoteTitle("")
        toast.success('Your note has been successfully added to note list')   
  }
}

  return (
    <>
    <div className='note new my-10 md:my-0'>
        <input className='bg-transparent placeholder:text-white' placeholder='Write your title activity' value={noteTitle} onChange={handleTitle}/>
        <textarea rows='8' cols='10' placeholder='Write your activity' onChange={handleText} value={noteWord}></textarea>
        <div className='note-footer'>
            <small>{textLimit - noteWord.length}/{textLimit}</small>
            <small>{titleLimit - noteTitle.length}/{titleLimit}</small>
            <button className='save' onClick={handleSaveClick} disabled={!noteTitle && !noteWord}>Save</button>
        </div>
    </div>
    <ToastContainer autoClose={1250} theme="colored" closeOnClick={false} pauseOnHover={false} hideProgressBar={true}/>
    </>
  )
}

export default AddNote