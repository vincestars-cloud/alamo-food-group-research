/* ============================================
   ALAMO FOOD SERVICES — App v2
   Professional, no-emoji, dual-login
   ============================================ */
const state = { cart: [], lang: 'en', loggedIn: false, role: null, category: 'all', search: '' };

const products = [
  { id:1, name:'Queso Oaxaca', nameEs:'Queso Oaxaca', cat:'dairy', price:4.25, unit:'/lb', badge:'popular', desc:'Traditional string cheese, perfect for quesadillas and fundido', descEs:'Queso de hebra tradicional, perfecto para quesadillas y fundido' },
  { id:2, name:'Queso Fresco', nameEs:'Queso Fresco', cat:'dairy', price:3.89, unit:'/lb', badge:'', desc:'Fresh crumbling cheese for tacos, elotes, and salads', descEs:'Queso fresco para tacos, elotes y ensaladas' },
  { id:3, name:'Queso Chihuahua', nameEs:'Queso Chihuahua', cat:'dairy', price:5.10, unit:'/lb', badge:'new', desc:'Semi-soft melting cheese, ideal for fundido', descEs:'Queso semi-suave para fundido' },
  { id:4, name:'Crema Mexicana', nameEs:'Crema Mexicana', cat:'dairy', price:3.50, unit:'/qt', badge:'', desc:'Rich Mexican-style table cream', descEs:'Crema mexicana rica para mesa' },
  { id:5, name:'Requesón', nameEs:'Requesón', cat:'dairy', price:4.99, unit:'/lb', badge:'', desc:'Fresh ricotta-style cheese for gorditas', descEs:'Queso fresco tipo ricotta para gorditas' },
  { id:6, name:'Masa Harina — 50lb', nameEs:'Masa Harina — 50lb', cat:'dry', price:12.99, unit:'/bag', badge:'popular', desc:'Premium corn flour for tortillas and tamales', descEs:'Harina de maíz premium para tortillas y tamales' },
  { id:7, name:'Chile Guajillo Seco', nameEs:'Chile Guajillo Seco', cat:'dry', price:8.75, unit:'/lb', badge:'', desc:'Essential dried chile for salsas and adobo', descEs:'Chile seco esencial para salsas y adobo' },
  { id:8, name:'Chile Ancho Seco', nameEs:'Chile Ancho Seco', cat:'dry', price:9.25, unit:'/lb', badge:'', desc:'Rich, mild dried poblano for mole and sauces', descEs:'Poblano seco rico y suave para mole' },
  { id:9, name:'Chile de Árbol', nameEs:'Chile de Árbol', cat:'dry', price:11.50, unit:'/lb', badge:'', desc:'Hot and smoky, essential for table salsa', descEs:'Picante y ahumado, para salsa de mesa' },
  { id:10, name:'Corn Tortillas — Case', nameEs:'Tortillas de Maíz — Caja', cat:'dry', price:18.99, unit:'/case', badge:'popular', desc:'6" white corn, 30 dozen per case', descEs:'6" maíz blanco, 30 docenas por caja' },
  { id:11, name:'Flour Tortillas — Case', nameEs:'Tortillas de Harina — Caja', cat:'dry', price:22.50, unit:'/case', badge:'', desc:'10" flour tortillas, 12 dozen per case', descEs:'10" harina, 12 docenas por caja' },
  { id:12, name:'Tostadas — Case', nameEs:'Tostadas — Caja', cat:'dry', price:14.50, unit:'/case', badge:'', desc:'Crispy corn tostada shells, 200ct', descEs:'Tostadas de maíz crujientes, 200ct' },
  { id:13, name:'Beef Chuck Roll — USDA Choice', nameEs:'Rollo de Res Chuck — USDA Choice', cat:'meat', price:6.89, unit:'/lb', badge:'', desc:'Premium cut, ideal for barbacoa and birria', descEs:'Corte premium, ideal para barbacoa y birria' },
  { id:14, name:'Pork Butt — Bone-In', nameEs:'Pierna de Cerdo — Con Hueso', cat:'meat', price:2.99, unit:'/lb', badge:'sale', desc:'Perfect for carnitas, whole muscle', descEs:'Perfecto para carnitas, músculo entero' },
  { id:15, name:'Chicken Leg Quarters — 40lb', nameEs:'Piernas de Pollo — 40lb', cat:'meat', price:1.29, unit:'/lb', badge:'', desc:'Fresh never frozen, 40lb case', descEs:'Fresco nunca congelado, caja de 40lb' },
  { id:16, name:'Chorizo — Bulk', nameEs:'Chorizo — A Granel', cat:'meat', price:3.75, unit:'/lb', badge:'popular', desc:'Traditional Mexican pork chorizo', descEs:'Chorizo de cerdo mexicano tradicional' },
  { id:17, name:'Tripas de Res', nameEs:'Tripas de Res', cat:'meat', price:3.49, unit:'/lb', badge:'', desc:'Cleaned beef intestines, grill-ready', descEs:'Tripas de res limpias, listas para asar' },
  { id:18, name:'Carne para Tacos — Pre-cut', nameEs:'Carne para Tacos — Pre-cortada', cat:'meat', price:5.49, unit:'/lb', badge:'new', desc:'Thinly sliced beef for tacos al carbon', descEs:'Res en rebanadas finas para tacos al carbón' },
  { id:19, name:'Roma Tomatoes', nameEs:'Tomate Roma', cat:'produce', price:1.49, unit:'/lb', badge:'', desc:'Firm, meaty — ideal for salsa roja', descEs:'Firme, carnoso — ideal para salsa roja' },
  { id:20, name:'Tomatillos', nameEs:'Tomatillos', cat:'produce', price:1.79, unit:'/lb', badge:'', desc:'Fresh with husk, for salsa verde', descEs:'Frescos con cáscara, para salsa verde' },
  { id:21, name:'Jalapeños', nameEs:'Jalapeños', cat:'produce', price:1.29, unit:'/lb', badge:'', desc:'Fresh green jalapeños, medium heat', descEs:'Jalapeños verdes frescos, picor medio' },
  { id:22, name:'Serrano Peppers', nameEs:'Chile Serrano', cat:'produce', price:1.99, unit:'/lb', badge:'', desc:'Hot and bright, essential for salsas', descEs:'Picante y brillante, esencial para salsas' },
  { id:23, name:'Avocados Hass — Case 48ct', nameEs:'Aguacates Hass — Caja 48ct', cat:'produce', price:42.00, unit:'/case', badge:'popular', desc:'Mexico origin, restaurant grade', descEs:'Origen México, grado restaurante' },
  { id:24, name:'White Onions — 50lb', nameEs:'Cebolla Blanca — 50lb', cat:'produce', price:18.99, unit:'/bag', badge:'', desc:'Jumbo white onions, restaurant staple', descEs:'Cebolla blanca jumbo, básico de restaurante' },
  { id:25, name:'Cilantro — 30 Bunch Case', nameEs:'Cilantro — Caja 30 Manojos', cat:'produce', price:14.99, unit:'/case', badge:'', desc:'Fresh bunched cilantro', descEs:'Cilantro fresco en manojos' },
  { id:26, name:'Limes — Case', nameEs:'Limones — Caja', cat:'produce', price:28.00, unit:'/case', badge:'', desc:'Mexican key limes, 200ct case', descEs:'Limones mexicanos, caja 200ct' },
  { id:27, name:'Vegetable Oil — 35lb', nameEs:'Aceite Vegetal — 35lb', cat:'supplies', price:24.99, unit:'/jug', badge:'', desc:'High-heat frying oil, restaurant grade', descEs:'Aceite para freír, grado restaurante' },
  { id:28, name:'To-Go Containers — 500ct', nameEs:'Contenedores Para Llevar — 500ct', cat:'supplies', price:38.50, unit:'/case', badge:'', desc:'3-compartment foam, hinged lid', descEs:'3 compartimentos, tapa con bisagra' },
  { id:29, name:'Aluminum Foil Heavy — 1000ft', nameEs:'Papel Aluminio — 1000ft', cat:'supplies', price:42.00, unit:'/roll', badge:'', desc:'18" x 1000ft heavy duty', descEs:'18" x 1000ft uso pesado' },
  { id:30, name:'Nitrile Gloves — 100ct', nameEs:'Guantes de Nitrilo — 100ct', cat:'supplies', price:9.49, unit:'/box', badge:'', desc:'Powder-free, food service grade', descEs:'Sin polvo, grado alimentario' },
];

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartCount();
  setupScroll();
  setupNav();
});

