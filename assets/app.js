/* ============================================
   ALAMO FOOD SERVICES — App v3
   Full functional backend simulation
   localStorage-backed products, orders, cart
   ============================================ */

// ── State ──
const state = { cart: [], lang: 'en', loggedIn: false, role: null, category: 'all', search: '' };

// ── Default Products (seed data) ──
const defaultProducts = [
  { id:1, name:'Queso Oaxaca', nameEs:'Queso Oaxaca', cat:'dairy', price:4.25, unit:'/lb', badge:'popular', active:true, stock:620, desc:'Traditional string cheese, perfect for quesadillas and fundido', descEs:'Queso de hebra tradicional, perfecto para quesadillas y fundido' },
  { id:2, name:'Queso Fresco', nameEs:'Queso Fresco', cat:'dairy', price:3.89, unit:'/lb', badge:'', active:true, stock:450, desc:'Fresh crumbling cheese for tacos, elotes, and salads', descEs:'Queso fresco para tacos, elotes y ensaladas' },
  { id:3, name:'Queso Chihuahua', nameEs:'Queso Chihuahua', cat:'dairy', price:5.10, unit:'/lb', badge:'new', active:true, stock:280, desc:'Semi-soft melting cheese, ideal for fundido', descEs:'Queso semi-suave para fundido' },
  { id:4, name:'Crema Mexicana', nameEs:'Crema Mexicana', cat:'dairy', price:3.50, unit:'/qt', badge:'', active:true, stock:48, desc:'Rich Mexican-style table cream', descEs:'Crema mexicana rica para mesa' },
  { id:5, name:'Requesón', nameEs:'Requesón', cat:'dairy', price:4.99, unit:'/lb', badge:'', active:true, stock:120, desc:'Fresh ricotta-style cheese for gorditas', descEs:'Queso fresco tipo ricotta para gorditas' },
  { id:6, name:'Masa Harina — 50lb', nameEs:'Masa Harina — 50lb', cat:'dry', price:12.99, unit:'/bag', badge:'popular', active:true, stock:340, desc:'Premium corn flour for tortillas and tamales', descEs:'Harina de maíz premium para tortillas y tamales' },
  { id:7, name:'Chile Guajillo Seco', nameEs:'Chile Guajillo Seco', cat:'dry', price:8.75, unit:'/lb', badge:'', active:true, stock:28, desc:'Essential dried chile for salsas and adobo', descEs:'Chile seco esencial para salsas y adobo' },
  { id:8, name:'Chile Ancho Seco', nameEs:'Chile Ancho Seco', cat:'dry', price:9.25, unit:'/lb', badge:'', active:true, stock:65, desc:'Rich, mild dried poblano for mole and sauces', descEs:'Poblano seco rico y suave para mole' },
  { id:9, name:'Chile de Árbol', nameEs:'Chile de Árbol', cat:'dry', price:11.50, unit:'/lb', badge:'', active:true, stock:42, desc:'Hot and smoky, essential for table salsa', descEs:'Picante y ahumado, para salsa de mesa' },
  { id:10, name:'Corn Tortillas — Case', nameEs:'Tortillas de Maíz — Caja', cat:'dry', price:18.99, unit:'/case', badge:'popular', active:true, stock:840, desc:'6" white corn, 30 dozen per case', descEs:'6" maíz blanco, 30 docenas por caja' },
  { id:11, name:'Flour Tortillas — Case', nameEs:'Tortillas de Harina — Caja', cat:'dry', price:22.50, unit:'/case', badge:'', active:true, stock:120, desc:'10" flour tortillas, 12 dozen per case', descEs:'10" harina, 12 docenas por caja' },
  { id:12, name:'Tostadas — Case', nameEs:'Tostadas — Caja', cat:'dry', price:14.50, unit:'/case', badge:'', active:true, stock:90, desc:'Crispy corn tostada shells, 200ct', descEs:'Tostadas de maíz crujientes, 200ct' },
  { id:13, name:'Beef Chuck Roll — USDA Choice', nameEs:'Rollo de Res Chuck — USDA Choice', cat:'meat', price:6.89, unit:'/lb', badge:'', active:true, stock:500, desc:'Premium cut, ideal for barbacoa and birria', descEs:'Corte premium, ideal para barbacoa y birria' },
  { id:14, name:'Pork Butt — Bone-In', nameEs:'Pierna de Cerdo — Con Hueso', cat:'meat', price:2.99, unit:'/lb', badge:'sale', active:true, stock:1400, desc:'Perfect for carnitas, whole muscle', descEs:'Perfecto para carnitas, músculo entero' },
  { id:15, name:'Chicken Leg Quarters — 40lb', nameEs:'Piernas de Pollo — 40lb', cat:'meat', price:1.29, unit:'/lb', badge:'', active:true, stock:2200, desc:'Fresh never frozen, 40lb case', descEs:'Fresco nunca congelado, caja de 40lb' },
  { id:16, name:'Chorizo — Bulk', nameEs:'Chorizo — A Granel', cat:'meat', price:3.75, unit:'/lb', badge:'popular', active:true, stock:180, desc:'Traditional Mexican pork chorizo', descEs:'Chorizo de cerdo mexicano tradicional' },
  { id:17, name:'Tripas de Res', nameEs:'Tripas de Res', cat:'meat', price:3.49, unit:'/lb', badge:'', active:false, stock:0, desc:'Cleaned beef intestines, grill-ready', descEs:'Tripas de res limpias, listas para asar' },
  { id:18, name:'Carne para Tacos — Pre-cut', nameEs:'Carne para Tacos — Pre-cortada', cat:'meat', price:5.49, unit:'/lb', badge:'new', active:true, stock:320, desc:'Thinly sliced beef for tacos al carbon', descEs:'Res en rebanadas finas para tacos al carbón' },
  { id:19, name:'Roma Tomatoes', nameEs:'Tomate Roma', cat:'produce', price:1.49, unit:'/lb', badge:'', active:true, stock:800, desc:'Firm, meaty — ideal for salsa roja', descEs:'Firme, carnoso — ideal para salsa roja' },
  { id:20, name:'Tomatillos', nameEs:'Tomatillos', cat:'produce', price:1.79, unit:'/lb', badge:'', active:true, stock:400, desc:'Fresh with husk, for salsa verde', descEs:'Frescos con cáscara, para salsa verde' },
  { id:21, name:'Jalapeños', nameEs:'Jalapeños', cat:'produce', price:1.29, unit:'/lb', badge:'', active:true, stock:350, desc:'Fresh green jalapeños, medium heat', descEs:'Jalapeños verdes frescos, picor medio' },
  { id:22, name:'Serrano Peppers', nameEs:'Chile Serrano', cat:'produce', price:1.99, unit:'/lb', badge:'', active:true, stock:200, desc:'Hot and bright, essential for salsas', descEs:'Picante y brillante, esencial para salsas' },
  { id:23, name:'Avocados Hass — Case 48ct', nameEs:'Aguacates Hass — Caja 48ct', cat:'produce', price:42.00, unit:'/case', badge:'popular', active:true, stock:42, desc:'Mexico origin, restaurant grade', descEs:'Origen México, grado restaurante' },
  { id:24, name:'White Onions — 50lb', nameEs:'Cebolla Blanca — 50lb', cat:'produce', price:18.99, unit:'/bag', badge:'', active:true, stock:60, desc:'Jumbo white onions, restaurant staple', descEs:'Cebolla blanca jumbo, básico de restaurante' },
  { id:25, name:'Cilantro — 30 Bunch Case', nameEs:'Cilantro — Caja 30 Manojos', cat:'produce', price:14.99, unit:'/case', badge:'', active:true, stock:35, desc:'Fresh bunched cilantro', descEs:'Cilantro fresco en manojos' },
  { id:26, name:'Limes — Case', nameEs:'Limones — Caja', cat:'produce', price:28.00, unit:'/case', badge:'', active:true, stock:28, desc:'Mexican key limes, 200ct case', descEs:'Limones mexicanos, caja 200ct' },
  { id:27, name:'Vegetable Oil — 35lb', nameEs:'Aceite Vegetal — 35lb', cat:'supplies', price:24.99, unit:'/jug', badge:'', active:true, stock:36, desc:'High-heat frying oil, restaurant grade', descEs:'Aceite para freír, grado restaurante' },
  { id:28, name:'To-Go Containers — 500ct', nameEs:'Contenedores Para Llevar — 500ct', cat:'supplies', price:38.50, unit:'/case', badge:'', active:true, stock:48, desc:'3-compartment foam, hinged lid', descEs:'3 compartimentos, tapa con bisagra' },
  { id:29, name:'Aluminum Foil Heavy — 1000ft', nameEs:'Papel Aluminio — 1000ft', cat:'supplies', price:42.00, unit:'/roll', badge:'', active:true, stock:24, desc:'18" x 1000ft heavy duty', descEs:'18" x 1000ft uso pesado' },
  { id:30, name:'Nitrile Gloves — 100ct', nameEs:'Guantes de Nitrilo — 100ct', cat:'supplies', price:9.49, unit:'/box', badge:'', active:true, stock:120, desc:'Powder-free, food service grade', descEs:'Sin polvo, grado alimentario' },
];

