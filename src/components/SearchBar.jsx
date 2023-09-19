import React from 'react'
import { MdSearch } from 'react-icons/md'

function SearchBar({handleSearchNote}) {
  return (
    <div className='py-10 container flex items-center'>
        <MdSearch size={'2.5em'} color='black'/>
        <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="Search your notes title" className='py-2 px-4 w-full bg-slate-400 placeholder:text-white  rounded-r-lg'></input>
    </div>
  )
}

export default SearchBar