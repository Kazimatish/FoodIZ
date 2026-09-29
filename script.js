/**
 * =========================================================
 * FOODIZ - Complete Restaurant Application
 * =========================================================
 */

"use strict";


/* =========================================================
   CONFIGURATION
   ========================================================= */

const DELIVERY_FEE = 150;
const CART_STORAGE_KEY = "foodiz_cart";


/* =========================================================
   PRODUCTS
   40 UNIQUE PRODUCTS
   ========================================================= */

const productsData = [

  /* ================= BURGERS ================= */

  {
    id: 1,
    name: "Classic Beef Burger",
    category: "Burgers",
    price: 450,
    description:
      "Juicy beef patty with lettuce, tomato, onion, cheese and signature sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 2,
    name: "Zinger Burger",
    category: "Burgers",
    price: 550,
    description:
      "Crispy spicy chicken fillet with lettuce, cheese and creamy mayo sauce.",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 3,
    name: "Double Cheese Burger",
    category: "Burgers",
    price: 650,
    description:
      "Two beef patties layered with double cheese and special burger sauce.",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 4,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 500,
    description:
      "Golden crispy chicken fillet with fresh lettuce, tomato and creamy sauce.",
    image:
      "https://images.unsplash.com/photo-1615297928064-24977384d0c4?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 5,
    name: "Mushroom Swiss Burger",
    category: "Burgers",
    price: 650,
    description:
      "Beef patty topped with sauteed mushrooms, Swiss cheese and garlic aioli.",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 6,
    name: "BBQ Chicken Burger",
    category: "Burgers",
    price: 600,
    description:
      "Grilled chicken fillet with smoky BBQ sauce, crispy onions and cheese.",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= PIZZA ================= */

  {
    id: 7,
    name: "Chicken Pizza",
    category: "Pizza",
    price: 1200,
    description:
      "Chicken, mozzarella cheese, onions, capsicum and delicious pizza sauce.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 8,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 1400,
    description:
      "Classic pepperoni pizza with mozzarella cheese and rich tomato sauce.",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 9,
    name: "Fajita Supreme Pizza",
    category: "Pizza",
    price: 1350,
    description:
      "Chicken fajita, onions, capsicum, jalapenos and extra mozzarella.",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 10,
    name: "Cheese Lover Pizza",
    category: "Pizza",
    price: 1250,
    description:
      "Extra mozzarella, cheddar and creamy cheese sauce on a crispy crust.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 11,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    price: 1450,
    description:
      "Smoky BBQ chicken, onions, mozzarella and BBQ pizza sauce.",
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= SHAWARMA ================= */

  {
    id: 12,
    name: "Chicken Shawarma",
    category: "Shawarma",
    price: 350,
    description:
      "Grilled chicken with vegetables, garlic sauce and special dressing.",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 13,
    name: "Cheese Shawarma",
    category: "Shawarma",
    price: 450,
    description:
      "Chicken shawarma with melted cheese, vegetables and garlic sauce.",
    image:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 14,
    name: "Spicy Shawarma",
    category: "Shawarma",
    price: 400,
    description:
      "Spicy chicken shawarma loaded with jalapenos and hot garlic sauce.",
    image:
      "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= FRIED CHICKEN ================= */

  {
    id: 15,
    name: "Crispy Fried Chicken",
    category: "Fried Chicken",
    price: 300,
    description:
      "Golden crispy chicken with seasoned coating and juicy tender meat.",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 16,
    name: "Hot Wings",
    category: "Fried Chicken",
    price: 450,
    description:
      "Six crispy chicken wings coated with delicious spicy buffalo sauce.",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 17,
    name: "Chicken Strips",
    category: "Fried Chicken",
    price: 500,
    description:
      "Crispy golden chicken strips served with creamy dipping sauce.",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 18,
    name: "Spicy Chicken Bucket",
    category: "Fried Chicken",
    price: 950,
    description:
      "Family bucket containing crispy spicy chicken pieces and dipping sauce.",
    image:
      "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= FRIES ================= */

  {
    id: 19,
    name: "Loaded Fries",
    category: "Fries",
    price: 450,
    description:
      "Crispy fries loaded with cheese, chicken chunks, jalapenos and sauce.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 20,
    name: "Cheese Fries",
    category: "Fries",
    price: 350,
    description:
      "Crispy golden fries generously covered with melted cheddar cheese.",
    image:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 21,
    name: "Curly Seasoned Fries",
    category: "Fries",
    price: 350,
    description:
      "Spiral-cut fries tossed in delicious garlic and paprika seasoning.",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= WRAPS ================= */

  {
    id: 22,
    name: "Chicken Wrap",
    category: "Wraps",
    price: 400,
    description:
      "Grilled chicken, lettuce, tomatoes and creamy garlic sauce in soft bread.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 23,
    name: "BBQ Grilled Wrap",
    category: "Wraps",
    price: 420,
    description:
      "Smoky grilled chicken with BBQ sauce and crispy greens.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 24,
    name: "Spicy Chicken Wrap",
    category: "Wraps",
    price: 450,
    description:
      "Spicy crispy chicken with jalapenos, lettuce and spicy mayo.",
    image:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= SANDWICHES ================= */

  {
    id: 25,
    name: "Chicken Sandwich",
    category: "Sandwiches",
    price: 450,
    description:
      "Crispy chicken with lettuce, tomato, cheese and delicious mayo.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 26,
    name: "Club Sandwich",
    category: "Sandwiches",
    price: 550,
    description:
      "Classic triple-layer sandwich with chicken, egg, cheese and vegetables.",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 27,
    name: "Grilled Cheese Sandwich",
    category: "Sandwiches",
    price: 350,
    description:
      "Toasted bread filled with melted cheese and creamy special sauce.",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= FAST FOOD ================= */

  {
    id: 28,
    name: "Chicken Nuggets",
    category: "Fast Food",
    price: 400,
    description:
      "Golden crispy chicken nuggets served with your choice of dipping sauce.",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 29,
    name: "Chicken Cheese Balls",
    category: "Fast Food",
    price: 450,
    description:
      "Crispy cheese-filled chicken balls served with creamy dipping sauce.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 30,
    name: "Mozzarella Sticks",
    category: "Fast Food",
    price: 500,
    description:
      "Golden fried mozzarella sticks served with special tomato dip.",
    image:
      "https://images.unsplash.com/photo-1531749668029-d74628592c90?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= PASTA ================= */

  {
    id: 31,
    name: "Chicken Pasta",
    category: "Pasta",
    price: 650,
    description:
      "Creamy pasta tossed with tender chicken, herbs and rich white sauce.",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 32,
    name: "Chicken Alfredo Pasta",
    category: "Pasta",
    price: 750,
    description:
      "Creamy Alfredo sauce, grilled chicken, herbs and parmesan cheese.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 33,
    name: "Spicy Arrabbiata Pasta",
    category: "Pasta",
    price: 600,
    description:
      "Penne pasta cooked in spicy tomato sauce with herbs and parmesan.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= DRINKS ================= */

  {
    id: 34,
    name: "Soft Drink",
    category: "Drinks",
    price: 150,
    description:
      "Chilled 500ml soft drink. Choose Pepsi, 7UP or Mirinda.",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 35,
    name: "Chocolate Shake",
    category: "Drinks",
    price: 350,
    description:
      "Rich creamy chocolate milkshake topped with whipped cream and fudge.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 36,
    name: "Fresh Lemonade",
    category: "Drinks",
    price: 200,
    description:
      "Refreshing lemonade made with fresh lemon juice and chilled ice.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 37,
    name: "Mango Smoothie",
    category: "Drinks",
    price: 320,
    description:
      "Fresh mango blended with yogurt and crushed ice.",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=500&q=80"
  },


  /* ================= DESSERTS ================= */

  {
    id: 38,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: 380,
    description:
      "Warm chocolate cake with a soft molten chocolate center.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 39,
    name: "Vanilla Ice Cream",
    category: "Desserts",
    price: 200,
    description:
      "Two scoops of creamy premium vanilla bean ice cream.",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 40,
    name: "Brownie Sundae",
    category: "Desserts",
    price: 450,
    description:
      "Warm chocolate brownie topped with vanilla ice cream and chocolate sauce.",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=500&q=80"
  }

];


/* =========================================================
   APPLICATION STATE
   ========================================================= */

let cart = loadCart();

let currentCategory = "All";

let searchQuery = "";

let sortBy = "default";


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const productsGrid =
  document.getElementById("products-grid");

const noProductsEl =
  document.getElementById("no-products");

const categoryFiltersContainer =
  document.getElementById("category-filters");

const searchInput =
  document.getElementById("search-input");

const sortSelect =
  document.getElementById("sort-select");

const clearSearchBtn =
  document.getElementById("clear-search");

const searchTrigger =
  document.getElementById("search-trigger");

const cartBtn =
  document.getElementById("cart-btn");

const closeCartBtn =
  document.getElementById("close-cart");

const cartSidebar =
  document.getElementById("cart-sidebar");

const cartOverlay =
  document.getElementById("cart-overlay");

const cartBadge =
  document.getElementById("cart-badge");

const cartItemsContainer =
  document.getElementById("cart-items-container");

const cartSubtotalEl =
  document.getElementById("cart-subtotal");

const cartDeliveryEl =
  document.getElementById("cart-delivery");

const cartTotalEl =
  document.getElementById("cart-total");

const proceedCheckoutBtn =
  document.getElementById("proceed-checkout-btn");

const checkoutModal =
  document.getElementById("checkout-modal");

const closeModalBtn =
  document.getElementById("close-modal");

const checkoutForm =
  document.getElementById("checkout-form");

const checkoutFormWrapper =
  document.getElementById("checkout-form-wrapper");

const orderSuccessWrapper =
  document.getElementById("order-success-wrapper");

const checkoutSummaryItems =
  document.getElementById("checkout-summary-items");

const checkoutSubtotalEl =
  document.getElementById("checkout-subtotal");

const checkoutDeliveryEl =
  document.getElementById("checkout-delivery");

const checkoutTotalEl =
  document.getElementById("checkout-total");

const backToHomeBtn =
  document.getElementById("back-to-home-btn");

const hamburger =
  document.getElementById("hamburger");

const navbar =
  document.getElementById("navbar");

const contactForm =
  document.getElementById("contact-form");

const newsletterForm =
  document.getElementById("newsletter-form");


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderProducts();

  updateCartUI();

  setupEventListeners();

  updateActiveNav();

});


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

function setupEventListeners() {

  /* Mobile Menu */

  hamburger.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const isOpen =
      navbar.classList.contains("active");

    hamburger.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    hamburger.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';

  });


  /* Close Mobile Menu */

  document
    .querySelectorAll(".nav-link")
    .forEach(link => {

      link.addEventListener("click", () => {

        navbar.classList.remove("active");

        hamburger.setAttribute(
          "aria-expanded",
          "false"
        );

        hamburger.innerHTML =
          '<i class="fa-solid fa-bars"></i>';

      });

    });


  /* Search */

  searchInput.addEventListener(
    "input",
    event => {

      searchQuery =
        event.target.value
          .toLowerCase()
          .trim();

      renderProducts();

    }
  );


  /* Search Navbar Button */

  searchTrigger.addEventListener(
    "click",
    () => {

      document
        .getElementById("menu")
        .scrollIntoView({
          behavior: "smooth"
        });

      setTimeout(() => {
        searchInput.focus();
      }, 500);

    }
  );


  /* Clear Search */

  clearSearchBtn.addEventListener(
    "click",
    () => {

      searchInput.value = "";

      searchQuery = "";

      currentCategory = "All";

      document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {

          btn.classList.toggle(
            "active",
            btn.dataset.category === "All"
          );

        });

      renderProducts();

    }
  );


  /* Sorting */

  sortSelect.addEventListener(
    "change",
    event => {

      sortBy = event.target.value;

      renderProducts();

    }
  );


  /* Categories */

  categoryFiltersContainer.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(".filter-btn");

      if (!button) return;

      document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add("active");

      currentCategory =
        button.dataset.category;

      renderProducts();

    }
  );


  /* Cart */

  cartBtn.addEventListener(
    "click",
    openCart
  );

  closeCartBtn.addEventListener(
    "click",
    closeCart
  );

  cartOverlay.addEventListener(
    "click",
    closeCart
  );


  /* Cart Item Buttons */

  cartItemsContainer.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest("button");

      if (!button) return;

      const id =
        Number(button.dataset.id);

      if (button.classList.contains("qty-plus")) {

        updateQuantity(id, 1);

      }

      else if (
        button.classList.contains("qty-minus")
      ) {

        updateQuantity(id, -1);

      }

      else if (
        button.classList.contains("cart-item-remove")
      ) {

        removeFromCart(id);

      }

    }
  );


  /* Checkout */

  proceedCheckoutBtn.addEventListener(
    "click",
    () => {

      if (cart.length === 0) {

        showToast(
          "Your cart is empty!",
          "error"
        );

        return;
      }

      closeCart();

      openCheckout();

    }
  );


  closeModalBtn.addEventListener(
    "click",
    closeCheckout
  );


  /* Checkout Submit */

  checkoutForm.addEventListener(
    "submit",
    handleOrderSubmission
  );


  /* Contact */

  contactForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      showToast(
        "Thank you! Your message has been received.",
        "success"
      );

      contactForm.reset();

    }
  );


  /* Newsletter */

  newsletterForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      showToast(
        "Successfully subscribed to FOODIZ deals!",
        "success"
      );

      newsletterForm.reset();

    }
  );


  /* Continue Shopping */

  backToHomeBtn.addEventListener(
    "click",
    () => {

      closeCheckout();

      window.location.hash = "#menu";

    }
  );


  /* Close Checkout When Clicking Background */

  checkoutModal.addEventListener(
    "click",
    event => {

      if (event.target === checkoutModal) {
        closeCheckout();
      }

    }
  );


  /* ESC Key */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape") return;

      closeCart();

      closeCheckout();

    }
  );


  /* Active Navigation */

  window.addEventListener(
    "scroll",
    updateActiveNav
  );

}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {

  let filtered =
    productsData.filter(product => {

      const matchesCategory =
        currentCategory === "All" ||
        product.category === currentCategory;

      const searchText =
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase();

      const matchesSearch =
        searchText.includes(searchQuery);

      return (
        matchesCategory &&
        matchesSearch
      );

    });


  /* Sorting */

  if (sortBy === "low-high") {

    filtered.sort(
      (a, b) => a.price - b.price
    );

  }

  else if (sortBy === "high-low") {

    filtered.sort(
      (a, b) => b.price - a.price
    );

  }


  /* Empty State */

  if (filtered.length === 0) {

    productsGrid.innerHTML = "";

    noProductsEl.classList.remove("hidden");

    return;

  }


  noProductsEl.classList.add("hidden");


  /* Product Cards */

  productsGrid.innerHTML =
    filtered
      .map(product => `

        <article class="product-card">

          <div class="product-img-box">

            <img
              src="${product.image}"
              alt="${escapeHTML(product.name)}"
              loading="lazy"
            >

            <span class="product-category-tag">
              ${escapeHTML(product.category)}
            </span>

          </div>


          <div class="product-info">

            <h3 class="product-title">
              ${escapeHTML(product.name)}
            </h3>

            <p class="product-desc">
              ${escapeHTML(product.description)}
            </p>


            <div class="product-footer">

              <span class="product-price">
                ₨${formatPrice(product.price)}
              </span>

              <button
                class="add-cart-btn"
                data-product-id="${product.id}"
                aria-label="Add ${escapeHTML(product.name)} to cart"
                title="Add to cart"
              >
                <i class="fa-solid fa-plus"></i>
              </button>

            </div>

          </div>

        </article>

      `)
      .join("");


  /* Add Product Buttons */

  productsGrid
    .querySelectorAll(".add-cart-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          addToCart(
            Number(button.dataset.productId)
          );

        }
      );

    });

}


