/**
 * NJNFC - Shared Navigation & Common UI
 * Injected on every page for consistent header/footer
 */

// ── Shared navbar HTML ─────────────────────────────────────────────────────
function buildNavbar(activePage) {
  const links = [
    { href: 'about.html',       label: 'About & Mission' },
    { href: 'leagues.html',     label: 'Leagues & Teams' },
    { href: 'fields.html',      label: 'Pickup Fields' },
    { href: 'gallery.html',     label: 'Community Gallery' },
    { href: 'donate.html',      label: 'Support & Donate' },
    { href: 'sponsors.html',    label: 'Sponsors' },
    { href: 'contact.html',     label: 'Contact' },
  ];

  const navLinks = links.map(l =>
    `<a href="${l.href}" class="nav-link${activePage === l.href ? ' active' : ''}">${l.label}</a>`
  ).join('\n        ');

  const mobileLinks = links.map(l =>
    `<a href="${l.href}" class="nav-link mobile-link${activePage === l.href ? ' active' : ''}">${l.label}</a>`
  ).join('\n      ');

  return `
  <header class="navbar" id="main-navbar">
    <div class="container nav-container">
      <a href="index.html" class="nav-logo" aria-label="NJNFC Home">
        <img src="assets/icons/njnfc-logo.png" alt="Official NJNFC Crest Logo" class="nav-logo-img">
        <div class="nav-brand-text">
          <span class="nav-brand-title">NJNFC</span>
          <span class="nav-brand-sub">NEW JERSEY • NON-PROFIT</span>
        </div>
      </a>

      <nav class="nav-menu" aria-label="Primary Navigation">
        ${navLinks}
      </nav>

      <div class="nav-actions">
        <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Light/Dark Theme" title="Toggle Theme">
          <i data-lucide="sun" class="light-icon" style="display:none; width: 18px; height: 18px;"></i>
          <i data-lucide="moon" class="dark-icon" style="width: 18px; height: 18px;"></i>
        </button>

        <button class="btn btn-primary" onclick="openRegistrationModal('player')" id="nav-join-btn">
          <i data-lucide="user-plus" style="width: 16px; height: 16px;"></i> Join / Register
        </button>

        <button class="mobile-menu-btn" id="mobile-toggle-btn" aria-label="Open Mobile Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-nav-drawer" id="mobile-drawer">
      ${mobileLinks}
      <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
        <button class="btn btn-primary" style="flex: 1;" onclick="openRegistrationModal('player')">Join Club</button>
        <button class="btn btn-gold" style="flex: 1;" onclick="openDonationModal()">Donate</button>
      </div>
    </div>
  </header>`;
}

