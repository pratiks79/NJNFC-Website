/**
 * NJNFC - Main JavaScript Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Re-run Lucide after shared.js injects navbar/footer/modals
  setTimeout(() => { if (window.lucide) window.lucide.createIcons(); }, 60);

  // Setup current year in footer
  const yrEl = document.getElementById('current-year');
  if (yrEl) yrEl.textContent = new Date().getFullYear();

  // Always-on UI
  initThemeToggle();
  initMobileNav();
  initScrollNav();
  initFormHandlers();

  // Page-specific rendering
  if (document.getElementById('pillars-container'))     renderPillars();
  if (document.getElementById('spring-standings-body')) renderTournamentsHub();
  if (document.getElementById('fields-container'))      renderFields();
  if (document.getElementById('donation-tiers-grid'))   renderDonationTiers();
  if (document.getElementById('sponsors-container'))    renderSponsors();
  if (document.getElementById('gallery-container'))     renderGallery();
  if (document.getElementById('faq-container'))         renderFAQs();
  if (document.querySelector('.hero-stat-num'))         animateHeroCounters();
});


/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const lightIcon = themeToggleBtn.querySelector('.light-icon');
  const darkIcon = themeToggleBtn.querySelector('.dark-icon');

  // Check saved preference or default to dark
  const savedTheme = localStorage.getItem('njnfc-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('njnfc-theme', newTheme);
    updateThemeIcons(newTheme);
  });

  function updateThemeIcons(theme) {
    if (theme === 'dark') {
      if (lightIcon) lightIcon.style.display = 'none';
      if (darkIcon) darkIcon.style.display = 'block';
    } else {
      if (lightIcon) lightIcon.style.display = 'block';
      if (darkIcon) darkIcon.style.display = 'none';
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

/* --------------------------------------------------------------------------
   2. Sticky Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initScrollNav() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initMobileNav() {
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (!mobileToggleBtn || !mobileDrawer) return;

  mobileToggleBtn.addEventListener('click', () => {
    mobileDrawer.classList.toggle('active');
  });

  // Close drawer on link click
  const mobileLinks = mobileDrawer.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
    });
  });
}

/* --------------------------------------------------------------------------
   3. Render Mission Pillars
   -------------------------------------------------------------------------- */
