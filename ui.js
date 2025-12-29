// UI related functionality

function doSearch() {
  const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
  if (!searchTerm) {
    // If search box is empty, show all product cards
    document.querySelectorAll('.product-card').forEach(card => card.style.display = 'block');
    return;
  }

  const products = document.querySelectorAll('.product-card');
  let found = false;

  products.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();

    // Normalize spaces, remove extra white spaces, ignore case for matching
    const normalizedProductName = name.replace(/\s+/g, ' ').trim();
    const normalizedSearchTerm = searchTerm.replace(/\s+/g, ' ').trim();

    if (normalizedProductName.includes(normalizedSearchTerm)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  // Optional: If no product found, show a message or reset visibility
  if (!found) {
    // Show all products if none matched or you can show a message
    products.forEach(card => card.style.display = 'block');
  }
}

function showCategory(cat) {
  // Select all category-section elements
  const categories = document.querySelectorAll('.category-section');

  categories.forEach(section => {
    // Show the selected category section, hide others
    if (section.id === 'category-' + cat) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Show 'fashion' category by default when page loads


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

