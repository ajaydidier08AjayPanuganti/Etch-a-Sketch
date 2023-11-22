var creategrid = document.querySelector(".click")
var grid = document.querySelector(".grid")

creategrid.addEventListener("click", ()=>{ 
var gridsize = document.querySelector("input").value
    reset()
    for(let i = 0;i < gridsize;i++){
        for(let j = 0;j < gridsize;j++){
            var box = document.createElement("div")
            box.classList.add("box")        
            box.style.width = grid.clientWidth/gridsize - 2 + "px"
            box.style.height = grid.clientHeight/gridsize - 2 + "px"
            grid.appendChild(box)
        }
    }
})

function reset(){
    let count = 0
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
        count++
    }
    console.log(count)
}

grid.addEventListener("mouseover",function(e){
    if (e.target.matches = "box"){
        e.target.classList.add("clicked")
    }
})
/*function createBox(){
    var box = document.createElement("div")
    box.classList.add("box")
    box.style.height = "50px"
    box.style.widht = "50px"
    box.style.backgroundColor = "white"
    grid.appendChild(box)
    
    var clickcount = 1
    
    //document.querySelector("body").innerHTML = clickcount + 1
}

/*var gridsize = 4
var submit  = document.querySelector(".submit")
var grid = document.querySelector(".grid")
gridsize = document.querySelector("input") 
grid.addEventListener('click',createGrid(gridsize))



function createGrid(gridsize){
    for(let i = 0;i<gridsize;i++){
        for(let j = 0; j<gridsize;j++){
            createBox(grid.clientWidth/gridsize)
        }
    }
}
function createBox(dime){
    var box = document.createElement("div")
    box.classList.add("box")
    box.style.width = dime
    box.style.heigh = dime
    grid.appendChild(box)
}*/