// ── Default Orders (seed) ──
const defaultOrders = [
  { id:'ALM-2847', date:'2026-05-08', customer:'Taqueria El Sol', items:[{name:'Queso Oaxaca',qty:10,price:4.25},{name:'Corn Tortillas',qty:2,price:18.99},{name:'Pork Butt',qty:30,price:2.99},{name:'Avocados',qty:1,price:42.00}], status:'delivered', total:642.30 },
  { id:'ALM-2839', date:'2026-05-05', customer:'Taqueria El Sol', items:[{name:'Chorizo',qty:8,price:3.75},{name:'Chile Guajillo',qty:4,price:8.75},{name:'Roma Tomatoes',qty:20,price:1.49}], status:'delivered', total:418.75 },
  { id:'ALM-2831', date:'2026-05-02', customer:'Taqueria El Sol', items:[{name:'Queso Oaxaca',qty:12,price:4.25},{name:'Flour Tortillas',qty:3,price:22.50},{name:'White Onions',qty:2,price:18.99}], status:'delivered', total:891.20 },
  { id:'ALM-2825', date:'2026-04-29', customer:'Taqueria El Sol', items:[{name:'Pork Butt',qty:40,price:2.99},{name:'Cilantro',qty:2,price:14.99}], status:'transit', total:567.50 },
  { id:'ALM-3012', date:'2026-05-10', customer:'Hacienda B&G McDonough', items:[{name:'Corn Tortillas',qty:24,price:18.99}], status:'processing', total:4218.50 },
  { id:'ALM-3011', date:'2026-05-10', customer:'Los Mariachis Fairburn', items:[{name:'Queso Oaxaca',qty:15,price:4.25},{name:'Chorizo',qty:12,price:3.75}], status:'transit', total:1842.30 },
  { id:'ALM-3010', date:'2026-05-09', customer:'Zokalo Collage Park', items:[{name:'Masa Harina',qty:10,price:12.99}], status:'delivered', total:3105.75 },
  { id:'ALM-3009', date:'2026-05-09', customer:'The Grove Taqueria', items:[{name:'Beef Chuck',qty:20,price:6.89}], status:'delivered', total:2640.00 },
];

// ── localStorage data layer ──
function loadProducts() {
  const saved = localStorage.getItem('alamo_products');
  if (saved) return JSON.parse(saved);
  localStorage.setItem('alamo_products', JSON.stringify(defaultProducts));
  return [...defaultProducts];
}
function saveProducts(p) { localStorage.setItem('alamo_products', JSON.stringify(p)); }
function loadOrders() {
  const saved = localStorage.getItem('alamo_orders');
  if (saved) return JSON.parse(saved);
  localStorage.setItem('alamo_orders', JSON.stringify(defaultOrders));
  return [...defaultOrders];
}
function saveOrders(o) { localStorage.setItem('alamo_orders', JSON.stringify(o)); }
function loadCart() {
  const saved = localStorage.getItem('alamo_cart');
  if (saved) { state.cart = JSON.parse(saved); }
}
function saveCart() { localStorage.setItem('alamo_cart', JSON.stringify(state.cart)); }

let products = loadProducts();
let orders = loadOrders();

