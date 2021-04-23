const grid = document.querySelector('#grid');
grid.style.gridTemplateColumns = 'repeat(64, 10px)';
for(let i = 0; i < 64; i++) {
    for(let j = 0; j < 64; j++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = '10px';
        div.style.height = '10px';
        grid.appendChild(div);
    }
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    })
})