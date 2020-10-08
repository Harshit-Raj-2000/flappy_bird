document.addEventListener('DOMContentLoaded',() =>{

let bird = document.querySelector('#bird')
let ground = document.querySelector('#ground')
let scoreCard = document.querySelector('#score')
let birdHeight = 100
let birdLeft = 300
let gameOver = true
let score = 0
let birdTimer
let gap = 110

document.addEventListener('keyup',control)


var startGame = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            birdTimer = setInterval(drop,20)
            createObstacle()
        }
    };
})();

function drop(){
  bird.style.bottom = birdHeight + 'px'
  bird.style.left = birdLeft + 'px'
  birdHeight -= 2
}

function control(e){
  if (e.keyCode === 13){
    gameOver  = false
    startGame()
  }
  else if (e.keyCode === 32 && birdHeight < 340 && gameOver == false){
    birdHeight += 40
    bird.style.bottom = birdHeight
  }
}

function createObstacle() {
  let obstacleleft = 700
  let obHeight = Math.random() * 290
  let top = 400 - obHeight - gap
  let obstacle = document.createElement('div')
  let topobstacle = document.createElement('div')
  obstacle.className += "obstacle"
  topobstacle.className += "topobstacle"
  obstacle.style.left = obstacleleft + 'px'
  topobstacle.style.left = obstacleleft + 'px'
  obstacle.style.height = obHeight + 'px'
  topobstacle.style.height = top + 'px'
  topobstacle.style.bottom = (100 + obHeight + gap) + 'px'
  ground.appendChild(obstacle)
  ground.appendChild(topobstacle)
  let topbottom = obHeight + gap - 30
  function moveOb() {
    obstacleleft -= 4
    obstacle.style.left = obstacleleft + 'px'
    topobstacle.style.left = obstacleleft + 'px'
    if (obstacleleft == 240){
      score += 1
      console.log(score)
      scoreCard.innerHTML = `Score: ${score}`

    }
    if(obstacleleft == 128){
      createObstacle()
    }
    if(obstacleleft <= -50){
      clearInterval(obMove)
      obstacle.remove()
      topobstacle.remove()
    }

    if(birdHeight <= -2||birdHeight <= obHeight&& obstacleleft <= 330 &&
    obstacleleft >= 240||birdHeight >= topbottom && obstacleleft <= 330 &&
    obstacleleft >= 240)
    {
      gameOver = true
      console.log(birdHeight)
      console.log(obHeight)
      console.log(bird.style.bottom)
      clearInterval(obMove)
      clearInterval(birdTimer)
    }
  }
  let obMove = setInterval(moveOb,20)
}



})
