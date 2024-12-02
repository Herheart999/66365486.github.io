document.addEventListener("DOMContentLoaded", () => {
    // ตั้งค่าปุ่มเริ่มต้น
    const startButton = document.getElementById("start-button");
    const timerDisplay = document.getElementById("timer-display");
    const lidStatus = document.getElementById("lid-status");

    // เวลาตั้งไว้เริ่มต้น (10 นาที)
    let timer;
    let timeRemaining = 10 * 60; // 10 นาที = 600 วินาที

    // ฟังก์ชันที่คอยอัปเดตตัวจับเวลา
    function updateTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        
        // หากเวลาหมด จะเปิดฝา
        if (timeRemaining <= 0) {
            clearInterval(timer);
            lidStatus.textContent = "ฝาเปิดแล้ว!";
        } else {
            timeRemaining--;
        }
    }

    // ฟังก์ชันเริ่มต้นการจับเวลา
    startButton.addEventListener("click", () => {
        clearInterval(timer);  // หยุดตัวจับเวลาที่กำลังทำงาน
        timeRemaining = 10 * 60;  // รีเซ็ตเวลา
        timer = setInterval(updateTimer, 1000);  // เริ่มจับเวลาใหม่
        lidStatus.textContent = "ฝากำลังปิด...";
    });
});

