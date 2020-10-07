document.addEventListener('DOMContentLoaded',() =>{

let bird = document.querySelector('#bird')
let ground = document.querySelector('#ground')
let birdHeight = 100
let birdLeft = 300
let gameOver = true
let score = 0
let birdTimer


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
  let obHeight = Math.random() * 310
  let obstacle = document.createElement('div')
  obstacle.className += "obstacle"
  obstacle.style.left = obstacleleft + 'px'
  obstacle.style.height = obHeight + 'px'
  ground.appendChild(obstacle)

  function moveOb() {
    obstacleleft -= 2
    obstacle.style.left = obstacleleft + 'px'
    if (obstacleleft == 240){
      score += 1
      console.log(score)

    }
    if(obstacleleft == 130){
      createObstacle()
    }
    if(obstacleleft <= -50){
      clearInterval(obMove)
      obstacle.remove()
    }

    if(birdHeight <= 0||birdHeight <= obHeight && obstacleleft <= 330 &&
    obstacleleft >= 250){
      gameOver = true
      clearInterval(obMove)
      clearInterval(birdTimer)
    }
  }
  let obMove = setInterval(moveOb,10)

}



})
