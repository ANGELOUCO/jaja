// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'quack-quack.ogg');
audioElement.setAttribute('preload', 'auto');

document.body.appendChild(audioElement);
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
 
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
     audioElement.play();
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
