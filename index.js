// add solution here

var musicians = ["John Lennon", "Paul McCartney",  "George Harrison", "Ringo Starr"]
var instruments = ["plays Guitar", "plays Bass Guitar", "plays Lead Guitar", "plays Drums"]
 
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var n = 0, n < 4, n++) {
    emptyArray.push(musicians[n] + instruments [n])
    return emptyArray
  }
}
