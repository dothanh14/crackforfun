/*! Decap CMS build 3.6.2 (stable) */
(function() {
  const s = document.createElement('script');
  s.src = "https://unpkg.com/decap-cms@3.6.2/dist/decap-cms.js";
  s.onload = function() {
    if (window.CMS && typeof CMS.init === 'function') {
      console.log("✅ Decap CMS initialized");
      CMS.init();
    } else {
      console.error("❌ CMS failed to initialize");
    }
  };
  s.onerror = function() {
    console.error("⚠️ Cannot load Decap CMS script!");
  };
  document.body.appendChild(s);
})();