/* =========================================================
   CART
   ========================================================= */

function addToCart(id) {

  const product =
    productsData.find(
      item => item.id === id
    );

  if (!product) return;


  const existing =
    cart.find(
      item => item.id === id
    );


  if (existing) {

    existing.quantity += 1;

  }

  else {

    cart.push({
      ...product,
      quantity: 1
    });

  }


  saveCart();

  updateCartUI();

  showToast(
    `${product.name} added to cart!`,
    "success"
  );

}


function updateQuantity(id, change) {

  const item =
    cart.find(
      product => product.id === id
    );

  if (!item) return;


  item.quantity += change;


  if (item.quantity <= 0) {

    cart =
      cart.filter(
        product => product.id !== id
      );

    showToast(
      "Item removed from cart.",
      "info"
    );

  }


  saveCart();

  updateCartUI();

}


function removeFromCart(id) {

  const item =
    cart.find(
      product => product.id === id
    );


  cart =
    cart.filter(
      product => product.id !== id
    );


  saveCart();

  updateCartUI();


  if (item) {

    showToast(
      `${item.name} removed from cart.`,
      "info"
    );

  }

}


/* =========================================================
   CART UI
   ========================================================= */

function updateCartUI() {

  const totalItems =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );


  const subtotal =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.quantity,
      0
    );


  const delivery =
    subtotal > 0
      ? DELIVERY_FEE
      : 0;


  const total =
    subtotal + delivery;


  /* Badge */

  cartBadge.textContent =
    totalItems > 99
      ? "99+"
      : totalItems;


  /* Totals */

  cartSubtotalEl.textContent =
    `₨${formatPrice(subtotal)}`;

  cartDeliveryEl.textContent =
    `₨${formatPrice(delivery)}`;

  cartTotalEl.textContent =
    `₨${formatPrice(total)}`;


  /* Checkout Button */

  proceedCheckoutBtn.disabled =
    cart.length === 0;


  proceedCheckoutBtn.style.opacity =
    cart.length === 0
      ? "0.6"
      : "1";


  /* Empty Cart */

  if (cart.length === 0) {

    cartItemsContainer.innerHTML = `

      <div class="empty-cart-msg">

        <i class="fa-solid fa-basket-shopping"></i>

        <h4>Your cart is empty</h4>

        <p>Add something delicious!</p>

      </div>

    `;

    return;

  }


  /* Cart Items */

  cartItemsContainer.innerHTML =
    cart
      .map(item => `

        <div class="cart-item">

          <img
            src="${item.image}"
            alt="${escapeHTML(item.name)}"
          >

          <div class="cart-item-info">

            <h4>
              ${escapeHTML(item.name)}
            </h4>

            <div class="cart-item-price">
              ₨${formatPrice(item.price)}
            </div>

            <div class="qty-controls">

              <button
                class="qty-btn qty-minus"
                data-id="${item.id}"
                aria-label="Decrease quantity"
              >
                -
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                class="qty-btn qty-plus"
                data-id="${item.id}"
                aria-label="Increase quantity"
              >
                +
              </button>

            </div>

          </div>


          <button
            class="cart-item-remove"
            data-id="${item.id}"
            aria-label="Remove ${escapeHTML(item.name)}"
            title="Remove"
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>

        </div>

      `)
      .join("");

}


