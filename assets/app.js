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
    'we.serve': 'We Serve', 'perks.h': 'Why Work at Alamo',
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
    'we.serve': 'Servimos A', 'perks.h': 'Por Qué Trabajar en Alamo',
  }
};

function setLang(l) {
  state.lang = l;
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
