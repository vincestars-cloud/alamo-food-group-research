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
            : `<div class="p-locked">${i18n[state.lang]?.['p.locked'] || 'Sign in for pricing'}</div>
               <button class="btn btn-sm btn-outline" onclick="showLogin()">${i18n[state.lang]?.['nav.signin'] || 'Sign In'}</button>`
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
    body.innerHTML = `<div class="cart-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><p>${i18n[state.lang]?.['cart.empty'] || 'Your cart is empty'}</p></div>`;
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
        <div class="cart-remove" onclick="removeFromCart(${i.id})">${i18n[state.lang]?.['cart.remove'] || 'Remove'}</div>
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
// ── Translations ──
const i18n = {
  en: {
    'hero.kicker': 'RESTAURANT-QUALITY PRODUCTS AT WAREHOUSE PRICING',
    'hero.h1': 'More Than a Distributor.<br><span>We\'re Your Partner.</span>',
    'hero.desc': 'Built by restauranteros, for restauranteros. We supply 16+ restaurants of our own — so we know exactly what your kitchen needs. No contracts. No minimums. Just honest service.',
    'hero.cta1': 'Browse Products',
    'hero.cta2': 'Become a Customer',
    'hero.s1': 'Products', 'hero.s2': 'Restaurants Served', 'hero.s3': 'Years in Atlanta',
    'savings.text': '<span>How much could you save?</span> Send us your current invoice — we\'ll show you the difference.',
    'savings.cta1': 'Send Your Invoice', 'savings.cta2': 'Call for Price Match',
    'v1.h': 'Restauranteros Helping Restauranteros', 'v1.p': 'We own 16+ restaurants. We\'ve lived your challenges.',
    'v2.h': 'Best Price. Best Quality.', 'v2.p': 'Volume pricing passed directly to you. No hidden fees.',
    'v3.h': 'Reliable Delivery. Real People.', 'v3.p': 'We answer the phone and show up on time. Every time.',
    'v4.h': 'No Contracts. No Minimums.', 'v4.p': 'We earn your business every delivery, not with fine print.',
    'about.kicker': 'Our Story',
    'about.h2': 'It Started in the Kitchen.<br>It Started Out of Necessity.',
    'about.p1': 'In 2021, during the pandemic, our founder saw firsthand how hard it was for restaurants to get the products they needed — on time and at a fair price.',
    'about.p2': 'So he started Alamo Food Services as a mission to help fellow restauranteros survive and thrive. What began as supply for our own restaurants quickly grew as other owners asked for the same help.',
    'about.p3': 'Today, we serve restaurants, food trucks, schools, and businesses across the Southeast with quality products at the best prices.',
    'catalog.kicker': 'Wholesale Catalog', 'catalog.h2': 'Product Catalog',
    'catalog.p': 'Restaurant-grade ingredients at wholesale prices. Sign in to see pricing and place orders.',
    'catalog.search': 'Search products...', 'catalog.all': 'All', 'catalog.dairy': 'Dairy & Cheese', 'catalog.meat': 'Meat & Protein', 'catalog.produce': 'Fresh Produce', 'catalog.dry': 'Dry Goods', 'catalog.supplies': 'Supplies',
    'services.kicker': 'What Makes Us Different', 'services.h2': 'Why Alamo?', 'services.p': 'We\'re not Sysco. We\'re not Restaurant Depot. Here\'s why that matters.',
    's1.h': 'We Own 16+ Restaurants', 's1.p': 'We don\'t just supply food — we serve it. We know exactly what your kitchen needs because we run ours every day.',
    's2.h': 'Order by Text — In Spanish', 's2.p': 'Text us your order in Spanish and we\'ll confirm, price, and deliver. No portal required, no language barrier.',
    's3.h': 'Authentic Mexican Products', 's3.p': 'The real brands and ingredients your kitchen depends on — from dried chiles to fresh queso oaxaca. Not generic substitutes.',
    's4.h': 'Reliable Next-Day Delivery', 's4.p': 'Complete. On time. Every time. No shorts, no substitutions without calling you first.',
    's5.h': 'Transparent Pricing', 's5.p': 'No hidden fees. No price creep. No surprises on your invoice. What we quote is what you pay.',
    's6.h': 'No Contracts. No Minimums.', 's6.p': 'Order what you need, when you need it. We earn your business every delivery — not with a contract.',
    'mp.kicker': 'Coming Soon', 'mp.h2': 'Hacienda Marketplace', 'mp.p': 'Wholesale prices. Open to the public. A one-stop shop for families, restaurants, and businesses — with a Mexican restaurant on-site.',
    'mp.c1': 'Warehouse shopping', 'mp.c2': 'Mexican restaurant', 'mp.c3': 'Wholesale prices', 'mp.c4': 'Open to the public',
    'test.kicker': 'Trusted by Restaurants', 'test.h2': 'What Our Customers Say',
    'careers.kicker': 'Join Our Team', 'careers.h2': 'Build Your Career at Alamo', 'careers.p': 'We\'re growing and looking for hard-working people who want to be part of something bigger.',
    'cta.h2': 'Ready to Save on Your Food Costs?', 'cta.p': 'Join the growing family of restaurants that trust Alamo. No contracts, no minimums, just honest service.', 'cta.btn1': 'Become a Customer', 'cta.btn2': 'Call 678-243-0503',
    'contact.kicker': 'Let\'s Talk', 'contact.h2': 'Get In Touch', 'contact.p': 'Ready to become a customer? Questions about pricing? We\'d love to hear from you.',
    'contact.submit': 'Submit Inquiry',
    'nav.home': 'Home', 'nav.products': 'Products', 'nav.about': 'About', 'nav.services': 'Why Alamo', 'nav.careers': 'Careers', 'nav.contact': 'Contact', 'nav.signin': 'Sign In',
    'footer.tagline': 'Your partner in food and success. Built by restauranteros, for restauranteros. De familia a familia.',
    'p.locked': 'Sign in for pricing',
    'cart.title': 'Your Order', 'cart.empty': 'Your cart is empty', 'cart.sub': 'Subtotal', 'cart.delivery': 'Delivery', 'cart.free': 'FREE', 'cart.total': 'Estimated Total', 'cart.checkout': 'Request Quote', 'cart.remove': 'Remove',
    'login.h2': 'Sign In', 'login.sub': 'Access your account to view pricing, place orders, and manage deliveries.', 'login.customer': 'Customer', 'login.admin': 'Alamo Admin', 'login.email': 'Email', 'login.password': 'Password', 'login.submit': 'Sign In', 'login.back': 'Back to Website',
    'we.serve': 'We Serve', 'perks.h': 'Why Work at Alamo', 'dash.logout': 'Log Out',
  },
  es: {
    'hero.kicker': 'PRODUCTOS DE CALIDAD RESTAURANTERA A PRECIOS DE MAYOREO',
    'hero.h1': 'Más Que un Distribuidor.<br><span>Somos Tu Socio.</span>',
    'hero.desc': 'Hecho por restauranteros, para restauranteros. Surtimos más de 16 restaurantes propios — así que sabemos exactamente lo que tu cocina necesita. Sin contratos. Sin mínimos. Solo servicio honesto.',
    'hero.cta1': 'Ver Productos',
    'hero.cta2': 'Hazte Cliente',
    'hero.s1': 'Productos', 'hero.s2': 'Restaurantes Servidos', 'hero.s3': 'Años en Atlanta',
    'savings.text': '<span>¿Cuánto podrías ahorrar?</span> Envíanos tu factura actual — te mostraremos la diferencia.',
    'savings.cta1': 'Enviar Factura', 'savings.cta2': 'Llamar para Cotización',
    'v1.h': 'Restauranteros Ayudando Restauranteros', 'v1.p': 'Somos dueños de 16+ restaurantes. Hemos vivido tus retos.',
    'v2.h': 'Mejor Precio. Mejor Calidad.', 'v2.p': 'Precios de volumen directo para ti. Sin cargos ocultos.',
    'v3.h': 'Entrega Confiable. Gente Real.', 'v3.p': 'Contestamos el teléfono y llegamos a tiempo. Siempre.',
    'v4.h': 'Sin Contratos. Sin Mínimos.', 'v4.p': 'Nos ganamos tu negocio en cada entrega, no con letra chica.',
    'about.kicker': 'Nuestra Historia',
    'about.h2': 'Empezó en la Cocina.<br>Empezó por Necesidad.',
    'about.p1': 'En 2021, durante la pandemia, nuestro fundador vio de primera mano lo difícil que era para los restaurantes conseguir los productos que necesitaban — a tiempo y a precio justo.',
    'about.p2': 'Así que empezó Alamo Food Services como una misión para ayudar a otros restauranteros a sobrevivir y prosperar. Lo que empezó como suministro para nuestros propios restaurantes creció rápidamente cuando otros dueños pidieron la misma ayuda.',
    'about.p3': 'Hoy, servimos a restaurantes, food trucks, escuelas y negocios en todo el sureste con productos de calidad a los mejores precios.',
    'catalog.kicker': 'Catálogo Mayoreo', 'catalog.h2': 'Catálogo de Productos',
    'catalog.p': 'Ingredientes de calidad restaurantera a precios de mayoreo. Inicia sesión para ver precios y hacer pedidos.',
    'catalog.search': 'Buscar productos...', 'catalog.all': 'Todos', 'catalog.dairy': 'Lácteos y Quesos', 'catalog.meat': 'Carnes y Proteína', 'catalog.produce': 'Productos Frescos', 'catalog.dry': 'Abarrotes', 'catalog.supplies': 'Suministros',
    'services.kicker': 'Lo Que Nos Hace Diferentes', 'services.h2': '¿Por Qué Alamo?', 'services.p': 'No somos Sysco. No somos Restaurant Depot. Esto es lo que importa.',
    's1.h': 'Somos Dueños de 16+ Restaurantes', 's1.p': 'No solo surtimos comida — la servimos. Sabemos exactamente lo que tu cocina necesita porque manejamos las nuestras todos los días.',
    's2.h': 'Ordena por Texto — En Español', 's2.p': 'Envíanos tu pedido por texto en español y confirmamos, cotizamos y entregamos. Sin portal, sin barrera de idioma.',
    's3.h': 'Productos Mexicanos Auténticos', 's3.p': 'Las marcas e ingredientes reales que tu cocina necesita — desde chiles secos hasta queso oaxaca fresco. No sustitutos genéricos.',
    's4.h': 'Entrega Confiable al Día Siguiente', 's4.p': 'Completo. A tiempo. Siempre. Sin faltantes, sin sustituciones sin avisarte primero.',
    's5.h': 'Precios Transparentes', 's5.p': 'Sin cargos ocultos. Sin aumentos sorpresa. Sin sorpresas en tu factura. Lo que cotizamos es lo que pagas.',
    's6.h': 'Sin Contratos. Sin Mínimos.', 's6.p': 'Ordena lo que necesites, cuando lo necesites. Nos ganamos tu negocio en cada entrega — no con un contrato.',
    'mp.kicker': 'Próximamente', 'mp.h2': 'Hacienda Marketplace', 'mp.p': 'Precios de mayoreo. Abierto al público. Una tienda completa para familias, restaurantes y negocios — con restaurante mexicano en sitio.',
    'mp.c1': 'Compras en almacén', 'mp.c2': 'Restaurante mexicano', 'mp.c3': 'Precios de mayoreo', 'mp.c4': 'Abierto al público',
    'test.kicker': 'Confianza de Restaurantes', 'test.h2': 'Lo Que Dicen Nuestros Clientes',
    'careers.kicker': 'Únete al Equipo', 'careers.h2': 'Construye Tu Carrera en Alamo', 'careers.p': 'Estamos creciendo y buscando gente trabajadora que quiera ser parte de algo más grande.',
    'cta.h2': '¿Listo Para Ahorrar en Tus Costos de Alimentos?', 'cta.p': 'Únete a la familia creciente de restaurantes que confían en Alamo. Sin contratos, sin mínimos, solo servicio honesto.', 'cta.btn1': 'Hazte Cliente', 'cta.btn2': 'Llama al 678-243-0503',
    'contact.kicker': 'Hablemos', 'contact.h2': 'Contáctanos', 'contact.p': '¿Listo para ser cliente? ¿Preguntas sobre precios? Nos encantaría saber de ti.',
    'contact.submit': 'Enviar Consulta',
    'nav.home': 'Inicio', 'nav.products': 'Productos', 'nav.about': 'Nosotros', 'nav.services': 'Por Qué Alamo', 'nav.careers': 'Carreras', 'nav.contact': 'Contacto', 'nav.signin': 'Iniciar Sesión',
    'footer.tagline': 'Tu socio en alimentos y éxito. Hecho por restauranteros, para restauranteros. De familia a familia.',
    'p.locked': 'Inicia sesión para ver precios',
    'cart.title': 'Tu Pedido', 'cart.empty': 'Tu carrito está vacío', 'cart.sub': 'Subtotal', 'cart.delivery': 'Entrega', 'cart.free': 'GRATIS', 'cart.total': 'Total Estimado', 'cart.checkout': 'Solicitar Cotización', 'cart.remove': 'Eliminar',
    'login.h2': 'Iniciar Sesión', 'login.sub': 'Accede a tu cuenta para ver precios, hacer pedidos y rastrear entregas.', 'login.customer': 'Cliente', 'login.admin': 'Admin Alamo', 'login.email': 'Correo Electrónico', 'login.password': 'Contraseña', 'login.submit': 'Iniciar Sesión', 'login.back': 'Volver al Sitio',
    'we.serve': 'Servimos A', 'perks.h': 'Por Qué Trabajar en Alamo', 'dash.logout': 'Cerrar Sesión',
  }
};

