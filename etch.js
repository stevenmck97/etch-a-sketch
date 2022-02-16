const container = document.querySelector('.container');

function size() {
   sizePrompt = prompt('What size would you like?');
   deleteGrid()
   createGrid(sizePrompt)
   draw();
    
}

function createGrid(gridSize) {
    
    for(let rows = 0; rows < gridSize; rows++) {
        const rows = document.createElement('div');
        rows.classList.add('row');
        container.appendChild(rows);

        for(let cols = 0; cols < gridSize; cols++) {
            const cols = document.createElement('div');
            cols.classList.add('col')
            rows.appendChild(cols);
    }
}};

function deleteGrid() {
    const rows = document.querySelectorAll('.row')
    const cols = document.querySelectorAll('.col');
    cols.forEach((col) => {
        col.remove()
        })

    rows.forEach((row) => {
        row.remove();
    })
    }

function draw() {
    const cols = document.querySelectorAll('.col');
    cols.forEach((col) => {
        col.addEventListener('mouseover', () => {
            col.style.backgroundColor = "black"
        })
    })
}

function clearDrawing() {
    const cols = document.querySelectorAll('.col');
    cols.forEach((col) => {
            col.style.backgroundColor = "white"
    }) 
}



// function draw(){
//     const cols = document.querySelectorAll('.col');
    
//     for (let i = 0; i < cols.length; i++) {
//         cols[i].addEventListener('click', () => {
//             cols[i].style.backgroundColor = "black"
//         })
//     }
// }








