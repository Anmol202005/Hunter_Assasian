
const gunshotSound = new Audio('gunshot.mp3');


function playGunshot() {
    gunshotSound.currentTime = 0; 
    gunshotSound.play(); 
}


document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { 
        playGunshot(); 
    }
});

    
        
