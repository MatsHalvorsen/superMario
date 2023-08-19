function startBattle(character, characterHp){
    let selectedCharacterImg = document.getElementById('selectedCharacter');
    let resultText = document.getElementById('result');

    selectedCharacterImg.src = character + '.png';

    let bowserHp = 300;
    let battleResult = battle(character, characterHp);

    if (battleResult === 'win') {
        resultText.textContent = 'Du vant!';
    } else {
        resultText.textContent = 'Du tapte!';
    }
}

function battle(characterHP, bowserHP) {
    while (characterHP > 0 && bowserHP > 0) {
        characterHP -= Math.floor(Math.random() * 20) + 10;
        bowserHP -= Math.floor(Math.random() * 30) + 10;
    }

    if (characterHP <= 0) {
        return 'lose';
    } else {
        return 'win';
    }
}