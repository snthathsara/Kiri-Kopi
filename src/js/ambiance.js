// Live Restaurant Status Manager for KÍRI KÓPI (76/1 Flower Road, Colombo 07)
// Operating Hours:
// - Monday – Sunday (Daily): 7:30 AM – 10:00 PM
// - Specialty Coffee Shop & Bakery | Walk-Ins Welcome

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

// Live KÍRI KÓPI Cafe Open/Closed Status
export function updateCafeStatus() {
  const statusBadge = document.getElementById('hero-status-badge');
  const pulseDot = document.getElementById('status-pulse-dot');
  const statusLabel = document.getElementById('cafe-status-label');
  const statusSub = document.getElementById('cafe-status-sub');

  if (!statusLabel) return;

  const { decimalTime } = getSriLankaTime();

  const openTime = 7.5;   // 7:30 AM
  const closeTime = 22.0; // 10:00 PM

  let isOpen = false;
  let label = 'Closed';
  let sub = '';

  if (decimalTime >= openTime && decimalTime < closeTime) {
    // Currently Open
    isOpen = true;
    label = 'Open Today';
    sub = 'Closes at 10:00 PM · Walk-Ins Welcome';
  } else if (decimalTime < openTime) {
    // Early morning before 7:30 AM
    isOpen = false;
    label = 'Closed Now';
    sub = 'Opens at 7:30 AM today at Flower Road, Col 7';
  } else {
    // Late night after 10:00 PM
    isOpen = false;
    label = 'Closed Tonight';
    sub = 'Opens at 7:30 AM tomorrow at Flower Road, Col 7';
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
