const links = ['https://wildermyth.itch.io/wildermyth-omenroad','https://iced-lemon.itch.io/ballet-of-steel','https://zaratustra.itch.io/zetas-world'];

document.getElementById('Random').addEventListener('click', function() {  
window.open(links[Math.floor(Math.random() * links.length)]); });