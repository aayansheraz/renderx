/* ============================================================
   LAHORI MOMO — hero showcase · menu · cart → WhatsApp checkout
   ============================================================ */
"use strict";

const WHATSAPP = "923177677686";
const FREE_DELIVERY = 5000;
const $ = (id) => document.getElementById(id);
const rs = (n) => "Rs " + n.toLocaleString("en-PK");

/* ================= HERO SHOWCASE ================= */
const HERO_SLIDES = {
  momos: {
    kicker: "Lahore's Favourite Momo Stall",
    title: "Authentic Lahori Momos",
    sub: "Freshly handmade momos inspired by the vibrant streets of Lahore — steamed, fried and finished with our signature chutneys.",
    slang: "“Oye Hoye!”",
    img: "assets/stall-momos.png",
    alt: "Lahori Momo premium food stall",
    bg: "#FFF8F0", accent: "#DFAF2B", dark: false,
  },
  chowmein: {
    kicker: "Wok-Tossed At The Stall",
    title: "Loaded With Flavour",
    sub: "Smoky wok-tossed chowmein, stir-fried on high flame with crunchy vegetables and our secret street-style sauce.",
    slang: "“Slurp Karo!”",
    img: "assets/stall-chowmein.png",
    alt: "Lahori Chowmein premium food stall",
    bg: "#FBE9DD", accent: "#E9782D", dark: false,
  },
  fries: {
    kicker: "Golden. Crispy. Desi.",
    title: "Crispy. Loaded. Irresistible.",
    sub: "Hand-cut golden fries loaded with molten cheese, peri peri dust and dynamite drizzle — happiness in every bite.",
    slang: "“Full Loaded!”",
    img: "assets/stall-fries.png",
    alt: "Special Fries premium food stall",
    bg: "#FCF3D9", accent: "#B14A2D", dark: false,
  },
  pasta: {
    kicker: "Slow-Cooked Comfort",
    title: "Creamy Comfort In Every Bite",
    sub: "Rich alfredo pasta folded in a silky cream sauce, made fresh at the stall — perfect every single time.",
    slang: "“Creamy Kamaal!”",
    img: "assets/stall-pasta.png",
    alt: "Creamy Pasta premium food stall",
    bg: "#EEF1E3", accent: "#667A3E", dark: false,
  },
  drinks: {
    kicker: "Sip · Smile · Refresh",
    title: "Fresh. Chilled. Zinda Dil.",
    sub: "Ice-cold drinks and fresh coolers to balance the masala — the perfect partner for every momo plate.",
    slang: "“Thanda Karo!”",
    img: "assets/stall-drinks.png",
    alt: "Fresh Drinks premium food stall",
    bg: "#FFF3DE", accent: "#DFAF2B", dark: false,
  },
  deals: {
    kicker: "Boxes Made For Sharing",
    title: "Share The Goodness",
    sub: "Solo feast to full party box — curated platters packed with momos, chowmein, fries and drinks. Free delivery above Rs 5,000.",
    slang: "“Party Banao!”",
    img: "assets/stall-deals.png",
    alt: "Family Deals premium food stall",
    bg: "#2D2D2D", accent: "#DFAF2B", dark: true,
  },
};

const hero = document.querySelector(".hero");
const heroTabs = $("heroTabs");
let switching = false;

function setHeroSlide(key) {
  const s = HERO_SLIDES[key];
  if (!s || switching) return;
  switching = true;

  heroTabs.querySelectorAll(".hero-tab").forEach((t) => {
    const active = t.dataset.slide === key;
    t.classList.toggle("active", active);
    t.setAttribute("aria-selected", active);
  });

  const stall = $("heroStall");
  stall.classList.add("switching");
  const copyEls = [$("heroKicker"), $("heroTitle"), $("heroSub"), $("heroSlang")];
  copyEls.forEach((el) => { el.style.opacity = 0; el.style.transform = "translateY(12px)"; });

  setTimeout(() => {
    document.documentElement.style.setProperty("--hero-bg", s.bg);
    document.documentElement.style.setProperty("--accent", s.accent);
    hero.classList.toggle("dark", s.dark);
    document.body.classList.toggle("hero-dark", s.dark);

    $("heroKicker").innerHTML = '<span class="kicker-dot"></span> ' + s.kicker;
    $("heroTitle").textContent = s.title;
    $("heroSub").textContent = s.sub;
    $("heroSlang").textContent = s.slang;
    stall.src = s.img;
    stall.alt = s.alt;

    copyEls.forEach((el) => {
      el.style.transition = "opacity .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1)";
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    stall.classList.remove("switching");
    setTimeout(() => { switching = false; }, 450);
  }, 380);
}

heroTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".hero-tab");
  if (tab) setHeroSlide(tab.dataset.slide);
});

