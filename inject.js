document.addEventListener("DOMContentLoaded", () => {
  fetch("/nav.html")
    .then(res => res.text())
    .then(data => document.getElementById("nav-placeholder").innerHTML = data);

  fetch("/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);
});
