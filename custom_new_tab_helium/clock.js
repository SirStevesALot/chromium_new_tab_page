function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const timeHTML = `${hours}<span class="colon">:</span>${minutes} <span style="font-size: 0.5em;">${ampm}</span>`;

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
