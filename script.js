function updateCountdown() {
    const now = new Date();
    const targetDate = new Date("June 19, 2026");
    
    // Calculate the difference in milliseconds
    const diff = targetDate - now;
    
    // Convert to days and round down
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    // Update the countdown
    document.getElementById("countdown").textContent = days;
    
    // Update today's date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("today").textContent = "Today: " + now.toLocaleDateString(undefined, options);
}

// Update immediately
updateCountdown();

// Update every hour (the day count could change)
setInterval(updateCountdown, 3600000);