// ── Translations (compact — key areas) ──
const i18n = {
  en: {
    'hero.kicker':'RESTAURANT-QUALITY PRODUCTS AT WAREHOUSE PRICING','hero.h1':'More Than a Distributor.<br><span>We\'re Your Partner.</span>','hero.desc':'Built by restauranteros, for restauranteros. We supply 16+ restaurants of our own — so we know exactly what your kitchen needs. No contracts. No minimums. Just honest service.','hero.cta1':'Browse Products','hero.cta2':'Become a Customer','hero.s1':'Products','hero.s2':'Restaurants Served','hero.s3':'Years in Atlanta',
    'savings.text':'<span>How much could you save?</span> Send us your current invoice — we\'ll show you the difference.','savings.cta1':'Send Your Invoice','savings.cta2':'Call for Price Match',
    'v1.h':'Restauranteros Helping Restauranteros','v1.p':'We own 16+ restaurants. We\'ve lived your challenges.','v2.h':'Best Price. Best Quality.','v2.p':'Volume pricing passed directly to you. No hidden fees.','v3.h':'Reliable Delivery. Real People.','v3.p':'We answer the phone and show up on time. Every time.','v4.h':'No Contracts. No Minimums.','v4.p':'We earn your business every delivery, not with fine print.',
    'about.kicker':'Our Story','about.h2':'It Started in the Kitchen.<br>It Started Out of Necessity.','about.p1':'In 2021, during the pandemic, our founder saw firsthand how hard it was for restaurants to get the products they needed — on time and at a fair price.','about.p2':'So he started Alamo Food Services as a mission to help fellow restauranteros survive and thrive. What began as supply for our own restaurants quickly grew as other owners asked for the same help.','about.p3':'Today, we serve restaurants, food trucks, schools, and businesses across the Southeast with quality products at the best prices.',
    'catalog.kicker':'Wholesale Catalog','catalog.h2':'Product Catalog','catalog.p':'Restaurant-grade ingredients at wholesale prices. Sign in to see pricing and place orders.','catalog.search':'Search products...','catalog.all':'All','catalog.dairy':'Dairy & Cheese','catalog.meat':'Meat & Protein','catalog.produce':'Fresh Produce','catalog.dry':'Dry Goods','catalog.supplies':'Supplies',
    'services.kicker':'What Makes Us Different','services.h2':'Why Alamo?','services.p':'We\'re not Sysco. We\'re not Restaurant Depot. Here\'s why that matters.',
    's1.h':'We Own 16+ Restaurants','s1.p':'We don\'t just supply food — we serve it.','s2.h':'Order by Text — In Spanish','s2.p':'Text us your order in Spanish and we\'ll confirm, price, and deliver.','s3.h':'Authentic Mexican Products','s3.p':'Real brands your kitchen depends on — not generic substitutes.','s4.h':'Reliable Next-Day Delivery','s4.p':'Complete. On time. Every time.','s5.h':'Transparent Pricing','s5.p':'No hidden fees. No price creep. What we quote is what you pay.','s6.h':'No Contracts. No Minimums.','s6.p':'Order what you need, when you need it.',
    'mp.kicker':'Coming Soon','mp.h2':'Hacienda Marketplace','mp.p':'Wholesale prices. Open to the public.',
    'mp.c1':'Warehouse shopping','mp.c2':'Mexican restaurant','mp.c3':'Wholesale prices','mp.c4':'Open to the public',
    'test.kicker':'Trusted by Restaurants','test.h2':'What Our Customers Say',
    'careers.kicker':'Join Our Team','careers.h2':'Build Your Career at Alamo','careers.p':'We\'re growing and looking for hard-working people.',
    'cta.h2':'Ready to Save on Your Food Costs?','cta.p':'Join the growing family. No contracts, no minimums.','cta.btn1':'Become a Customer','cta.btn2':'Call 678-243-0503',
    'contact.kicker':'Let\'s Talk','contact.h2':'Get In Touch','contact.p':'Ready to become a customer?','contact.submit':'Submit Inquiry',
    'nav.home':'Home','nav.products':'Products','nav.about':'About','nav.services':'Why Alamo','nav.careers':'Careers','nav.contact':'Contact','nav.signin':'Sign In',
    'footer.tagline':'Your partner in food and success. De familia a familia.','p.locked':'Sign in for pricing',
    'cart.title':'Your Order','cart.empty':'Your cart is empty','cart.remove':'Remove','dash.logout':'Log Out',
    'login.h2':'Sign In','login.sub':'Access your account to view pricing, place orders, and manage deliveries.','login.customer':'Customer','login.admin':'Alamo Admin','login.email':'Email','login.password':'Password','login.submit':'Sign In','login.back':'Back to Website',
    'we.serve':'We Serve','perks.h':'Why Work at Alamo',
  },
  es: {
    'hero.kicker':'PRODUCTOS DE CALIDAD RESTAURANTERA A PRECIOS DE MAYOREO','hero.h1':'Más Que un Distribuidor.<br><span>Somos Tu Socio.</span>','hero.desc':'Hecho por restauranteros, para restauranteros. Surtimos más de 16 restaurantes propios. Sin contratos. Sin mínimos.','hero.cta1':'Ver Productos','hero.cta2':'Hazte Cliente','hero.s1':'Productos','hero.s2':'Restaurantes Servidos','hero.s3':'Años en Atlanta',
    'savings.text':'<span>¿Cuánto podrías ahorrar?</span> Envíanos tu factura actual.','savings.cta1':'Enviar Factura','savings.cta2':'Llamar para Cotización',
    'v1.h':'Restauranteros Ayudando Restauranteros','v1.p':'Somos dueños de 16+ restaurantes.','v2.h':'Mejor Precio. Mejor Calidad.','v2.p':'Precios de volumen directo. Sin cargos ocultos.','v3.h':'Entrega Confiable. Gente Real.','v3.p':'Contestamos el teléfono y llegamos a tiempo.','v4.h':'Sin Contratos. Sin Mínimos.','v4.p':'Nos ganamos tu negocio en cada entrega.',
    'about.kicker':'Nuestra Historia','about.h2':'Empezó en la Cocina.<br>Empezó por Necesidad.','about.p1':'En 2021, nuestro fundador vio lo difícil que era conseguir productos a tiempo y a precio justo.','about.p2':'Empezó Alamo Food Services como misión para ayudar a otros restauranteros.','about.p3':'Hoy servimos restaurantes, food trucks, escuelas y negocios en todo el sureste.',
    'catalog.kicker':'Catálogo Mayoreo','catalog.h2':'Catálogo de Productos','catalog.p':'Ingredientes a precios de mayoreo. Inicia sesión para ver precios.','catalog.search':'Buscar productos...','catalog.all':'Todos','catalog.dairy':'Lácteos','catalog.meat':'Carnes','catalog.produce':'Frescos','catalog.dry':'Abarrotes','catalog.supplies':'Suministros',
    'services.kicker':'Lo Que Nos Hace Diferentes','services.h2':'¿Por Qué Alamo?','services.p':'No somos Sysco. No somos Restaurant Depot.',
    's1.h':'Somos Dueños de 16+ Restaurantes','s1.p':'No solo surtimos — servimos comida todos los días.','s2.h':'Ordena por Texto — En Español','s2.p':'Envíanos tu pedido por texto y confirmamos.','s3.h':'Productos Mexicanos Auténticos','s3.p':'Marcas reales, no sustitutos genéricos.','s4.h':'Entrega al Día Siguiente','s4.p':'Completo. A tiempo. Siempre.','s5.h':'Precios Transparentes','s5.p':'Sin cargos ocultos. Lo que cotizamos es lo que pagas.','s6.h':'Sin Contratos. Sin Mínimos.','s6.p':'Ordena lo que necesites, cuando lo necesites.',
    'mp.kicker':'Próximamente','mp.h2':'Hacienda Marketplace','mp.p':'Precios de mayoreo. Abierto al público.',
    'mp.c1':'Compras en almacén','mp.c2':'Restaurante mexicano','mp.c3':'Precios de mayoreo','mp.c4':'Abierto al público',
    'test.kicker':'Confianza de Restaurantes','test.h2':'Lo Que Dicen Nuestros Clientes',
    'careers.kicker':'Únete al Equipo','careers.h2':'Construye Tu Carrera en Alamo','careers.p':'Estamos creciendo.',
    'cta.h2':'¿Listo Para Ahorrar?','cta.p':'Únete a la familia. Sin contratos, sin mínimos.','cta.btn1':'Hazte Cliente','cta.btn2':'Llama al 678-243-0503',
    'contact.kicker':'Hablemos','contact.h2':'Contáctanos','contact.p':'¿Listo para ser cliente?','contact.submit':'Enviar Consulta',
    'nav.home':'Inicio','nav.products':'Productos','nav.about':'Nosotros','nav.services':'Por Qué Alamo','nav.careers':'Carreras','nav.contact':'Contacto','nav.signin':'Iniciar Sesión',
    'footer.tagline':'Tu socio en alimentos y éxito. De familia a familia.','p.locked':'Inicia sesión para ver precios',
    'cart.title':'Tu Pedido','cart.empty':'Tu carrito está vacío','cart.remove':'Eliminar','dash.logout':'Cerrar Sesión',
    'login.h2':'Iniciar Sesión','login.sub':'Accede a tu cuenta para ver precios y hacer pedidos.','login.customer':'Cliente','login.admin':'Admin Alamo','login.email':'Correo','login.password':'Contraseña','login.submit':'Iniciar Sesión','login.back':'Volver al Sitio',
    'we.serve':'Servimos A','perks.h':'Por Qué Trabajar en Alamo',
  }
};
function T(en,es){return state.lang==='es'?es:en;}

// ── Init ──
document.addEventListener('DOMContentLoaded',()=>{
  loadCart();
  renderProducts();
  updateCartCount();
  setupScroll();
  setupNav();
});