/* =========================================================
   CART OPEN / CLOSE
   ========================================================= */

function openCart() {

  cartSidebar.classList.add("active");

  cartOverlay.classList.add("active");

  document.body.classList.add("no-scroll");

}


function closeCart() {

  cartSidebar.classList.remove("active");

  cartOverlay.classList.remove("active");

  if (
    !checkoutModal.classList.contains("active")
  ) {
    document.body.classList.remove("no-scroll");
  }

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function openCheckout() {

  if (cart.length === 0) {

    showToast(
      "Your cart is empty!",
      "error"
    );

    return;

  }


  renderCheckoutSummary();


  checkoutFormWrapper
    .classList
    .remove("hidden");


  orderSuccessWrapper
    .classList
    .add("hidden");


  checkoutModal
    .classList
    .add("active");


  document.body.classList.add("no-scroll");

}


function closeCheckout() {

  checkoutModal
    .classList
    .remove("active");

  document.body.classList.remove("no-scroll");

}


/* =========================================================
   CHECKOUT SUMMARY
   ========================================================= */

function renderCheckoutSummary() {

  const subtotal =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.quantity,
      0
    );


  const delivery =
    subtotal > 0
      ? DELIVERY_FEE
      : 0;


  const total =
    subtotal + delivery;


  checkoutSummaryItems.innerHTML =
    cart
      .map(item => `

        <div class="checkout-summary-item">

          <span>
            ${escapeHTML(item.name)}
            × ${item.quantity}
          </span>

          <strong>
            ₨${formatPrice(
              item.price * item.quantity
            )}
          </strong>

        </div>

      `)
      .join("");


  checkoutSubtotalEl.textContent =
    `₨${formatPrice(subtotal)}`;

  checkoutDeliveryEl.textContent =
    `₨${formatPrice(delivery)}`;

  checkoutTotalEl.textContent =
    `₨${formatPrice(total)}`;

}


