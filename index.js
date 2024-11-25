containerDiv = document.querySelector('#container');

sizeButton = document.createElement('button');
sizeButton.textContent = 'Grid Size';
sizeButton.id = 'sizeButton';
containerDiv.appendChild(sizeButton);

gridDiv = document.createElement('div');
gridDiv.id = 'grid';
containerDiv.appendChild(gridDiv);

gridDiv.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('gridSquare')) {
        event.target.classList.add('triggered');
    }
    
})

const startingSize = 16;

createGrid(startingSize);

function createGrid(size) {
    // Create a column of size
    for (let i = 0; i < size; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('gridCol');

        // Create one box per row
        for (let j = 0; j < size; j++) {
            const rowDiv = document.createElement('div');
            rowDiv.id = `div${i}-${j}`;
            rowDiv.classList.add('gridSquare');
            colDiv.appendChild(rowDiv);
        }
        gridDiv.appendChild(colDiv);
    }
    
}

sizeButton.addEventListener('click', () => {
    newSize = Number(prompt('What size grid?'));
    if (Number.isInteger(newSize) && newSize > 0 && newSize <= 100) {
        gridDiv.innerHTML = '';
        createGrid(newSize);
    }
})