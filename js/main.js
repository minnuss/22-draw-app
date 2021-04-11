const canvas = document.querySelector('.app__content__canvas');
const ctx = canvas.getContext('2d');

const btnDecrease = document.querySelector('.app__content__toolbox--btn-decrease');
const btnIncrease = document.querySelector('.app__content__toolbox--btn-increase');
const btnSize = document.querySelector('.app__content__toolbox--btn--size');
const colorChange = document.querySelector('.app__content__toolbox--color-input');
const btnClear = document.querySelector('.app__content__toolbox--btn-clear');

let size = 20;
let isPressed = false;
let color = 'black';
let x;
let y;

// ON CLICK CREATE A DOT
canvas.addEventListener('click', (e) => {
    x = e.offsetX;
    y = e.offsetY;

    drawCircle(x, y)
})

// ON MOUSEDOWN REGISTER MOUSE AXIS START POINT
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

// ON MOUSEUP END FOLLOWING MOUSE MOVEMENT
canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

// ON MOVE, TRACK MOSE MOVEMENT
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2)

        x = x2;
        y = y2;
    }
})

// DRAW A BASIC CIRCLE / DOT
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill();
}

// DRAW A LINE WHEN MOUSE IS MOVED
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
// DECREASE SIZE OF LINE
btnDecrease.addEventListener('click', () => {
    size -= 2;
    btnSize.innerHTML = size;
    if (size <= 2) {
        size = 2;
        btnSize.innerHTML = size;
    }
})
// INREASE SIZE OF LINE
btnIncrease.addEventListener('click', () => {
    size += 2;
    btnSize.innerHTML = size;
    if (size >= 50) {
        size = 50;
        btnSize.innerHTML = size;
    }
})
// TO GET THE COLOR VALUE ALL THE TIME, LISTENER NEEDS TO BE INPUT, NOT CLICK
// GET THE COLOR VALUE FROM INPUT
colorChange.addEventListener('input', (e) => {
    color = colorChange.value;
})
// CLEAR PAINT TABLE
btnClear.addEventListener('click', () => {
    const width = canvas.getBoundingClientRect().width;
    const height = canvas.getBoundingClientRect().height;

    ctx.clearRect(0, 0, width, height);
})