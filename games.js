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
'https://store.steampowered.com/app/2824230/last_seen_online/?l=russian',
'https://elliottdahle.itch.io/the-man-in-the-park',
'https://elliottdahle.itch.io/the-man-in-the-park-2',
'https://chiyeon.itch.io/it-fishes-at-night',
'https://hadriandev.itch.io/rinse-and-repeat',
'https://danthai.itch.io/first-winter',
'https://joetheitchpro.itch.io/go-to-bed',
'https://apish-box-games.itch.io/lamp-post'
'https://ferryliquid.itch.io/crowded-followed',
'https://forameuss.itch.io/death-trips',
'https://mikeklubnika.itch.io/core',
'https://mrsinger.itch.io/the-wailing-of-the-forest',
'https://store.steampowered.com/app/2250090/Missing_Hiker/',
'https://andrground.itch.io/elevated-dread',
'https://gamejolt.com/games/readjusted3game/523997',
'https://jonnys-games.itch.io/slide-in-the-woods',
'https://kenforest.itch.io/moth-house',
'https://chiyeon.itch.io/it-fishes-at-night',
'https://noxusgamesstudio.itch.io/thesmilingman',
'https://jordiboi.itch.io/theshoppinglist',
'https://jordiboi.itch.io/brokenthrough',
'https://jordiboi.itch.io/the-final-pin',
'https://gamejolt.com/games/SlenderMan/503541',
'https://ookii-tsuki.itch.io/teke-teke-moonlit-dread',
'https://danieloschepkov.itch.io/the-floor-is-wet',
'https://famouspizza23.itch.io/lakefront-restaurant',
'https://scary-cube.itch.io/the-windows-are-gone',
'https://mymadnessworks.itch.io/lalaisbound',
'https://mikeklubnika.itch.io/unsorted-horror'];

document.getElementById('Random').addEventListener('click', function() {  
window.open(links[Math.floor(Math.random() * links.length)], '_blank'); });
