const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

    mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{

    const pipePosition= pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

        pipe.addEventListener('collision', () => {
            // Plant a game (you would need to implement this part)
            plantAGame();
          
            // Show the restart button
            restartBtn.classList.remove('hidden');
          });
          
          // Add event listener for the restart button
          restartBtn.addEventListener('click', () => {
            // Reset the game (you would need to implement this part)
            resetGame();
          
            // Hide the restart button
            restartBtn.classList.add('hidden');
          });
          
          // Function to plant a game (you would need to implement this part)
          function plantAGame() {
            // Your code here
          }
          
          // Function to reset the game (you would need to implement this part)
          function resetGame() {
            // Your code here
          }
    }
}, 10);





document.addEventListener('keydown', jump);