function setupScroll(){
  const h=document.querySelector('.header');
  window.addEventListener('scroll',()=>h?.classList.toggle('scrolled',window.scrollY>40));
  const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')});},{threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}
function setupNav(){
  document.querySelectorAll('[data-nav]').forEach(el=>{
    el.addEventListener('click',e=>{e.preventDefault();const t=el.dataset.nav;if(t==='login')showLogin();else goTo(t);closeMobile();});
  });
}
function goTo(id){showSite();setTimeout(()=>{const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});else window.scrollTo({top:0,behavior:'smooth'});},50);}
function showSite(){document.getElementById('main-site').style.display='';document.getElementById('page-login').classList.remove('active');document.getElementById('page-dash').classList.remove('active');document.querySelector('.header').style.display='';}
function showLogin(){document.getElementById('main-site').style.display='none';document.querySelector('.header').style.display='none';document.getElementById('page-dash').classList.remove('active');document.getElementById('page-login').classList.add('active');window.scrollTo(0,0);}
function showDash(){document.getElementById('main-site').style.display='none';document.querySelector('.header').style.display='none';document.getElementById('page-login').classList.remove('active');document.getElementById('page-dash').classList.add('active');dashTab='overview';renderDashboard();window.scrollTo(0,0);}
function handleLogin(e){e.preventDefault();state.role=document.querySelector('.login-tab.active')?.dataset.role||'customer';state.loggedIn=true;showDash();renderProducts();}
function setLoginTab(role){document.querySelectorAll('.login-tab').forEach(t=>t.classList.toggle('active',t.dataset.role===role));const d=document.getElementById('demo-creds');d.innerHTML=role==='owner'?(state.lang==='es'?'<strong>Demo Admin</strong> — Correo: owner@alamo.com / Contraseña: demo':'<strong>Owner Demo</strong> — Email: owner@alamo.com / Password: demo'):(state.lang==='es'?'<strong>Demo Cliente</strong> — Correo: demo@restaurant.com / Contraseña: demo':'<strong>Customer Demo</strong> — Email: demo@restaurant.com / Password: demo');}
function logout(){state.loggedIn=false;state.role=null;showSite();renderProducts();window.scrollTo(0,0);}

// ── Language ──
function setLang(l){
  state.lang=l;
  document.querySelectorAll('.lang-toggle button').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
  document.querySelectorAll('[data-i18n]').forEach(el=>{const v=i18n[l]?.[el.dataset.i18n];if(v)el.innerHTML=v;});
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{const v=i18n[l]?.[el.dataset.i18nPh];if(v)el.placeholder=v;});
  renderProducts();renderCart();
  if(document.getElementById('page-dash')?.classList.contains('active'))renderDashboard();
  // update login creds
  const d=document.getElementById('demo-creds');if(d){const r=document.querySelector('.login-tab.active')?.dataset.role||'customer';setLoginTab(r);}
}

// ── Products (public page) ──
function renderProducts(){
  const grid=document.getElementById('products-grid');if(!grid)return;
  let list=products.filter(p=>p.active);
  if(state.category!=='all')list=list.filter(p=>p.cat===state.category);
  if(state.search){const q=state.search.toLowerCase();list=list.filter(p=>p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)||p.nameEs.toLowerCase().includes(q));}
  if(!list.length){grid.innerHTML='<div class="products-empty"><p>No products found.</p></div>';return;}
  grid.innerHTML=list.map(p=>`
    <div class="product-card">
      <div class="p-img">${p.badge?`<span class="p-badge badge-${p.badge}">${p.badge}</span>`:''}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
      <div class="p-body"><div class="p-cat">${p.cat}</div><div class="p-name">${state.lang==='es'?p.nameEs:p.name}</div><div class="p-desc">${state.lang==='es'?p.descEs:p.desc}</div>
        <div class="p-foot">${state.loggedIn?`<div class="p-price">$${p.price.toFixed(2)} <span class="p-unit">${p.unit}</span></div><button class="p-add" onclick="addToCart(${p.id})">+</button>`:`<div class="p-locked">${i18n[state.lang]?.['p.locked']||'Sign in for pricing'}</div><button class="btn btn-sm btn-outline" onclick="showLogin()">${i18n[state.lang]?.['nav.signin']||'Sign In'}</button>`}</div>
      </div></div>`).join('');
}
function filterCat(cat){state.category=cat;document.querySelectorAll('.catalog-tab').forEach(t=>t.classList.toggle('active',t.dataset.cat===cat));renderProducts();}
function searchProducts(v){state.search=v;renderProducts();}

// ── Cart ──
function addToCart(id){const p=products.find(x=>x.id===id);if(!p)return;const e=state.cart.find(i=>i.id===id);if(e)e.qty++;else state.cart.push({id:p.id,name:p.name,nameEs:p.nameEs,price:p.price,unit:p.unit,qty:1});updateCartCount();saveCart();openCart();}
function removeFromCart(id){state.cart=state.cart.filter(i=>i.id!==id);updateCartCount();saveCart();renderCart();}
function updateQty(id,d){const i=state.cart.find(x=>x.id===id);if(!i)return;i.qty+=d;if(i.qty<=0){removeFromCart(id);return;}updateCartCount();saveCart();renderCart();}
function updateCartCount(){const c=state.cart.reduce((s,i)=>s+i.qty,0);document.querySelectorAll('.cart-count').forEach(el=>{el.textContent=c;el.style.display=c>0?'flex':'none';});}
function renderCart(){
  const body=document.getElementById('cart-body'),footer=document.getElementById('cart-footer');if(!body)return;
  if(!state.cart.length){body.innerHTML=`<div class="cart-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><p>${i18n[state.lang]?.['cart.empty']||'Your cart is empty'}</p></div>`;footer.style.display='none';return;}
  footer.style.display='';
  body.innerHTML=state.cart.map(i=>`<div class="cart-item"><div class="cart-item-img"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/></svg></div><div class="cart-item-info"><div class="ci-name">${state.lang==='es'?i.nameEs:i.name}</div><div class="ci-meta">${i.unit}</div><div class="ci-price">$${(i.price*i.qty).toFixed(2)}</div><div class="cart-qty"><button onclick="updateQty(${i.id},-1)">-</button><span>${i.qty}</span><button onclick="updateQty(${i.id},1)">+</button></div><div class="cart-remove" onclick="removeFromCart(${i.id})">${i18n[state.lang]?.['cart.remove']||'Remove'}</div></div></div>`).join('');
  const sub=state.cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('cart-sub').textContent=`$${sub.toFixed(2)}`;document.getElementById('cart-total').textContent=`$${sub.toFixed(2)}`;
}
function openCart(){renderCart();document.getElementById('cart-drawer').classList.add('open');document.getElementById('overlay').classList.add('active');}
function closeCart(){document.getElementById('cart-drawer').classList.remove('open');document.getElementById('overlay').classList.remove('active');}
function placeOrder(){
  if(!state.cart.length)return;
  const o={id:'ALM-'+Math.floor(3000+Math.random()*1000),date:new Date().toISOString().split('T')[0],customer:'Taqueria El Sol',items:state.cart.map(i=>({name:i.name,qty:i.qty,price:i.price})),status:'processing',total:state.cart.reduce((s,i)=>s+i.price*i.qty,0)};
  orders.unshift(o);saveOrders(orders);
  alert(T(`Order #${o.id} placed! Total: $${o.total.toFixed(2)}. Delivery scheduled for tomorrow morning.`,`Pedido #${o.id} realizado! Total: $${o.total.toFixed(2)}. Entrega programada para mañana.`));
  state.cart=[];saveCart();updateCartCount();closeCart();
  if(document.getElementById('page-dash')?.classList.contains('active'))renderDashboard();
}
function openMobile(){document.getElementById('mobile-menu').classList.add('open');document.getElementById('overlay').classList.add('active');}
function closeMobile(){document.getElementById('mobile-menu').classList.remove('open');document.getElementById('overlay').classList.remove('active');}

