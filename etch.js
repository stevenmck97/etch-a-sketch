rainbowCount = 0;
let color = 'black'
let gridSize;

const container = document.querySelector('.container');

//sets default grid size to 64
(function defaultGrid() {
    createGrid(64); 
})();

const sizeSlide = document.querySelector('#sizeSlide'); //binds slider html element
sizeSlide.onchange = (e) => sizeSlider(e.target.value); //Gets the current value of the slider when it is moved. 
//binds current slide size value to gridsize which is passed into createGrid to specifiy the grid size.
function sizeSlider(newSize){
    gridSize = newSize;
    deleteGrid();
    createGrid(gridSize)
}

function createGrid(gridSize) {

    //checks to ensure grid size is not larger than 100 and smaller than 1
    if (gridSize <= 100 && gridSize >= 1) {
        gridSize = gridSize
    } else {
        gridSize = 64
    }

    //creates rows based on gridSize slider input
    for(let rows = 0; rows < gridSize; rows++) {
        const rows = document.createElement('div');
        rows.classList.add('row');
        container.appendChild(rows);
        //nested loop to create cols
        for(let cols = 0; cols < gridSize; cols++) {
            const cols = document.createElement('div');
            cols.classList.add('col')

            cols.addEventListener('mouseover', () => {
                cols.style.backgroundColor = color
            })

            rows.appendChild(cols);
            
    }
}};

//deletes all rows and columns when called
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

    //sets 3 variables to have random integers between 0-255 and returns them in rgb format
function rainbowDraw() {
    x  = Math.floor(Math.random() * 256);
    y  = Math.floor(Math.random() * 256);
    z  = Math.floor(Math.random() * 256);
    
    return `rgb(${x}, ${y}, ${z})`  
}

//determines whether rainbowCount is 0 or 1 and sets draw type to either user specified color or rainbow.
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
        rainbowBtn.style.backgroundColor= 'lightblue'
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