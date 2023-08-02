let body = document.getElementsByTagName("body");
let colorCode = document.getElementById("color-code");
let btn = document.getElementById("change-color-btn");
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandom() {
    let randomHex = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hex.length);
        randomHex += hex[randomIndex];
    }
    return randomHex;
}
let html = "";
btn.addEventListener("click", () => {
    const randomColor = getRandom();

    document.body.style.backgroundColor = randomColor;
    colorCode.innerText = `Background Color: ${randomColor}`;
});
