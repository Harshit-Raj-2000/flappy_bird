document.addEventListener('DOMContentLoaded',() =>{

let bird = document.querySelector('#bird')
let ground = document.querySelector('#ground')
let birdHeight = 100
let birdLeft = 300
let gameOver = true

document.addEventListener('keyup',control)

function startGame(){
  birdTimer = setInterval(drop,20)
  createObstacle()
}

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
  else if (e.keyCode === 32 && birdHeight < 340){
    birdHeight += 40
    bird.style.bottom = birdHeight
  }
}

function createObstacle() {
  let obstacleleft = 700
  let obHeight = Math.random() * 310
  let obstacle = document.createElement('div')
  obstacle.className += "obstacle"
  obstacle.style.left = obstacleleft
  obstacle.style.height = obHeight
  ground.appendChild(obstacle)

  function moveOb() {
    obstacleleft -= 50
    obstacle.style.left = obstacleleft

    if(obstacleleft < 500){
      console.log('removed')

      clearInterval(obMove)
    }
  }
  let obMove = setInterval(moveOb,200)
  if(!gameOver) setTimeout(createObstacle,3000)
}



})
