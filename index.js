// add solution here

var musicians = ["John Lennon", "Paul McCartney",  "George Harrison", "Ringo Starr"]
var instruments = ["plays Guitar", "plays Bass Guitar", "plays Lead Guitar", "plays Drums"]
 
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0, i < 4, i++) {
    emptyArray.push(musicians[i] + instruments [i])
    return emptyArray
  }
}
