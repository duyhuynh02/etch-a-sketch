//GLOBAL VARIABLES 
const body = document.querySelector('body');

//FUNCTION 
function main() {
    for (let row = 0; row < 16; row++) {
        const container = document.createElement("div");
        container.className = 'container'; 
        for (let column = 0; column < 16; column++) {
            const grid = document.createElement("div");
            grid.className = 'grid';
            container.appendChild(grid)
        }
        body.appendChild(container);
    }





}


main() 