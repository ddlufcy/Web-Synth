const audioCtx = new (window.AudioContext || window.webkitAudioContext);
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const volumeControl = document.querySelector('[data-action="volume"]');

// audio context
const osc = audioCtx.createOscillator();
const volume = audioCtx.createGain();
volume.connect(audioCtx.destination);
osc.type = 'sine';
osc.frequency.value = 440;
osc.connect(volume);
osc.connect(audioCtx.destination);




// controls
startBtn.addEventListener('click', function(){
    osc.start();
});
stopBtn.addEventListener('click', function(){
    osc.stop();
});
volumeControl.addEventListener('input', function(){
    volume.gain.value = this.value;
}, false)