/* =========================================================
   ORDER SUBMISSION
   ========================================================= */

function handleOrderSubmission(event) {

  event.preventDefault();


  if (cart.length === 0) {

    showToast(
      "Your cart is empty!",
      "error"
    );

    return;

  }


  const customerName =
    document
      .getElementById("cust-name")
      .value
      .trim();


  const customerPhone =
    document
      .getElementById("cust-phone")
      .value
      .trim();


  const selectedPayment =
    document
      .querySelector(
        'input[name="payment-method"]:checked'
      )
      ?.value ||
    "Cash on Delivery";


  const subtotal =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.quantity,
      0
    );


  const grandTotal =
    subtotal + DELIVERY_FEE;


  const orderId =
    "#FDZ-" +
    Math.floor(
      1000 +
      Math.random() * 9000
    );


  /* Confirmation Details */

  document.getElementById(
    "conf-order-id"
  ).textContent = orderId;


  document.getElementById(
    "conf-customer"
  ).textContent =
    customerName;


  document.getElementById(
    "conf-phone"
  ).textContent =
    customerPhone;


  document.getElementById(
    "conf-payment"
  ).textContent =
    selectedPayment;


  document.getElementById(
    "conf-total"
  ).textContent =
    `₨${formatPrice(grandTotal)}`;


  /* Save Order Locally */

  saveOrder({
    orderId,
    customerName,
    customerPhone,
    paymentMethod: selectedPayment,
    items: [...cart],
    subtotal,
    deliveryFee: DELIVERY_FEE,
    total: grandTotal,
    createdAt:
      new Date().toISOString()
  });


  /* Clear Cart */

  cart = [];

  saveCart();

  updateCartUI();


  /* Switch Screen */

  checkoutFormWrapper
    .classList
    .add("hidden");


  orderSuccessWrapper
    .classList
    .remove("hidden");


  checkoutForm.reset();


  showToast(
    "Your order has been placed!",
    "success"
  );

}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function loadCart() {

  try {

    const stored =
      localStorage.getItem(
        CART_STORAGE_KEY
      );


    if (!stored) {
      return [];
    }


    const parsed =
      JSON.parse(stored);


    if (!Array.isArray(parsed)) {
      return [];
    }


    return parsed
      .filter(item =>
        productsData.some(
          product =>
            product.id === item.id
        )
      )
      .map(item => ({

        ...item,

        quantity:
          Number(item.quantity) > 0
            ? Number(item.quantity)
            : 1

      }));

  }

  catch (error) {

    console.error(
      "Could not load cart:",
      error
    );

    return [];

  }

}


