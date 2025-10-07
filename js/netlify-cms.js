/*!
 * Netlify CMS Loader v2.15.72 (offline stable)
 * This lightweight bootstrap loads CMS core scripts dynamically.
 */
(function(){
  const s = document.createElement('script');
  s.src = "https://cdn.jsdelivr.net/npm/decap-cms@2.12.19/dist/decap-cms.js";
  s.onload = function(){
    if (window.CMS && typeof CMS.init === 'function') {
      console.log('✅ Decap CMS initialized');
      CMS.init();
    } else {
      console.error('⚠️ CMS failed to initialize');
    }
  };
  s.onerror = function(){
    console.error('❌ Cannot load CMS script');
  };
  document.body.appendChild(s);
})();
