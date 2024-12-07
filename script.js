// เริ่มต้นตัวแปรเวลา
let timeRemaining = 60; // 1 นาที (60 วินาที)
let timerInterval; // ตัวแปรสำหรับจัดการ interval

const startButton = document.getElementById('start-button');
const timerDisplay = document.getElementById('timer-display');
const lidStatus = document.getElementById('lid-status');

// ฟังก์ชันเริ่มตั้งเวลา
startButton.addEventListener('click', startTimer);

function startTimer() {
    // กำหนดให้เริ่มต้นด้วยเวลา 1 นาที
    timeRemaining = 60;
    updateTimerDisplay();

    // ตั้งค่าให้เริ่มนับถอยหลัง
    timerInterval = setInterval(function() {
        timeRemaining--;
        updateTimerDisplay();

        // เมื่อถึงเวลา 0 นาที
        if (timeRemaining <= 0) {
            // ปิดฝาและแสดงข้อความ
            lidStatus.textContent = "ฝาปิดแล้ว";
            
            // เปลี่ยนเวลาให้เป็น 25 นาที (1500 วินาที) สำหรับการปิดฝา
            timeRemaining = 1500;
            lidStatus.textContent = "ฝากำลังปิด..."; // เปลี่ยนข้อความ
        }
    }, 1000); // 1000 ms = 1 วินาที
}

// ฟังก์ชันอัปเดตเวลาบนหน้าจอ
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${padTime(minutes)}:${padTime(seconds)}`;
}

// ฟังก์ชันเพิ่ม 0 หน้าเวลาที่น้อยกว่า 10
function padTime(time) {
    return time < 10 ? '0' + time : time;
}


