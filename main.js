document.addEventListener('DOMContentLoaded',() =>{

let bird = document.querySelector('#bird')
let birdHeight = 100
let birdLeft = 300

document.addEventListener('keyup',control)

function startGame(){
  bird.style.bottom = birdHeight + 'px'
  bird.style.left = birdLeft + 'px'
  birdHeight -= 2
}

function control(e){
  if (e.keyCode === 13){
    var birdTimer = setInterval(startGame,20);
  }
  else if (e.keyCode === 32 && birdHeight < 320){
    console.log("enter")
    birdHeight += 40
    bird.style.bottom = birdHeight
  }
}

function createObstacle() {
  let obstacle = document.createElement('div')

}



})
