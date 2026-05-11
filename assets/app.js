/* ============================================
   ALAMO FOOD SERVICES — Application Logic
   ============================================ */

// ── State ──
const state = {
  cart: [],
  lang: 'en',
  currentPage: 'home',
  currentCategory: 'all',
  isLoggedIn: false,
  dashTab: 'overview'
};

// ── Product Catalog (Demo Data) ──
const products = [
  { id: 1, name: 'Queso Oaxaca', nameEs: 'Queso Oaxaca', category: 'dairy', price: 4.25, unit: '/lb', badge: 'popular', img: '🧀', desc: 'Traditional string cheese, perfect for quesadillas', descEs: 'Queso de hebra tradicional, perfecto para quesadillas' },
  { id: 2, name: 'Queso Fresco', nameEs: 'Queso Fresco', category: 'dairy', price: 3.89, unit: '/lb', badge: '', img: '🧀', desc: 'Fresh crumbling cheese for tacos and salads', descEs: 'Queso fresco para tacos y ensaladas' },
  { id: 3, name: 'Queso Chihuahua', nameEs: 'Queso Chihuahua', category: 'dairy', price: 5.10, unit: '/lb', badge: 'new', img: '🧀', desc: 'Semi-soft melting cheese for fundido', descEs: 'Queso semi-suave para fundido' },
  { id: 4, name: 'Crema Mexicana', nameEs: 'Crema Mexicana', category: 'dairy', price: 3.50, unit: '/qt', badge: '', img: '🥛', desc: 'Rich Mexican sour cream', descEs: 'Crema agria mexicana rica' },
  { id: 5, name: 'Masa Harina', nameEs: 'Masa Harina', category: 'dry', price: 12.99, unit: '/50lb', badge: 'popular', img: '🌽', desc: 'Premium corn flour for tortillas', descEs: 'Harina de maíz premium para tortillas' },
  { id: 6, name: 'Dried Chile Guajillo', nameEs: 'Chile Guajillo Seco', category: 'dry', price: 8.75, unit: '/lb', badge: '', img: '🌶️', desc: 'Essential for salsas and adobo', descEs: 'Esencial para salsas y adobo' },
  { id: 7, name: 'Dried Chile Ancho', nameEs: 'Chile Ancho Seco', category: 'dry', price: 9.25, unit: '/lb', badge: '', img: '🌶️', desc: 'Rich, mild dried poblano', descEs: 'Poblano seco rico y suave' },
  { id: 8, name: 'Chile de Arbol', nameEs: 'Chile de Árbol', category: 'dry', price: 11.50, unit: '/lb', badge: '', img: '🌶️', desc: 'Hot and smoky, for table salsa', descEs: 'Picante y ahumado, para salsa de mesa' },
  { id: 9, name: 'Corn Tortillas (Case)', nameEs: 'Tortillas de Maíz (Caja)', category: 'dry', price: 18.99, unit: '/case', badge: 'popular', img: '🫓', desc: '6" white corn, 30 dozen per case', descEs: '6" maíz blanco, 30 docenas por caja' },
  { id: 10, name: 'Flour Tortillas (Case)', nameEs: 'Tortillas de Harina (Caja)', category: 'dry', price: 22.50, unit: '/case', badge: '', img: '🫓', desc: '10" flour, 12 dozen per case', descEs: '10" harina, 12 docenas por caja' },
  { id: 11, name: 'Beef Chuck Roll', nameEs: 'Rollo de Res Chuck', category: 'meat', price: 6.89, unit: '/lb', badge: '', img: '🥩', desc: 'USDA Choice, ideal for barbacoa', descEs: 'USDA Choice, ideal para barbacoa' },
  { id: 12, name: 'Pork Butt (Bone-In)', nameEs: 'Pierna de Cerdo (Con Hueso)', category: 'meat', price: 2.99, unit: '/lb', badge: 'sale', img: '🥩', desc: 'Perfect for carnitas', descEs: 'Perfecto para carnitas' },
  { id: 13, name: 'Chicken Leg Quarters', nameEs: 'Piernas de Pollo', category: 'meat', price: 1.29, unit: '/lb', badge: '', img: '🍗', desc: '40lb case, fresh never frozen', descEs: 'Caja de 40lb, fresco nunca congelado' },
  { id: 14, name: 'Chorizo (Bulk)', nameEs: 'Chorizo (A Granel)', category: 'meat', price: 3.75, unit: '/lb', badge: 'popular', img: '🌭', desc: 'Traditional Mexican pork chorizo', descEs: 'Chorizo de cerdo mexicano tradicional' },
  { id: 15, name: 'Tripas (Beef)', nameEs: 'Tripas de Res', category: 'meat', price: 3.49, unit: '/lb', badge: '', img: '🥩', desc: 'Cleaned and ready for grill', descEs: 'Limpias y listas para asar' },
  { id: 16, name: 'Roma Tomatoes', nameEs: 'Tomate Roma', category: 'produce', price: 1.49, unit: '/lb', badge: '', img: '🍅', desc: 'Firm, ideal for salsa roja', descEs: 'Firme, ideal para salsa roja' },
  { id: 17, name: 'Tomatillos', nameEs: 'Tomatillos', category: 'produce', price: 1.79, unit: '/lb', badge: '', img: '🟢', desc: 'Fresh with husk, for salsa verde', descEs: 'Frescos con cáscara, para salsa verde' },
  { id: 18, name: 'Jalapeños', nameEs: 'Jalapeños', category: 'produce', price: 1.29, unit: '/lb', badge: '', img: '🌶️', desc: 'Fresh green jalapeños', descEs: 'Jalapeños verdes frescos' },
  { id: 19, name: 'Serrano Peppers', nameEs: 'Chile Serrano', category: 'produce', price: 1.99, unit: '/lb', badge: '', img: '🌶️', desc: 'Hot and bright, essential for salsas', descEs: 'Picante y brillante, esencial para salsas' },
  { id: 20, name: 'Avocados (Case)', nameEs: 'Aguacates (Caja)', category: 'produce', price: 42.00, unit: '/case 48ct', badge: 'popular', img: '🥑', desc: 'Hass avocados, Mexico origin', descEs: 'Aguacates Hass, origen México' },
  { id: 21, name: 'White Onions (50lb)', nameEs: 'Cebolla Blanca (50lb)', category: 'produce', price: 18.99, unit: '/bag', badge: '', img: '🧅', desc: 'Jumbo white, restaurant staple', descEs: 'Blanca jumbo, básico de restaurante' },
  { id: 22, name: 'Cilantro (30ct)', nameEs: 'Cilantro (30ct)', category: 'produce', price: 14.99, unit: '/case', badge: '', img: '🌿', desc: 'Fresh bunched cilantro', descEs: 'Cilantro fresco en manojos' },
  { id: 23, name: 'Vegetable Oil (35lb)', nameEs: 'Aceite Vegetal (35lb)', category: 'supplies', price: 24.99, unit: '/jug', badge: '', img: '🫗', desc: 'High-heat frying oil', descEs: 'Aceite para freír a alta temperatura' },
  { id: 24, name: 'To-Go Containers (500ct)', nameEs: 'Contenedores Para Llevar (500ct)', category: 'supplies', price: 38.50, unit: '/case', badge: '', img: '📦', desc: '3-compartment foam, hinged lid', descEs: '3 compartimentos espuma, tapa con bisagra' },
  { id: 25, name: 'Aluminum Foil (Heavy)', nameEs: 'Papel Aluminio (Resistente)', category: 'supplies', price: 42.00, unit: '/roll', badge: '', img: '🪩', desc: '18" x 1000ft heavy duty roll', descEs: 'Rollo resistente 18" x 1000ft' },
  { id: 26, name: 'Latex Gloves (Box)', nameEs: 'Guantes de Látex (Caja)', category: 'supplies', price: 8.99, unit: '/100ct', badge: '', img: '🧤', desc: 'Powder-free, food service grade', descEs: 'Sin polvo, grado servicio alimentario' },
];