// Quick translate helper for dashboard inline text
function T(en, es) { return state.lang === 'es' ? es : en; }

function setLang(l) {
  state.lang = l;
  // Update ALL lang toggles on every page (header, login, dashboard)
  document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[l]?.[key];
    if (val) el.innerHTML = val;
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = i18n[l]?.[key];
    if (val) el.placeholder = val;
  });
  renderProducts();
  renderCart();
  // Re-render dashboard if it's active
  if (document.getElementById('page-dash')?.classList.contains('active')) {
    renderDashboard();
  }
  // Update login page demo creds text
  const demoCreds = document.getElementById('demo-creds');
  if (demoCreds) {
    const activeTab = document.querySelector('.login-tab.active');
    const role = activeTab?.dataset.role || 'customer';
    if (role === 'owner') {
      demoCreds.innerHTML = l === 'es'
        ? '<strong>Demo Admin</strong> — Correo: owner@alamo.com / Contraseña: demo'
        : '<strong>Owner Demo</strong> — Email: owner@alamo.com / Password: demo';
    } else {
      demoCreds.innerHTML = l === 'es'
        ? '<strong>Demo Cliente</strong> — Correo: demo@restaurant.com / Contraseña: demo'
        : '<strong>Customer Demo</strong> — Email: demo@restaurant.com / Password: demo';
    }
  }
}

