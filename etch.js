const container = document.querySelector('.container');

// let size = () => {
//     sizeBtn = document.querySelector('#sizeBtn')
//     promptSize = prompt('what size?')
//     // createGrid(promptSize)
//     sizeBtn.addEventListener('click', createGrid(promptSize))
// }

// size()
function size() {
   sizePrompt = prompt('What size would you like?');
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
            // cols.textContent = 'cols';
            rows.appendChild(cols);
    }
}
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
    const clearBtn = document.querySelector('#clearBtn')
    cols.forEach((col) => {
        clearBtn.addEventListener('click', () => {
            col.style.backgroundColor = "white"
        }) 
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