function setupScroll() {
  const h = document.querySelector('.header');
  window.addEventListener('scroll', () => h?.classList.toggle('scrolled', window.scrollY > 40));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function setupNav() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const t = el.dataset.nav;
      if (t === 'login') showLogin();
      else goTo(t);
      closeMobile();
    });
  });
}

function goTo(id) {
  showSite();
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50);
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.nav === id));
}

function showSite() {
  document.getElementById('main-site').style.display = '';
  document.getElementById('page-login').classList.remove('active');
  document.getElementById('page-dash').classList.remove('active');
  document.querySelector('.header').style.display = '';
}

function showLogin() {
  document.getElementById('main-site').style.display = 'none';
  document.querySelector('.header').style.display = 'none';
  document.getElementById('page-dash').classList.remove('active');
  document.getElementById('page-login').classList.add('active');
  window.scrollTo(0,0);
}

function showDash() {
  document.getElementById('main-site').style.display = 'none';
  document.querySelector('.header').style.display = 'none';
  document.getElementById('page-login').classList.remove('active');
  document.getElementById('page-dash').classList.add('active');
  renderDashboard();
  window.scrollTo(0,0);
}

function handleLogin(e) {
  e.preventDefault();
  const activeTab = document.querySelector('.login-tab.active');
  state.role = activeTab?.dataset.role || 'customer';
  state.loggedIn = true;
  showDash();
  renderProducts(); // re-render with prices visible & add-to-cart
}

