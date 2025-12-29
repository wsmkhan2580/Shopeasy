let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price, btnId) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  
  const btn = document.getElementById(btnId);
  if (btn) {
    btn.textContent = "Go to Cart";
    btn.style.backgroundColor = "#38a169";
    btn.onclick = () => { window.location.href = "cart.html"; };
  }
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const countElem = document.getElementById("cart-count");
  if (countElem) countElem.textContent = cart.length;
}

function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = '<p style="text-align:center; color:#666;">Your cart is empty</p>';
    updateCartTotal(0);
    return;
  }
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <div><h4>${item.product}</h4></div>
      <div class="price">$${item.price}</div>
      <button onclick="removeFromCart(${index})" class="clear-btn" style="padding: 8px 12px; font-size: 14px; margin-left:10px;">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });
  updateCartTotal(total);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function updateCartTotal(total) {
  const totalElem = document.getElementById("cart-total");
  if (totalElem) totalElem.textContent = total;
}

function clearCart() {
   {
    localStorage.removeItem("cart");
    cart = [];
    updateCartCount();
    renderCart();
  }
}

function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Thank you for your purchase! Total: $${total}`);
  localStorage.removeItem("cart");
  cart = [];
  updateCartCount();
  renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  if (document.getElementById("cart-items")) renderCart();
});
