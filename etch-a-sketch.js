//GLOBAL VARIABLES 
const body = document.querySelector('body');
const boardSizeBtn = document.getElementById('#board-size');
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

    //remove all the classes. 
    const containers = document.querySelectorAll('.container');
    // console.log(containers);
    containers.forEach((container) => {
        body.removeChild(container);
    })

    //add new class 
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
        //Add random color in here. 
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        gridItem.addEventListener("mouseenter", () => {
            gridItem.style.backgroundColor = randomColor;
        })
    })

}

function main() {
    /* First create the initial board with 16x16 */
    createBoard(); 
    /* Automatically have hoverEffect */
    hoverEffect(); 
    /* Choose size when clicking the button */
    boardSizeBtn.addEventListener('click', createNewBoard);
    /* Choose rainbow color when needed */
    rainbowBtn.addEventListener('click', changeRainbowColor);
    resetBtn.addEventListener('click', resetBoard);
}


main() 