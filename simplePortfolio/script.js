const git = document.getElementById('git');

git.addEventListener('click', () => {
    const url = 'https://www.github.com/jinxinyii';
    const win = window.open(url, '_blank');
    win.focus();
});

elem.onclick = function() {
    animate({
      duration: 1000,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
        elem.style.width = progress * 100 + '%';
      }
    });
};

function animate({duration, timing, draw}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}