// ── Translations ──
const i18n = {
  en: {
    nav: { home: 'Home', products: 'Products', about: 'About', services: 'Services', contact: 'Contact', login: 'Sign In', dashboard: 'Dashboard' },
    hero: { kicker: 'RESTAURANT-QUALITY PRODUCTS AT WAREHOUSE PRICING', title: 'More Than a Distributor. <em>We\'re Your Partner.</em>', subtitle: 'Built by restauranteros, for restauranteros. We supply 16+ restaurants of our own — so we know exactly what your kitchen needs.', cta1: 'Shop Products', cta2: 'Become a Customer', stat1label: 'Products', stat2label: 'Restaurants Served', stat3label: 'Years Serving Atlanta' },
    values: { v1: 'Restauranteros Helping Restauranteros', v1d: 'We live the restaurant life. We\'ve been there.', v2: 'Best Price. Best Quality.', v2d: 'We leverage volume to get you the best value.', v3: 'Reliable Supply. Real People.', v3d: 'We answer the phone and show up on time.', v4: 'More Than a Supplier.', v4d: 'From menu ideas to product recs, we\'re here to help.' },
    catalog: { title: 'Product Catalog', subtitle: 'Restaurant-quality ingredients at wholesale prices. Order online or call us.', all: 'All Products', dairy: 'Dairy & Cheese', meat: 'Meat & Protein', produce: 'Fresh Produce', dry: 'Dry Goods & Tortillas', supplies: 'Supplies & Paper', addToCart: '+' },
    about: { kicker: 'OUR STORY', title: 'It Started in the Kitchen. It Started Out of Necessity.', p1: 'In 2021, during the pandemic, our founder saw firsthand how hard it was for restaurants to get the products they needed — on time and at a fair price.', p2: 'So he started Alamo Food Services not as a side business, but as a mission to help fellow restauranteros survive and thrive. What started as a way to keep our own restaurants running quickly grew as other restaurant owners asked for the same help.', p3: 'Today, we proudly serve restaurants, food trucks, schools, and businesses across the Southeast with quality products at the best possible prices.' },
    services: { title: 'Why Alamo?', subtitle: 'What makes us different from every other distributor.' },
    marketplace: { title: 'Hacienda Marketplace', subtitle: 'Coming Soon — Wholesale Prices. Open to the Public.', desc: 'Shop our warehouse in person. Quality products, wholesale prices, Mexican restaurant on-site. Built for our community — families, restaurants, and businesses.', f1: 'Warehouse Shopping', f2: 'Mexican Restaurant', f3: 'Wholesale Prices', f4: 'Open to Public' },
    testimonials: { title: 'What Our Customers Say' },
    cta: { title: 'Ready to Save on Your Food Costs?', subtitle: 'Join the growing family of restaurants that trust Alamo. No contracts, no minimums, just honest service.', btn1: 'Start Ordering', btn2: 'Call Us: 678-243-0503' },
    contact: { title: 'Get In Touch', subtitle: 'Ready to become a customer? Have questions? We\'d love to hear from you.', name: 'Restaurant Name', contactName: 'Your Name', email: 'Email', phone: 'Phone', type: 'Business Type', typeOpts: ['Independent Restaurant', 'Food Truck', 'Catering', 'Grocery/Tienda', 'Church/Organization', 'Other'], message: 'Tell us about your needs', submit: 'Submit Inquiry' },
    cart: { title: 'Your Order', empty: 'Your cart is empty', emptyMsg: 'Browse our catalog and add items to get started.', subtotal: 'Subtotal', delivery: 'Delivery', deliveryFree: 'FREE', total: 'Estimated Total', checkout: 'Request Quote', remove: 'Remove' },
    login: { title: 'Customer Portal', subtitle: 'Sign in to manage orders, view invoices, and track deliveries.', email: 'Email Address', password: 'Password', submit: 'Sign In', demo: 'Demo Login: Use any email & password "demo"', back: 'Back to Website' },
    dash: { welcome: 'Welcome back', overview: 'Overview', orders: 'Orders', invoices: 'Invoices', reorder: 'Quick Reorder', logout: 'Log Out' },
    footer: { tagline: 'Your partner in food and success. Built by restauranteros, for restauranteros. De familia a familia.', quick: 'Quick Links', products: 'Products', contact: 'Contact', hours: 'Hours & Location', hoursText: 'Mon-Sat: 5:00 AM - 6:00 PM', address: 'Newnan, GA 30265', phone: '678-243-0503', rights: '2026 Alamo Food Services. All rights reserved.' }
  },
  es: {
    nav: { home: 'Inicio', products: 'Productos', about: 'Nosotros', services: 'Servicios', contact: 'Contacto', login: 'Iniciar Sesión', dashboard: 'Panel' },
    hero: { kicker: 'PRODUCTOS DE CALIDAD RESTAURANTERA A PRECIOS DE MAYOREO', title: 'Más Que un Distribuidor. <em>Somos Tu Socio.</em>', subtitle: 'Hecho por restauranteros, para restauranteros. Surtimos más de 16 restaurantes propios — así que sabemos exactamente lo que tu cocina necesita.', cta1: 'Ver Productos', cta2: 'Hazte Cliente', stat1label: 'Productos', stat2label: 'Restaurantes Servidos', stat3label: 'Años Sirviendo Atlanta' },
    values: { v1: 'Restauranteros Ayudando Restauranteros', v1d: 'Vivimos la vida del restaurante. Hemos estado ahí.', v2: 'Mejor Precio. Mejor Calidad.', v2d: 'Aprovechamos el volumen para darte el mejor valor.', v3: 'Suministro Confiable. Gente Real.', v3d: 'Contestamos el teléfono y llegamos a tiempo.', v4: 'Más Que un Proveedor.', v4d: 'Desde ideas de menú hasta recomendaciones, estamos aquí para ayudar.' },
    catalog: { title: 'Catálogo de Productos', subtitle: 'Ingredientes de calidad restaurantera a precios de mayoreo. Ordena en línea o llámanos.', all: 'Todos', dairy: 'Lácteos y Quesos', meat: 'Carnes y Proteína', produce: 'Productos Frescos', dry: 'Abarrotes y Tortillas', supplies: 'Suministros y Papel', addToCart: '+' },
    about: { kicker: 'NUESTRA HISTORIA', title: 'Empezó en la Cocina. Empezó por Necesidad.', p1: 'En 2021, durante la pandemia, nuestro fundador vio de primera mano lo difícil que era para los restaurantes conseguir los productos que necesitaban — a tiempo y a un precio justo.', p2: 'Así que empezó Alamo Food Services no como un negocio secundario, sino como una misión para ayudar a otros restauranteros a sobrevivir y prosperar. Lo que empezó como una forma de mantener nuestros propios restaurantes funcionando creció rápidamente cuando otros dueños pidieron la misma ayuda.', p3: 'Hoy, orgullosamente servimos a restaurantes, food trucks, escuelas y negocios en todo el sureste con productos de calidad a los mejores precios posibles.' },
    services: { title: '¿Por Qué Alamo?', subtitle: 'Lo que nos hace diferentes de cualquier otro distribuidor.' },
    marketplace: { title: 'Hacienda Marketplace', subtitle: 'Próximamente — Precios de Mayoreo. Abierto al Público.', desc: 'Compra en nuestro almacén en persona. Productos de calidad, precios de mayoreo, restaurante mexicano en sitio. Hecho para nuestra comunidad.', f1: 'Compras en Almacén', f2: 'Restaurante Mexicano', f3: 'Precios de Mayoreo', f4: 'Abierto al Público' },
    testimonials: { title: 'Lo Que Dicen Nuestros Clientes' },
    cta: { title: '¿Listo Para Ahorrar en Tus Costos de Alimentos?', subtitle: 'Únete a la familia creciente de restaurantes que confían en Alamo. Sin contratos, sin mínimos, solo servicio honesto.', btn1: 'Empieza a Ordenar', btn2: 'Llámanos: 678-243-0503' },
    contact: { title: 'Contáctanos', subtitle: '¿Listo para ser cliente? ¿Tienes preguntas? Nos encantaría saber de ti.', name: 'Nombre del Restaurante', contactName: 'Tu Nombre', email: 'Correo Electrónico', phone: 'Teléfono', type: 'Tipo de Negocio', typeOpts: ['Restaurante Independiente', 'Food Truck', 'Catering', 'Tienda/Abarrotes', 'Iglesia/Organización', 'Otro'], message: 'Cuéntanos sobre tus necesidades', submit: 'Enviar Consulta' },
    cart: { title: 'Tu Pedido', empty: 'Tu carrito está vacío', emptyMsg: 'Explora nuestro catálogo y agrega artículos para empezar.', subtotal: 'Subtotal', delivery: 'Entrega', deliveryFree: 'GRATIS', total: 'Total Estimado', checkout: 'Solicitar Cotización', remove: 'Eliminar' },
    login: { title: 'Portal de Clientes', subtitle: 'Inicia sesión para administrar pedidos, ver facturas y rastrear entregas.', email: 'Correo Electrónico', password: 'Contraseña', submit: 'Iniciar Sesión', demo: 'Demo: Usa cualquier correo y contraseña "demo"', back: 'Volver al Sitio' },
    dash: { welcome: 'Bienvenido de vuelta', overview: 'General', orders: 'Pedidos', invoices: 'Facturas', reorder: 'Reordenar Rápido', logout: 'Cerrar Sesión' },
    footer: { tagline: 'Tu socio en alimentos y éxito. Hecho por restauranteros, para restauranteros. De familia a familia.', quick: 'Enlaces Rápidos', products: 'Productos', contact: 'Contacto', hours: 'Horario y Ubicación', hoursText: 'Lun-Sáb: 5:00 AM - 6:00 PM', address: 'Newnan, GA 30265', phone: '678-243-0503', rights: '2026 Alamo Food Services. Todos los derechos reservados.' }
  }
};

