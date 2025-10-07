// cms.js – ổn định (bản Decap cũ hơn)
(function() {
  const s1 = document.createElement('script');
  s1.src = "https://cdn.jsdelivr.net/npm/decap-cms@2.12.19/dist/decap-cms.js";
  s1.onload = initCMS;
  s1.onerror = () => {
    const s2 = document.createElement('script');
    s2.src = "https://unpkg.com/decap-cms@2.12.19/dist/decap-cms.js";
    s2.onload = initCMS;
    document.body.appendChild(s2);
  };
  document.body.appendChild(s1);

  function initCMS() {
    if (window.CMS && typeof window.CMS.init === 'function') {
      console.log("Decap CMS loaded ✅");
      window.CMS.init();
    } else {
      setTimeout(initCMS, 200);
    }
  }
})();