/* ================= MARQUEE ================= */
(function buildMarquee() {
  const words = [
    "Handmade Daily", "اوئے ہوئے", "Steam · Fried · BBQ", "Johar Town, Lahore",
    "Free Delivery Over Rs 5,000", "لاہوری مومو آگے", "Fresh Chutneys", "15.8K Food Lovers",
  ];
  const seq = words
    .map((w) => `<span${/[؀-ۿ]/.test(w) ? ' class="urdu"' : ""}>${w}</span>`)
    .join("");
  $("marqueeTrack").innerHTML = seq + seq;
})();

/* ================= MENU DATA ================= */
const MENU = {
  momos: {
    label: "Lahori Momos",
    items: [
      { id: "steam", name: "Steam Momo", slang: "Ek Dum Mast!", tag: "Soft, juicy & folded fresh — the classic that started it all.", price: 650, unit: "6 pc", badge: "Classic" },
      { id: "panfried", name: "Pan Fried Momo", slang: "Karara Swaad!", tag: "Golden seared base, juicy inside — best of both worlds.", price: 740, unit: "6 pc" },
      { id: "bbq", name: "BBQ Momo", slang: "Dhuandaar!", tag: "Charcoal-kissed momos glazed in smoky BBQ masala.", price: 750, unit: "6 pc" },
      { id: "chilligarlic", name: "Chilli Garlic Momo", slang: "Tez Tarrar!", tag: "Tossed in fiery chilli-garlic oil for real heat lovers.", price: 750, unit: "6 pc" },
      { id: "dynamite", name: "Dynamite Momo", slang: "Boom Boom!", tag: "Creamy, spicy dynamite drizzle over crispy momos.", price: 750, unit: "6 pc" },
      { id: "cheese", name: "Cheese Momo", slang: "Cheezy Scene!", tag: "Molten cheese pull in every single bite.", price: 750, unit: "6 pc" },
      { id: "kurkure", name: "Kurkure Momo", slang: "Karak Crunch!", tag: "Crunchy coated momos — our most viral flavour.", price: 850, unit: "6 pc", badge: "Viral" },
      { id: "afghani", name: "Afghani Momo", slang: "Malai Maar Ke!", tag: "Creamy, smoky Afghani gravy over steamed momos.", price: 800, unit: "6 pc" },
      { id: "corncheese", name: "Corn & Cheese Momo", slang: "Meetha Teekha!", tag: "Sweet corn and gooey cheese in a soft fold.", price: 899, unit: "6 pc" },
      { id: "alfredomomo", name: "Alfredo Momo", slang: "Creamy Kamaal!", tag: "Momos smothered in silky white alfredo sauce.", price: 820, unit: "6 pc" },
      { id: "jhol", name: "Jhol Momo", slang: "Shorba Wala!", tag: "Steamed momos dunked in spicy, tangy jhol broth.", price: 850, unit: "6 pc" },
      { id: "flaminghot", name: "Flaming Hot Momo", slang: "Aag Laga Di!", tag: "Our spiciest — coated in flaming hot masala dust.", price: 850, unit: "6 pc" },
    ],
  },
  special: {
    label: "Special Momos",
    items: [
      { id: "butterchicken", name: "Butter Chicken Momo", slang: "Makhan Bhara!", tag: "Momos drenched in rich, buttery desi gravy.", price: 899, unit: "6 pc", badge: "Special" },
      { id: "lahorispecial", name: "Lahori Special Momo", slang: "Oye Hoye!", tag: "The stall's crown jewel — secret masala, full drama.", price: 999, unit: "6 pc", badge: "Signature" },
    ],
  },
  friespotato: {
    label: "Fries & Potatos",
    items: [
      { id: "frenchfries", name: "French Fries", slang: "Simple Sahi!", tag: "Golden, salty, hand-cut perfection.", price: 599 },
      { id: "periperi", name: "Peri Peri Fries", slang: "Masala Magic!", tag: "Dusted generously in tangy peri peri spice.", price: 650 },
      { id: "dynamitefries", name: "Dynamite Fries", slang: "Boom Boom!", tag: "Drizzled with our creamy dynamite sauce.", price: 699 },
      { id: "loadedfries", name: "Loaded Fries", slang: "Full Loaded!", tag: "Cheese, sauces & toppings — fully loaded, zero regrets.", price: 899, badge: "Loved" },
      { id: "chillipotato", name: "Krispy Chilli Potatos", slang: "Hot & Spicy!", tag: "Krispy hot & spicy chilli potatos — large sharing plate.", price: 760, unit: "Large" },
    ],
  },
  chowpasta: {
    label: "Chowmein & Pasta",
    items: [
      { id: "chowmaniac", name: "Chow Maniac", slang: "Slurp Karo!", tag: "Wok-tossed street-style chowmein, full flame flavour.", price: 850, badge: "Wok Fresh" },
      { id: "alfredopasta", name: "Alfredo Pasta", slang: "Creamy Kamaal!", tag: "Silky white-sauce pasta — large, creamy, comforting.", price: 1050, unit: "Large" },
    ],
  },
  drinks: {
    label: "Cold Drinks",
    items: [
      { id: "drink345", name: "Cold Drink 345 ml", slang: "Thanda Karo!", tag: "Chilled can — the classic momo partner.", price: 100 },
      { id: "drink500", name: "Cold Drink 500 ml", slang: "Thanda Karo!", tag: "Chilled bottle for one.", price: 120 },
      { id: "drink1l", name: "Cold Drink 1 Ltr", slang: "Baant Lo!", tag: "Share-size chilled bottle.", price: 180 },
      { id: "drink15l", name: "Cold Drink 1.5 Ltr", slang: "Party Size!", tag: "Family-size thanda for the whole dawat.", price: 220 },
    ],
  },
  dips: {
    label: "Dips & Chutneys",
    items: [
      { id: "dipdynamite", name: "Dynamite Dip", slang: "Boom Boom!", tag: "Creamy heat in a cup.", price: 100 },
      { id: "dipchillioil", name: "Chilli Oil", slang: "Aag Wala!", tag: "Smoky homemade chilli oil.", price: 100 },
      { id: "dipgarlicmayo", name: "Garlic Mayo", slang: "Smooth Scene!", tag: "Cool, garlicky and creamy.", price: 100 },
      { id: "dipchutney", name: "Momo Chutney", slang: "Asli Cheez!", tag: "Our signature spicy-tangy momo chutney.", price: 100, badge: "Must Try" },
      { id: "dipbbq", name: "BBQ Dip", slang: "Dhuandaar!", tag: "Sweet, smoky barbecue dip.", price: 100 },
    ],
  },
  deals: {
    label: "Deals",
    items: [
      { id: "platter1", name: "Platter 1 — Solo Feast", slang: "Apna Time!", tag: "4 pan fried momo, 4 BBQ momo, 4 cheetos momo, regular chowmein, chilli oil, 300ml drink.", price: 1499 },
      { id: "platter2", name: "Platter 2 — Couple Craving Box", slang: "Do Ka Scene!", tag: "4 pan fried momo, 4 dynamite momo, 4 afghani momo, regular fries, regular alfredo pasta, 500ml drink.", price: 1999 },
      { id: "platter3", name: "Platter 3 — Dosti Deal", slang: "Yaari Zindabad!", tag: "4 cheetos, 4 kurkure, 4 pan fried, 4 alfredo & 4 BBQ momo, large chowmein, small loaded fries, chilli oil.", price: 2999 },
      { id: "platter4", name: "Platter 4 — Party Box", slang: "Party Banao!", tag: "5 butter chicken, 5 alfredo, 5 corn & cheese, 5 cheetos, 6 lahori special momo, large pasta, chowmein, chilli potatos, chilli oil, 1.5L drink.", price: 4999, badge: "Best Value" },
    ],
  },
};

