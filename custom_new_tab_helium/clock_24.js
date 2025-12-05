function updateClock() {
    const now = new Date();

    // 24-hour clock
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const timeHTML = `${hours}<span class="colon">:</span>${minutes}`;

    const dateString = now.toLocaleDateString([], {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('time').innerHTML = timeHTML;
    document.getElementById('date').textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);
