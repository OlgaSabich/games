const links = ['https://impulsegamestudios.itch.io/sms-99',
'https://nachogames.itch.io/unlikely',
'https://basically-games.itch.io/baldis-basics',
'https://store.steampowered.com/app/2701800/No_Players_Online/',
'https://gemezl.itch.io/missing-hiker',
'https://nihilanths-games.itch.io/experinent-groceries',
'https://gemezl.itch.io/driving-home',
'https://8soft.itch.io/087b',
'https://alexcraig.itch.io/the-last-monday',
'https://neetroo.itch.io/tealerland',
'https://tayoodev.itch.io/slender-home-sweet-home',
'https://store.steampowered.com/app/1671340/Fears_to_Fathom__Home_Alone/',
'https://hidin.itch.io/masked-devourer',
'https://store.steampowered.com/app/2700780/my_eyes_deceive/',
'https://store.steampowered.com/app/2590250/The_Windows_Are_Gone/',
'https://daniel-buckley.itch.io/the-crypt-terror',
'https://store.steampowered.com/app/2824230/last_seen_online/?l=russian'];

document.getElementById('Random').addEventListener('click', function() {  
window.open(links[Math.floor(Math.random() * links.length)], '_blank'); });