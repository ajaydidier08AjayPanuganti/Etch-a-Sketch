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