const CATEGORY_THUMBS = {
  momos: "assets/stall-momos.png",
  special: "assets/stall-momos.png",
  friespotato: "assets/stall-fries.png",
  chowpasta: "assets/stall-chowmein.png",
  drinks: "assets/stall-drinks.png",
  dips: "assets/stall-momos.png",
  deals: "assets/stall-deals.png",
};

/* flat item lookup for the cart */
const ITEM_INDEX = {};
Object.entries(MENU).forEach(([catKey, cat]) => {
  cat.items.forEach((it) => { ITEM_INDEX[it.id] = { ...it, category: catKey }; });
});

const plusSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';

/* ================= MENU RENDER ================= */
const menuTabsEl = $("menuTabs");
const menuGridEl = $("menuGrid");

Object.entries(MENU).forEach(([key, cat], i) => {
  const b = document.createElement("button");
  b.className = "menu-tab" + (i === 0 ? " active" : "");
  b.dataset.cat = key;
  b.textContent = cat.label;
  menuTabsEl.appendChild(b);
});

function renderMenu(catKey) {
  const cat = MENU[catKey];
  menuGridEl.innerHTML = cat.items
    .map((it, i) => `
    <article class="menu-card" style="--d:${i * 0.05}s">
      ${it.badge ? `<span class="menu-badge">${it.badge}</span>` : ""}
      <div class="menu-card-top">
        <span class="menu-thumb"><img src="${CATEGORY_THUMBS[catKey]}" alt="" loading="lazy"></span>
        <div>
          <h3 class="menu-name">${it.name}</h3>
          <span class="menu-slang">“${it.slang}”</span>
        </div>
      </div>
      <p class="menu-tagline">${it.tag}</p>
      <div class="menu-foot">
        <span class="menu-price">${rs(it.price)}${it.unit ? `<small>${it.unit}</small>` : ""}</span>
        <button class="add-btn" data-add="${it.id}">${plusSVG} Add</button>
      </div>
    </article>`)
    .join("");
}
renderMenu("momos");

