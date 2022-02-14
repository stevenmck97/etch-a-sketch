
const container = document.querySelector('.container');


function createGrid() {
    for(let rows = 0; rows < 16; rows++) {
            const rows = document.createElement('div');
            rows.classList.add('row');
            container.appendChild(rows);

            for(let cols = 0; cols < 16; cols++) {
                const cols = document.createElement('div');
                cols.classList.add('col')
                // cols.textContent = 'cols';
                rows.appendChild(cols);
        }
    }
}
createGrid();

// function draw(){
//     const cols = document.querySelectorAll('.col');
    
//     for (let i = 0; i < cols.length; i++) {
//         cols[i].addEventListener('mouseover', () => {
//             cols[i].style.backgroundColor = "black"
//         })
//     }
// }

function draw() {
    const cols = document.querySelectorAll('.col');
    cols.forEach((col) => {
        col.addEventListener('mouseover', () => {
            col.style.backgroundColor = "black"
        })
    })
}

draw();

function clearDrawing() {
    const cols = document.querySelectorAll('.col');
    const clearBtn = document.querySelector('#clearBtn')
    cols.forEach((col) => {
        clearBtn.addEventListener('click', () => {
            col.style.backgroundColor = "white"
        }) 
    })
}

clearDrawing();








