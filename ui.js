// UI related functionality

function doSearch() {
  const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
  if (!searchTerm) {
    return;
  }
  const products = document.querySelectorAll('.product-card');
  let found = false;
  products.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    if (name.includes(searchTerm)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });
  if (!found) {
    products.forEach(card => card.style.display = 'block');
  }
}

function showCategory(category) {
  // Implement your filtering or navigation logic
}

function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  const btn = document.querySelector('.mobile-menu-btn i');
  if(menu.classList.contains('active')) {
    menu.classList.remove('active');
    btn.classList.replace('fa-times', 'fa-bars');
  } else {
    menu.classList.add('active');
    btn.classList.replace('fa-bars', 'fa-times');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle button
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if(menuBtn) {
    menuBtn.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      const btn = document.querySelector('.mobile-menu-btn i');
      if(menu) menu.classList.remove('active');
      if(btn) btn.classList.replace('fa-times', 'fa-bars');
    });
  });
});
