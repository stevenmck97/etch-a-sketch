rainbowCount = 0;
let color = 'black'

const container = document.querySelector('.container');

(function defaultGrid() {
    createGrid(64); 
})();

function size() {
   sizePrompt = prompt('What size would you like?');
   deleteGrid();
   createGrid(sizePrompt); 
}

function createGrid(gridSize) {
    if (gridSize <= 100 && gridSize >= 1) {
        gridSize = gridSize
    } else {
        gridSize = 64
    }
    for(let rows = 0; rows < gridSize; rows++) {
        const rows = document.createElement('div');
        rows.classList.add('row');
        container.appendChild(rows);
        
        for(let cols = 0; cols < gridSize; cols++) {
            const cols = document.createElement('div');
            cols.classList.add('col')

            cols.addEventListener('mouseover', () => {
                cols.style.backgroundColor = color
            })

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
    const cols = document.querySelectorAll('.col')
    if (rainbowCount === 0){
        cols.forEach((col) => {
            col.addEventListener('mouseover', () => {
                col.style.backgroundColor = rainbowDraw()
            })
        })
        rainbowCount+=1
        rainbowBtn.style.backgroundColor= 'blue'
    } 
    else if(rainbowCount===1){
        cols.forEach((col) => {
            col.addEventListener('mouseover', () => {
                col.style.backgroundColor = color
            })
        })
        rainbowCount-=1
        rainbowBtn.style.backgroundColor= 'transparent'
    }  
}

function setColor(newColor) {
    color = newColor
}
const colorChoice = document.querySelector('#colorPicker')
colorChoice.onchange = (e) => setColor(e.target.value)

function clearDrawing() {
    const cols = document.querySelectorAll('.col');
    cols.forEach((col) => {
            col.style.backgroundColor = "white"
    }) 
}

