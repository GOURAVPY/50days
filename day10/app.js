// --- Demo products ---
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 1299,
    category: "electronics",
    rating: 4.4,
    image: "Earbuds",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1899,
    category: "electronics",
    rating: 4.2,
    image: "Watch",
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: 499,
    category: "fashion",
    rating: 4.1,
    image: "T-Shirt",
  },
  {
    id: 4,
    name: "Ceramic Mug",
    price: 299,
    category: "home",
    rating: 4.5,
    image: "Mug",
  },
  {
    id: 5,
    name: "LED Desk Lamp",
    price: 999,
    category: "home",
    rating: 4.3,
    image: "Lamp",
  },
  {
    id: 6,
    name: "Sneakers",
    price: 1499,
    category: "fashion",
    rating: 4.0,
    image: "Sneakers",
  },
];

// --- State ---
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// --- Elements ---
const productGrid = document.getElementById("productGrid");
const cartDrawer = document.getElementById("cartDrawer");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartToggle = document.getElementById("cartToggle");
const closeCart = document.getElementById("closeCart");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const resetFilters = document.getElementById("resetFilters");
const toast = document.getElementById("toast");

// --- Utilities ---
const formatINR = (n) => new Intl.NumberFormat("en-IN").format(n);
const showToast = (msg) => {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1500);
};
const saveCart = () => localStorage.setItem("cart", JSON.stringify(cart));
const findInCart = (id) => cart.find((c) => c.id === id);

// --- Render products ---
function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach((p) => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <div class="media">${p.image}</div>
      <div class="body">
        <h4>${p.name}</h4>
        <div class="small">★ ${p.rating} • ${p.category}</div>
        <div class="meta">
          <span class="price">₹${formatINR(p.price)}</span>
          <button class="btn primary" data-id="${p.id}">Add to cart</button>
        </div>
      </div>`;
    productGrid.appendChild(el);
  });

  productGrid.querySelectorAll("button[data-id]").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
  });
}

// --- Filters ---
function applyFilters() {
  const term = searchInput.value.trim().toLowerCase();
  const cat = categoryFilter.value;
  const maxPrice = Number(priceRange.value);

  const filtered = PRODUCTS.filter((p) => {
    const matchesTerm = !term || p.name.toLowerCase().includes(term);
    const matchesCat = cat === "all" || p.category === cat;
    const matchesPrice = p.price <= maxPrice;
    return matchesTerm && matchesCat && matchesPrice;
  });

  renderProducts(filtered);
}

// --- Cart logic ---
function addToCart(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  const existing = findInCart(id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
    });
  }
  saveCart();
  updateCartUI();
  showToast("Added to cart");
}

function updateQty(id, delta) {
  const item = findInCart(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((c) => c.id !== id);
  }
  saveCart();
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter((c) => c.id !== id);
  saveCart();
  updateCartUI();
  showToast("Item removed");
}

function subtotal() {
  return cart.reduce((sum, c) => sum + c.price * c.qty, 0);
}

function updateCartUI() {
  cartCount.textContent = cart.reduce((n, c) => n + c.qty, 0);

  cartItems.innerHTML = "";
  cart.forEach((c) => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="thumb">🧾</div>
      <div>
        <div style="color:#e9f1f7; font-weight:600">${c.name}</div>
        <div class="small">₹${formatINR(c.price)} each</div>
        <div class="qty" aria-label="Quantity controls">
          <button aria-label="Decrease">−</button>
          <input type="text" value="${c.qty}" readonly />
          <button aria-label="Increase">+</button>
          <button class="icon-btn" title="Remove">🗑️</button>
        </div>
      </div>
      <div style="color:#66fcf1; font-weight:700">₹${formatINR(
        c.price * c.qty
      )}</div>
    `;
    const [decBtn, , incBtn, delBtn] = row.querySelectorAll(
      ".qty button, .qty .icon-btn"
    );
    decBtn.addEventListener("click", () => updateQty(c.id, -1));
    incBtn.addEventListener("click", () => updateQty(c.id, 1));
    delBtn.addEventListener("click", () => removeItem(c.id));
    cartItems.appendChild(row);
  });

  cartSubtotal.textContent = formatINR(subtotal());
}

// --- Drawer controls ---
cartToggle.addEventListener("click", () => cartDrawer.classList.toggle("open"));
closeCart.addEventListener("click", () => cartDrawer.classList.remove("open"));

// --- Filters events ---
searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  applyFilters();
});
resetFilters.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  priceRange.value = 2000;
  priceValue.textContent = "2000";
  applyFilters();
});

// --- Checkout ---
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) return showToast("Your cart is empty");
  const amount = subtotal();
  showToast(`Checkout — total ₹${formatINR(amount)} (demo)`);
});

// --- Init ---
document.getElementById("year").textContent = new Date().getFullYear();
applyFilters();
updateCartUI();
