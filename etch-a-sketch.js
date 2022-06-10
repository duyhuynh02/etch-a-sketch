//GLOBAL VARIABLES 
const body = document.querySelector('body');
const boardSizeBtn = document.getElementById('board-size');
const rainbowBtn = document.getElementById('random-colors');
const resetBtn = document.getElementById('reset');

//FUNCTION 
function createBoard(maxRow=16, maxColumn=16) {
    //Create board with (maxRows, maxColumn)
    //Both not larger than 64.  
    for (let row = 0; row < maxRow; row++) {
        const container = document.createElement("div");
        container.className = 'container'; 
        for (let column = 0; column < maxColumn; column++) {
            const grid = document.createElement("div");
            grid.className = 'grid';
            container.appendChild(grid)
        }
        body.appendChild(container);
    }
}

function hoverEffect(color="black") {
    const gridList = document.querySelectorAll('.grid');

    //Initial color is black; 
    gridList.forEach((gridItem) => {
        gridItem.addEventListener("mouseenter", () => {
            gridItem.style.backgroundColor = color;
        })
    })
}

function createNewBoard() {
    let size = Number(prompt("Please choose the size not larger than 64.", 16));
    while (size > 64 || size < 0) {
        size = Number(prompt("Please choose the size not larger than 64."));
    };
    let totalRows = size; 
    let totalColumns = size; 

    //remove all the grid item in containers. 
    const containers = document.querySelectorAll('.container');
    containers.forEach((container) => {
        body.removeChild(container);
    })

    //THen create newBoard with hoverEffect 
    createBoard(totalRows, totalColumns)
    hoverEffect(); 

}

function resetBoard() {
    document.location.reload(true);
}

function changeRainbowColor() {
    //Hover effect
    const gridList = document.querySelectorAll('.grid');

    //Initial color is black; 
    gridList.forEach((gridItem) => {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); //Add one line to have random color in here. 
        gridItem.addEventListener("mouseenter", () => {
            gridItem.style.backgroundColor = randomColor;
        })
    })

}

function main() {
    createBoard(); 
    hoverEffect(); 
    /* Choose size when clicking the button */
    boardSizeBtn.addEventListener('click', createNewBoard);
    /* Choose rainbow color when needed */
    rainbowBtn.addEventListener('click', changeRainbowColor);
    /* Reset button */
    resetBtn.addEventListener('click', resetBoard);
}


main() 