//all the variables needed to play CLUE
var friends = ['Shelby', 'Claire', 'Lizz', 'Zach', 'Taylor'];
var places = ['Christchurch', 'Mordor', 'Narnia', 'Midgard', 'Arrakis', 'Chasm City', 'Ankh Morpork', 'Magrathea', 'Ilus', "Dreamscape"];
var weapons = ['nunchucks', 'a cat allergy', 'a claymore', 'a nuke', 'a cocktail with bleach', "N'Sync", 'papercuts', 'diabetes', 'boredom', 'awkwardness', 'poorly worded trivia', 'the worst date ever', 'a nerf gun', 'a bad movie marathon', 'an insurrection', 'a BFG', 'Bitcoin FOMO', 'GME crash', 'a swarm of puppies', 'a swarm of razorbears'];

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 100; i++) {
        var h3 = document.createElement('h3');
        h3.innerText = "Accusation " + i + ".";
        //console.log('hello');

        h3.addEventListener('click', function() {
            //creating randomized accusations of everything and everyone
            let friend = friends[Math.floor(Math.random() * friends.length)];
            let place = places[Math.floor(Math.random() * places.length)];
            let weapon = weapons[Math.floor(Math.random() * weapons.length)];

            alert("Accusation " + i + ": I accuse " + friend + ", with the " + weapon + " in " + place + "!");
        });


        document.body.appendChild(h3);
    }
})