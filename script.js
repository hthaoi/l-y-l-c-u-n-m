function drawPrize() {
    const name = document.getElementById("name").value;
    
    if (name === "") {
        alert("Vui lòng nhập tên của bạn!");
        return;
    }

    const prize = Math.floor(Math.random() * (55 - 25 + 1)) + 25;

    document.getElementById("result").innerHTML = `chúc mừng ${name} sẽ nhận được: <strong>${prize} đồng</strong>`;
}
