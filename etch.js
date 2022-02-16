const container = document.querySelector('.container');
rainbowCount = 0;
colCount = 0;

(function defaultGrid() {
    createGrid(64); 
})();



function size() {
   sizePrompt = prompt('What size would you like?');
   colCount = sizePrompt;
   deleteGrid();
   createGrid(colCount); 
}

function createGrid(gridSize) {
    if (gridSize <= 100 && gridSize >= 1) {
        gridSize = gridSize
    } else {
        gridSize = 64
    }
    console.log(gridSize)
    console.log(colCount)

    for(let rows = 0; rows < gridSize; rows++) {
        const rows = document.createElement('div');
        rows.classList.add('row');
        // rows.addEventListener('mouseover', rainbowDraw)
        container.appendChild(rows);
        
        for(let cols = 0; cols < gridSize; cols++) {
            const cols = document.createElement('div');
            cols.classList.add('col')

            if(rainbowCount == 0) {
                cols.addEventListener('mouseover', () => {
                    cols.style.backgroundColor = "black"
                })
            } else {
                cols.addEventListener('mouseover', () => {
                    cols.style.backgroundColor = rainbowDraw()
                })
            }
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

function rainbowDraw() {
    x  = Math.floor(Math.random() * 256);
    y  = Math.floor(Math.random() * 256);
    z  = Math.floor(Math.random() * 256);
    
    return `rgb(${x}, ${y}, ${z})`  
}

function handleColor() {
    const rainbowBtn = document.querySelector('#rainbowBtn')
    if (rainbowCount === 0){
        rainbowCount+=1
        rainbowBtn.style.backgroundColor= 'blue'
    } else if(rainbowCount===1){
        rainbowCount-=1
        rainbowBtn.style.backgroundColor= 'transparent'
    }
    // deleteGrid()
    createGrid(colCount)
}

function clearDrawing() {
    const cols = document.querySelectorAll('.col');
    cols.forEach((col) => {
            col.style.backgroundColor = "white"
    }) 
}

//window.onload

// function draw(){
//     const cols = document.querySelectorAll('.col');
    
//     for (let i = 0; i < cols.length; i++) {
//         cols[i].addEventListener('click', () => {
//             cols[i].style.backgroundColor = "black"
//         })
//     }
// }

// function draw() {
//     const cols = document.querySelectorAll('.col');
//     cols.forEach((col) => {
//         col.addEventListener('mouseover', () => {
//             col.style.backgroundColor = "black"
//         })
//     })
// }

// function rainbowDraw() {
//     x  = Math.floor(Math.random() * 256);
//     y  = Math.floor(Math.random() * 256);
//     z  = Math.floor(Math.random() * 256);
//     const cols = document.querySelectorAll('.col');
//     cols.forEach((col) => {
//         col.addEventListener('mouseover', () => {
//             col.style.backgroundColor = `rgb(${x}, ${y}, ${z})`
//         })
//     })
// }








