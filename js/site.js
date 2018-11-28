/*
  Returns a random whole number between minimum value and maximum value

  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.

  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value

  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.

  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}


/*
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}


/* START WRITING YOUR CODE BELOW */


var quotes = ["Put a hex on a gemini (the worst sign).",
"Compare astrological birth charts with friends.",
"Dry sage to burn for its cleansing properties.",
"Wash your crystals in the ocean to reset their energies.",
"Get amethyst for your desk - it will make you more productive and energetic!",
"Bump anything by The Hex Girls at the club.",
"Binge the Twitches movies.",
"Listen to Stevie Nicks, the White Witch, while in the woods.",
"Create your own coven or join one. There is nothing like the bond between like-minded witches!",
"Make your own amulet. Amulets are used as objects for protection and for strength for spells, usually worn around the neck.",
"If you want to break a hex you can’t go past the hydrangea, as it has natural protection properties, it can be placed around the home, carried in a mojo bag or grown in your garden.",
"In ancient Greece the petals and leaves of roses were used to foretell the future, a rose with a concave shape is for answering a yes or no question, the diviner holds the rose petal and meditates, then presses both hands together in a clapping motion. A burst petal is a yes answer and a whole petal is a no answer.",
"Embroider positive affirmations into your shirts or pillows.",
"Place lavender under your pillow to help you sleep.",
"Make your own tarot cards. You don’t have to be an artist to do this. Let your creativity take you places!",
"Go to the farmers’ market and collect scraps for composting. We witches are environmentally conscious.",
"Walk around barefoot in a forest on a damp day. Forage for mushrooms.",
"Witch’s hazel is a good toner that won’t dry out your skin. Use it after washing your face to balance out your skin’s pH.",
"Perform a seance in a graveyard. Wear all white and slow dance with a ghost.",
"Gentleness is powerful. Don’t let yourself become closed off. Stay light, open and full of love.‬",
"There is some speculation that raw crystals are more powerful than tumbled, but I don’t believe that. I think it’s more important to work with whatever crystals you feel called to at each moment. Tumbled are also easier to carry around with you throughout the day.",
"It’s important to review your whole birth chart. The Sun affects your personality, the Moon your mood, Mars stimulates and moves you to action, Mercury is all about communication, Venus is of course love and sensuality, Jupiter serendipity and growth, Saturn offers challenges, with Uranus everything hidden surfaces, it creates change whether you are ready for it or not, it also inspires original thinking, Neptune the higher self, spirituality and  dreams, while Pluto has the butterfly effect of transformation.",

]


function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
}


      var currentTime = new Date().getHours();

      if (0 <= currentTime&&currentTime < 2) {
       window.location.href = "index witching hour.html"; 
     }

  