function setLoginTab(role) {
  document.querySelectorAll('.login-tab').forEach(t => t.classList.toggle('active', t.dataset.role === role));
  const demoBox = document.getElementById('demo-creds');
  if (role === 'owner') {
    demoBox.innerHTML = '<strong>Owner Demo</strong> — Email: owner@alamo.com / Password: demo';
  } else {
    demoBox.innerHTML = '<strong>Customer Demo</strong> — Email: demo@restaurant.com / Password: demo';
  }
}

function logout() {
  state.loggedIn = false; state.role = null;
  showSite();
  renderProducts();
  window.scrollTo(0,0);
}

// ── Products ──
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  let list = products;
  if (state.category !== 'all') list = list.filter(p => p.cat === state.category);
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.nameEs.toLowerCase().includes(q));
  }
  if (!list.length) {
    grid.innerHTML = '<div class="products-empty"><p>No products found. Try a different search or category.</p></div>';
    return;
  }
  grid.innerHTML = list.map(p => `
    <div class="product-card reveal visible">
      <div class="p-img">${p.badge ? `<span class="p-badge badge-${p.badge}">${p.badge}</span>` : ''}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      </div>
      <div class="p-body">
        <div class="p-cat">${p.cat}</div>
        <div class="p-name">${state.lang === 'es' ? p.nameEs : p.name}</div>
        <div class="p-desc">${state.lang === 'es' ? p.descEs : p.desc}</div>
        <div class="p-foot">
          ${state.loggedIn
            ? `<div class="p-price">$${p.price.toFixed(2)} <span class="p-unit">${p.unit}</span></div>
               <button class="p-add" onclick="addToCart(${p.id})">+</button>`
            : `<div class="p-locked">Sign in for pricing</div>
               <button class="btn btn-sm btn-outline" onclick="showLogin()">Sign In</button>`
          }
        </div>
      </div>
    </div>
  `).join('');
}

function filterCat(cat) {
  state.category = cat;
  document.querySelectorAll('.catalog-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
  renderProducts();
}

function searchProducts(val) {
  state.search = val;
  renderProducts();
}

// ── Cart ──
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const existing = state.cart.find(i => i.id === id);
  if (existing) existing.qty++; else state.cart.push({ ...p, qty: 1 });
  updateCartCount();
  openCart();
}

function removeFromCart(id) { state.cart = state.cart.filter(i => i.id !== id); updateCartCount(); renderCart(); }

function updateQty(id, d) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) { removeFromCart(id); return; }
  updateCartCount(); renderCart();
}

function updateCartCount() {
  const c = state.cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => { el.textContent = c; el.style.display = c > 0 ? 'flex' : 'none'; });
}

