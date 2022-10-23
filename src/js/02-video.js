import Player from '@vimeo/player'; 
// import throttle from 'lodash.throttle';
var throttle = require('lodash.throttle'); 

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(playTime, 1000));

lastTime(); //якщо localStorage заповнений тоді відтворення відео почнеться з останнього збереженого часу в ньому 

function playTime(data) { //ця функція записує в localStorage час(секунди) відтворення
    localStorage.setItem(STORAGE_TIME, data.seconds)
}

function lastTime() {//ця функція запише в localStorage секунди відтворення, а під час перезавантаження сторінки викличе на тому ж проміжку часу setCurrentTime
    const setTime = localStorage.getItem(STORAGE_TIME);

    if (setTime) {
        player.setCurrentTime(setTime);
    }
}