// ── Dashboard ──
let dashTab='overview';
function setDashTab(tab){dashTab=tab;document.querySelectorAll('.dash-tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));renderDashboard();}

function renderDashboard(){
  const el=document.getElementById('dash-content'),tabBar=document.getElementById('dash-tabs');
  if(tabBar){
    if(state.role==='owner'){
      tabBar.innerHTML=`<button class="dash-tab${dashTab==='overview'?' active':''}" data-tab="overview" onclick="setDashTab('overview')">${T('Overview','General')}</button><button class="dash-tab${dashTab==='customers'?' active':''}" data-tab="customers" onclick="setDashTab('customers')">${T('Customers','Clientes')}</button><button class="dash-tab${dashTab==='orders'?' active':''}" data-tab="orders" onclick="setDashTab('orders')">${T('Orders','Pedidos')}</button><button class="dash-tab${dashTab==='inventory'?' active':''}" data-tab="inventory" onclick="setDashTab('inventory')">${T('Products','Productos')}</button><button class="dash-tab${dashTab==='invoices'?' active':''}" data-tab="invoices" onclick="setDashTab('invoices')">${T('Invoices','Facturas')}</button><button class="dash-tab${dashTab==='fleet'?' active':''}" data-tab="fleet" onclick="setDashTab('fleet')">${T('Fleet','Flota')}</button>`;
    } else {
      tabBar.innerHTML=`<button class="dash-tab${dashTab==='overview'?' active':''}" data-tab="overview" onclick="setDashTab('overview')">${T('Overview','General')}</button><button class="dash-tab${dashTab==='shop'?' active':''}" data-tab="shop" onclick="setDashTab('shop')">${T('Shop & Order','Ordenar')}</button><button class="dash-tab${dashTab==='orders'?' active':''}" data-tab="orders" onclick="setDashTab('orders')">${T('My Orders','Mis Pedidos')}</button><button class="dash-tab${dashTab==='invoices'?' active':''}" data-tab="invoices" onclick="setDashTab('invoices')">${T('Invoices','Facturas')}</button><button class="dash-tab${dashTab==='reorder'?' active':''}" data-tab="reorder" onclick="setDashTab('reorder')">${T('Quick Reorder','Reordenar')}</button>`;
    }
  }
  if(state.role==='owner'){({overview:ownerOverview,customers:ownerCustomers,orders:ownerOrders,inventory:ownerProducts,invoices:ownerInvoices,fleet:ownerFleet}[dashTab]||ownerOverview)(el);}
  else{({overview:custOverview,shop:custShop,orders:custOrders,invoices:custInvoices,reorder:custReorder}[dashTab]||custOverview)(el);}
}

// ═══════════════════════════════════════════
// OWNER DASHBOARD
// ═══════════════════════════════════════════
function ownerOverview(el){
  const totalRev=978436;const extRev=81373;const totalOrders=orders.length;
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Operations Dashboard','Panel de Operaciones')}</h2><p>${T('Business overview','Resumen del negocio')} — ${T('May 2026','mayo 2026')}</p></div>
  <div class="stat-cards"><div class="stat-card"><div class="sc-label">${T('Monthly Revenue','Ingresos Mensuales')}</div><div class="sc-value">$978,436</div><div class="sc-change sc-up">+8.2%</div></div><div class="stat-card"><div class="sc-label">${T('External Revenue','Ingresos Externos')}</div><div class="sc-value">$81,373</div><div class="sc-change sc-neutral">8.3%</div></div><div class="stat-card"><div class="sc-label">${T('Active Products','Productos Activos')}</div><div class="sc-value">${products.filter(p=>p.active).length}</div><div class="sc-change sc-neutral">${products.length} ${T('total','total')}</div></div><div class="stat-card"><div class="sc-label">${T('Pending Orders','Pedidos Pendientes')}</div><div class="sc-value">${orders.filter(o=>o.status!=='delivered').length}</div><div class="sc-change sc-up">${orders.length} ${T('total','total')}</div></div></div>
  <div class="dash-grid"><div><div class="dash-panel"><h4>${T('Recent Orders','Pedidos Recientes')}</h4>${orders.slice(0,6).map(o=>`<div class="d-row"><div><strong>#${o.id}</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">${o.date} — ${o.customer}</span></div><div style="text-align:right">$${o.total.toFixed(2)}<br><span class="d-status ${statusClass(o.status)}">${statusLabel(o.status)}</span></div></div>`).join('')}</div></div>
  <div><div class="dash-panel"><h4>${T('Revenue Split','Desglose de Ingresos')}</h4><div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px"><span>${T('Internal','Interno')}</span><span style="font-weight:700">56.1%</span></div><div class="progress-bar"><div class="fill fill-green" style="width:56.1%"></div></div></div><div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px"><span>${T('TBD Status','Estatus TBD')}</span><span style="font-weight:700">31.3%</span></div><div class="progress-bar"><div class="fill fill-gold" style="width:31.3%"></div></div></div><div><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px"><span>${T('External','Externo')}</span><span style="font-weight:700">8.3%</span></div><div class="progress-bar"><div class="fill fill-red" style="width:8.3%"></div></div></div></div>
  <div class="dash-panel"><h4>${T('Alerts','Alertas')}</h4>${products.filter(p=>p.stock<50&&p.active).map(p=>`<div class="d-row" style="color:var(--gold)"><div><strong>${T('Low Stock','Stock Bajo')}</strong> — ${p.name}</div><div>${p.stock} ${p.unit.replace('/','')}</div></div>`).join('')}<div class="d-row" style="color:var(--red)"><div><strong>${T('AR Past Due','CxC Vencida')}</strong> — Santa Maria</div><div>$14,715</div></div></div></div></div>`;
}

function ownerCustomers(el){
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Customer Accounts','Cuentas de Clientes')}</h2><p>${T('All active accounts','Todas las cuentas activas')}</p></div>
  <div class="dash-panel"><table class="customer-table"><thead><tr><th>${T('Account','Cuenta')}</th><th>${T('Revenue','Ingresos')}</th><th>%</th><th>${T('Type','Tipo')}</th><th>${T('Health','Salud')}</th></tr></thead><tbody>
  <tr><td>Hacienda B&G McDonough</td><td>$115,011</td><td>11.8%</td><td>Internal</td><td><span class="health-dot dot-green"></span></td></tr>
  <tr><td>The Grove Taqueria</td><td>$76,854</td><td>7.9%</td><td>Internal</td><td><span class="health-dot dot-green"></span></td></tr>
  <tr><td>Zokalo Collage Park</td><td>$76,787</td><td>7.8%</td><td>TBD</td><td><span class="health-dot dot-yellow"></span></td></tr>
  <tr><td>Los Mariachis Fairburn</td><td>$61,966</td><td>6.3%</td><td>External</td><td><span class="health-dot dot-green"></span></td></tr>
  <tr><td>Hacienda B&G Buford</td><td>$59,935</td><td>6.1%</td><td>Internal</td><td><span class="health-dot dot-green"></span></td></tr>
  <tr><td>Taqueria El Sol</td><td>$8,420</td><td>0.9%</td><td>External</td><td><span class="health-dot dot-green"></span></td></tr>
  <tr><td>Santa Maria Restaurant</td><td>$14,715</td><td>1.5%</td><td>External</td><td><span class="health-dot dot-red"></span></td></tr>
  </tbody></table></div>`;
}

function statusLabel(s){return s==='delivered'?T('Delivered','Entregado'):s==='transit'?T('In Transit','En Tránsito'):T('Processing','Procesando');}
function statusClass(s){return s==='delivered'?'st-delivered':s==='transit'?'st-transit':'st-processing';}

function ownerOrders(el){
  el.innerHTML=`<div class="dash-welcome"><h2>${T('All Orders','Todos los Pedidos')}</h2><p>${orders.length} ${T('orders in system','pedidos en sistema')}</p></div>
  <div class="dash-panel"><table class="customer-table"><thead><tr><th>#</th><th>${T('Date','Fecha')}</th><th>${T('Customer','Cliente')}</th><th>${T('Items','Artículos')}</th><th>${T('Total','Total')}</th><th>${T('Status','Estado')}</th><th></th></tr></thead><tbody>
  ${orders.map(o=>`<tr><td><strong>${o.id}</strong></td><td>${o.date}</td><td>${o.customer}</td><td>${o.items.length}</td><td>$${o.total.toFixed(2)}</td><td><span class="d-status ${statusClass(o.status)}">${statusLabel(o.status)}</span></td><td>${o.status!=='delivered'?`<select onchange="updateOrderStatus('${o.id}',this.value)" style="font-size:0.75rem;padding:4px 8px;border:1px solid var(--gray-300);border-radius:4px"><option value="processing" ${o.status==='processing'?'selected':''}>${T('Processing','Procesando')}</option><option value="transit" ${o.status==='transit'?'selected':''}>${T('In Transit','En Tránsito')}</option><option value="delivered" ${o.status==='delivered'?'selected':''}>${T('Delivered','Entregado')}</option></select>`:''}</td></tr>`).join('')}
  </tbody></table></div>`;
}

function updateOrderStatus(id,status){
  const o=orders.find(x=>x.id===id);if(o){o.status=status;saveOrders(orders);renderDashboard();}
}

function ownerProducts(el){
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Product Management','Gestión de Productos')}</h2><p>${products.length} ${T('products','productos')} (${products.filter(p=>p.active).length} ${T('active','activos')})</p></div>
  <div style="margin-bottom:16px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-primary btn-sm" onclick="showAddProduct()">${T('+ Add Product','+ Agregar Producto')}</button><button class="btn btn-outline btn-sm" onclick="resetProducts()">${T('Reset to Defaults','Restablecer')}</button></div>
  <div id="add-product-form" style="display:none" class="dash-panel" style="margin-bottom:16px"></div>
  <div class="dash-panel"><table class="customer-table"><thead><tr><th>${T('Product','Producto')}</th><th>${T('Category','Categoría')}</th><th>${T('Price','Precio')}</th><th>${T('Stock','Stock')}</th><th>${T('Status','Estado')}</th><th>${T('Actions','Acciones')}</th></tr></thead><tbody>
  ${products.map(p=>`<tr style="${!p.active?'opacity:0.5':''}"><td><strong>${p.name}</strong><br><span style="font-size:0.72rem;color:var(--gray-400)">${p.nameEs}</span></td><td>${p.cat}</td><td><input type="number" value="${p.price}" step="0.01" style="width:70px;padding:4px 6px;border:1px solid var(--gray-300);border-radius:4px;font-size:0.82rem" onchange="updateProductPrice(${p.id},this.value)"></td><td><input type="number" value="${p.stock}" style="width:60px;padding:4px 6px;border:1px solid var(--gray-300);border-radius:4px;font-size:0.82rem" onchange="updateProductStock(${p.id},this.value)"></td><td>${p.active?`<span class="d-status st-delivered">${T('Active','Activo')}</span>`:`<span class="d-status" style="background:var(--gray-200);color:var(--gray-500)">${T('Inactive','Inactivo')}</span>`}</td><td style="white-space:nowrap"><button class="btn btn-sm ${p.active?'btn-outline':'btn-primary'}" onclick="toggleProduct(${p.id})" style="margin-right:4px">${p.active?T('Deactivate','Desactivar'):T('Activate','Activar')}</button><button class="btn btn-sm" onclick="deleteProduct(${p.id})" style="color:var(--red)">${T('Delete','Eliminar')}</button></td></tr>`).join('')}
  </tbody></table></div>`;
}

function showAddProduct(){
  const f=document.getElementById('add-product-form');
  f.style.display=f.style.display==='none'?'block':'none';
  f.className='dash-panel';
  f.innerHTML=`<h4>${T('Add New Product','Agregar Nuevo Producto')}</h4>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:12px">
    <div class="form-group"><label>${T('Name (EN)','Nombre (EN)')}</label><input id="np-name" type="text" required></div>
    <div class="form-group"><label>${T('Name (ES)','Nombre (ES)')}</label><input id="np-nameEs" type="text" required></div>
    <div class="form-group"><label>${T('Category','Categoría')}</label><select id="np-cat"><option value="dairy">${T('Dairy','Lácteos')}</option><option value="meat">${T('Meat','Carnes')}</option><option value="produce">${T('Produce','Frescos')}</option><option value="dry">${T('Dry Goods','Abarrotes')}</option><option value="supplies">${T('Supplies','Suministros')}</option></select></div>
    <div class="form-group"><label>${T('Price','Precio')}</label><input id="np-price" type="number" step="0.01" required></div>
    <div class="form-group"><label>${T('Unit','Unidad')}</label><input id="np-unit" type="text" placeholder="/lb, /case, /bag" required></div>
    <div class="form-group"><label>${T('Stock','Stock')}</label><input id="np-stock" type="number" value="100" required></div>
    <div class="form-group" style="grid-column:span 3"><label>${T('Description (EN)','Descripción (EN)')}</label><input id="np-desc" type="text" required></div>
    <div class="form-group" style="grid-column:span 3"><label>${T('Description (ES)','Descripción (ES)')}</label><input id="np-descEs" type="text" required></div>
  </div>
  <div style="display:flex;gap:8px;margin-top:8px"><button class="btn btn-primary btn-sm" onclick="addProduct()">${T('Save Product','Guardar Producto')}</button><button class="btn btn-outline btn-sm" onclick="document.getElementById('add-product-form').style.display='none'">${T('Cancel','Cancelar')}</button></div>`;
}

function addProduct(){
  const n=document.getElementById('np-name').value.trim();if(!n){alert(T('Name is required','Nombre es requerido'));return;}
  const p={id:Date.now(),name:n,nameEs:document.getElementById('np-nameEs').value.trim()||n,cat:document.getElementById('np-cat').value,price:parseFloat(document.getElementById('np-price').value)||0,unit:document.getElementById('np-unit').value||'/lb',badge:'new',active:true,stock:parseInt(document.getElementById('np-stock').value)||100,desc:document.getElementById('np-desc').value.trim()||'',descEs:document.getElementById('np-descEs').value.trim()||''};
  products.unshift(p);saveProducts(products);document.getElementById('add-product-form').style.display='none';ownerProducts(document.getElementById('dash-content'));
}

function updateProductPrice(id,val){const p=products.find(x=>x.id===id);if(p){p.price=parseFloat(val)||0;saveProducts(products);}}
function updateProductStock(id,val){const p=products.find(x=>x.id===id);if(p){p.stock=parseInt(val)||0;saveProducts(products);}}
function toggleProduct(id){const p=products.find(x=>x.id===id);if(p){p.active=!p.active;saveProducts(products);ownerProducts(document.getElementById('dash-content'));}}
function deleteProduct(id){if(!confirm(T('Delete this product?','¿Eliminar este producto?')))return;products=products.filter(x=>x.id!==id);saveProducts(products);ownerProducts(document.getElementById('dash-content'));}
function resetProducts(){if(!confirm(T('Reset all products to defaults? This will remove any products you added.','¿Restablecer todos los productos? Esto eliminará los productos que agregaste.')))return;products=[...defaultProducts];saveProducts(products);ownerProducts(document.getElementById('dash-content'));}

function ownerInvoices(el){
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Accounts Receivable','Cuentas por Cobrar')}</h2></div>
  <div class="stat-cards"><div class="stat-card"><div class="sc-label">${T('Total AR','Total CxC')}</div><div class="sc-value">$42,180</div></div><div class="stat-card"><div class="sc-label">${T('Current','Corriente')}</div><div class="sc-value" style="color:var(--green)">$28,420</div></div><div class="stat-card"><div class="sc-label">${T('Aging','Antigüedad')}</div><div class="sc-value" style="color:var(--gold)">$5,360</div></div><div class="stat-card"><div class="sc-label">${T('Past Due','Vencido')}</div><div class="sc-value" style="color:var(--red)">$8,400</div></div></div>
  <div class="dash-panel"><table class="customer-table"><thead><tr><th>${T('Invoice','Factura')}</th><th>${T('Account','Cuenta')}</th><th>${T('Amount','Monto')}</th><th>${T('Due','Vence')}</th><th>${T('Status','Estado')}</th></tr></thead><tbody>
  <tr><td>INV-4821</td><td>Santa Maria Restaurant</td><td style="font-weight:700">$14,715</td><td>May 2</td><td><span class="d-status" style="background:var(--red-light);color:var(--red)">${T('Past Due','Vencido')}</span></td></tr>
  <tr><td>INV-4856</td><td>Zokalo Newnan</td><td>$8,240</td><td>May 12</td><td><span class="d-status st-transit">${T('Aging','Antiguo')}</span></td></tr>
  <tr><td>INV-4872</td><td>Los Mariachis</td><td>$5,360</td><td>May 10</td><td><span class="d-status st-processing">${T('Current','Corriente')}</span></td></tr>
  <tr><td>INV-4901</td><td>Botanico</td><td>$3,420</td><td>COD</td><td><span class="d-status st-delivered">${T('Paid','Pagado')}</span></td></tr>
  </tbody></table></div>`;
}

function ownerFleet(el){
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Fleet & Logistics','Flota y Logística')}</h2></div>
  <div class="stat-cards"><div class="stat-card"><div class="sc-label">${T('Trucks','Camiones')}</div><div class="sc-value">2/2</div></div><div class="stat-card"><div class="sc-label">${T('Deliveries/Week','Entregas/Sem')}</div><div class="sc-value">38</div></div><div class="stat-card"><div class="sc-label">${T('OTIF Rate','Tasa OTIF')}</div><div class="sc-value">96.4%</div></div><div class="stat-card"><div class="sc-label">${T('Fill Rate','Tasa Surtido')}</div><div class="sc-value">98.7%</div></div></div>
  <div class="dash-grid"><div><div class="dash-panel"><h4>${T('Vehicles','Vehículos')}</h4><table class="customer-table"><thead><tr><th>${T('Vehicle','Vehículo')}</th><th>${T('Type','Tipo')}</th><th>${T('Driver','Conductor')}</th><th>${T('Status','Estado')}</th></tr></thead><tbody><tr><td>Truck A</td><td>Reefer</td><td>Carlos M.</td><td><span class="health-dot dot-green"></span>${T('Active','Activo')}</td></tr><tr><td>Truck B</td><td>Box</td><td>Miguel R.</td><td><span class="health-dot dot-yellow"></span>${T('Service Soon','Servicio Pronto')}</td></tr></tbody></table></div></div>
  <div><div class="dash-panel"><h4>${T("Today's Routes",'Rutas de Hoy')}</h4><div class="d-row"><div><strong>Route A</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">McDonough → Stockbridge → Fairburn</span></div><div><span class="d-status st-transit">${T('In Progress','En Progreso')}</span></div></div><div class="d-row"><div><strong>Route B</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">Buford → Suwanee → Norcross</span></div><div><span class="d-status st-processing">${T('Loading','Cargando')}</span></div></div></div></div></div>`;
}

// ═══════════════════════════════════════════
// CUSTOMER DASHBOARD
// ═══════════════════════════════════════════
function custOverview(el){
  const myOrders=orders.filter(o=>o.customer==='Taqueria El Sol');const spend=myOrders.reduce((s,o)=>s+o.total,0);
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Welcome back, Taqueria El Sol','Bienvenido, Taqueria El Sol')}</h2><p>${T('Your account overview','Resumen de tu cuenta')}</p></div>
  <div class="stat-cards"><div class="stat-card"><div class="sc-label">${T('Total Spend','Gasto Total')}</div><div class="sc-value">$${spend.toFixed(0)}</div></div><div class="stat-card"><div class="sc-label">${T('Orders','Pedidos')}</div><div class="sc-value">${myOrders.length}</div></div><div class="stat-card"><div class="sc-label">${T('On-Time Delivery','Entrega a Tiempo')}</div><div class="sc-value" style="color:var(--green)">98.2%</div></div><div class="stat-card"><div class="sc-label">${T('Items in Cart','En Carrito')}</div><div class="sc-value">${state.cart.reduce((s,i)=>s+i.qty,0)}</div><div class="sc-change"><a href="#" onclick="setDashTab('shop');return false" style="color:var(--green)">${T('Go to Shop','Ir a Tienda')}</a></div></div></div>
  <div class="dash-grid"><div><div class="dash-panel"><h4>${T('Recent Orders','Pedidos Recientes')}</h4>${myOrders.slice(0,5).map(o=>`<div class="d-row"><div><strong>#${o.id}</strong><br><span style="font-size:0.75rem;color:var(--gray-400)">${o.date} — ${o.items.length} ${T('items','artículos')}</span></div><div style="text-align:right">$${o.total.toFixed(2)}<br><span class="d-status ${statusClass(o.status)}">${statusLabel(o.status)}</span></div></div>`).join('')||`<p style="color:var(--gray-400)">${T('No orders yet','Sin pedidos aún')}</p>`}<div style="margin-top:12px"><button class="btn btn-primary btn-sm" onclick="setDashTab('shop')">${T('Place New Order','Hacer Nuevo Pedido')}</button></div></div></div>
  <div><div class="dash-panel"><h4>${T('Account Health','Salud de Cuenta')}</h4><div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:3px"><span>${T('Fill Rate','Tasa Surtido')}</span><span style="font-weight:700;color:var(--green)">99.1%</span></div><div class="progress-bar"><div class="fill fill-green" style="width:99.1%"></div></div></div><div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:3px"><span>${T('On-Time','A Tiempo')}</span><span style="font-weight:700;color:var(--green)">98.2%</span></div><div class="progress-bar"><div class="fill fill-green" style="width:98.2%"></div></div></div><div><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:3px"><span>${T('Payment Score','Puntaje de Pago')}</span><span style="font-weight:700;color:var(--green)">A+</span></div><div class="progress-bar"><div class="fill fill-green" style="width:100%"></div></div></div></div></div></div>`;
}

function custShop(el){
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Shop & Order','Ordenar Productos')}</h2><p>${T('Browse products, add to cart, and place your order','Explora productos, agrega al carrito y haz tu pedido')}</p></div>
  ${state.cart.length?`<div style="background:var(--green-light);border:1px solid var(--green);border-radius:var(--radius-sm);padding:12px 16px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:0.88rem"><strong>${state.cart.reduce((s,i)=>s+i.qty,0)} ${T('items in cart','artículos en carrito')}</strong> — $${state.cart.reduce((s,i)=>s+i.price*i.qty,0).toFixed(2)}</span><div style="display:flex;gap:8px"><button class="btn btn-sm btn-outline" onclick="openCart()">${T('View Cart','Ver Carrito')}</button><button class="btn btn-sm btn-primary" onclick="placeOrder()">${T('Place Order','Hacer Pedido')}</button></div></div>`:''}
  <div class="catalog-toolbar"><div class="catalog-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" placeholder="${T('Search products...','Buscar productos...')}" oninput="state.search=this.value;custShop(document.getElementById('dash-content'))"></div>
  <div class="catalog-tabs"><button class="catalog-tab${state.category==='all'?' active':''}" onclick="state.category='all';custShop(document.getElementById('dash-content'))">${T('All','Todos')}</button><button class="catalog-tab${state.category==='dairy'?' active':''}" onclick="state.category='dairy';custShop(document.getElementById('dash-content'))">${T('Dairy','Lácteos')}</button><button class="catalog-tab${state.category==='meat'?' active':''}" onclick="state.category='meat';custShop(document.getElementById('dash-content'))">${T('Meat','Carnes')}</button><button class="catalog-tab${state.category==='produce'?' active':''}" onclick="state.category='produce';custShop(document.getElementById('dash-content'))">${T('Produce','Frescos')}</button><button class="catalog-tab${state.category==='dry'?' active':''}" onclick="state.category='dry';custShop(document.getElementById('dash-content'))">${T('Dry','Abarrotes')}</button><button class="catalog-tab${state.category==='supplies'?' active':''}" onclick="state.category='supplies';custShop(document.getElementById('dash-content'))">${T('Supplies','Suministros')}</button></div></div>
  <div class="products-grid">${getFilteredProducts().map(p=>`<div class="product-card"><div class="p-img">${p.badge?`<span class="p-badge badge-${p.badge}">${p.badge}</span>`:''}<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div><div class="p-body"><div class="p-cat">${p.cat}</div><div class="p-name">${state.lang==='es'?p.nameEs:p.name}</div><div class="p-desc">${state.lang==='es'?p.descEs:p.desc}</div><div class="p-foot"><div class="p-price">$${p.price.toFixed(2)} <span class="p-unit">${p.unit}</span></div><button class="p-add" onclick="addToCart(${p.id});custShop(document.getElementById('dash-content'))">+</button></div></div></div>`).join('')||`<div class="products-empty"><p>${T('No products found','No se encontraron productos')}</p></div>`}</div>`;
}

function getFilteredProducts(){
  let list=products.filter(p=>p.active);
  if(state.category!=='all')list=list.filter(p=>p.cat===state.category);
  if(state.search){const q=state.search.toLowerCase();list=list.filter(p=>p.name.toLowerCase().includes(q)||p.nameEs.toLowerCase().includes(q));}
  return list;
}

function custOrders(el){
  const my=orders.filter(o=>o.customer==='Taqueria El Sol');
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Your Orders','Tus Pedidos')}</h2><p>${my.length} ${T('orders','pedidos')}</p></div>
  <div class="dash-panel"><table class="customer-table"><thead><tr><th>#</th><th>${T('Date','Fecha')}</th><th>${T('Items','Artículos')}</th><th>${T('Total','Total')}</th><th>${T('Status','Estado')}</th><th>${T('Details','Detalles')}</th></tr></thead><tbody>
  ${my.map(o=>`<tr><td><strong>${o.id}</strong></td><td>${o.date}</td><td>${o.items.length}</td><td>$${o.total.toFixed(2)}</td><td><span class="d-status ${statusClass(o.status)}">${statusLabel(o.status)}</span></td><td style="font-size:0.75rem;color:var(--gray-400)">${o.items.map(i=>`${i.qty}x ${i.name}`).join(', ')}</td></tr>`).join('')||`<tr><td colspan="6" style="text-align:center;color:var(--gray-400)">${T('No orders yet','Sin pedidos aún')}</td></tr>`}
  </tbody></table></div>
  <div style="margin-top:16px"><button class="btn btn-primary" onclick="setDashTab('shop')">${T('Place New Order','Hacer Nuevo Pedido')}</button></div>`;
}

function custInvoices(el){
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Your Invoices','Tus Facturas')}</h2></div>
  <div class="stat-cards"><div class="stat-card"><div class="sc-label">${T('Outstanding','Pendiente')}</div><div class="sc-value">$1,240</div></div><div class="stat-card"><div class="sc-label">${T('Paid This Month','Pagado Este Mes')}</div><div class="sc-value" style="color:var(--green)">$7,180</div></div><div class="stat-card"><div class="sc-label">${T('Terms','Términos')}</div><div class="sc-value" style="font-size:1.3rem">Net-15</div></div><div class="stat-card"><div class="sc-label">${T('Credit Limit','Límite Crédito')}</div><div class="sc-value">$5,000</div></div></div>
  <div class="dash-panel"><table class="customer-table"><thead><tr><th>${T('Invoice','Factura')}</th><th>${T('Date','Fecha')}</th><th>${T('Amount','Monto')}</th><th>${T('Due','Vence')}</th><th>${T('Status','Estado')}</th></tr></thead><tbody>
  <tr><td>INV-4892</td><td>May 8</td><td>$642.30</td><td>May 23</td><td><span class="d-status st-processing">${T('Current','Corriente')}</span></td></tr>
  <tr><td>INV-4878</td><td>May 5</td><td>$418.75</td><td>May 20</td><td><span class="d-status st-processing">${T('Current','Corriente')}</span></td></tr>
  <tr><td>INV-4845</td><td>Apr 29</td><td>$567.50</td><td>May 14</td><td><span class="d-status st-delivered">${T('Paid','Pagado')}</span></td></tr>
  </tbody></table></div>`;
}

function custReorder(el){
  const reorderItems=[{name:'Queso Oaxaca',qty:10,unit:'/lb',price:4.25},{name:'Corn Tortillas',qty:2,unit:'/case',price:18.99},{name:'Pork Butt',qty:30,unit:'/lb',price:2.99},{name:'Chile Guajillo',qty:4,unit:'/lb',price:8.75},{name:'Avocados',qty:1,unit:'/case',price:42.00},{name:'Roma Tomatoes',qty:25,unit:'/lb',price:1.49},{name:'Cilantro',qty:1,unit:'/case',price:14.99},{name:'White Onions',qty:1,unit:'/bag',price:18.99}];
  const total=reorderItems.reduce((s,i)=>s+i.price*i.qty,0);
  el.innerHTML=`<div class="dash-welcome"><h2>${T('Quick Reorder','Reordenar Rápido')}</h2><p>${T('Your usual weekly order — one click','Tu pedido semanal usual — un clic')}</p></div>
  <div class="dash-panel"><table class="customer-table"><thead><tr><th>${T('Product','Producto')}</th><th>${T('Qty','Cant')}</th><th>${T('Unit Price','Precio')}</th><th>${T('Subtotal','Subtotal')}</th></tr></thead><tbody>
  ${reorderItems.map(i=>`<tr><td>${i.name}</td><td>${i.qty} ${i.unit.replace('/','')}</td><td>$${i.price.toFixed(2)}${i.unit}</td><td style="font-weight:700">$${(i.price*i.qty).toFixed(2)}</td></tr>`).join('')}
  </tbody><tfoot><tr><td colspan="3" style="text-align:right;font-weight:800;padding-top:12px">${T('Total','Total')}</td><td style="font-weight:800;font-size:1.1rem;color:var(--green-dark);padding-top:12px">$${total.toFixed(2)}</td></tr></tfoot></table>
  <div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end"><button class="btn btn-outline" onclick="reorderItems.forEach(i=>{const p=products.find(x=>x.name.includes(i.name));if(p)addToCart(p.id)});setDashTab('shop')">${T('Edit Before Ordering','Editar Antes de Ordenar')}</button><button class="btn btn-primary" onclick="quickReorder()">${T('Place Order Now','Ordenar Ahora')}</button></div></div>`;
}

function quickReorder(){
  const items=[{name:'Queso Oaxaca',qty:10,price:4.25},{name:'Corn Tortillas',qty:2,price:18.99},{name:'Pork Butt',qty:30,price:2.99},{name:'Chile Guajillo',qty:4,price:8.75},{name:'Avocados',qty:1,price:42.00},{name:'Roma Tomatoes',qty:25,price:1.49},{name:'Cilantro',qty:1,price:14.99},{name:'White Onions',qty:1,price:18.99}];
  const total=items.reduce((s,i)=>s+i.price*i.qty,0);
  const o={id:'ALM-'+Math.floor(3000+Math.random()*1000),date:new Date().toISOString().split('T')[0],customer:'Taqueria El Sol',items,status:'processing',total};
  orders.unshift(o);saveOrders(orders);
  alert(T(`Order #${o.id} placed! Total: $${total.toFixed(2)}. Delivery tomorrow by 9 AM.`,`Pedido #${o.id} realizado! Total: $${total.toFixed(2)}. Entrega mañana a las 9 AM.`));
  setDashTab('orders');
}

function handleContact(e){e.preventDefault();alert(T('Thank you! We\'ll be in touch within 24 hours.','¡Gracias! Te contactaremos en 24 horas.'));e.target.reset();}
