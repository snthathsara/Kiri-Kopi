// Floating Capsule Pill Navbar with Elastic Fluid Blob Indicator & ScrollSpy

export function initNavbar() {
  const track = document.getElementById('nav-links-track');
  const blob = document.getElementById('nav-active-blob');
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const ctaBtn = document.querySelector('.nav-cta-btn');
  
  if (!track || !blob || links.length === 0) return;

  let activeLink = links[0];
  let isHovering = false;
  let isManualScroll = false;
  let manualScrollTimeout = null;

  // Move blob to target element and ensure text color sync
  function setBlobTarget(targetElement) {
    const el = targetElement || activeLink || links[0];
    if (!el) return;

    // Keep text colors strictly in sync with where the blob is
    links.forEach(l => {
      l.classList.remove('has-blob');
    });
    el.classList.add('has-blob');

    const trackRect = track.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();

    const leftOffset = linkRect.left - trackRect.left;
    const width = linkRect.width;

    blob.style.opacity = '1';
    blob.style.transform = `translate3d(${leftOffset}px, 0, 0)`;
    blob.style.width = `${width}px`;
  }

  function setActiveLink(newActiveLink, updateBlob = true) {
    if (!newActiveLink) return;
    
    links.forEach(l => l.classList.remove('is-active'));
    newActiveLink.classList.add('is-active');
    activeLink = newActiveLink;

    if (updateBlob && !isHovering) {
      setBlobTarget(activeLink);
    }
  }

  // Helper for smooth scrolling to an ID
  function scrollToSection(targetId, linkedNavElement) {
    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    isManualScroll = true;
    if (manualScrollTimeout) clearTimeout(manualScrollTimeout);
    manualScrollTimeout = setTimeout(() => {
      isManualScroll = false;
    }, 950);

    if (linkedNavElement) {
      setActiveLink(linkedNavElement, true);
      setBlobTarget(linkedNavElement);
    }

    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Hover & Click transitions on main links
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      isHovering = true;
      setBlobTarget(link);
    });

    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        scrollToSection(targetId, link);
      }
    });
  });

  // Top CTA button ("Hours & Visit")
  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      const targetId = ctaBtn.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const visitLink = links.find(l => l.getAttribute('href') === '#reservations');
        scrollToSection(targetId, visitLink);
      }
    });
  }

  track.addEventListener('mouseleave', () => {
    isHovering = false;
    setBlobTarget(activeLink);
  });

  // Initial placement after layout is stable
  setTimeout(() => {
    setActiveLink(activeLink, true);
    setBlobTarget(activeLink);
  }, 100);

  window.addEventListener('resize', () => {
    if (!isHovering && activeLink) {
      setBlobTarget(activeLink);
    }
  });

  // Tracked main top-level sections mapped to navbar links
  const trackedNavSections = [
    { id: 'hero', href: '#hero' },
    { id: 'highlights', href: '#highlights' },
    { id: 'story', href: '#story' },
    { id: 'brunch', href: '#story' },
    { id: 'menu', href: '#menu' },
    { id: 'order', href: '#menu' },
    { id: 'specialties', href: '#menu' },
    { id: 'about', href: '#about' },
    { id: 'reservations', href: '#reservations' }
  ];

  // Real-time ScrollSpy
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
      if (isHovering || isManualScroll) return;

      const scrollY = window.scrollY;
      const isAtBottom = (window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 60);

      // If at bottom, activate Visit link
      if (isAtBottom) {
        const visitLink = links.find(l => l.getAttribute('href') === '#reservations');
        if (visitLink && visitLink !== activeLink) {
          setActiveLink(visitLink, true);
        } else if (!isHovering) {
          setBlobTarget(visitLink || activeLink);
        }
        if (ctaBtn) ctaBtn.classList.add('is-active');
        return;
      }

      // If at the very top (first 120px), activate Home
      if (scrollY < 120) {
        const homeLink = links.find(l => l.getAttribute('href') === '#hero');
        if (homeLink && homeLink !== activeLink) {
          setActiveLink(homeLink, true);
        } else if (!isHovering) {
          setBlobTarget(homeLink || activeLink);
        }
        if (ctaBtn) ctaBtn.classList.remove('is-active');
        return;
      }

      // Calculate true document-level coordinates using getBoundingClientRect()
      const scrollFocus = scrollY + 200;
      let matchedHref = '';

      for (const item of trackedNavSections) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollY;
        const height = el.offsetHeight;
        if (scrollFocus >= top && scrollFocus < top + height) {
          matchedHref = item.href;
          break;
        }
      }

      if (matchedHref) {
        const matchingLink = links.find(l => l.getAttribute('href') === matchedHref);
        if (matchingLink && matchingLink !== activeLink) {
          setActiveLink(matchingLink, true);
        } else if (!isHovering) {
          setBlobTarget(matchingLink || activeLink);
        }

        if (ctaBtn) {
          if (matchedHref === '#reservations') {
            ctaBtn.classList.add('is-active');
          } else {
            ctaBtn.classList.remove('is-active');
          }
        }
      }
    }, 40);
  }, { passive: true });

  // Mobile Drawer Toggle
  initMobileNav();
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-menu-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');

  if (!toggleBtn || !drawer) return;

  function toggleDrawer(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('is-open');
    drawer.classList.toggle('is-open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          toggleDrawer(false);
          setTimeout(() => {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      } else {
        toggleDrawer(false);
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('is-open') && !drawer.contains(e.target) && e.target !== toggleBtn) {
      toggleDrawer(false);
    }
  });
}
