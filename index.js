// add solution here

var musicians = ["John Lennon", "Paul McCartney",  "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var i = 0
 
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < 4; i++) {
    emptyArray.push(musicians[i] + " " + "plays" + " " + instruments [i])
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var exclamation = []
  while(i < 4) {exclamation.push(facts[i])}
  return exclamation
}
