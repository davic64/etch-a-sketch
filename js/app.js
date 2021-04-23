const grid = document.querySelector("#grid");

const gridUI = (sq) => {
    grid.style.gridTemplateColumns = `repeat(${sq}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${sq}, 1fr)`;
    for (let i = 0; i < sq * sq; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
    });
};

const setGrid = () => {
    let sq = Number(prompt("Grid"));
    if(sq < 64) {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => square.remove());
        gridUI(sq);
    } else {
        alert('Max 64')
    }
};

gridUI(10);
