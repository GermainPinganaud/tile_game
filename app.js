// ne fonctionne pas coté client
var selectTile = require("./context");

var tile = new Image();
tile.src = "graphics/basictiles.png";

window.onload = function() {
  selectTile.context.drawImage(tile, 0, 0);
  console.log(selectTile.context.test());
};









//
// class Context {
//   // constructor
//   constructor (canvasId) {
//     this.canvas = document.getElementById(canvasId)
//     this.context = this.canvas.getContext('2d')
//   }
// // methods
//
// }
// // instanciation
// var selectTile = new Context("select-tile");
