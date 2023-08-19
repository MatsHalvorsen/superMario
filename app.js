function startBattle(character, characterHP){
    let selectedCharacterImg = document.getElementById('selectedCharacter');
    let resultText = document.getElementById('result');

    selectedCharacterImg.src = character + '.png';

    let bowserHP = 300;
    let battleResult = battle(characterHP, bowserHP);

    if (battleResult === 'win') {
        resultText.textContent = 'Du vant!';
    } else {
        resultText.textContent = 'Du tapte!';
    }
}

function battle(characterHP, bowserHP) {
    while (characterHP > 0 && bowserHP > 0) {
        characterHP -= Math.floor(Math.random() * 20) + 10;
        bowserHP -= Math.floor(Math.random() * 40) + 10;
    }

    if (characterHP <= 0) {
        return 'lose';
    } else {
        return 'win';
    }
}

let isMusicPlaying = false;

toggleButton.addEventListener('click', () => {
    console.log('Toggle button clicked'); // Feilsøking: Sjekk om knappen klikkes

    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        toggleButton.textContent = 'Play Music';
        console.log('Music paused'); // Feilsøking: Sjekk om musikken settes på pause
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
        toggleButton.textContent = 'Pause Music';
        console.log('Music played'); // Feilsøking: Sjekk om musikken spilles av
    }
});