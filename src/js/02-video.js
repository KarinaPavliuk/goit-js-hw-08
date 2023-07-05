import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime || 0);
}

player.on(
  'timeupdate',
  throttle(event => {
    saveToLocalStorage(event.seconds);
  }, 1000)
);

function saveToLocalStorage(seconds) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
