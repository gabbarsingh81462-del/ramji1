/**
 * RAMJI247 - Interactive JavaScript Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isActive = parent.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== parent) item.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        parent.classList.add('active');
      } else {
        parent.classList.remove('active');
      }
    });
  });

  // Modal Handling
  const demoModal = document.getElementById('demoModal');
  const openDemoBtns = document.querySelectorAll('.open-demo-modal');
  const closeDemoBtn = document.getElementById('closeDemoModal');

  if (demoModal) {
    openDemoBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const exchangeName = btn.getAttribute('data-exchange') || 'Laser247';
        const modalExchangeField = document.getElementById('modalExchangeField');
        if (modalExchangeField) modalExchangeField.value = exchangeName;
        demoModal.classList.add('active');
      });
    });

    if (closeDemoBtn) {
      closeDemoBtn.addEventListener('click', () => {
        demoModal.classList.remove('active');
      });
    }

    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        demoModal.classList.remove('active');
      }
    });
  }

  // Handle Demo Form Submit -> Redirect to WhatsApp with filled details
  const demoForm = document.getElementById('demoRequestForm');
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName')?.value || 'Guest';
      const exchange = document.getElementById('modalExchangeField')?.value || 'General';
      const phone = document.getElementById('userPhone')?.value || '';
      
      const text = encodeURIComponent(`Hello RAMJI247 Team! I want a Demo Cricket/Casino ID for ${exchange}. Name: ${name}, Phone: ${phone}. Please send login details instantly.`);
      window.open(`https://wa.me/918360750829?text=${text}`, '_blank');
      demoModal.classList.remove('active');
    });
  }

  // Live Odds Randomizer (Simulation for Cricket Exchange feel)
  const backOdd = document.getElementById('liveBackOdd');
  const layOdd = document.getElementById('liveLayOdd');
  if (backOdd && layOdd) {
    setInterval(() => {
      const base = 1.90 + Math.random() * 0.15;
      backOdd.textContent = base.toFixed(2);
      layOdd.textContent = (base + 0.04).toFixed(2);
    }, 4000);
  }
});

// Helper for dynamic WhatsApp link
function sendWhatsApp(customMsg) {
  const defaultMsg = "Hello RAMJI247! I want to open a new Online Cricket ID. Please share details and deposit bonus offer.";
  const msg = encodeURIComponent(customMsg || defaultMsg);
  window.open(`https://wa.me/918360750829?text=${msg}`, '_blank');
}

