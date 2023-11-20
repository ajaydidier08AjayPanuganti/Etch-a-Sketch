var creategrid = document.querySelector(".click")
var grid = document.querySelector(".grid")

creategrid.addEventListener("click", ()=>{ 
var gridsize = document.querySelector("input")
for(let i = 0;i < gridsize;i++){
    for(let j = 0;j < gridsize;j++){
        var box = document.createElement("div")
        box.classList.add("box")        
        box.style.width = grid.clientWidth/gridsize - 4 + "px"
        box.style.height = grid.clientHeight/gridsize - 4 + "px"
        grid.appendChild(box)

    }
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