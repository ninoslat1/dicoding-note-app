if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/react-note-app/sw.js', { scope: '/react-note-app/' })})}