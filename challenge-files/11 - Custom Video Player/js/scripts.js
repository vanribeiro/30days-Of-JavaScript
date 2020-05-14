import { player, video, fullscreenButton,
    toggle, skipButtons, ranges, progress
} from './modules/elements.js';
import {
    keyboardFullScreen, keyboardTogglePlay, hideControls, hideCursor,
    showCursorDefault, showControls, togglePlay, updateButton, handleRangeUpdte,
    handleFullScreen, handleProgress, handleTimerClock, totalTimeVideo, skip, scrub
} from './modules/functions.js';


player.addEventListener('keydown', keyboardFullScreen);
player.addEventListener('keydown', keyboardTogglePlay);
player.addEventListener('mouseup', hideCursor);
player.addEventListener('mouseup', hideControls);
player.addEventListener('mousemove', showCursorDefault);
player.addEventListener('mousemove', showControls);

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('timeupdate', handleTimerClock);
video.addEventListener('timeupdate', totalTimeVideo);

fullscreenButton.addEventListener('click', handleFullScreen);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => 
    button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdte));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdte));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = true);

