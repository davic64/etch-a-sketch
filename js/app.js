const grid = document.querySelector("#grid");

const gridUI = (sq) => {
    grid.style.gridTemplateColumns = `repeat(${sq}, 1fr)`;
    for (let i = 0; i < sq; i++) {
        for (let j = 0; j < sq; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            div.style.width = "100%";
            div.style.height = "100%";
            grid.appendChild(div);
        }
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
    gridUI(sq);
};

gridUI(10);
