//Referenced code from Randy's demo from 25JUN2020, 29JUN2020, 
// Study Hall with coach Marcus Chiriboga on 29JUN2020 and
// Study Hall with coach Nikal Morgan on 30JUN2020. 

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let y=0
let x=0

const mazeEl = document.getElementById("maze")

// function 

const createMaze = function (blueprint) {
    for (let rowNum=0; rowNum<blueprint.length; rowNum++){
        const rowStr = blueprint[rowNum]
        let blockDivs = ""
        // console.log(rowStr)
        for (let colNum=0; colNum<rowStr.length; colNum++){
            const blockType = rowStr[colNum]
            // console.log(rowStr[colNum])
            switch (blockType){
                case "W":
                    blockDivs += "<div class='block wall'></div>"
                    break;
                case "S":
                    blockDivs += `<div id="cell${colNum}-${rowNum}" class="block start" >START<img id="link" src="link_nes.png"></img></div>`
                    y = rowNum
                    x = colNum
                    break;
                case "F":
                    blockDivs += `<div id="cell${colNum}-${rowNum}" class="block finish">FINISH<img id="triforce" src="240px-Triforce_Logo.png"></img></div>`
                    break;
                default:
                    blockDivs += `<div id="cell${colNum}-${rowNum}" class="block"></div>`
            }   
        }

    mazeEl.innerHTML += `<div class="row">${blockDivs}</div>`
    }
}

createMaze(map)

document.addEventListener('keydown', moveLink);

let position = {
    linkTopPos: 270,
    linkLeftPos: 0
}

let linkInCell = `${x}-${y}`

function moveLink(evt) {
    switch (evt.code){
        case "ArrowDown":
             if(map[y+1][x]!=="W"){
                console.log(map[y][x])
                position.linkTopPos += 30
                linkInCell = `${x}-${y+1}`
                y += 1
                break; 
            } else {break}
            
        case "ArrowUp":
            if(map[y-1][x]!=="W"){
                console.log(map[y][x])
                position.linkTopPos -= 30
                linkInCell = `${x}-${y-1}`
                y -= 1
                break;
            } else { break}

        case "ArrowLeft":
            if (linkInCell === `0-${y}`) {
                break;
            } else if(map[y][x-1]!=="W"){
                console.log(map[y][x])
                position.linkLeftPos -= 30
                linkInCell = `${x-1}-${y}`
                x -= 1
                break;
            } else { break}

        case "ArrowRight":
            if(map[y][x+1]!=="W"){
                console.log(map[y][x])
                position.linkLeftPos += 30;
                linkInCell = `${x+1}-${y}`
                x += 1
                break;
            }else { break}
    }        


    document.getElementById("link").style.top = position.linkTopPos + "px";
    document.getElementById("link").style.left = position.linkLeftPos + "px";

    let linkTriforceImg= document.createElement("img")
    linkTriforceImg.id = "grabTriforce"
    linkTriforceImg.src = "link-triforce.png"
    
    const triforce = document.querySelector("#triforce")
    const finishDiv = document.getElementById("cell20-8")
    const startDiv = document.getElementById("cell0-9")
    const link = document.getElementById("link")
    const main = document.querySelector("main")
    const restart = document.querySelector("#restart")
    const body = document.querySelector("body")

        
    const grabTriforce = function (){
        if(map[y][x]==="F"){
            console.log("You won!!!")
            finishDiv.replaceChild(linkTriforceImg,triforce);
            startDiv.removeChild(link)
            main.style.opacity = "0.25"
            restart.innerHTML = "Play map again!"
            body.addEventListener("click", () => {
                window.location.reload();
            })
            body.classList.add('pointer');
        }
    }
    grabTriforce()

    console.log(linkInCell)
}