// ── Mobile ──
function openMobile() { document.getElementById('mobile-menu').classList.add('open'); document.getElementById('overlay').classList.add('active'); }
function closeMobile() { document.getElementById('mobile-menu').classList.remove('open'); document.getElementById('overlay').classList.remove('active'); }

// ── Dashboard ──
let dashTab = 'overview';

function setDashTab(tab) {
  dashTab = tab;
  document.querySelectorAll('.dash-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  renderDashboard();
}

function renderDashboard() {
  const el = document.getElementById('dash-content');
  // Set up tabs based on role
  const tabBar = document.getElementById('dash-tabs');
  if (tabBar) {
    if (state.role === 'owner') {
      tabBar.innerHTML = `
        <button class="dash-tab${dashTab==='overview'?' active':''}" data-tab="overview" onclick="setDashTab('overview')">${T('Overview','General')}</button>
        <button class="dash-tab${dashTab==='customers'?' active':''}" data-tab="customers" onclick="setDashTab('customers')">${T('Customers','Clientes')}</button>
        <button class="dash-tab${dashTab==='orders'?' active':''}" data-tab="orders" onclick="setDashTab('orders')">${T('Orders','Pedidos')}</button>
        <button class="dash-tab${dashTab==='inventory'?' active':''}" data-tab="inventory" onclick="setDashTab('inventory')">${T('Inventory','Inventario')}</button>
        <button class="dash-tab${dashTab==='invoices'?' active':''}" data-tab="invoices" onclick="setDashTab('invoices')">${T('Invoices','Facturas')}</button>
        <button class="dash-tab${dashTab==='fleet'?' active':''}" data-tab="fleet" onclick="setDashTab('fleet')">${T('Fleet','Flota')}</button>`;
    } else {
      tabBar.innerHTML = `
        <button class="dash-tab${dashTab==='overview'?' active':''}" data-tab="overview" onclick="setDashTab('overview')">${T('Overview','General')}</button>
        <button class="dash-tab${dashTab==='orders'?' active':''}" data-tab="orders" onclick="setDashTab('orders')">${T('Orders','Pedidos')}</button>
        <button class="dash-tab${dashTab==='products'?' active':''}" data-tab="products" onclick="setDashTab('products')">${T('Products','Productos')}</button>
        <button class="dash-tab${dashTab==='invoices'?' active':''}" data-tab="invoices" onclick="setDashTab('invoices')">${T('Invoices','Facturas')}</button>
        <button class="dash-tab${dashTab==='reorder'?' active':''}" data-tab="reorder" onclick="setDashTab('reorder')">${T('Quick Reorder','Reordenar')}</button>`;
    }
  }

  if (state.role === 'owner') { renderOwnerDash(el); }
  else { renderCustomerDash(el); }
}

// ═══════════════════════════════════════════
// OWNER DASHBOARD
// ═══════════════════════════════════════════
function renderOwnerDash(el) {
  const views = {
    overview: renderOwnerOverview,
    customers: renderOwnerCustomers,
    orders: renderOwnerOrders,
    inventory: renderOwnerInventory,
    invoices: renderOwnerInvoices,
    fleet: renderOwnerFleet,
  };
  (views[dashTab] || views.overview)(el);
}

function renderOwnerOverview(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Alamo Food Group — Operations Dashboard','Alamo Food Group — Panel de Operaciones')}</h2><p>${T('Business overview for May 2026','Resumen del negocio para mayo 2026')}</p></div>
      <div class="stat-cards">
        <div class="stat-card"><div class="sc-label">${T('Monthly Revenue','Ingresos Mensuales')}</div><div class="sc-value">$978,436</div><div class="sc-change sc-up">+8.2% vs ${T('April','abril')}</div></div>
        <div class="stat-card"><div class="sc-label">${T('External Revenue','Ingresos Externos')}</div><div class="sc-value">$81,373</div><div class="sc-change sc-neutral">8.3% ${T('of total','del total')}</div></div>
        <div class="stat-card"><div class="sc-label">${T('Active Accounts','Cuentas Activas')}</div><div class="sc-value">27</div><div class="sc-change sc-up">+2 ${T('new this month','nuevas este mes')}</div></div>
        <div class="stat-card"><div class="sc-label">${T('OTIF Rate','Tasa OTIF')}</div><div class="sc-value">96.4%</div><div class="sc-change sc-up">${T('Above 95% target','Arriba del 95% meta')}</div></div>
      </div>
      <div class="owner-kpi">
        <div class="kpi-card"><div class="kpi-label">${T('Avg Order Value','Valor Promedio de Pedido')}</div><div class="kpi-value" style="color:var(--green-dark)">$2,847</div><div class="kpi-sub">+12% vs Q1</div></div>
        <div class="kpi-card"><div class="kpi-label">${T('Gross Margin','Margen Bruto')}</div><div class="kpi-value" style="color:var(--green-dark)">23.1%</div><div class="kpi-sub">${T('Target','Meta')}: 22-25%</div></div>
        <div class="kpi-card"><div class="kpi-label">${T('AR Outstanding','Cuentas por Cobrar')}</div><div class="kpi-value" style="color:var(--gold)">$42,180</div><div class="kpi-sub">$8,400 ${T('past 15 days','+15 días')}</div></div>
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
}

function renderOwnerCustomers(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Customer Accounts','Cuentas de Clientes')}</h2><p>${T('All 27 active accounts — March 2026 data','Las 27 cuentas activas — datos de marzo 2026')}</p></div>
    <div class="dash-panel">
      <h4>All Accounts by Revenue</h4>
      <table class="customer-table">
        <thead><tr><th>Account</th><th>Revenue</th><th>% Total</th><th>Type</th><th>Payment</th><th>OTIF</th><th>Health</th></tr></thead>
        <tbody>
          <tr><td>Hacienda B&G McDonough</td><td>$115,011</td><td>11.8%</td><td>Internal</td><td>N/A</td><td>99%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>The Grove Taqueria</td><td>$76,854</td><td>7.9%</td><td>Internal</td><td>N/A</td><td>98%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Zokalo Collage Park</td><td>$76,787</td><td>7.8%</td><td>TBD</td><td>Net-15</td><td>97%</td><td><span class="health-dot dot-yellow"></span>Review</td></tr>
          <tr><td>Los Mariachis Fairburn</td><td>$61,966</td><td>6.3%</td><td>External</td><td>Net-7</td><td>96%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Hacienda B&G Buford</td><td>$59,935</td><td>6.1%</td><td>Internal</td><td>N/A</td><td>99%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Hacienda B&G Dahlonega</td><td>$52,970</td><td>5.4%</td><td>Internal</td><td>N/A</td><td>97%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Hacienda B&G Suwanee</td><td>$52,071</td><td>5.3%</td><td>Internal</td><td>N/A</td><td>98%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Zokalo Newnan</td><td>$46,609</td><td>4.8%</td><td>TBD</td><td>Net-15</td><td>95%</td><td><span class="health-dot dot-yellow"></span>Review</td></tr>
          <tr><td>Hacienda B&G Newnan</td><td>$45,390</td><td>4.6%</td><td>Internal</td><td>N/A</td><td>99%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Hacienda Taqueria Lawrenceville</td><td>$42,075</td><td>4.3%</td><td>Internal</td><td>N/A</td><td>98%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Hacienda B&G Cumming</td><td>$38,925</td><td>4.0%</td><td>Internal</td><td>N/A</td><td>97%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Fuego & Mar Restaurant</td><td>$35,127</td><td>3.6%</td><td>TBD</td><td>Net-7</td><td>94%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Hacienda B&G Lagrange</td><td>$34,694</td><td>3.5%</td><td>Internal</td><td>N/A</td><td>96%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Fuego Tortilla</td><td>$33,036</td><td>3.4%</td><td>TBD</td><td>Net-7</td><td>95%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Zokalo Fayetteville</td><td>$29,133</td><td>3.0%</td><td>TBD</td><td>Net-15</td><td>94%</td><td><span class="health-dot dot-yellow"></span>Review</td></tr>
          <tr><td>Botanico</td><td>$17,626</td><td>1.8%</td><td>External</td><td>COD</td><td>97%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Santa Maria Restaurant</td><td>$14,715</td><td>1.5%</td><td>External</td><td>Net-15</td><td>92%</td><td><span class="health-dot dot-red"></span>Past Due</td></tr>
          <tr><td>Mi Taco Taqueria</td><td>$11,743</td><td>1.2%</td><td>External</td><td>COD</td><td>96%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>The Golden Bite</td><td>$9,240</td><td>0.9%</td><td>TBD</td><td>Net-7</td><td>95%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
          <tr><td>Taqueria Norcross</td><td>$8,097</td><td>0.8%</td><td>External</td><td>COD</td><td>98%</td><td><span class="health-dot dot-green"></span>Good</td></tr>
        </tbody>
      </table>
    </div>`;
}

function renderOwnerOrders(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('All Orders','Todos los Pedidos')}</h2><p>${T('Recent orders across all accounts','Pedidos recientes de todas las cuentas')}</p></div>
    <div class="dash-panel">
      <h4>Order Log — May 2026</h4>
      <table class="customer-table">
        <thead><tr><th>Order #</th><th>Date</th><th>Account</th><th>Items</th><th>Total</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>#ALM-3012</td><td>May 10</td><td>Hacienda B&G McDonough</td><td>24</td><td>$4,218.50</td><td><span class="d-status st-processing">Processing</span></td></tr>
          <tr><td>#ALM-3011</td><td>May 10</td><td>Los Mariachis Fairburn</td><td>11</td><td>$1,842.30</td><td><span class="d-status st-transit">In Transit</span></td></tr>
          <tr><td>#ALM-3010</td><td>May 9</td><td>Zokalo Collage Park</td><td>18</td><td>$3,105.75</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
          <tr><td>#ALM-3009</td><td>May 9</td><td>The Grove Taqueria</td><td>15</td><td>$2,640.00</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
          <tr><td>#ALM-3008</td><td>May 9</td><td>Fuego & Mar</td><td>8</td><td>$1,290.45</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
          <tr><td>#ALM-3007</td><td>May 8</td><td>Hacienda B&G Buford</td><td>22</td><td>$3,891.20</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
          <tr><td>#ALM-3006</td><td>May 8</td><td>Botanico</td><td>6</td><td>$894.50</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
          <tr><td>#ALM-3005</td><td>May 8</td><td>Taqueria Norcross</td><td>5</td><td>$642.30</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
          <tr><td>#ALM-3004</td><td>May 7</td><td>Hacienda B&G Dahlonega</td><td>19</td><td>$3,412.00</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
          <tr><td>#ALM-3003</td><td>May 7</td><td>Hacienda B&G Suwanee</td><td>16</td><td>$2,780.90</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
          <tr><td>#ALM-3002</td><td>May 7</td><td>Mi Taco Taqueria</td><td>4</td><td>$518.75</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
          <tr><td>#ALM-3001</td><td>May 6</td><td>Santa Maria Restaurant</td><td>9</td><td>$1,640.20</td><td><span class="d-status st-delivered">Delivered</span></td></tr>
        </tbody>
      </table>
    </div>`;
}

function renderOwnerInventory(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Inventory Management','Gestión de Inventario')}</h2><p>${T('Current stock levels — warehouse Newnan, GA','Niveles actuales — almacén Newnan, GA')}</p></div>
    <div class="stat-cards">
      <div class="stat-card"><div class="sc-label">Total SKUs</div><div class="sc-value">248</div><div class="sc-change sc-neutral">Active catalog</div></div>
      <div class="stat-card"><div class="sc-label">Low Stock Alerts</div><div class="sc-value" style="color:var(--gold)">4</div><div class="sc-change sc-down">Needs reorder</div></div>
      <div class="stat-card"><div class="sc-label">Out of Stock</div><div class="sc-value" style="color:var(--red)">1</div><div class="sc-change sc-down">Tripas — ETA May 14</div></div>
      <div class="stat-card"><div class="sc-label">Inventory Value</div><div class="sc-value">$184,200</div><div class="sc-change sc-neutral">At cost</div></div>
    </div>
    <div class="dash-panel">
      <h4>Stock Levels — Key Items</h4>
      <table class="customer-table">
        <thead><tr><th>Product</th><th>On Hand</th><th>Weekly Usage</th><th>Days Supply</th><th>Reorder Point</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Corn Tortillas</td><td>840 cases</td><td>600 cases</td><td>9.8</td><td>400 cases</td><td><span class="health-dot dot-green"></span>OK</td></tr>
          <tr><td>Queso Oaxaca</td><td>620 lbs</td><td>450 lbs</td><td>9.6</td><td>300 lbs</td><td><span class="health-dot dot-green"></span>OK</td></tr>
          <tr><td>Pork Butt</td><td>1,400 lbs</td><td>800 lbs</td><td>12.3</td><td>500 lbs</td><td><span class="health-dot dot-green"></span>OK</td></tr>
          <tr><td>Avocados Hass</td><td>42 cases</td><td>30 cases</td><td>9.8</td><td>20 cases</td><td><span class="health-dot dot-green"></span>OK</td></tr>
          <tr><td>Chile Guajillo</td><td style="color:var(--gold);font-weight:700">28 lbs</td><td>18 lbs</td><td style="color:var(--gold);font-weight:700">10.9</td><td>40 lbs</td><td><span class="health-dot dot-yellow"></span>Low</td></tr>
          <tr><td>Chorizo</td><td>180 lbs</td><td>240 lbs</td><td style="color:var(--gold);font-weight:700">5.3</td><td>200 lbs</td><td><span class="health-dot dot-yellow"></span>Low</td></tr>
          <tr><td>Flour Tortillas</td><td>120 cases</td><td>80 cases</td><td>10.5</td><td>60 cases</td><td><span class="health-dot dot-green"></span>OK</td></tr>
          <tr><td>Crema Mexicana</td><td>48 qt</td><td>60 qt</td><td style="color:var(--gold);font-weight:700">5.6</td><td>40 qt</td><td><span class="health-dot dot-yellow"></span>Low</td></tr>
          <tr><td>Roma Tomatoes</td><td>800 lbs</td><td>420 lbs</td><td>13.3</td><td>300 lbs</td><td><span class="health-dot dot-green"></span>OK</td></tr>
          <tr><td>Tripas de Res</td><td style="color:var(--red);font-weight:700">0 lbs</td><td>65 lbs</td><td style="color:var(--red);font-weight:700">0</td><td>50 lbs</td><td><span class="health-dot dot-red"></span>Out</td></tr>
          <tr><td>Vegetable Oil 35lb</td><td>36 jugs</td><td>52 jugs</td><td style="color:var(--gold);font-weight:700">4.8</td><td>30 jugs</td><td><span class="health-dot dot-yellow"></span>Low</td></tr>
        </tbody>
      </table>
    </div>`;
}

function renderOwnerInvoices(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Accounts Receivable','Cuentas por Cobrar')}</h2><p>${T('Invoice status and aging report','Estado de facturas y reporte de antigüedad')}</p></div>
    <div class="stat-cards">
      <div class="stat-card"><div class="sc-label">Total AR</div><div class="sc-value">$42,180</div><div class="sc-change sc-neutral">All outstanding</div></div>
      <div class="stat-card"><div class="sc-label">Current (0-7 days)</div><div class="sc-value" style="color:var(--green)">$28,420</div><div class="sc-change sc-up">67% of total</div></div>
      <div class="stat-card"><div class="sc-label">Aging (8-15 days)</div><div class="sc-value" style="color:var(--gold)">$5,360</div><div class="sc-change sc-neutral">13% of total</div></div>
      <div class="stat-card"><div class="sc-label">Past Due (15+ days)</div><div class="sc-value" style="color:var(--red)">$8,400</div><div class="sc-change sc-down">20% — needs action</div></div>
    </div>
    <div class="dash-panel">
      <h4>Outstanding Invoices</h4>
      <table class="customer-table">
        <thead><tr><th>Invoice #</th><th>Account</th><th>Amount</th><th>Issued</th><th>Due</th><th>Days Out</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>INV-4821</td><td>Santa Maria Restaurant</td><td style="font-weight:700">$14,715</td><td>Apr 18</td><td>May 2</td><td style="color:var(--red);font-weight:700">22</td><td><span class="d-status" style="background:var(--red-light);color:var(--red)">Past Due</span></td></tr>
          <tr><td>INV-4856</td><td>Zokalo Newnan</td><td>$8,240</td><td>Apr 28</td><td>May 12</td><td style="color:var(--gold)">12</td><td><span class="d-status st-transit">Aging</span></td></tr>
          <tr><td>INV-4872</td><td>Los Mariachis Fairburn</td><td>$5,360</td><td>May 3</td><td>May 10</td><td>7</td><td><span class="d-status st-processing">Current</span></td></tr>
          <tr><td>INV-4890</td><td>Fuego & Mar</td><td>$4,180</td><td>May 5</td><td>May 12</td><td>5</td><td><span class="d-status st-processing">Current</span></td></tr>
          <tr><td>INV-4901</td><td>Botanico</td><td>$3,420</td><td>May 7</td><td>COD</td><td>—</td><td><span class="d-status st-delivered">Paid</span></td></tr>
          <tr><td>INV-4912</td><td>Taqueria Norcross</td><td>$1,840</td><td>May 8</td><td>COD</td><td>—</td><td><span class="d-status st-delivered">Paid</span></td></tr>
          <tr><td>INV-4918</td><td>Mi Taco Taqueria</td><td>$2,180</td><td>May 9</td><td>COD</td><td>—</td><td><span class="d-status st-delivered">Paid</span></td></tr>
        </tbody>
      </table>
    </div>`;
}

function renderOwnerFleet(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Fleet & Logistics','Flota y Logística')}</h2><p>${T('Vehicle status and delivery performance','Estado de vehículos y rendimiento de entregas')}</p></div>
    <div class="stat-cards">
      <div class="stat-card"><div class="sc-label">Trucks Active</div><div class="sc-value">2 / 2</div><div class="sc-change sc-up">100% availability</div></div>
      <div class="stat-card"><div class="sc-label">Deliveries This Week</div><div class="sc-value">38</div><div class="sc-change sc-up">+5 vs last week</div></div>
      <div class="stat-card"><div class="sc-label">Avg Delivery Time</div><div class="sc-value">2.4 hrs</div><div class="sc-change sc-neutral">Order to door</div></div>
      <div class="stat-card"><div class="sc-label">Miles This Month</div><div class="sc-value">8,420</div><div class="sc-change sc-neutral">~100K annual pace</div></div>
    </div>
    <div class="dash-grid">
      <div>
        <div class="dash-panel">
          <h4>Vehicle Status</h4>
          <table class="customer-table">
            <thead><tr><th>Vehicle</th><th>Type</th><th>Status</th><th>Driver</th><th>Next Service</th></tr></thead>
            <tbody>
              <tr><td>Truck A (Owned)</td><td>Reefer</td><td><span class="health-dot dot-green"></span>Active</td><td>Carlos M.</td><td>Jun 15, 2026</td></tr>
              <tr><td>Truck B (Leased)</td><td>Box Truck</td><td><span class="health-dot dot-yellow"></span>Service Soon</td><td>Miguel R.</td><td style="color:var(--gold);font-weight:600">May 15, 2026</td></tr>
            </tbody>
          </table>
        </div>
        <div class="dash-panel">
          <h4>Delivery Performance (30 days)</h4>
          <div class="d-row"><div><strong>OTIF Rate</strong></div><div style="font-weight:700;color:var(--green)">96.4%</div></div>
          <div class="d-row"><div><strong>Fill Rate</strong></div><div style="font-weight:700;color:var(--green)">98.7%</div></div>
          <div class="d-row"><div><strong>Short-Ships</strong></div><div style="font-weight:700;color:var(--red)">3 incidents</div></div>
          <div class="d-row"><div><strong>Late Deliveries</strong></div><div style="font-weight:700;color:var(--gold)">2 incidents</div></div>
          <div class="d-row"><div><strong>Customer Complaints</strong></div><div style="font-weight:700">1 (resolved)</div></div>
          <div class="d-row"><div><strong>Avg Stops per Route</strong></div><div>8.2</div></div>
        </div>
      </div>
      <div>
        <div class="dash-panel">
          <h4>Today's Routes</h4>
          <div class="d-row"><div><strong>Route A — Carlos</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">McDonough → Stockbridge → Jonesboro → Fairburn</span></div><div><span class="d-status st-transit">In Progress</span><br><span style="font-size:0.75rem">6/9 stops done</span></div></div>
          <div class="d-row"><div><strong>Route B — Miguel</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">Buford → Suwanee → Lawrenceville → Norcross</span></div><div><span class="d-status st-processing">Loading</span><br><span style="font-size:0.75rem">Departs 6:30 AM</span></div></div>
        </div>
        <div class="dash-panel">
          <h4>Fuel & Maintenance</h4>
          <div class="d-row"><div>Fuel Cost (May)</div><div style="font-weight:600">$2,840</div></div>
          <div class="d-row"><div>Avg MPG</div><div>8.2</div></div>
          <div class="d-row"><div>Maintenance YTD</div><div style="font-weight:600">$4,120</div></div>
          <div class="d-row"><div>Insurance (monthly)</div><div>$1,200</div></div>
        </div>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════
// CUSTOMER DASHBOARD
// ═══════════════════════════════════════════
function renderCustomerDash(el) {
  const views = {
    overview: renderCustOverview,
    orders: renderCustOrders,
    products: renderCustProducts,
    invoices: renderCustInvoices,
    reorder: renderCustReorder,
  };
  (views[dashTab] || views.overview)(el);
}

function renderCustOverview(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Welcome back, Taqueria El Sol','Bienvenido, Taqueria El Sol')}</h2><p>${T('Your account overview for May 2026','Resumen de tu cuenta para mayo 2026')}</p></div>
    <div class="stat-cards">
      <div class="stat-card"><div class="sc-label">${T('Monthly Spend','Gasto Mensual')}</div><div class="sc-value">$8,420</div><div class="sc-change sc-up">+12% vs ${T('last month','mes pasado')}</div></div>
      <div class="stat-card"><div class="sc-label">${T('Orders This Month','Pedidos Este Mes')}</div><div class="sc-value">14</div><div class="sc-change sc-up">+3 ${T('more than April','más que abril')}</div></div>
      <div class="stat-card"><div class="sc-label">${T('On-Time Delivery','Entrega a Tiempo')}</div><div class="sc-value" style="color:var(--green)">98.2%</div><div class="sc-change sc-up">${T('Above 95% target','Arriba del 95% meta')}</div></div>
      <div class="stat-card"><div class="sc-label">${T('Account Balance','Saldo de Cuenta')}</div><div class="sc-value">$1,240</div><div class="sc-change sc-neutral">${T('Due May 15, 2026','Vence 15 mayo 2026')}</div></div>
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

function renderCustOrders(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Your Orders','Tus Pedidos')}</h2><p>${T('Complete order history','Historial completo de pedidos')}</p></div>
    <div class="dash-panel">
      <table class="customer-table">
        <thead><tr><th>Order #</th><th>Date</th><th>Items</th><th>Total</th><th>Status</th><th>Delivery</th></tr></thead>
        <tbody>
          <tr><td><strong>#ALM-2847</strong></td><td>May 8, 2026</td><td>12</td><td>$642.30</td><td><span class="d-status st-delivered">Delivered</span></td><td>May 9, 8:14 AM</td></tr>
          <tr><td><strong>#ALM-2839</strong></td><td>May 5, 2026</td><td>8</td><td>$418.75</td><td><span class="d-status st-delivered">Delivered</span></td><td>May 6, 7:52 AM</td></tr>
          <tr><td><strong>#ALM-2831</strong></td><td>May 2, 2026</td><td>15</td><td>$891.20</td><td><span class="d-status st-delivered">Delivered</span></td><td>May 3, 8:30 AM</td></tr>
          <tr><td><strong>#ALM-2825</strong></td><td>Apr 29, 2026</td><td>10</td><td>$567.50</td><td><span class="d-status st-transit">In Transit</span></td><td>Est. today by 10 AM</td></tr>
          <tr><td><strong>#ALM-2810</strong></td><td>Apr 25, 2026</td><td>9</td><td>$512.40</td><td><span class="d-status st-delivered">Delivered</span></td><td>Apr 26, 7:45 AM</td></tr>
          <tr><td><strong>#ALM-2798</strong></td><td>Apr 22, 2026</td><td>14</td><td>$780.90</td><td><span class="d-status st-delivered">Delivered</span></td><td>Apr 23, 8:10 AM</td></tr>
          <tr><td><strong>#ALM-2784</strong></td><td>Apr 18, 2026</td><td>7</td><td>$385.60</td><td><span class="d-status st-delivered">Delivered</span></td><td>Apr 19, 9:02 AM</td></tr>
          <tr><td><strong>#ALM-2770</strong></td><td>Apr 15, 2026</td><td>11</td><td>$624.15</td><td><span class="d-status st-delivered">Delivered</span></td><td>Apr 16, 7:38 AM</td></tr>
          <tr><td><strong>#ALM-2755</strong></td><td>Apr 11, 2026</td><td>13</td><td>$710.30</td><td><span class="d-status st-delivered">Delivered</span></td><td>Apr 12, 8:22 AM</td></tr>
          <tr><td><strong>#ALM-2740</strong></td><td>Apr 8, 2026</td><td>8</td><td>$445.80</td><td><span class="d-status st-delivered">Delivered</span></td><td>Apr 9, 7:55 AM</td></tr>
        </tbody>
      </table>
    </div>`;
}

function renderCustProducts(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Browse & Order Products','Explorar y Ordenar Productos')}</h2><p>${T('Add items to your cart and request a delivery','Agrega artículos a tu carrito y solicita una entrega')}</p></div>
    <div class="catalog-toolbar">
      <div class="catalog-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" placeholder="Search products..." oninput="searchProducts(this.value)"></div>
      <div class="catalog-tabs">
        <button class="catalog-tab${state.category==='all'?' active':''}" data-cat="all" onclick="filterCat('all')">All</button>
        <button class="catalog-tab${state.category==='dairy'?' active':''}" data-cat="dairy" onclick="filterCat('dairy')">Dairy</button>
        <button class="catalog-tab${state.category==='meat'?' active':''}" data-cat="meat" onclick="filterCat('meat')">Meat</button>
        <button class="catalog-tab${state.category==='produce'?' active':''}" data-cat="produce" onclick="filterCat('produce')">Produce</button>
        <button class="catalog-tab${state.category==='dry'?' active':''}" data-cat="dry" onclick="filterCat('dry')">Dry Goods</button>
        <button class="catalog-tab${state.category==='supplies'?' active':''}" data-cat="supplies" onclick="filterCat('supplies')">Supplies</button>
      </div>
    </div>
    <div class="products-grid" id="dash-products-grid"></div>`;
  // Render products with prices into the dashboard grid
  const grid = document.getElementById('dash-products-grid');
  let list = products;
  if (state.category !== 'all') list = list.filter(p => p.cat === state.category);
  if (state.search) { const q = state.search.toLowerCase(); list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)); }
  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <div class="p-img">${p.badge ? `<span class="p-badge badge-${p.badge}">${p.badge}</span>` : ''}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      </div>
      <div class="p-body">
        <div class="p-cat">${p.cat}</div>
        <div class="p-name">${p.name}</div>
        <div class="p-desc">${p.desc}</div>
        <div class="p-foot">
          <div class="p-price">$${p.price.toFixed(2)} <span class="p-unit">${p.unit}</span></div>
          <button class="p-add" onclick="addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>`).join('');
}

function renderCustInvoices(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Your Invoices','Tus Facturas')}</h2><p>${T('Payment history and outstanding balances','Historial de pagos y saldos pendientes')}</p></div>
    <div class="stat-cards">
      <div class="stat-card"><div class="sc-label">Outstanding Balance</div><div class="sc-value">$1,240</div><div class="sc-change sc-neutral">Due May 15</div></div>
      <div class="stat-card"><div class="sc-label">Paid This Month</div><div class="sc-value" style="color:var(--green)">$7,180</div><div class="sc-change sc-up">On time</div></div>
      <div class="stat-card"><div class="sc-label">Payment Terms</div><div class="sc-value" style="font-size:1.3rem">Net-15</div><div class="sc-change sc-up">Good standing</div></div>
      <div class="stat-card"><div class="sc-label">Credit Limit</div><div class="sc-value">$5,000</div><div class="sc-change sc-neutral">24% utilized</div></div>
    </div>
    <div class="dash-panel">
      <table class="customer-table">
        <thead><tr><th>Invoice #</th><th>Date</th><th>Amount</th><th>Due Date</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>INV-4892</td><td>May 8, 2026</td><td>$642.30</td><td>May 23</td><td><span class="d-status st-processing">Current</span></td></tr>
          <tr><td>INV-4878</td><td>May 5, 2026</td><td>$418.75</td><td>May 20</td><td><span class="d-status st-processing">Current</span></td></tr>
          <tr><td>INV-4860</td><td>May 2, 2026</td><td>$891.20</td><td>May 17</td><td><span class="d-status st-processing">Current</span></td></tr>
          <tr><td>INV-4845</td><td>Apr 29, 2026</td><td>$567.50</td><td>May 14</td><td><span class="d-status st-delivered">Paid May 10</span></td></tr>
          <tr><td>INV-4830</td><td>Apr 25, 2026</td><td>$512.40</td><td>May 10</td><td><span class="d-status st-delivered">Paid May 8</span></td></tr>
          <tr><td>INV-4815</td><td>Apr 22, 2026</td><td>$780.90</td><td>May 7</td><td><span class="d-status st-delivered">Paid May 5</span></td></tr>
          <tr><td>INV-4800</td><td>Apr 18, 2026</td><td>$385.60</td><td>May 3</td><td><span class="d-status st-delivered">Paid May 1</span></td></tr>
        </tbody>
      </table>
    </div>`;
}

function renderCustReorder(el) {
  el.innerHTML = `
    <div class="dash-welcome"><h2>${T('Quick Reorder','Reordenar Rápido')}</h2><p>${T('Based on your last 6 orders — one click to reorder your usual','Basado en tus últimos 6 pedidos — un clic para reordenar lo de siempre')}</p></div>
    <div class="dash-panel">
      <h4>Your Usual Weekly Order</h4>
      <table class="customer-table">
        <thead><tr><th>Product</th><th>Qty</th><th>Unit Price</th><th>Subtotal</th></tr></thead>
        <tbody>
          <tr><td>Queso Oaxaca</td><td>10 lbs</td><td>$4.25/lb</td><td style="font-weight:700">$42.50</td></tr>
          <tr><td>Corn Tortillas — Case</td><td>2 cases</td><td>$18.99/case</td><td style="font-weight:700">$37.98</td></tr>
          <tr><td>Pork Butt — Bone-In</td><td>30 lbs</td><td>$2.99/lb</td><td style="font-weight:700">$89.70</td></tr>
          <tr><td>Chile Guajillo Seco</td><td>4 lbs</td><td>$8.75/lb</td><td style="font-weight:700">$35.00</td></tr>
          <tr><td>Avocados Hass — Case</td><td>1 case</td><td>$42.00/case</td><td style="font-weight:700">$42.00</td></tr>
          <tr><td>Roma Tomatoes</td><td>25 lbs</td><td>$1.49/lb</td><td style="font-weight:700">$37.25</td></tr>
          <tr><td>Cilantro — 30 Bunch</td><td>1 case</td><td>$14.99/case</td><td style="font-weight:700">$14.99</td></tr>
          <tr><td>White Onions — 50lb</td><td>1 bag</td><td>$18.99/bag</td><td style="font-weight:700">$18.99</td></tr>
        </tbody>
        <tfoot><tr><td colspan="3" style="text-align:right;font-weight:800;padding-top:12px">Estimated Total</td><td style="font-weight:800;font-size:1.1rem;color:var(--green-dark);padding-top:12px">$318.41</td></tr></tfoot>
      </table>
      <div style="display:flex;gap:12px;margin-top:20px;justify-content:flex-end">
        <button class="btn btn-outline" onclick="alert('Order saved as draft.')">Save as Draft</button>
        <button class="btn btn-primary" onclick="alert('Order #ALM-2850 placed! Delivery scheduled for tomorrow morning by 9 AM.')">Place Order for Tomorrow</button>
      </div>
    </div>
    <div class="dash-panel" style="margin-top:16px">
      <h4>Customize Before Ordering</h4>
      <p style="font-size:0.85rem;color:var(--gray-500)">Need to adjust quantities or add items? Go to the <a href="#" onclick="setDashTab('products');return false" style="color:var(--green);font-weight:600">Products tab</a> to build a custom order, or text us at <strong>678-243-0503</strong> in Spanish or English.</p>
    </div>`;
}

function handleContact(e) {
  e.preventDefault();
  alert('Thank you! We\'ll be in touch within 24 hours.');
  e.target.reset();
}
