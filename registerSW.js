if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/dicoding-note-app/sw.js', { scope: '/dicoding-note-app/' })})}