function renderPillars() {
  const container = document.getElementById('pillars-container');
  if (!container || !NJNFC_DATA.pillars) return;

  container.innerHTML = NJNFC_DATA.pillars.map(pillar => `
    <div class="pillar-card">
      <div class="pillar-icon">
        <i data-lucide="${pillar.icon}"></i>
      </div>
      <h3>${pillar.title}</h3>
      <p>${pillar.desc}</p>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* --------------------------------------------------------------------------
   4. Render Tournament Hub (Spring League, Fall Championship, Hall of Fame)
   -------------------------------------------------------------------------- */
function renderTournamentsHub() {
  // Hub Tab Switching
  const tabButtons = document.querySelectorAll('.hub-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-tab');
      document.querySelectorAll('.hub-content-panel').forEach(panel => {
        panel.classList.remove('active');
      });

      const activePanel = document.getElementById(`tab-${targetTab}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });

  // Render Spring League Standings
  const springStandingsBody = document.getElementById('spring-standings-body');
  if (springStandingsBody && NJNFC_DATA.leagues.spring2025) {
    const teams = [...NJNFC_DATA.leagues.spring2025.teams].sort((a, b) => b.stats.pts - a.stats.pts);
    springStandingsBody.innerHTML = teams.map((team, idx) => `
      <tr>
        <td>
          <div class="team-badge-cell">
            <span style="color: var(--text-muted); font-size: 0.85rem; width: 14px;">${idx + 1}</span>
            <span class="team-badge-dot" style="background-color: ${team.badgeColor};"></span>
            <span>${team.name}</span>
          </div>
        </td>
        <td><strong style="color: var(--accent-gold);">${team.captain}</strong></td>
        <td>${team.stats.played}</td>
        <td>${team.stats.won}</td>
        <td>${team.stats.drawn}</td>
        <td>${team.stats.lost}</td>
        <td>${team.stats.gf}</td>
        <td>${team.stats.ga}</td>
        <td class="points-pill">${team.stats.pts}</td>
      </tr>
    `).join('');
  }

  // Render Spring Teams Rosters
  const springTeamsContainer = document.getElementById('spring-teams-container');
  if (springTeamsContainer && NJNFC_DATA.leagues.spring2025) {
    springTeamsContainer.innerHTML = NJNFC_DATA.leagues.spring2025.teams.map(team => `
      <div class="team-card">
        <div class="team-card-header">
          <div class="team-name-group">
            <div class="team-avatar" style="background: ${team.badgeColor};">
              ${team.name.replace('Team ', '').charAt(0)}
            </div>
            <div>
              <h4 style="font-size: 1.1rem; margin: 0;">${team.name}</h4>
              <span style="font-size: 0.78rem; color: var(--text-secondary);">Captain: <strong>${team.captain}</strong></span>
            </div>
          </div>
          <span class="team-captain-badge">${team.players.length} Players</span>
        </div>
        <div class="players-tags-list">
          ${team.players.map(player => `
            <span class="player-tag ${player.includes('(C)') ? 'is-captain' : ''}">
              ${player.includes('(C)') ? '👑 ' : ''}${player}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Spring Fixtures
  const springFixturesContainer = document.getElementById('spring-fixtures-container');
  if (springFixturesContainer && NJNFC_DATA.leagues.spring2025) {
    springFixturesContainer.innerHTML = NJNFC_DATA.leagues.spring2025.upcomingFixtures.map(fix => `
      <div class="fixture-card">
        <div class="fixture-meta">
          <span>${fix.date}</span>
          <span>${fix.time}</span>
        </div>
        <div class="fixture-matchup">
          <span>${fix.home}</span>
          <span class="fixture-vs">VS</span>
          <span>${fix.away}</span>
        </div>
        <div class="fixture-venue">
          <i data-lucide="map-pin" style="width: 14px; height: 14px; color: var(--accent-crimson);"></i>
          <span>${fix.venue}</span>
        </div>
      </div>
    `).join('');
  }

  // Render Fall Championship Teams
  const fallTeamsContainer = document.getElementById('fall-teams-container');
  if (fallTeamsContainer && NJNFC_DATA.leagues.fallChampionship) {
    fallTeamsContainer.innerHTML = NJNFC_DATA.leagues.fallChampionship.teams.map(team => `
      <div class="team-card">
        <div class="team-card-header">
          <div class="team-name-group">
            <div class="team-avatar" style="background: ${team.badgeColor};">
              ${team.name.replace('Team ', '').charAt(0)}
            </div>
            <div>
              <h4 style="font-size: 1.15rem; margin: 0;">${team.name}</h4>
              <span style="font-size: 0.8rem; color: var(--text-secondary);">Captain: <strong>${team.captain}</strong></span>
            </div>
          </div>
          <span class="team-captain-badge">6v6 / 8v8 Squad</span>
        </div>
        <div class="players-tags-list">
          ${team.players.map(player => `
            <span class="player-tag ${player.includes('(C)') ? 'is-captain' : ''}">
              ${player.includes('(C)') ? '👑 ' : ''}${player}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Hall of Fame
  const hallContainer = document.getElementById('hall-of-fame-container');
  if (hallContainer && NJNFC_DATA.hallOfFame) {
    hallContainer.innerHTML = NJNFC_DATA.hallOfFame.map(record => `
      <div class="hall-card">
        <h3>${record.tournament}</h3>
        <div class="hall-champ">👑 Champions: <span style="color: var(--accent-gold);">${record.champions}</span></div>
        <div class="hall-mvp">🏅 MVP / Top Stars: <strong>${record.mvp}</strong></div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
          <strong>Winning Squad:</strong> ${record.roster}
        </div>
        <p style="font-size: 0.9rem; color: var(--text-primary); font-style: italic; border-top: 1px dashed var(--border-subtle); padding-top: 0.75rem;">
          "${record.highlight}"
        </p>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   5. Render Field Locations
   -------------------------------------------------------------------------- */
function renderFields() {
  const container = document.getElementById('fields-container');
  if (!container || !NJNFC_DATA.fields) return;

  container.innerHTML = NJNFC_DATA.fields.map(field => `
    <div class="field-card">
      <div>
        <span class="field-tag-badge">${field.tag}</span>
        <h3 class="field-name">${field.name}</h3>
        <div class="field-address">
          <i data-lucide="map-pin" style="color: var(--accent-crimson); width: 18px; height: 18px; flex-shrink: 0;"></i>
          <span>${field.address}</span>
        </div>
        
        <div class="field-schedule-box">
          <h4>Regular Pickup Times</h4>
          <p>${field.pickupSchedule}</p>
        </div>

        <div style="margin-bottom: 1rem; font-size: 0.88rem; color: var(--text-secondary);">
          <strong>Surface:</strong> ${field.surface} • <strong>Rating:</strong> ${field.rating}
        </div>

        <div class="amenities-list">
          ${field.amenities.map(am => `<span class="amenity-tag">✓ ${am}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
        <a href="${field.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
          <i data-lucide="navigation" style="width: 16px; height: 16px;"></i> Get Directions
        </a>
        <button class="btn btn-secondary" onclick="showToast('Field status is currently OPEN & in prime condition!', 'info')">
          <i data-lucide="activity" style="width: 16px; height: 16px;"></i> Status
        </button>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. Interactive Donation Tiers
   -------------------------------------------------------------------------- */
let selectedDonationAmount = 50;

function renderDonationTiers() {
  const grid = document.getElementById('donation-tiers-grid');
  const customInput = document.getElementById('custom-donation-input');
  if (!grid || !NJNFC_DATA.donationTiers) return;

  grid.innerHTML = NJNFC_DATA.donationTiers.map(tier => `
    <button class="donation-amount-btn ${tier.amount === selectedDonationAmount ? 'selected' : ''}" 
            data-amount="${tier.amount}" 
            onclick="selectDonationTier(${tier.amount})">
      $${tier.amount}
    </button>
  `).join('');

  if (customInput) {
    customInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (val && val > 0) {
        selectedDonationAmount = val;
        document.querySelectorAll('.donation-amount-btn').forEach(btn => btn.classList.remove('selected'));
        updateDonationPreview(val, 'Custom Non-Profit Impact Contribution', `Your generous contribution of $${val} directly supports field rentals, youth soccer equipment, and community programs.`);
      }
    });
  }
}

window.selectDonationTier = function(amount) {
  selectedDonationAmount = amount;
  const customInput = document.getElementById('custom-donation-input');
  if (customInput) customInput.value = '';

  document.querySelectorAll('.donation-amount-btn').forEach(btn => {
    if (parseInt(btn.getAttribute('data-amount')) === amount) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  const tier = NJNFC_DATA.donationTiers.find(t => t.amount === amount);
  if (tier) {
    updateDonationPreview(tier.amount, tier.title, tier.impact);
  }
};

function updateDonationPreview(amount, title, desc) {
  const titleEl = document.getElementById('impact-title');
  const descEl = document.getElementById('impact-desc');
  const modalAmountDisplay = document.getElementById('modal-donation-amount-display');
  const modalPurpose = document.getElementById('modal-donation-purpose');

  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
  if (modalAmountDisplay) modalAmountDisplay.textContent = `$${amount}.00`;
  if (modalPurpose) modalPurpose.textContent = `${title} — ${desc}`;
}

/* --------------------------------------------------------------------------
   7. Render Sponsors
   -------------------------------------------------------------------------- */
function renderSponsors() {
  const container = document.getElementById('sponsors-container');
  if (!container || !NJNFC_DATA.sponsors) return;

  container.innerHTML = NJNFC_DATA.sponsors.map(sp => `
    <div class="sponsor-card">
      <div>
        <div class="sponsor-header">
          <span class="sponsor-tier-badge">${sp.badge}</span>
          ${sp.logo ? `<img src="${sp.logo}" alt="${sp.name} Logo" style="width: 52px; height: 52px; object-fit: contain; border-radius: 50%; background: #ffffff; padding: 4px; box-shadow: var(--shadow-sm);">` : ''}
        </div>
        <h3 class="sponsor-name">${sp.name}</h3>
        <div class="sponsor-category">${sp.category}</div>
        <p class="sponsor-desc">${sp.description}</p>
      </div>

      <div>
        <a href="${sp.website}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%;">
          <i data-lucide="external-link" style="width: 16px; height: 16px;"></i> Visit Partner Site
        </a>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   8. Render Photo Gallery with Filtering & Lightbox
   -------------------------------------------------------------------------- */
function renderGallery(filterCategory = 'All') {
  const container = document.getElementById('gallery-container');
  if (!container || !NJNFC_DATA.gallery) return;

  const filtered = filterCategory === 'All'
    ? NJNFC_DATA.gallery
    : NJNFC_DATA.gallery.filter(item => item.category === filterCategory);

  container.innerHTML = filtered.map(item => `
    <div class="gallery-card" onclick="openLightbox('${item.image}', '${item.title} — ${item.subtitle}')">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-card-overlay">
        <h4>${item.title}</h4>
        <p>${item.subtitle}</p>
      </div>
    </div>
  `).join('');

  // Setup filter button states
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.getAttribute('data-filter'));
    };
  });
}

window.openLightbox = function(imgSrc, caption) {
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (lightboxImg) lightboxImg.src = imgSrc;
  if (lightboxCaption) lightboxCaption.textContent = caption;
  if (lightboxModal) lightboxModal.classList.add('active');
};

/* --------------------------------------------------------------------------
   9. Render FAQs
   -------------------------------------------------------------------------- */
function renderFAQs() {
  const container = document.getElementById('faq-container');
  if (!container || !NJNFC_DATA.faqs) return;

  container.innerHTML = NJNFC_DATA.faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'open' : ''}">
      <button class="faq-question" onclick="toggleFAQ(this)">
        <span>${faq.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');
}

window.toggleFAQ = function(btn) {
  const parent = btn.closest('.faq-item');
  const isOpen = parent.classList.contains('open');

  // Close all other FAQs
  document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));

  if (!isOpen) {
    parent.classList.add('open');
  }
};

/* --------------------------------------------------------------------------
   10. Modals Management (Registration, Donation, Sponsor)
   -------------------------------------------------------------------------- */
window.openRegistrationModal = function(type = 'player') {
  const modal = document.getElementById('registration-modal');
  if (modal) {
    switchRegTab(type);
    modal.classList.add('active');
  }
};

window.openDonationModal = function() {
  const modal = document.getElementById('donation-modal');
  if (modal) {
    updateDonationPreview(selectedDonationAmount, 'NJNFC Mission Supporter', 'Tax-exempt non-profit sports contribution.');
    modal.classList.add('active');
  }
};

window.openSponsorModal = function() {
  const modal = document.getElementById('sponsor-modal');
  if (modal) modal.classList.add('active');
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
};

// Close modal on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('active');
  }
});

