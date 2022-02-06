var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const setLocalStorageTime = data => {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(setLocalStorageTime, 1000));

const time = localStorage.getItem(LOCALSTORAGE_KEY);

player
  .setCurrentTime(time)
  .then(function (time) {
    return time;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
