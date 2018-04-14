class Context {
  // constructor
  constructor (canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.context = this.canvas.getContext('2d')
  }
// methods
  test () {
    return "I do get text";
  }
}
// instanciation
var selectTile = new Context("select-tile");

// export
module.exports = selectTile;
