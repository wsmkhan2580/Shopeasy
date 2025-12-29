// category.js - shows products of selected category and hides others

function showCategory(cat) {
  const categories = document.querySelectorAll('.category-section');
  categories.forEach(section => {
    if(section.id === 'category-' + cat) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Optional: show all categories initially
document.addEventListener('DOMContentLoaded', () => {
  showCategory('fashion'); // Show fashion category by default
});
