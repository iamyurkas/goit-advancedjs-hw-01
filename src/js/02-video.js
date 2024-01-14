import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playOn = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(playOn, 1000));

const currentPlayerTime = +localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentPlayerTime);