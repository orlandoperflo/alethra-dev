// NAV
fetch("/nav.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("nav-placeholder").innerHTML = html;
    initNavLogic(); // your nav js activation
  });

// FOOTER
fetch("/footer.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("footer-placeholder").innerHTML = html;
  });