function renderCart() {
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (!body) return;
  if (!state.cart.length) {
    body.innerHTML = `<div class="cart-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><p>Your cart is empty</p></div>`;
    footer.style.display = 'none'; return;
  }
  footer.style.display = '';
  body.innerHTML = state.cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-img"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/></svg></div>
      <div class="cart-item-info">
        <div class="ci-name">${state.lang === 'es' ? i.nameEs : i.name}</div>
        <div class="ci-meta">${i.unit}</div>
        <div class="ci-price">$${(i.price * i.qty).toFixed(2)}</div>
        <div class="cart-qty"><button onclick="updateQty(${i.id},-1)">-</button><span>${i.qty}</span><button onclick="updateQty(${i.id},1)">+</button></div>
        <div class="cart-remove" onclick="removeFromCart(${i.id})">Remove</div>
      </div>
    </div>
  `).join('');
  const sub = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cart-sub').textContent = `$${sub.toFixed(2)}`;
  document.getElementById('cart-total').textContent = `$${sub.toFixed(2)}`;
}

function openCart() { renderCart(); document.getElementById('cart-drawer').classList.add('open'); document.getElementById('overlay').classList.add('active'); }
function closeCart() { document.getElementById('cart-drawer').classList.remove('open'); document.getElementById('overlay').classList.remove('active'); }

function requestQuote() {
  alert(`Quote requested for ${state.cart.length} item(s). We'll contact you shortly.`);
  state.cart = []; updateCartCount(); closeCart();
}

// ── Language ──
function setLang(l) {
  state.lang = l;
  document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderProducts();
}

// ── Mobile ──
function openMobile() { document.getElementById('mobile-menu').classList.add('open'); document.getElementById('overlay').classList.add('active'); }
function closeMobile() { document.getElementById('mobile-menu').classList.remove('open'); document.getElementById('overlay').classList.remove('active'); }

