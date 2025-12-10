const wheels = document.querySelectorAll('.wheel');
const pauseBtn = document.getElementById('pause-btn');
const speedUpBtn = document.getElementById('speed-up-btn');
const speedDownBtn = document.getElementById('speed-down-btn');

let paused = false;

pauseBtn.addEventListener('click', () => {
  paused = !paused;
  wheels.forEach(wheel => {
    wheel.style.animationPlayState = paused ? 'paused' : 'running';
  });
  pauseBtn.textContent = paused ? 'Resume All' : 'Pause All';
});

speedUpBtn.addEventListener('click', () => {
  wheels.forEach(wheel => {
    const currentSpeed = parseFloat(getComputedStyle(wheel).animationDuration);
    wheel.style.animationDuration = `${Math.max(0.5, currentSpeed - 0.5)}s`;
  });
});

speedDownBtn.addEventListener('click', () => {
  wheels.forEach(wheel => {
    const currentSpeed = parseFloat(getComputedStyle(wheel).animationDuration);
    wheel.style.animationDuration = `${currentSpeed + 0.5}s`;
  });
});