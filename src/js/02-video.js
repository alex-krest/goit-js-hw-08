var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY="videoplayer-current-time";

const setLocalStorageTime=(data)=>{
	localStorage.setItem(LOCALSTORAGE_KEY,data.seconds)
	console.log("timeupdate");
}

player.on('timeupdate',throttle(setLocalStorageTime,1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));

