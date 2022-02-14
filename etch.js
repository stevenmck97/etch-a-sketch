const container = document.querySelector('.container');


function createGrid() {
    for(let rows = 0; rows < 16; rows++) {
        const rows = document.createElement('div');
            rows.textContent = 'rows';
            rows.classList.add('row');
            container.appendChild(rows);

        for(let cols = 0; cols < 16; cols++) {
            const cols = document.createElement('div');
            cols.classList.add('col')
            cols.textContent = 'cols';
            rows.appendChild(cols);
        }
    }
}

createGrid();

