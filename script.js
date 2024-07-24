const grid =  document.querySelector('.container')
const wholeUI = document.querySelector('.wholeUI')

let gridLength = 496
let length = 16
let blockSize = gridLength/length
let gridsize = 0


function setupGrid(){
    let matrix = document.querySelector('.matrix')
    matrix.textContent = length + ' x ' + length
    matrix.style.textAlign = 'center'
    matrix.style.marginTop = '15px'
    matrix.style.fontSize = '25px'
    gridsize = length*length
    let blockSize = gridLength/length

    grid.innerHTML = ''

    
    for(let i=0; i<gridsize; i++){
        let squareCreate = document.createElement('div')
        squareCreate.style.width = blockSize+'px'
        squareCreate.style.height = blockSize+'px'
        grid.appendChild(squareCreate)
    }
    
    let squares = document.querySelectorAll('.container div')
    squares.forEach(index => index.addEventListener('mouseenter', penTrail)) 
}
setupGrid()

function penTrail(e){
    e.target.classList.add('hovered')
}

let gridButton = document.getElementById('gridLength')


gridButton.addEventListener('click', ()=>{
    let popup = prompt('State your grid length')
    length = parseInt(popup)
    if(popup && length<=100 && length>0 && !isNaN(length)){
        setupGrid()
    }else{
        alert('please state a number only from 1-100')
    }
})
