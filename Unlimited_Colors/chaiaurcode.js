const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let intervalId;
startChangingColors = () => {
    if(intervalId == null) {
        intervalId = setInterval(changeTheColor,500);
    }
    function changeTheColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

stopChangingColors = () => {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener("click", startChangingColors)
document.querySelector("#stop").addEventListener("click", stopChangingColors)