window.switchRegTab = function(type) {
  const title = document.getElementById('reg-modal-title');
  const typeInput = document.getElementById('reg-type-input');
  const playerGroup = document.getElementById('player-fields-group');
  const teamGroup = document.getElementById('team-fields-group');
  const volunteerGroup = document.getElementById('volunteer-fields-group');

  document.querySelectorAll('.reg-tab-btn').forEach(btn => btn.classList.remove('active'));

  if (type === 'player') {
    document.getElementById('tab-player-btn')?.classList.add('active');
    if (title) title.textContent = "Join NJNFC • Free Agent Player Sign-Up";
    if (typeInput) typeInput.value = "player";
    if (playerGroup) playerGroup.style.display = "block";
    if (teamGroup) teamGroup.style.display = "none";
    if (volunteerGroup) volunteerGroup.style.display = "none";
  } else if (type === 'team') {
    document.getElementById('tab-team-btn')?.classList.add('active');
    if (title) title.textContent = "Register Team • Captain Roster Submission";
    if (typeInput) typeInput.value = "team";
    if (playerGroup) playerGroup.style.display = "none";
    if (teamGroup) teamGroup.style.display = "block";
    if (volunteerGroup) volunteerGroup.style.display = "none";
  } else if (type === 'volunteer') {
    document.getElementById('tab-volunteer-btn')?.classList.add('active');
    if (title) title.textContent = "Join as Volunteer / Community Organizer";
    if (typeInput) typeInput.value = "volunteer";
    if (playerGroup) playerGroup.style.display = "none";
    if (teamGroup) teamGroup.style.display = "none";
    if (volunteerGroup) volunteerGroup.style.display = "block";
  }
};