menuTabsEl.addEventListener("click", (e) => {
  const tab = e.target.closest(".menu-tab");
  if (!tab) return;
  menuTabsEl.querySelectorAll(".menu-tab").forEach((t) => t.classList.toggle("active", t === tab));
  renderMenu(tab.dataset.cat);
});

/* ================= BEST SELLERS ================= */
const BEST = ["lahorispecial", "kurkure", "butterchicken", "loadedfries"];
$("bestGrid").innerHTML = BEST
  .map((id, i) => {
    const it = ITEM_INDEX[id];
    return `
    <article class="best-card reveal d${i}">
      <span class="best-glow"></span>
      <span class="best-rank">№ 0${i + 1} — BEST SELLER</span>
      <h3>${it.name}</h3>
      <span class="menu-slang">“${it.slang}”</span>
      <p class="tag">${it.tag}</p>
      <div class="best-foot">
        <span class="best-price">${rs(it.price)}</span>
        <button class="add-btn" data-add="${it.id}">${plusSVG} Add</button>
      </div>
    </article>`;
  })
  .join("");

/* ================= DEALS RENDER ================= */
const DEAL_CHIPS = ["Feeds 1", "Feeds 2", "Feeds 3–4", "Feeds 5+"];
$("dealsGrid").innerHTML = MENU.deals.items
  .map((it, i) => `
  <article class="deal-card reveal d${i} ${it.id === "platter4" ? "featured" : ""}">
    <span class="deal-chip">${DEAL_CHIPS[i]}</span>
    <h3>${it.name.split("—")[1].trim()}</h3>
    <span class="menu-slang">“${it.slang}”</span>
    <ul class="deal-items">${it.tag.split(",").map((x) => `<li>${x.trim()}</li>`).join("")}</ul>
    <div class="deal-foot">
      <span class="deal-price">${rs(it.price)}<small>${it.name.split("—")[0].trim()}</small></span>
      <button class="add-btn" data-add="${it.id}">${plusSVG} Add</button>
    </div>
  </article>`)
  .join("");

/* ================= CART ================= */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("lm-cart") || "{}"); } catch (_) { cart = {}; }
Object.keys(cart).forEach((id) => { if (!ITEM_INDEX[id]) delete cart[id]; });

const cartDrawer = $("cartDrawer");
const cartOverlay = $("cartOverlay");

function saveCart() { localStorage.setItem("lm-cart", JSON.stringify(cart)); }
function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartTotal() { return Object.entries(cart).reduce((sum, [id, qty]) => sum + ITEM_INDEX[id].price * qty, 0); }

