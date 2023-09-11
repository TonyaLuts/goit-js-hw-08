import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const onPlay = function (time) {
  localStorage.setItem(STORAGE_KEY, time.seconds);
  console.log(time.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)));
