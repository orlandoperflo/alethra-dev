
// FOOTER
fetch("/footer.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("footer-placeholder").innerHTML = html;
  });
