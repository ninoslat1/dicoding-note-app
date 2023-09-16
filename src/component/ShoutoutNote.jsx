const ShoutoutNote = ({title, date}) => {
    return (
      <div className='rounded-xl p-4 h-[40vh] flex flex-col justify-between whitespace-pre-wrap break-words bg-slate-800 text-white'>
          <small>{title}</small>
          <p className="text-xl">Big thanks to  
          <a href="https://reactjs.org/" target="_blank" className="react"><span> React</span></a>, 
          <a href="https://vitejs.dev/" target="_blank" className="vite"><span> Vite</span></a>,
          <a href="https://tailwindcss.com/" target="_blank" className="tailwind"><span> Tailwind CSS</span></a>, and
          <a href="https://www.npmjs.com/package/react-toastify" target="_blank" className="red"><span> Toastify</span></a> for helping me to build this app. Also
          <a href="https://www.dicoding.com/" target="_blank" className="blue"><span> Dicoding</span></a> for this challenging project</p>
          <div className='note-footer'>
              <small>{date}</small>
          </div>
      </div>
    )
  }
  
  export default ShoutoutNote