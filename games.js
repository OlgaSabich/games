const page = document.querySelector('.Random');
const links = ['https://raycastly.itch.io/clap-clap','https://kajik.itch.io/mourningtide'];

page.onclick = function(event) {
  event.preventDefault();
  window.location.href = links[Math.floor(Math.random() * links.length)];
};