// cms.js – local init
(function() {
  const s1 = document.createElement('script');
  s1.src = "https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js";
  s1.onload = init;
  s1.onerror = () => {
    const s2 = document.createElement('script');
    s2.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    s2.onload = init;
    document.body.appendChild(s2);
  };
  document.body.appendChild(s1);

  function init() {
    if (window.CMS && typeof window.CMS.init === 'function') {
      window.CMS.init();
    } else {
      setTimeout(init, 200);
    }
  }
})();