function renderCart() {
  const count = cartCount();
  const total = cartTotal();
  $("cartCount").textContent = count;
  $("cartHeadCount").textContent = count + (count === 1 ? " item" : " items");
  $("cartTotal").textContent = rs(total);

  const itemsEl = $("cartItems");
  if (!count) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <span class="big-e">🥟</span>
        <b>Basket khaali hai!</b>
        <p>Add some momos and let's get folding.</p>
      </div>`;
  } else {
    itemsEl.innerHTML = Object.entries(cart)
      .map(([id, qty]) => {
        const it = ITEM_INDEX[id];
        return `
        <div class="cart-item">
          <div class="ci-info">
            <b>${it.name}</b>
            <span>${rs(it.price)}${it.unit ? " · " + it.unit : ""}</span>
          </div>
          <div class="ci-qty">
            <button class="qty-btn" data-dec="${id}" aria-label="Decrease">−</button>
            <b>${qty}</b>
            <button class="qty-btn" data-inc="${id}" aria-label="Increase">+</button>
          </div>
          <button class="ci-remove" data-remove="${id}" aria-label="Remove">✕</button>
        </div>`;
      })
      .join("");
  }

  const fdText = $("fdText");
  const remaining = FREE_DELIVERY - total;
  if (total > 0 && remaining <= 0) {
    fdText.textContent = "🎉 Free delivery unlocked — dhol bajao!";
    fdText.classList.add("done");
  } else {
    fdText.textContent = total > 0
      ? `Add ${rs(remaining)} more for free delivery`
      : `Free delivery on orders above ${rs(FREE_DELIVERY)}`;
    fdText.classList.remove("done");
  }
  $("fdFill").style.width = Math.min(100, (total / FREE_DELIVERY) * 100) + "%";
  saveCart();
}

function addToCart(id, btn) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  $("cartCount").classList.remove("bump");
  requestAnimationFrame(() => $("cartCount").classList.add("bump"));
  showToast(`<b>${ITEM_INDEX[id].name}</b> added — oye hoye!`);
  if (btn) {
    btn.classList.add("added");
    const prev = btn.innerHTML;
    btn.innerHTML = "✓ Added";
    setTimeout(() => { btn.classList.remove("added"); btn.innerHTML = prev; }, 1100);
  }
}

document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add]");
  if (addBtn) { addToCart(addBtn.dataset.add, addBtn); return; }
  const inc = e.target.closest("[data-inc]");
  if (inc) { cart[inc.dataset.inc]++; renderCart(); return; }
  const dec = e.target.closest("[data-dec]");
  if (dec) {
    const id = dec.dataset.dec;
    cart[id]--;
    if (cart[id] <= 0) delete cart[id];
    renderCart();
    return;
  }
  const rem = e.target.closest("[data-remove]");
  if (rem) { delete cart[rem.dataset.remove]; renderCart(); }
});

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
$("cartBtn").addEventListener("click", openCart);
$("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });

/* WhatsApp checkout */
$("checkoutBtn").addEventListener("click", () => {
  if (!cartCount()) { showToast("Basket khaali hai — pehle kuch add karo! 🥟"); return; }
  const lines = Object.entries(cart).map(([id, qty]) => {
    const it = ITEM_INDEX[id];
    return `• ${it.name}${it.unit ? " (" + it.unit + ")" : ""} x${qty} — ${rs(it.price * qty)}`;
  });
  const total = cartTotal();
  const msg = [
    "Assalam o Alaikum, Lahori Momo! 🥟",
    "I would like to place an order:",
    "",
    ...lines,
    "",
    `Subtotal: ${rs(total)}`,
    total >= FREE_DELIVERY ? "✅ Eligible for FREE delivery" : "Delivery: rider charges apply",
    "",
    "Name:",
    "Address:",
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});

/* ================= TOAST ================= */
let toastTimer;
function showToast(html) {
  const t = $("toast");
  t.innerHTML = html;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ================= NAV / UI ================= */
const navbar = $("navbar");
addEventListener("scroll", () => navbar.classList.toggle("scrolled", scrollY > 30), { passive: true });

const hamburger = $("hamburgerBtn");
const mobileMenu = $("mobileMenu");
hamburger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("open");
    document.body.style.overflow = "";
  })
);

/* reveal on scroll */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* gentle parallax on hero stall */
const heroStage = document.querySelector(".hero-stage");
if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
  heroStage.addEventListener("mousemove", (e) => {
    const r = heroStage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    $("heroStall").style.transform = `translate(${x * 14}px, ${y * 10}px)`;
  });
  heroStage.addEventListener("mouseleave", () => { $("heroStall").style.transform = ""; });
}

/* footer year + loader */
$("year").textContent = new Date().getFullYear();
addEventListener("load", () => setTimeout(() => document.body.classList.add("loaded"), 900));
setTimeout(() => document.body.classList.add("loaded"), 3200); // safety net

renderCart();
