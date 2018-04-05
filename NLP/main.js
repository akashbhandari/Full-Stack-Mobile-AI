
//defining global variable
var data;

var txt = '$$Exclamation$$! I go to $$Noun$$ College and I study $$Adjective$$ here and it is cool.';

function setup() {
  //html canvas for drawing
  noCanvas();

  //inferring the ket from the google form that I made to collect responses
  Tabletop.init({
    key: '1HUhEg5-g-mIeOOw8kFCAoDqGxGXNj6I3FCP1aYhE-Rw',
    callback: gotData,
    simpleSheet: true
  });

  //creating a button
  var button = createButton('Press to generate MadLibs');
  button.mousePressed(generate);
}

//callback and matching the objects with nouns, adjectives etc.
function replacer(match, pos) {
  var entry = random(data);
  return entry[pos];
}

//generating the madlibs with the press of the button
function generate() {
  //console.log('generate');

  //replacing the $$ sign from noun,adjectives and putting in actual words

  //regular expression//with the replace func, I could do a calback
  var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madlib);
  //createP(txt);
}

function gotData(stuff, tabletop) {
  data = stuff;
}