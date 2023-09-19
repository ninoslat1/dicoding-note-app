import {MdDeleteForever} from 'react-icons/md'

const Note = ({id, title, text, date, handleDeleteNote}) => {
  return (
    <div className='note' key={id}>
        <small>{title}</small>
        <h1 className="text-md lg:text-xl">{text}</h1>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever size={'1.5em'} onClick={() => handleDeleteNote(id)} className="cursor-pointer"/>
        </div>
    </div>
  )
}

export default Note