// ── Shared footer HTML ─────────────────────────────────────────────────────
function buildFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-logo" style="margin-bottom: 1rem;">
            <img src="assets/icons/njnfc-logo.png" alt="NJNFC Crest" style="width: 60px; height: 60px; object-fit: contain;">
            <div class="nav-brand-text">
              <span class="nav-brand-title">NJNFC</span>
              <span class="nav-brand-sub">NEW JERSEY NEPALI FOOTBALL CLUB</span>
            </div>
          </div>
          <p>Dedicated to uniting the Nepali community across New Jersey through athletic excellence, fair play, youth development, and cultural camaraderie.</p>
          <div style="font-size: 0.8rem; color: var(--accent-gold); font-weight: 600;">
            Non-Profit Community &amp; Sports Initiative • Established 2024
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <div class="footer-links">
            <a href="about.html">About &amp; Mission</a>
            <a href="leagues.html">Leagues &amp; Standings</a>
            <a href="fields.html">Pickup Grounds</a>
            <a href="gallery.html">Photo Memories</a>
            <a href="donate.html">Donations &amp; Support</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Get Involved</h4>
          <div class="footer-links">
            <a href="javascript:void(0)" onclick="openRegistrationModal('player')">Player Registration</a>
            <a href="javascript:void(0)" onclick="openRegistrationModal('team')">Captain Team Entry</a>
            <a href="javascript:void(0)" onclick="openRegistrationModal('volunteer')">Volunteer as Coach/Chef</a>
            <a href="javascript:void(0)" onclick="openSponsorModal()">Become a Sponsor</a>
            <a href="mailto:nepalicommunitynj@njnfc.org">Email the Board</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Home Grounds</h4>
          <p style="font-size: 0.88rem; margin-bottom: 0.75rem;">
            <strong>Oak Ridge Park:</strong><br>136 Oak Ridge Rd, Clark, NJ 07066
          </p>
          <p style="font-size: 0.88rem;">
            <strong>Ponderosa Farm Park:</strong><br>1600 Cooper Rd, Scotch Plains, NJ 07076
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; <span id="current-year"></span> New Jersey Nepali Football Club (NJNFC). All Rights Reserved.</div>
        <div>
          <a href="mailto:nepalicommunitynj@njnfc.org" class="text-gold">nepalicommunitynj@njnfc.org</a> • Made with ❤️ for the Community
        </div>
      </div>
    </div>
  </footer>`;
}

// ── Shared modals HTML ─────────────────────────────────────────────────────
function buildModals() {
  return `
  <!-- Registration Modal -->
  <div class="modal-backdrop" id="registration-modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 style="font-size: 1.35rem;" id="reg-modal-title">Join NJNFC • Player Registration</h3>
        <button class="modal-close-btn" onclick="closeModal('registration-modal')" aria-label="Close Modal">&times;</button>
      </div>
      <div class="modal-body">
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem;">
          <button class="btn btn-secondary reg-tab-btn active" id="tab-player-btn" onclick="switchRegTab('player')">Free Agent Player</button>
          <button class="btn btn-secondary reg-tab-btn" id="tab-team-btn" onclick="switchRegTab('team')">Team / Captain Entry</button>
          <button class="btn btn-secondary reg-tab-btn" id="tab-volunteer-btn" onclick="switchRegTab('volunteer')">Volunteer / BBQ Chef</button>
        </div>
        <form id="registration-form">
          <input type="hidden" id="reg-type-input" value="player">
          <div class="form-group">
            <label class="form-label" for="reg-name">Full Name *</label>
            <input type="text" id="reg-name" class="form-input" placeholder="e.g. Sabin Shrestha" required>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label" for="reg-email">Email Address *</label>
              <input type="email" id="reg-email" class="form-input" placeholder="sabin@example.com" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="reg-phone">Phone Number *</label>
              <input type="tel" id="reg-phone" class="form-input" placeholder="(908) 555-0199" required>
            </div>
          </div>
          <div id="player-fields-group">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label" for="reg-position">Preferred Position</label>
                <select id="reg-position" class="form-select">
                  <option>Forward / Striker</option>
                  <option>Midfielder (CAM / CDM)</option>
                  <option>Defender (CB / Fullback)</option>
                  <option>Goalkeeper (GK)</option>
                  <option>Any / Utility Player</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="reg-jersey">Jersey Size</label>
                <select id="reg-jersey" class="form-select">
                  <option>Small (S)</option>
                  <option selected>Medium (M)</option>
                  <option>Large (L)</option>
                  <option>X-Large (XL)</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="reg-experience">Experience / Skill Level</label>
              <select id="reg-experience" class="form-select">
                <option>Casual / Weekend Scrimmage</option>
                <option>Intermediate Club Player</option>
                <option>Competitive League Veteran</option>
              </select>
            </div>
          </div>
          <div id="team-fields-group" style="display: none;">
            <div class="form-group">
              <label class="form-label" for="reg-team-name">Team Name</label>
              <input type="text" id="reg-team-name" class="form-input" placeholder="e.g. Jersey City FC">
            </div>
            <div class="form-group">
              <label class="form-label" for="reg-roster-count">Expected Squad Size</label>
              <input type="number" id="reg-roster-count" class="form-input" placeholder="8 - 12 players" min="6" max="15">
            </div>
          </div>
          <div id="volunteer-fields-group" style="display: none;">
            <div class="form-group">
              <label class="form-label" for="reg-volunteer-role">Volunteer Interest</label>
              <select id="reg-volunteer-role" class="form-select">
                <option>BBQ Chef / Food Prep</option>
                <option>Youth Soccer Coach / Assistant</option>
                <option>Matchday Referee / Official</option>
                <option>Photography &amp; Social Media</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="reg-notes">Emergency Contact &amp; Notes</label>
            <textarea id="reg-notes" class="form-textarea" style="min-height: 80px;" placeholder="Emergency contact name &amp; phone..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 0.5rem;">
            <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i> Complete Registration
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- Donation Modal -->
  <div class="modal-backdrop" id="donation-modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 style="font-size: 1.35rem;">Support NJNFC • Non-Profit Donation</h3>
        <button class="modal-close-btn" onclick="closeModal('donation-modal')" aria-label="Close Modal">&times;</button>
      </div>
      <div class="modal-body">
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="font-size: 2.5rem; font-weight: 900; color: var(--accent-gold);" id="modal-donation-amount-display">$50.00</div>
          <p style="color: var(--text-secondary); font-size: 0.9rem;" id="modal-donation-purpose">Matchday Gear Sponsor</p>
        </div>
        <form id="donation-checkout-form">
          <div class="form-group">
            <label class="form-label" for="donor-name">Donor / Company Name *</label>
            <input type="text" id="donor-name" class="form-input" placeholder="e.g. Ramesh Thapa" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="donor-email">Email for Tax Receipt *</label>
            <input type="email" id="donor-email" class="form-input" placeholder="ramesh@example.com" required>
          </div>
          <div class="form-group">
            <label class="form-label">Dedication (Optional)</label>
            <input type="text" class="form-input" placeholder="In honor of Nepali Youth Soccer...">
          </div>
          <button type="submit" class="btn btn-gold" style="width: 100%;">
            <i data-lucide="shield-check" style="width: 18px; height: 18px;"></i> Confirm &amp; Process Donation
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- Sponsor Inquiry Modal -->
  <div class="modal-backdrop" id="sponsor-modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 style="font-size: 1.35rem;">Partner with NJNFC • Sponsorship Kit</h3>
        <button class="modal-close-btn" onclick="closeModal('sponsor-modal')" aria-label="Close Modal">&times;</button>
      </div>
      <div class="modal-body">
        <form id="sponsor-inquiry-form">
          <div class="form-group">
            <label class="form-label" for="sponsor-company">Business Name *</label>
            <input type="text" id="sponsor-company" class="form-input" placeholder="e.g. Himalayan Spice Grill" required>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label" for="sponsor-contact">Contact Person *</label>
              <input type="text" id="sponsor-contact" class="form-input" placeholder="e.g. Ankit Sharma" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="sponsor-email">Email Address *</label>
              <input type="email" id="sponsor-email" class="form-input" placeholder="partner@company.com" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="sponsor-tier">Sponsorship Tier</label>
            <select id="sponsor-tier" class="form-select">
              <option>Premier Tournament Title Sponsor ($1,000+)</option>
              <option>Official Team Jersey Sponsor ($500)</option>
              <option>Trophy &amp; Awards Sponsor ($250)</option>
              <option>In-Kind Refreshment / Food Sponsor</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="sponsor-msg">Message / Goals</label>
            <textarea id="sponsor-msg" class="form-textarea" placeholder="Tell us about your brand..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">
            <i data-lucide="send" style="width: 16px; height: 16px;"></i> Submit Sponsorship Inquiry
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- Lightbox -->
  <div class="modal-backdrop" id="lightbox-modal">
    <div class="modal-dialog" style="max-width: 850px; background: transparent; border: none; box-shadow: none;">
      <div style="position: relative; text-align: center;">
        <button class="modal-close-btn" onclick="closeModal('lightbox-modal')" style="position: absolute; top: -20px; right: -20px; background: var(--accent-crimson); color: #fff; z-index: 10;" aria-label="Close Lightbox">&times;</button>
        <img id="lightbox-img" src="" alt="Gallery Preview" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-lg);">
        <div id="lightbox-caption" style="margin-top: 1rem; color: #FFFFFF; font-weight: 700; font-size: 1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- Toast Container -->
  <div class="toast-container" id="toast-container"></div>`;
}

// ── Page head HTML ─────────────────────────────────────────────────────────
function buildHead(title, description, canonicalPath) {
  const base = 'https://www.njnfc.org/';
  return `<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="NJNFC, New Jersey Nepali Football Club, Nepali Soccer NJ, Soccer Tournaments Clark NJ">
  <meta name="author" content="NJNFC Community">
  <link rel="canonical" href="${base}${canonicalPath}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${base}${canonicalPath}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="assets/images/real/hero-team-banner.jpg">
  <link rel="icon" type="image/png" href="assets/icons/njnfc-logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <script src="https://unpkg.com/lucide@latest"></script>`;
}

// ── Inject navbar + footer on load ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Determine current page filename
  const page = window.location.pathname.split('/').pop() || 'index.html';

  // Inject navbar before main content
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = buildNavbar(page);

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = buildFooter();

  // Inject modals
  const modalPlaceholder = document.getElementById('modals-placeholder');
  if (modalPlaceholder) modalPlaceholder.outerHTML = buildModals();

  // Re-run lucide after injection
  if (window.lucide) window.lucide.createIcons();

  // Setup current year
  const yrEl = document.getElementById('current-year');
  if (yrEl) yrEl.textContent = new Date().getFullYear();
});
