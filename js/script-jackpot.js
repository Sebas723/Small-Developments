const iconWidth = 60;
const iconHeight = 60;
const numIcons = 9;
const time_per_icon= 100;
const indexes = [0, 0, 0, 0, 0];
const iconMap = ["Banana", "Siete", "Cereza", "Plum", "Naranja", "Campana", "Bar", "Limon", "Melon"];

const roll = (reel, offset = 0) => {
    const delta = (offset + 4) * numIcons + Math.round(Math.random() * numIcons);
    const style = getComputedStyle(reel),
    backgroundPositionY = parseFloat(style["background-position-y"]);
    
    return new Promise((resolve, reject) =>{
        reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
        reel.style.backgroundPositionY = `${backgroundPositionY + delta * iconHeight}px`;
        

        setTimeout(() =>{
            resolve(delta%numIcons)
        },8 + delta * time_per_icon )
    })
};

function rollAll(){
    const reelList = document.querySelectorAll(".slots > .reel");

    Promise .all( [...reelList].map((reel, i) => roll(reel, i)) )
    .then((deltas) => {
        deltas.forEach((delta, i) => indexes[i] = (indexes[i] + delta)%numIcons);


        // conditions

        setTimeout(rollAll, 3000);
    })
    // [...reelList].map((reel, i) =>{
    //     console.log(reel, i)
    //     roll(reel, i).then(() => {console.log(delta)})
    // })
}

rollAll();
