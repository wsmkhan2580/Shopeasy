// =======================
// SEARCH (OVERRIDES CATEGORY)
// =======================
function doSearch() {
  const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
  const products = document.querySelectorAll('.product-card');
  const sections = document.querySelectorAll('.category-section');
  const noResults = document.getElementById('no-results');

  let found = false;

  // 🔥 FORCE SHOW ALL SECTIONS (THIS IS THE FIX)
  sections.forEach(section => {
    section.style.display = 'block';
  });

  // Empty search → show everything
  if (!searchTerm) {
    products.forEach(card => card.style.display = 'block');
    if (noResults) noResults.style.display = 'none';
    return;
  }

  products.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();

    if (name.includes(searchTerm)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (noResults) {
    noResults.style.display = found ? 'none' : 'block';
  }
}

// =======================
// CATEGORY FILTER
// =======================
function showCategory(category) {
  const sections = document.querySelectorAll('.category-section');
  const noResults = document.getElementById('no-results');

  sections.forEach(section => {
    section.style.display =
      section.id === `category-${category}` ? 'block' : 'none';
  });

  if (noResults) noResults.style.display = 'none';

  // clear search
  const input = document.getElementById('search-input');
  if (input) input.value = '';
}

// =======================
// MOBILE MENU
// =======================
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  const btn = document.querySelector('.mobile-menu-btn i');

  if (!menu || !btn) return;

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    btn.classList.replace('fa-times', 'fa-bars');
  } else {
    menu.classList.add('active');
    btn.classList.replace('fa-bars', 'fa-times');
  }
}

// =======================
// DOM READY
// =======================
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if (menuBtn) menuBtn.addEventListener('click', toggleMobileMenu);

  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      const btn = document.querySelector('.mobile-menu-btn i');
      if (menu) menu.classList.remove('active');
      if (btn) btn.classList.replace('fa-times', 'fa-bars');
    });
  });
});
