const man = document.querySelector('.man');
const dino = document.querySelector('.dragon');
const gameOver = document.querySelector('.gameOver');
const start = document.querySelector('.btn');
const discription = document.querySelector('.discription');
//button
lt = document.querySelector('.left');
riht = document.querySelector('.right');
jump = document.querySelector('.jump');

// function for small devaice
jump.onclick = () => {
  man.classList.add('animateMan');
  jump.play();
  setTimeout(e => {
    man.classList.remove('animateMan');
  }, 700);
};

lt.onclick = () => {
  let dinox = parseInt(
    window.getComputedStyle(man, null).getPropertyValue('left')
  );
  man.style.left = dinox - 50 + 'px';
  man.classList.add('rotate');
};

riht.onclick = () => {
  let dinox = parseInt(
    window.getComputedStyle(man, null).getPropertyValue('left')
  );
  man.style.left = dinox + 50 + 'px';
  man.classList.remove('rotate');
};

// all are for big devaice
bgmusic = new Audio('bgmusic.mp3');
jump = new Audio('jump.mp3');
gameOverMus = new Audio('gameOver.wav');
let score = 0;
let crose = true;
dino.classList.remove('moveDino');
setTimeout(() => {
  bgmusic.play();
}, 1000);
document.onkeydown = function (e) {
  if (e.keyCode == 38) {
    man.classList.add('animateMan');
    jump.play();
  }
  setTimeout(e => {
    man.classList.remove('animateMan');
  }, 700);

  if (e.keyCode == 39) {
    let dinox = parseInt(
      window.getComputedStyle(man, null).getPropertyValue('left')
    );
    man.style.left = dinox + 50 + 'px';
    man.classList.remove('rotate');
  }
  if (e.keyCode == 37) {
    let dinox = parseInt(
      window.getComputedStyle(man, null).getPropertyValue('left')
    );
    man.style.left = dinox - 50 + 'px';
    man.classList.add('rotate');
  }
};

setInterval(() => {
  let mx = parseInt(
    window.getComputedStyle(man, null).getPropertyValue('left')
  );
  let my = parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));
  let dx = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue('left')
  );
  let dy = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue('top')
  );

  let ofsetX = Math.abs(mx - dx);
  let ofsetY = Math.abs(my - dy);
  // game over function
  if (ofsetX < 50 && ofsetY < 50) {
    gameOver.innerHTML = 'Game Over';
    gameOver.classList.add('red');
    man.classList.add('rotateMan');
    setTimeout(() => {
      man.classList.remove('rotateMan');
    }, 700);
    dino.classList.remove('moveDino');
    start.style.display = 'block';
    man.style.left = '18vw';
    discription.innerHTML =
      'Click upperAro to jump , LeftAro to Left  RightAro to Right';

    gameOverMus.play();
    bgmusic.pause();
    // man.style.left = '50px';
  } else if (ofsetX < 100 && crose) {
    score += 10;
    increaseScore(score);
    crose = false;
    setTimeout(() => {
      crose = true;
    }, 1000);

    setTimeout(() => {
      let anidu = parseFloat(
        window
          .getComputedStyle(dino, null)
          .getPropertyValue('animation-duration')
      );
      let nedu = anidu - 0.1;
      dino.style.animationDuration = nedu + 's';
    }, 500);
  }
}, 100);
let scoreIs = document.querySelector('.score');
function increaseScore(score) {
  scoreIs.innerHTML = 'Score is:' + score;
}

start.onclick = () => {
  dino.classList.add('moveDino');
  gameOver.innerHTML = '';
  start.style.display = 'none';
  scoreIs.innerHTML = 'Score:';
  discription.innerHTML = '';
  score = 0;
  bgmusic.play();
  setTimeout(() => {
    scoreIs.innerHTML = ' Score is:' + score;
  }, 300);
};

discription.innerHTML =
  'Click upperAro to jump , leftAro to left  rightAro to right';
