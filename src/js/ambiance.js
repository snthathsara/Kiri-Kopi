// Live Cafe Status Manager for Warbler’s Cafe (Kandy)
// Operating Hours: Mon - Sat | 8:30 AM - 6:00 PM (Closed Sunday)

export function initAmbiance() {
  updateCafeStatus();
  setInterval(updateCafeStatus, 60000);
}

// Live Cafe Open/Closed Status
function updateCafeStatus() {
  const statusLabel = document.getElementById('cafe-status-label');
  const statusSub = document.getElementById('cafe-status-sub');
  if (!statusLabel) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  // Sunday Closed
  if (day === 0) {
    statusLabel.textContent = 'Sunday Resting';
    if (statusSub) statusSub.textContent = 'Reopening Monday at 8:30 AM in the Heart of Kandy';
    return;
  }

  // Mon - Sat: 8:30 AM to 6:00 PM (18:00)
  const openTime = 8.5; // 8:30 AM
  const closeTime = 18.0; // 6:00 PM

  if (currentTime >= openTime && currentTime < closeTime) {
    statusLabel.textContent = 'Open Today';
    if (statusSub) statusSub.textContent = 'Western, Fusion & Sri Lankan brunch until 6:00 PM';
  } else if (currentTime < openTime) {
    statusLabel.textContent = 'Opening Soon';
    if (statusSub) statusSub.textContent = 'Brewing fresh coffee & preheating skillets at 8:30 AM';
  } else {
    statusLabel.textContent = 'Doors Resting';
    if (statusSub) {
      statusSub.textContent = day === 6 
        ? 'Reopening Monday at 8:30 AM in the Heart of Kandy'
        : 'Reopening at 8:30 AM tomorrow in the Heart of Kandy';
    }
  }
}
