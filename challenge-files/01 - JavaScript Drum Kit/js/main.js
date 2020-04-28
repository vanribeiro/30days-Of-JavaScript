function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    /* Here, we eleminate the key we won't use. */
    if(!audio) return;
    /*Here, we reduce the keydown time to zero*/
    audio.currentTime = 0;
    audio.play();
    /*Here, we add the animations*/
    key.classList.add('playing');
  }

  function removeTransition(e) {
    /*Here, we pick the property name and remove the 
      the class when the we have the keyup moviment.
    */
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  /*Here, we verify when the transiotion finish
  to remove the CSS effects later
  */
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  const audios = document.querySelectorAll('audio');
  keys.forEach(key => key.addEventListener('click', () =>{
      console.log("Clicked");
    }
  ))