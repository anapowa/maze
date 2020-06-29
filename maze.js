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

const mazeEl = document.getElementById("maze")

for (let rowNum=0; rowNum<map.length; rowNum++){
    const rowStr = map[rowNum]
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
                blockDivs += "<div class='block' id='start'></div>"
                break;
            case "F":
                blockDivs += "<div class='block' id='finish'></div>"
                break;
            default:
                blockDivs += "<div class='block'></div>"
        }   
    }

    mazeEl.innerHTML += `<div class="row">${blockDivs}</div>`
}
