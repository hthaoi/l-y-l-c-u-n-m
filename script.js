const prizes = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

let boxPrizes = [];

function initializeGame() {

    boxPrizes = [];
    let selectedPrizes = [];

    for (let i = 0; i < 31; i++) {
        let prize = prizes[Math.floor(Math.random() * prizes.length)];
        while (selectedPrizes.includes(prize)) {
            prize = prizes[Math.floor(Math.random() * prizes.length)];
        }
        selectedPrizes.push(prize);
        boxPrizes.push(prize);
    }
}

function selectBox(box) {
    if (box.textContent !== "") return;
    const prize = boxPrizes[Array.from(box.parentElement.children).indexOf(box)];
    box.textContent = `${prize}k`;
        document.getElementById("result").textContent = `chúc mừng bà sẽ nhận được: ${prize}k!`;
}

function resetGame() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.textContent = "");
    document.getElementById("result").textContent = "";
    initializeGame();
}
initializeGame();
