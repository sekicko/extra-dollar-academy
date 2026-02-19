// Create animated falling background elements
function initFallingAnimation() {
  const container = document.querySelector('.falling-container');
  if (!container) return;

  const elements = ['$', '💵', '💰', '₹', '€', '¥', '$', '💵', '💰', '₹', '€', '¥', '$', '💵', '💰', '₹', '€', '¥', '$', '💵'];

  elements.forEach(symbol => {
    const element = document.createElement('div');
    element.className = 'falling-element';
    element.textContent = symbol;
    container.appendChild(element);
  });
}

// Load and display social media links
async function loadSocialMediaLinks() {
  try {
    const settings = await apiCall('/settings', 'GET');
    displaySocialMediaLinks(settings.socialMedia);
  } catch (error) {
    console.log('Settings not available');
  }
}

// Display social media links in footer
function displaySocialMediaLinks(socialMedia) {
  const footerLinksContainer = document.getElementById('footerSocialLinks');
  if (!footerLinksContainer) return;

  const links = [
    { icon: '📱', label: 'Telegram', url: socialMedia?.telegram, color: '#0088cc' },
    { icon: '💬', label: 'WhatsApp', url: socialMedia?.whatsapp, color: '#25D366' },
    { icon: '📺', label: 'YouTube', url: socialMedia?.youtube, color: '#FF0000' },
    { icon: '🎵', label: 'TikTok', url: socialMedia?.tiktok, color: '#000000' },
    { icon: '📸', label: 'Instagram', url: socialMedia?.instagram, color: '#E4405F' },
    { icon: '👍', label: 'Facebook', url: socialMedia?.facebook, color: '#1877F2' },
    { icon: '𝕏', label: 'Twitter', url: socialMedia?.twitter, color: '#000000' },
    { icon: '💼', label: 'LinkedIn', url: socialMedia?.linkedin, color: '#0A66C2' },
    { icon: '🎮', label: 'Discord', url: socialMedia?.discord, color: '#5865F2' },
    { icon: '📧', label: 'Email', url: socialMedia?.email, color: '#FF6B6B', isEmail: true }
  ];

  const activeLinks = links.filter(l => l.url);
  
  if (activeLinks.length === 0) {
    footerLinksContainer.innerHTML = '';
    return;
  }

  footerLinksContainer.innerHTML = activeLinks.map(link => {
    const href = link.isEmail ? `mailto:${link.url}` : link.url;
    const target = link.isEmail ? '' : 'target="_blank"';
    return `
      <a href="${href}" ${target} title="${link.label}" class="social-media-icon twinkle" style="
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        color: var(--light-text);
        text-decoration: none;
        font-size: 1.5rem;
        transition: all 0.3s ease;
        border: 2px solid var(--accent-blue);
        margin: 0 0.5rem;
      " 
      onmouseover="this.style.background='${link.color}';this.style.transform='scale(1.2)';this.style.borderColor='${link.color}';" 
      onmouseout="this.style.background='rgba(255, 255, 255, 0.1)';this.style.transform='scale(1)';this.style.borderColor='var(--accent-blue)';">
        ${link.icon}
      </a>
    `;
  }).join('');
}

// Update navigation based on login status
function updateNavigation() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  nav.innerHTML = '';

  if (isLoggedIn()) {
    const user = getUser();
    nav.innerHTML = `
      <a href="/pages/dashboard.html">Dashboard</a>
      <a href="/pages/courses.html">Courses</a>
      <a href="/pages/products.html">Products</a>
      <a href="/pages/support.html">Support</a>
      ${isAdmin() ? '<a href="/pages/admin.html">Admin Panel</a>' : ''}
      <button class="twinkle" onclick="handleLogout()" style="background: var(--error-red); color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; font-weight: bold;">Logout</button>
    `;
  } else {
    nav.innerHTML = `
      <a href="/">Home</a>
      <a href="/pages/login.html">Login</a>
      <a href="/pages/register.html">Register</a>
    `;
  }
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
  initFallingAnimation();
  updateNavigation();
  loadSocialMediaLinks();
  
  // Auto-refresh social media links every 10 seconds to reflect real-time updates from admin panel
  setInterval(() => {
    loadSocialMediaLinks();
  }, 10000);
});
