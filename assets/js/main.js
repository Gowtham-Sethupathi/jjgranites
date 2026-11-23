/* =========================================================
   J J Granites — shared header, footer & interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Site data (edit once, updates every page) ---------- */
  var SITE = {
    name: "J J Granites",
    tagline: "Stone Crafted for Generations.",
    logo: "assets/images/logo.png",
    logoWhite: "assets/images/logo-white.png",
    phones: ["+91 90802 81557"],
    email: "jjgranitesdvk@gmail.com",
    address: ["1/861, Sathikottai, Near Othakadai,", "Madurai - Rameswaram Rd, Aathupalam,", "Devakottai, Tamil Nadu 630302"],
    whatsapp: "919080281557",
    facebook: "https://www.facebook.com/p/JJ-Granites-100064353811901/",
    instagram: "https://www.instagram.com/jjgranitesdvk/"
  };
  SITE.maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("J J Granites, Aathupalam, Devakottai");
  var PAGES = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "products", label: "Products", href: "Products.html" },
    { id: "granites", label: "Granites", href: "granites.html" },
    { id: "about", label: "About Us", href: "About%20us.html" },
    { id: "contact", label: "Contact Us", href: "contact%20us.html" }
  ];
  function wa(msg) {
    return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(msg || "Hello J J Granites, I'd like to know more about your products.");
  }
  function tel(p) { return "tel:" + p.replace(/\s+/g, ""); }
  window.JJ = { wa: wa, site: SITE };

  /* ---------- Icons ---------- */
  var P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    gem: '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3 8 9l4 12 4-12-3-6M2 9h20"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    truck: '<path d="M10 17h4V5H2v12h3M20 17h2v-3.3a1 1 0 0 0-.2-.6L18.7 9a1 1 0 0 0-.8-.4H14v8.4"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    ruler: '<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4zM7.5 10.5l2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/>',
    home: '<path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    kitchen: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 10h18M8 6h.01M12 6h.01M16 6h.01M7 14v3M17 14v3"/>',
    pillar: '<path d="M3 22h18M6 18V11M10 18V11M14 18V11M18 18V11M12 2l8 5H4z"/>',
    stairs: '<path d="M3 21h5v-5h5v-5h5V6h3"/>',
    bath: '<path d="M4 12h16a1 1 0 0 1 1 1v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2a1 1 0 0 1 1-1zM6 12V5a2 2 0 0 1 3.4-1.4M6 20l-1 2M18 20l1 2"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    wave: '<path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 6c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>',
    mountain: '<path d="m8 3 4 8 5-5 5 15H2z"/>',
    tree: '<path d="M12 22v-6M8 16h8l-4-7 3 0-3-6-3 6h3z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    store: '<path d="M3 9h18l-2-6H5zM5 9v12h14V9M9 21v-6h6v6"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
    clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 12h6M9 16h4"/>',
    zoom: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    map: '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16"/>',
    handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 1.4.2L21 4M21 3l1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/>'
  };
  var FILLED = {
    facebook: '<path fill="currentColor" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.6" cy="6.4" r="1.3" fill="currentColor"/>',
    whatsapp: '<path fill="currentColor" d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-4.1-3.6c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.8a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.3-.6-.4zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.3A11.8 11.8 0 0 0 1.7 17.7L0 24l6.4-1.7A11.8 11.8 0 0 0 24 12a11.7 11.7 0 0 0-3.6-8.5z"/>'
  };
  function icon(name, cls) {
    var c = "icon" + (cls ? " " + cls : "");
    if (FILLED[name]) return '<svg class="' + c + '" viewBox="0 0 24 24" aria-hidden="true">' + FILLED[name] + "</svg>";
    var p = P[name] || P.sparkle;
    return '<svg class="' + c + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>";
  }
  window.JJ.icon = icon;

  var page = document.body.getAttribute("data-page") || "home";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");

  /* ---------- Header ---------- */
  function buildHeader() {
    var links = PAGES.map(function (p) {
      return '<a class="nav__link' + (p.id === page ? " is-active" : "") + '" href="' + p.href + '"' + (p.id === page ? ' aria-current="page"' : "") + ">" + p.label + "</a>";
    }).join("");
    var drawerLinks = PAGES.map(function (p) {
      return '<a class="drawer__link' + (p.id === page ? " is-active" : "") + '" href="' + p.href + '">' + p.label + icon("arrow") + "</a>";
    }).join("");
    return (
      '<header class="site-header">' +
        '<div class="header__inner">' +
          '<a class="brand" href="index.html" aria-label="' + SITE.name + ' home">' +
            '<img class="brand__logo" src="' + SITE.logo + '" alt="' + SITE.name + ' — ' + SITE.tagline + '" width="460" height="80">' +
          "</a>" +
          '<nav class="nav" aria-label="Main">' + links + "</nav>" +
          '<div class="header__actions">' +
            '<button class="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
          "</div>" +
        "</div>" +
      "</header>" +
      '<div class="drawer-backdrop"></div>' +
      '<div class="drawer"><nav aria-label="Mobile">' + drawerLinks + "</nav>" +
        '<a class="btn btn--block" href="contact%20us.html#enquiry">Get a Free Quote</a></div>'
    );
  }

  /* ---------- Footer ---------- */
  function buildFooter() {
    var quick = [["Home", "index.html"], ["Products", "Products.html"], ["Granite Collection", "granites.html"], ["About Us", "About%20us.html"], ["Contact Us", "contact%20us.html"]];
    var products = [["Granite Stone", "Products.html#granite"], ["Marble Stone", "Products.html#marble"], ["Designer Tiles", "Products.html#tiles"], ["Rock Boulders", "Products.html#boulders"], ["Tile Sizes", "Products.html#sizes"]];
    function list(arr) { return '<ul class="footer__links">' + arr.map(function (l) { return '<li><a href="' + l[1] + '">' + l[0] + "</a></li>"; }).join("") + "</ul>"; }
    return (
      '<footer class="site-footer">' +
        '<div class="footer__top"><div class="container">' +
          (page !== "contact" ?
          '<div class="footer__cta">' +
            "<div><h3>Planning your floors, kitchen or project?</h3><p>Visit our Devakottai showroom or send us your requirement for a quick quote.</p></div>" +
            '<div class="btn-row"><a class="btn btn--white" href="contact%20us.html#enquiry">Get a Free Quote</a>' +
            '<a class="btn btn--ghost-light" href="' + wa() + '" target="_blank" rel="noopener">' + icon("whatsapp") + " WhatsApp Us</a></div>" +
          "</div>" : "") +
          '<div class="footer__grid">' +
            '<div class="footer__col footer__brand">' +
              '<a href="index.html" aria-label="' + SITE.name + ' home"><img class="footer__logo" src="' + SITE.logoWhite + '" alt="' + SITE.name + '" width="597" height="101" loading="lazy"></a>' +
              '<p class="footer__about">Granite, marble, designer tiles and rock boulders from trusted quarries and manufacturers — supplied across Tamil Nadu and exported worldwide since 2015.</p>' +
              '<div class="socials">' +
                '<a class="social social--fb" href="' + SITE.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">' + icon("facebook") + "</a>" +
                '<a class="social social--ig" href="' + SITE.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + icon("instagram") + "</a>" +
                '<a class="social social--wa" href="' + wa() + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + icon("whatsapp") + "</a>" +
              "</div>" +
            "</div>" +
            '<div class="footer__col"><h4 class="footer__h">Quick Menu</h4>' + list(quick) + "</div>" +
            '<div class="footer__col"><h4 class="footer__h">Our Products</h4>' + list(products) + "</div>" +
            '<div class="footer__col footer__col--contact"><h4 class="footer__h">Visit Our Store</h4>' +
              '<div class="footer__contact">' +
                '<div class="fc"><span class="fc__icon">' + icon("pin") + '</span><div><small>Showroom</small><a href="' + SITE.maps + '" target="_blank" rel="noopener">' + SITE.address.join("<br>") + "</a></div></div>" +
                '<div class="fc"><span class="fc__icon">' + icon("phone") + '</span><div><small>Call Us</small>' + SITE.phones.map(function (p) { return '<a href="' + tel(p) + '">' + p + "</a>"; }).join("") + "</div></div>" +
                '<div class="fc"><span class="fc__icon">' + icon("mail") + '</span><div><small>Email</small><a href="mailto:' + SITE.email + '">' + SITE.email + "</a></div></div>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div></div>" +
        '<div class="footer__bottom"><div class="container">' +
          "<span>© " + new Date().getFullYear() + " <strong>" + SITE.name + ".</strong> All Rights Reserved.</span>" +
          '<span class="footer__legal"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a></span>' +
        "</div></div>" +
      "</footer>" +
      '<a class="float-wa" href="' + wa() + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' + icon("whatsapp") + "</a>" +
      '<button class="to-top" aria-label="Back to top">' + icon("up") + "</button>" +
      '<nav class="mobile-bar" aria-label="Quick actions">' +
        '<a href="' + tel(SITE.phones[0]) + '">' + icon("phone") + "Call</a>" +
        '<a class="is-wa" href="' + wa() + '" target="_blank" rel="noopener">' + icon("whatsapp") + "WhatsApp</a>" +
        '<a class="is-quote" href="contact%20us.html#enquiry">' + icon("mail") + "Get Quote</a>" +
      "</nav>" +
      '<div class="lightbox" role="dialog" aria-modal="true" aria-label="Image preview"><button class="lightbox__close" aria-label="Close">×</button><figure><img alt=""><figcaption></figcaption></figure></div>'
    );
  }

  var headerSlot = document.getElementById("site-header");
  var footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.outerHTML = buildHeader();
  if (footerSlot) footerSlot.outerHTML = buildFooter();

  /* inline icons: <i data-icon="name"></i> */
  document.querySelectorAll("[data-icon]").forEach(function (el) {
    var tmp = document.createElement("span");
    tmp.innerHTML = icon(el.getAttribute("data-icon"), el.className);
    el.replaceWith(tmp.firstChild);
  });
  /* WhatsApp links: <a data-wa="message"> */
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = wa(a.getAttribute("data-wa") || undefined);
    a.target = "_blank"; a.rel = "noopener";
  });
  /* phone / email / map links filled from SITE */
  document.querySelectorAll("[data-tel]").forEach(function (a) { a.href = tel(SITE.phones[0]); if (!a.textContent.trim()) a.textContent = SITE.phones[0]; });
  document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = "mailto:" + SITE.email; if (!a.textContent.trim()) a.textContent = SITE.email; });
  document.querySelectorAll("[data-maps]").forEach(function (a) { a.href = SITE.maps; a.target = "_blank"; a.rel = "noopener"; });

  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector(".burger");
  function closeMenu() { document.body.classList.remove("nav-open"); if (burger) burger.setAttribute("aria-expanded", "false"); }
  if (burger) burger.addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".drawer a, .drawer-backdrop").forEach(function (el) { el.addEventListener("click", closeMenu); });
  window.addEventListener("resize", function () { if (window.innerWidth > 1100) closeMenu(); });

  /* ---------- Back to top ---------- */
  var toTop = document.querySelector(".to-top");
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { toTop.classList.toggle("is-shown", window.scrollY > 700); ticking = false; });
  }, { passive: true });
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- Reveal on scroll (subtle, once) ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
  document.querySelectorAll("[data-stagger]").forEach(function (wrap) {
    Array.prototype.forEach.call(wrap.children, function (c, i) { c.style.setProperty("--delay", Math.min(i * 0.06, 0.3).toFixed(2) + "s"); });
  });

  /* ---------- Testimonials slider ---------- */
  document.querySelectorAll("[data-slider]").forEach(function (root) {
    var track = root.querySelector(".slider__track");
    var items = track.children, idx = 0, auto;
    function perView() { return window.innerWidth <= 640 ? 1 : window.innerWidth <= 900 ? 2 : 3; }
    function update() {
      var max = items.length - perView();
      if (idx > max) idx = 0;
      if (idx < 0) idx = max;
      track.style.transform = "translateX(" + (-idx * (100 / perView())) + "%)";
    }
    var wrap = root.closest("section");
    var prev = wrap.querySelector("[data-prev]"), next = wrap.querySelector("[data-next]");
    function restart() { clearInterval(auto); if (!reduceMotion) auto = setInterval(function () { idx++; update(); }, 6000); }
    if (prev) prev.addEventListener("click", function () { idx--; update(); restart(); });
    if (next) next.addEventListener("click", function () { idx++; update(); restart(); });
    var sx = null;
    root.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 40) { idx += dx < 0 ? 1 : -1; update(); restart(); }
    });
    window.addEventListener("resize", update);
    restart();
  });

  /* ---------- Granite filter ---------- */
  var filters = document.querySelectorAll(".filter");
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      var cat = f.getAttribute("data-filter");
      filters.forEach(function (x) { x.classList.toggle("is-active", x === f); x.setAttribute("aria-pressed", x === f); });
      document.querySelectorAll("[data-cat]").forEach(function (w) {
        w.classList.toggle("is-hidden", cat !== "all" && w.getAttribute("data-cat").split(" ").indexOf(cat) === -1);
      });
    });
  });

  /* ---------- Lightbox ---------- */
  var lb = document.querySelector(".lightbox");
  var lbImg = lb.querySelector("img"), lbCap = lb.querySelector("figcaption");
  document.querySelectorAll("[data-zoom]").forEach(function (g) {
    g.setAttribute("role", "button"); g.setAttribute("tabindex", "0");
    function open() {
      var img = g.querySelector("img");
      lbImg.src = g.getAttribute("data-zoom") || img.src; lbImg.alt = img.alt;
      lbCap.textContent = g.getAttribute("data-caption") || img.alt;
      lb.classList.add("is-open");
    }
    g.addEventListener("click", open);
    g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
  lb.addEventListener("click", function (e) { if (e.target !== lbImg) lb.classList.remove("is-open"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { lb.classList.remove("is-open"); closeMenu(); } });

  /* ---------- Pre-select product from ?product= on the contact page ---------- */
  var form = document.querySelector("[data-enquiry]");
  if (form) {
    var want = new URLSearchParams(location.search).get("product");
    if (want && form.elements.product) {
      Array.prototype.forEach.call(form.elements.product.options, function (o) { if (o.value === want) form.elements.product.value = want; });
    }
    /* Enquiry form -> WhatsApp */
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var lines = ["Hello J J Granites, I'd like a quote.", ""];
      [["name", "Name"], ["phone", "Phone"], ["product", "Product"], ["variety", "Colour / variety"], ["quantity", "Approx. quantity"], ["location", "Site location"], ["message", "Details"]].forEach(function (pair) {
        var v = (f.get(pair[0]) || "").toString().trim();
        if (v) lines.push(pair[1] + ": " + v);
      });
      window.open(wa(lines.join("\n")), "_blank", "noopener");
    });
  }
})();
