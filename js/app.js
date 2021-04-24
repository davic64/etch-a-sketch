const grid = document.querySelector("#grid");
let squares = [];

const drawGrid = (lenghtGrid = 15) => {
    grid.style.gridTemplateColumns = `repeat(${lenghtGrid}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${lenghtGrid}, 1fr)`;
    for (let i = 0; i < lenghtGrid * lenghtGrid; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
    paintSquare();
};

const randomRGB = () => {
    const rgbColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    return rgbColor;
};

const paintSquare = () => {
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = randomRGB();
        });
    });
};

const setGrid = () => {
    let lenghtGrid = Number(prompt("Set the lenght grid"));
    if (lenghtGrid < 2 || lenghtGrid > 64) {
        alert("Ups! The grid number must be between 2 and 64");
        setGrid();
    } else {
        squares.forEach((square) => square.remove());
        drawGrid(lenghtGrid);
    }
};

const main = () => {
    drawGrid();
};

main();
