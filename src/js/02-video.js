import Player from '@vimeo/player';
const lodash = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function (data) {
  const time = data.seconds;
  localStorage.setItem('videoplayer-current-time', time);
};

const currentTime = localStorage.getItem('videoplayer-current-time');
player.on('timeupdate', lodash(onPlay, 1000));
if (currentTime) {
  player.setCurrentTime(savedTime);
}
