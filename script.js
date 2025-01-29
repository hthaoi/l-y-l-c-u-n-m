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
function saveToHistory(prize) {
    let history = JSON.parse(localStorage.getItem("prizeHistory")) || [];
    let playerName = prompt("Nhập tên của bạn:"); // Yêu cầu nhập tên
    if (!playerName) return; // Nếu không nhập tên, không lưu lịch sử

    history.push({ name: playerName, prize: prize });

    localStorage.setItem("prizeHistory", JSON.stringify(history));
}

function showHistory() {
    let history = JSON.parse(localStorage.getItem("prizeHistory")) || [];
    let historyBox = document.getElementById("history");

    if (history.length === 0) {
        historyBox.innerHTML = "<p>Chưa có ai bốc thăm.</p>";
        return;
    }
    let historyHTML = "<h3>Lịch sử bốc thăm:</h3><ul>";
    history.forEach(entry => {
        historyHTML += `<li>${entry.name} đã nhận được ${entry.prize}k</li>`;
    });
    historyHTML += "</ul>";

    historyBox.innerHTML = historyHTML;
}

function selectBox(box) {
    if (box.textContent !== "") return;

    const prize = boxPrizes[Array.from(box.parentElement.children).indexOf(box)];
    
    box.textContent = `${prize}k`;
    
    document.getElementById("result").textContent = `Bạn nhận được: ${prize}k!`;

    saveToHistory(prize); 
}

