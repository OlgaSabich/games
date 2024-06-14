const links = ['https://impulsegamestudios.itch.io/sms-99','https://danthai.itch.io/first-winter','https://joetheitchpro.itch.io/go-to-bed','https://apish-box-games.itch.io/lamp-post','https://hadriandev.itch.io/rinse-and-repeat','https://ferryliquid.itch.io/crowded-followed'];

document.getElementById('Random').addEventListener('click', function() {  
window.open(links[Math.floor(Math.random() * links.length)], '_blank'); });