// ── Dashboard ──
function renderDashboard() {
  const el = document.getElementById('dash-content');
  if (state.role === 'owner') {
    el.innerHTML = `
      <div class="dash-welcome"><h2>Alamo Food Group — Operations Dashboard</h2><p>Business overview for May 2026</p></div>
      <div class="stat-cards">
        <div class="stat-card"><div class="sc-label">Monthly Revenue</div><div class="sc-value">$978,436</div><div class="sc-change sc-up">+8.2% vs April</div></div>
        <div class="stat-card"><div class="sc-label">External Revenue</div><div class="sc-value">$81,373</div><div class="sc-change sc-neutral">8.3% of total</div></div>
        <div class="stat-card"><div class="sc-label">Active Accounts</div><div class="sc-value">27</div><div class="sc-change sc-up">+2 new this month</div></div>
        <div class="stat-card"><div class="sc-label">OTIF Rate</div><div class="sc-value">96.4%</div><div class="sc-change sc-up">Above 95% target</div></div>
      </div>
      <div class="owner-kpi">
        <div class="kpi-card"><div class="kpi-label">Avg Order Value</div><div class="kpi-value" style="color:var(--green-dark)">$2,847</div><div class="kpi-sub">+12% vs Q1 avg</div></div>
        <div class="kpi-card"><div class="kpi-label">Gross Margin</div><div class="kpi-value" style="color:var(--green-dark)">23.1%</div><div class="kpi-sub">Target: 22-25%</div></div>
        <div class="kpi-card"><div class="kpi-label">AR Outstanding</div><div class="kpi-value" style="color:var(--gold)">$42,180</div><div class="kpi-sub">$8,400 past 15 days</div></div>
      </div>
      <div class="dash-grid">
        <div>
          <div class="dash-panel">
            <h4>Top Accounts — March 2026</h4>
            <table class="customer-table">
              <thead><tr><th>Account</th><th>Revenue</th><th>% Total</th><th>Type</th><th>Health</th></tr></thead>
              <tbody>
                <tr><td>Hacienda B&G McDonough</td><td>$115,011</td><td>11.8%</td><td>Internal</td><td><span class="health-dot dot-green"></span>Good</td></tr>
                <tr><td>The Grove Taqueria</td><td>$76,854</td><td>7.9%</td><td>Internal</td><td><span class="health-dot dot-green"></span>Good</td></tr>
                <tr><td>Zokalo Collage Park</td><td>$76,787</td><td>7.8%</td><td>TBD</td><td><span class="health-dot dot-yellow"></span>Review</td></tr>
                <tr><td>Los Mariachis Fairburn</td><td>$61,966</td><td>6.3%</td><td>External</td><td><span class="health-dot dot-green"></span>Good</td></tr>
                <tr><td>Hacienda B&G Buford</td><td>$59,935</td><td>6.1%</td><td>Internal</td><td><span class="health-dot dot-green"></span>Good</td></tr>
                <tr><td>Hacienda B&G Dahlonega</td><td>$52,970</td><td>5.4%</td><td>Internal</td><td><span class="health-dot dot-green"></span>Good</td></tr>
                <tr><td>Hacienda B&G Suwanee</td><td>$52,071</td><td>5.3%</td><td>Internal</td><td><span class="health-dot dot-green"></span>Good</td></tr>
                <tr><td>Zokalo Newnan</td><td>$46,609</td><td>4.8%</td><td>TBD</td><td><span class="health-dot dot-yellow"></span>Review</td></tr>
                <tr><td>Hacienda Taqueria Lawrenceville</td><td>$42,075</td><td>4.3%</td><td>Internal</td><td><span class="health-dot dot-green"></span>Good</td></tr>
                <tr><td>Fuego & Mar Restaurant</td><td>$35,127</td><td>3.6%</td><td>TBD</td><td><span class="health-dot dot-green"></span>Good</td></tr>
              </tbody>
            </table>
          </div>
          <div class="dash-panel">
            <h4>Fleet & Operations</h4>
            <div class="d-row"><div><strong>Trucks Active</strong></div><div>2 / 2</div></div>
            <div class="d-row"><div><strong>Deliveries This Week</strong></div><div>38</div></div>
            <div class="d-row"><div><strong>Avg Delivery Time</strong></div><div>2.4 hrs from order</div></div>
            <div class="d-row"><div><strong>Fill Rate (30d)</strong></div><div>98.7%</div></div>
            <div class="d-row"><div><strong>Short-Ships (30d)</strong></div><div style="color:var(--red)">3 incidents</div></div>
          </div>
        </div>
        <div>
          <div class="dash-panel">
            <h4>Revenue Split</h4>
            <div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px"><span>Internal (Hacienda)</span><span style="font-weight:700">56.1%</span></div><div class="progress-bar"><div class="fill fill-green" style="width:56.1%"></div></div></div>
            <div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px"><span>TBD Status</span><span style="font-weight:700">31.3%</span></div><div class="progress-bar"><div class="fill fill-gold" style="width:31.3%"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px"><span>External</span><span style="font-weight:700">8.3%</span></div><div class="progress-bar"><div class="fill fill-red" style="width:8.3%"></div></div></div>
            <p style="font-size:0.78rem;color:var(--gray-400);margin-top:16px;border-top:1px solid var(--gray-100);padding-top:12px">Goal: Grow external to 25% within 12 months</p>
          </div>
          <div class="dash-panel">
            <h4>Top SKUs by Volume</h4>
            <div class="d-row"><div>Corn Tortillas</div><div style="font-weight:600">2,400 cases/mo</div></div>
            <div class="d-row"><div>Queso Oaxaca</div><div style="font-weight:600">1,800 lbs/mo</div></div>
            <div class="d-row"><div>Pork Butt</div><div style="font-weight:600">3,200 lbs/mo</div></div>
            <div class="d-row"><div>Avocados Hass</div><div style="font-weight:600">120 cases/mo</div></div>
            <div class="d-row"><div>Chorizo</div><div style="font-weight:600">960 lbs/mo</div></div>
          </div>
          <div class="dash-panel">
            <h4>Alerts</h4>
            <div class="d-row" style="color:var(--red)"><div><strong>AR Past Due</strong> — Santa Maria Restaurant</div><div>$14,715</div></div>
            <div class="d-row" style="color:var(--gold)"><div><strong>Low Stock</strong> — Chile Guajillo</div><div>28 lbs remaining</div></div>
            <div class="d-row" style="color:var(--gold)"><div><strong>Truck B</strong> — Service due May 15</div><div>Scheduled</div></div>
          </div>
        </div>
      </div>`;
  } else {
    el.innerHTML = `
      <div class="dash-welcome"><h2>Welcome back, Taqueria El Sol</h2><p>Your account overview for May 2026</p></div>
      <div class="stat-cards">
        <div class="stat-card"><div class="sc-label">Monthly Spend</div><div class="sc-value">$8,420</div><div class="sc-change sc-up">+12% vs last month</div></div>
        <div class="stat-card"><div class="sc-label">Orders This Month</div><div class="sc-value">14</div><div class="sc-change sc-up">+3 more than April</div></div>
        <div class="stat-card"><div class="sc-label">On-Time Delivery</div><div class="sc-value" style="color:var(--green)">98.2%</div><div class="sc-change sc-up">Above 95% target</div></div>
        <div class="stat-card"><div class="sc-label">Account Balance</div><div class="sc-value">$1,240</div><div class="sc-change sc-neutral">Due May 15, 2026</div></div>
      </div>
      <div class="dash-grid">
        <div>
          <div class="dash-panel">
            <h4>Recent Orders</h4>
            <div class="d-row"><div><strong>#ALM-2847</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">May 8 — 12 items</span></div><div style="text-align:right">$642.30<br><span class="d-status st-delivered">Delivered</span></div></div>
            <div class="d-row"><div><strong>#ALM-2839</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">May 5 — 8 items</span></div><div style="text-align:right">$418.75<br><span class="d-status st-delivered">Delivered</span></div></div>
            <div class="d-row"><div><strong>#ALM-2831</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">May 2 — 15 items</span></div><div style="text-align:right">$891.20<br><span class="d-status st-delivered">Delivered</span></div></div>
            <div class="d-row"><div><strong>#ALM-2825</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">Apr 29 — 10 items</span></div><div style="text-align:right">$567.50<br><span class="d-status st-transit">In Transit</span></div></div>
          </div>
          <div class="dash-panel">
            <h4>Quick Reorder — Your Usual</h4>
            <p style="font-size:0.82rem;color:var(--gray-400);margin-bottom:14px">Based on your last 6 orders. One click to reorder.</p>
            <div class="reorder-grid">
              <div class="reorder-item"><span>Queso Oaxaca 10lb</span><span class="ri-price">$42.50</span></div>
              <div class="reorder-item"><span>Corn Tortillas x2</span><span class="ri-price">$37.98</span></div>
              <div class="reorder-item"><span>Pork Butt 30lb</span><span class="ri-price">$89.70</span></div>
              <div class="reorder-item"><span>Chile Guajillo 4lb</span><span class="ri-price">$35.00</span></div>
              <div class="reorder-item"><span>Avocados 1 case</span><span class="ri-price">$42.00</span></div>
              <div class="reorder-item"><span>Roma Tomatoes 25lb</span><span class="ri-price">$37.25</span></div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--gray-100)">
              <div style="font-weight:700">Est. Total: <span style="color:var(--green-dark)">$284.43</span></div>
              <button class="btn btn-primary btn-sm" onclick="alert('Order placed! Delivery scheduled for tomorrow morning.')">Reorder for Tomorrow</button>
            </div>
          </div>
        </div>
        <div>
          <div class="dash-panel">
            <h4>Your Top Products</h4>
            <div class="d-row"><div>Queso Oaxaca</div><div style="font-weight:600">42 lbs/mo</div></div>
            <div class="d-row"><div>Corn Tortillas</div><div style="font-weight:600">8 cases/mo</div></div>
            <div class="d-row"><div>Pork Butt</div><div style="font-weight:600">120 lbs/mo</div></div>
            <div class="d-row"><div>Chile Guajillo</div><div style="font-weight:600">15 lbs/mo</div></div>
            <div class="d-row"><div>Avocados Hass</div><div style="font-weight:600">4 cases/mo</div></div>
          </div>
          <div class="dash-panel">
            <h4>Account Health</h4>
            <div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:3px"><span>Order Fill Rate</span><span style="font-weight:700;color:var(--green)">99.1%</span></div><div class="progress-bar"><div class="fill fill-green" style="width:99.1%"></div></div></div>
            <div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:3px"><span>On-Time Delivery</span><span style="font-weight:700;color:var(--green)">98.2%</span></div><div class="progress-bar"><div class="fill fill-green" style="width:98.2%"></div></div></div>
            <div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:3px"><span>Payment Score</span><span style="font-weight:700;color:var(--green)">A+</span></div><div class="progress-bar"><div class="fill fill-green" style="width:100%"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:3px"><span>Credit Limit Used</span><span style="font-weight:700">24%</span></div><div class="progress-bar"><div class="fill fill-gold" style="width:24%"></div></div></div>
          </div>
        </div>
      </div>`;
  }
}

function handleContact(e) {
  e.preventDefault();
  alert('Thank you! We\'ll be in touch within 24 hours.');
  e.target.reset();
}