function saveCart() {

  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cart)
  );

}


function saveOrder(order) {

  try {

    const orders =
      JSON.parse(
        localStorage.getItem(
          "foodiz_orders"
        )
      ) || [];


    orders.push(order);


    localStorage.setItem(
      "foodiz_orders",
      JSON.stringify(orders)
    );

  }

  catch (error) {

    console.error(
      "Could not save order:",
      error
    );

  }

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(
  message,
  type = "info"
) {

  const container =
    document.getElementById(
      "toast-container"
    );


  const toast =
    document.createElement("div");


  toast.className =
    `toast toast-${type}`;


  let icon =
    "fa-circle-info";


  if (type === "success") {
    icon = "fa-circle-check";
  }

  if (type === "error") {
    icon = "fa-circle-exclamation";
  }


  toast.innerHTML = `

    <i class="fa-solid ${icon}"></i>

    <span>
      ${escapeHTML(message)}
    </span>

  `;


  container.appendChild(toast);


  setTimeout(() => {

    toast.remove();

  }, 3000);

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function updateActiveNav() {

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  let current =
    "home";


  sections.forEach(section => {

    const rect =
      section.getBoundingClientRect();


    if (
      rect.top <= 150 &&
      rect.bottom >= 150
    ) {

      current =
        section.id;

    }

  });


  document
    .querySelectorAll(".nav-link")
    .forEach(link => {

      link.classList.toggle(
        "active",
        link.getAttribute("href") ===
        `#${current}`
      );

    });

}


/* =========================================================
   HELPERS
   ========================================================= */

function formatPrice(value) {

  return Number(value).toLocaleString(
    "en-PK"
  );

}


function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}