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


var quotes = [
"Astral projection. Be careful though. You might get trapped in the astral realm so make sure to have a sitter.",
"Learn to lucid dream. Document your dreams every morning so that it will be easier for you to identify when you are dreaming. There is much power is knowing this because then you will be able to control your dreams!",
"Light candles in your room on a full moon. Certain candles emit certain energies. Choose wisely.", 
"Light a candle, say a prayer to our supreme, Jessica Lange, take a bubble bath.",
"If you wish to ensure a good night’s sleep, place anise seeds in a bag and tie with a white ribbon, place the bag under your pillow, witches have been using anise to help them have pleasant dreams, for centuries.  As a protection the leaves of an anise plant may be scattered around your bedroom.",
"Draw down the moon (also known as drawing down the goddess). By drawing down the Moon you are filling yourself with Divine Light and absorbing the energy of the goddess. This is best done during a full moon within a circle.",
"Burn sandalwood or sandalwood-scented candles. This is the all-purpose scent for healing and protection.",
"Bathe in lavender. Lavender has the following magical properties: sleep, long life, peace, wishes, protection, love, purification, visions, attracting men, clarity of thought.",
"Reoccurring dreams are normally stuck energy from past life traumas that are trying to clear. If you can decipher the root feelings related to the fear in the dreams, they will start to dissipate and release.",


]


function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
}









