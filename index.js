containerDiv = document.querySelector('#container');

const startingSize = 16;

createGrid(startingSize);

function createGrid(size) {
    // Create a column of size
    for (let i = 0; i < size; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('gridCol');

        // Create one box per column
        for (let j = 0; j < size; j++) {
            const rowDiv = document.createElement('div');
            rowDiv.id = `div${i}-${j}`;
            rowDiv.classList.add('gridSquare');
            colDiv.appendChild(rowDiv);
        }
        containerDiv.appendChild(colDiv);
    }
    
}