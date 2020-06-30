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
const linkPlayer = document.getElementById("link")

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
                       blockDivs += '<div id="cell' + colNum + "-" + rowNum + '" class="block start" >START<img id="link" src="link_nes.png"></img></div>'
                    y = rowNum
                    x = colNum
                    break;
                case "F":
                    blockDivs += '<div id="cell' + colNum + '-' + rowNum + '" class="block finish">FINISH<img id="triforce" src="240px-Triforce_Logo.png"></img></div>'
                    break;
                default:
                    blockDivs += '<div id="cell' + colNum + '-' + rowNum + '" class="block"></div>'
            }   
        }

    mazeEl.innerHTML += `<div class="row">${blockDivs}</div>`
    // mazeEl.innerHTML += '<div class="row">' + blockDivs + '</div>'
    }


}

createMaze(map)

document.addEventListener('keydown', logKey);
let boxTop = 270;
let boxLeft = 0;

function logKey(evt) {
    switch (evt.code){
        case "ArrowDown":
            boxTop += 30
            break; 
        case "ArrowUp":
            boxTop -= 30
            break;
        case "ArrowLeft":
            boxLeft -= 30
            break;
        case "ArrowRight":
            boxLeft += 30
            break;
    }

document.getElementById("link").style.top = boxTop + "px";
document.getElementById("link").style.left = boxLeft + "px";
}


/* REFACTORING? */
/* let rowNum
let colNum
let blockDivs
let rowStr = ""
let blockDivs =""

const mazeEl = document.getElementById("maze")


const createBlock = function (){
    const blockType = rowStr[colNum]
        switch (blockType){
            case "W":
                blockDivs += "<div class='block wall'></div>"
                break;
            case "S":
                blockDivs += "<div class='block'><div id='start'>START</div></div>"
                y = rowNum
                x = colNum
                break;
            case "F":
                blockDivs += "<div class='block' id='finish'></div>"
                break;
            default:
                blockDivs += "<div class='block'></div>"
        }
    } */