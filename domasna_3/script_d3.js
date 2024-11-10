const words = ['МАСКА', 'ПЛАЖА', 'ЧОВЕК', 'ИГРАЧ', 'ЖИВОТ', 'ЗЕМЈА', 'МАСЛО', 'ВАЗНА', 'СЛИКА', 'РАНЕЦ'];
let currentWord = '';
let displayedWord = '';
let remainingAttempts = 5;
let gameActive = true;
let previousAttempts = [];

//crtez
const drawHangman = (attempts) => {
    const canvas = document.getElementById('hangmanCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;

    // besilka
    ctx.beginPath();
    ctx.moveTo(50, 230);
    ctx.lineTo(150, 230);
    ctx.moveTo(100, 230);
    ctx.lineTo(100, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 70);
    ctx.stroke();

    const attemptsLeft = attempts;
    // se crta coveceto vo odnos na neuspesnite obidi 
    if (attemptsLeft <= 4) { // glava
        ctx.beginPath();
        ctx.arc(150, 90, 20, 0, Math.PI * 2);
        ctx.stroke();
    }
    if (attemptsLeft <= 3) { // Telo 
        ctx.beginPath();
        ctx.moveTo(150, 110);
        ctx.lineTo(150, 170);
        ctx.stroke();
    }
    if (attemptsLeft <= 2) { // Race
        ctx.beginPath();
        ctx.moveTo(150, 130);
        ctx.lineTo(120, 150);
        ctx.moveTo(150, 130);
        ctx.lineTo(180, 150);
        ctx.stroke();
    }
    if (attemptsLeft <= 1) { // Noze
        ctx.beginPath();
        ctx.moveTo(150, 170);
        ctx.lineTo(120, 200);
       // ctx.moveTo(150, 170);
        //ctx.lineTo(180, 200);
        ctx.stroke();
    }

    if (attemptsLeft == 0) { // Noze
        ctx.beginPath();
        //ctx.moveTo(150, 170);
        //ctx.lineTo(120, 200);
        ctx.moveTo(150, 170);
        ctx.lineTo(180, 200);
        ctx.stroke();
    }
};

// se bira slucaen zbor od gorenavedenite
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

//na dve pozicii da bidat dadeni dve bukvi po slucaen izbor
function getRandomPositions() {
    const positions = new Set();
    while (positions.size < 2) {
        positions.add(Math.floor(Math.random() * 5));
    }
    return Array.from(positions);
}

//pocetok na nova igra
function startNewGame() {
    currentWord = getRandomWord();
    remainingAttempts = 5;
    gameActive = true;
    previousAttempts = [];
    
    //inicijalni dve random bukvi 
    const positions = getRandomPositions();
    displayedWord = '_____'.split('');
    positions.forEach(pos => {
        displayedWord[pos] = currentWord[pos];
    });
    
    updateDisplay();
    document.getElementById('guessInput').value = '';
    drawHangman(remainingAttempts);
}

function updateDisplay() {
    document.getElementById('wordDisplay').textContent = displayedWord.join('');
    document.getElementById('remainingAttempts').textContent = `Преостанати обиди: ${remainingAttempts}`;
    document.getElementById('previousAttempts').textContent = 'Претходни обиди: ' + previousAttempts.join(', ');
}

function showModal(title, message) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('gameOverModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('gameOverModal').style.display = 'none';
}

function checkGuess() {
    if (!gameActive) return;

    const guess = document.getElementById('guessInput').value.toUpperCase();
    
    if (guess.length !== 5) {
        alert('Грешка: Не внесовте збор од 5 букви');
        return;
    }

    if (previousAttempts.includes(guess)) {
        alert('Веќе се обидовте со овој збор!');
        return;
    }

    if (guess === currentWord) {
        gameActive = false;
        showModal('Честитки!', 'Го погодивте зборот: ' + currentWord);
    } else {
        remainingAttempts--;
        previousAttempts.push(guess);
        drawHangman(remainingAttempts);
        
        if (remainingAttempts === 0) {
            gameActive = false;
            showModal('Game Over', 'Бараниот збор е: ' + currentWord);
        }
    }

    updateDisplay();
    document.getElementById('guessInput').value = '';
}

// tastatura
function createKeyboard() {
    const row1Letters = 'ЉЊЕРТЅУИОПШЃ'.split('');
    const row2Letters = 'АСДФГХЈКЛЧЌ'.split('');
    const row3Letters = 'ЗЏЦВБНМ'.split('');

    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');
    const row3 = document.getElementById('row3');

    row1Letters.forEach(letter => createKeyButton(letter, row1));
    row2Letters.forEach(letter => createKeyButton(letter, row2));
    row3Letters.forEach(letter => createKeyButton(letter, row3));
}

function createKeyButton(letter, row) {
    const button = document.createElement('button');
    button.className = "keyboard-button"
    button.textContent = letter;
    button.addEventListener('click', () => {
        const guessInput = document.getElementById('guessInput');
        if (guessInput.value.length < 5) {
            guessInput.value += letter;
        }
    });
    row.appendChild(button);
}

// pocetok na nova igra so refresh na stranta
startNewGame();
createKeyboard();

document.getElementById('guessInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});