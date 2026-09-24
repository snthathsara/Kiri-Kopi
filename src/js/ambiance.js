// Live Cafe Status Manager for Warbler’s Cafe (Kandy)
// Google Maps Operating Hours:
// - Monday: 8:30 AM – 5:00 PM
// - Tuesday – Saturday: 8:30 AM – 6:00 PM
// - Sunday: Closed

export function initAmbiance() {
  updateCafeStatus();
  // Check every 30 seconds for live accuracy
  setInterval(updateCafeStatus, 30000);
}

// Get Sri Lanka local time (Asia/Colombo)
function getSriLankaTime() {
  const now = new Date();
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Colombo',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    });
    const parts = formatter.formatToParts(now);
    let weekday = 'Thu';
    let hour = now.getHours();
    let minute = now.getMinutes();

    for (const p of parts) {
      if (p.type === 'weekday') weekday = p.value;
      if (p.type === 'hour') hour = parseInt(p.value, 10);
      if (p.type === 'minute') minute = parseInt(p.value, 10);
    }
    if (hour === 24) hour = 0;
    return { weekday, hour, minute, decimalTime: hour + minute / 60 };
  } catch (e) {
    // Fallback to local time if Intl timeZone fails
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
      weekday: days[now.getDay()],
      hour: now.getHours(),
      minute: now.getMinutes(),
      decimalTime: now.getHours() + now.getMinutes() / 60,
    };
  }
}

// Live Cafe Open/Closed Status
export function updateCafeStatus() {
  const statusBadge = document.getElementById('hero-status-badge');
  const pulseDot = document.getElementById('status-pulse-dot');
  const statusLabel = document.getElementById('cafe-status-label');
  const statusSub = document.getElementById('cafe-status-sub');

  if (!statusLabel) return;

  const { weekday, decimalTime } = getSriLankaTime();

  const openTime = 8.5; // 8:30 AM

  let isOpen = false;
  let label = 'Closed';
  let sub = '';

  if (weekday === 'Sun') {
    // Sunday Closed All Day
    isOpen = false;
    label = 'Closed';
    sub = 'Opens Monday at 8:30 AM';
  } else {
    // Monday closes at 5:00 PM (17.0), Tue - Sat closes at 6:00 PM (18.0)
    const closeTime = weekday === 'Mon' ? 17.0 : 18.0;
    const closeStr = weekday === 'Mon' ? '5:00 PM' : '6:00 PM';

    if (decimalTime < openTime) {
      // Early morning before opening
      isOpen = false;
      label = 'Closed';
      sub = 'Opens at 8:30 AM today';
    } else if (decimalTime < closeTime) {
      // Open during regular operating hours
      isOpen = true;
      label = 'Open Today';
      sub = `Closes at ${closeStr}`;
    } else {
      // Closed in the evening after closing hours
      isOpen = false;
      label = 'Closed';
      if (weekday === 'Sat') {
        sub = 'Opens Monday at 8:30 AM';
      } else if (weekday === 'Mon') {
        sub = 'Opens Tuesday at 8:30 AM';
      } else {
        sub = 'Opens at 8:30 AM tomorrow';
      }
    }
  }

  // Update UI Elements
  statusLabel.textContent = label;
  if (statusSub) statusSub.textContent = sub;

  if (statusBadge) {
    if (isOpen) {
      statusBadge.classList.remove('is-closed');
      statusBadge.classList.add('is-open');
    } else {
      statusBadge.classList.remove('is-open');
      statusBadge.classList.add('is-closed');
    }
  }

  if (pulseDot) {
    if (isOpen) {
      pulseDot.classList.remove('is-closed');
      pulseDot.classList.add('is-open');
    } else {
      pulseDot.classList.remove('is-open');
      pulseDot.classList.add('is-closed');
    }
  }
}