/* --------------------------------------------------------------------------
   11. Form Submissions & Toast Alerts
   -------------------------------------------------------------------------- */
function initFormHandlers() {
  // Registration Form
  const regForm = document.getElementById('registration-form');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const type = document.getElementById('reg-type-input').value;
      closeModal('registration-modal');
      regForm.reset();
      showToast(`🎉 Registration Received! Welcome to NJNFC, ${name}. Our organizing committee will email you with your team/pickup details.`, 'success');
    });
  }

  // Donation Checkout
  const donForm = document.getElementById('donation-checkout-form');
  if (donForm) {
    donForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const donor = document.getElementById('donor-name').value;
      closeModal('donation-modal');
      donForm.reset();
      showToast(`🙏 Thank you, ${donor}! Your contribution of $${selectedDonationAmount} was received. A non-profit tax receipt has been sent to your email.`, 'success');
    });
  }

  // Sponsor Inquiry
  const spForm = document.getElementById('sponsor-inquiry-form');
  if (spForm) {
    spForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const company = document.getElementById('sponsor-company').value;
      closeModal('sponsor-modal');
      spForm.reset();
      showToast(`🤝 Sponsorship Inquiry for "${company}" submitted! Our sponsorship coordinator will follow up shortly.`, 'success');
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      contactForm.reset();
      showToast(`✉️ Message sent! Thank you ${name}, the NJNFC team will reply within 24 hours.`, 'success');
    });
  }

  // Newsletter Form
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsForm.reset();
      showToast(`⚽ You are subscribed to the NJNFC weekly match & tournament newsletter!`, 'success');
    });
  }
}

/* --------------------------------------------------------------------------
   12. Toast Notification System
   -------------------------------------------------------------------------- */
window.showToast = function(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'info';
  if (type === 'success') icon = 'check-circle';
  if (type === 'error') icon = 'alert-circle';

  toast.innerHTML = `
    <i data-lucide="${icon}" style="width: 20px; height: 20px; flex-shrink: 0; color: var(--accent-gold);"></i>
    <span style="font-size: 0.92rem;">${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 5000);
};

/* --------------------------------------------------------------------------
   13. Animate Hero Counters
   -------------------------------------------------------------------------- */
function animateHeroCounters() {
  const counters = document.querySelectorAll('.hero-stat-num[data-target]');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 30;

    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.ceil(count) + (target > 10 ? '+' : '');
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target + (target > 10 ? '+' : '');
      }
    };

    updateCount();
  });
}