// ── Translation Helper ──
function t(key) {
  const keys = key.split('.');
  let val = i18n[state.lang];
  for (const k of keys) { val = val?.[k]; }
  return val || key;
}

// ── Initialize ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  setupScrollEffects();
  setupNavigation();
});

// ── Navigation ──
function setupNavigation() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.dataset.nav;
      if (target === 'login') { showLogin(); }
      else if (target === 'dashboard') { showDashboard(); }
      else { navigateTo(target); }
      closeMobileMenu();
    });
  });
}

function navigateTo(section) {
  // If on dashboard or login, go back to home
  document.querySelector('.dashboard-page')?.classList.remove('active');
  document.querySelector('.login-page')?.classList.remove('active');
  document.getElementById('main-site').style.display = 'block';

  if (section === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  else {
    const el = document.getElementById(section);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  // Update active nav
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.querySelector(`.nav-links [data-nav="${section}"]`)?.classList.add('active');
}

// ── Scroll Effects ──
function setupScrollEffects() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Products ──
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const filtered = state.currentCategory === 'all' ? products : products.filter(p => p.category === state.currentCategory);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card reveal">
      <div class="product-img">
        <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:4rem;background:var(--gray-100)">${p.img}</div>
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${state.lang === 'es' ? p.nameEs : p.name}</div>
        <div class="product-meta">${state.lang === 'es' ? p.descEs : p.desc}</div>
        <div class="product-footer">
          <div class="product-price">$${p.price.toFixed(2)} <span class="product-unit">${p.unit}</span></div>
          <button class="add-to-cart" onclick="addToCart(${p.id})" title="Add to cart">+</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe reveals
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function filterProducts(category) {
  state.currentCategory = category;
  document.querySelectorAll('.catalog-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === category));
  renderProducts();
}

// ── Cart ──
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = state.cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { state.cart.push({ ...product, qty: 1 }); }
  updateCartUI();
  openCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  updateCartUI();
  renderCart();
}

function updateQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  updateCartUI();
  renderCart();
}

function updateCartUI() {
  const count = state.cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderCart() {
  const body = document.getElementById('cart-body');
  if (!body) return;
  if (state.cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="icon">🛒</div><p>${t('cart.empty')}</p><p style="font-size:0.82rem;margin-top:8px">${t('cart.emptyMsg')}</p></div>`;
    document.getElementById('cart-footer').style.display = 'none';
    return;
  }
  document.getElementById('cart-footer').style.display = 'block';
  body.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.img}</div>
      <div class="cart-item-info">
        <div class="item-name">${state.lang === 'es' ? item.nameEs : item.name}</div>
        <div class="item-meta">${item.unit}</div>
        <div class="item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-qty">
          <button onclick="updateQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id}, 1)">+</button>
        </div>
        <div class="cart-item-remove" onclick="removeFromCart(${item.id})">${t('cart.remove')}</div>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cart-total').textContent = `$${subtotal.toFixed(2)}`;
}

function openCart() {
  renderCart();
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('active');
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('active');
}

// ── Language Toggle ──
function setLang(lang) {
  state.lang = lang;
  document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  // Re-render dynamic content
  renderProducts();
  renderCart();
  updateTextContent();
}

function updateTextContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) { el.innerHTML = val; }
  });
}

// ── Login ──
function showLogin() {
  document.getElementById('main-site').style.display = 'none';
  document.querySelector('.dashboard-page')?.classList.remove('active');
  document.querySelector('.login-page').classList.add('active');
}

function handleLogin(e) {
  e.preventDefault();
  const pw = document.getElementById('login-password').value;
  if (pw === 'demo' || pw === '') {
    state.isLoggedIn = true;
    showDashboard();
  } else {
    alert('Use password "demo" to access the demo dashboard');
  }
}

function logout() {
  state.isLoggedIn = false;
  document.querySelector('.dashboard-page').classList.remove('active');
  document.querySelector('.login-page').classList.remove('active');
  document.getElementById('main-site').style.display = 'block';
  window.scrollTo({ top: 0 });
}

// ── Dashboard ──
function showDashboard() {
  document.getElementById('main-site').style.display = 'none';
  document.querySelector('.login-page')?.classList.remove('active');
  document.querySelector('.dashboard-page').classList.add('active');
  window.scrollTo({ top: 0 });
}

// ── Mobile Menu ──
function openMobileMenu() {
  document.getElementById('mobile-menu').classList.add('open');
  document.getElementById('mobile-overlay').classList.add('active');
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('active');
}

// ── Form Submit ──
function handleContact(e) {
  e.preventDefault();
  const msg = state.lang === 'es'
    ? '¡Gracias! Nos pondremos en contacto contigo dentro de 24 horas.'
    : 'Thank you! We\'ll be in touch within 24 hours.';
  alert(msg);
  e.target.reset();
}

function handleQuote() {
  const msg = state.lang === 'es'
    ? `¡Cotización solicitada! ${state.cart.length} artículo(s). Te contactaremos pronto.`
    : `Quote requested! ${state.cart.length} item(s). We'll contact you shortly.`;
  alert(msg);
  state.cart = [];
  updateCartUI();
  closeCart();
}
