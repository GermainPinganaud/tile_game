// ne fonctionne pas coté client
var selectTile = require("./context");

var tile = new Image();
tile.src = "graphics/basictiles.png";

window.onload = function() {
  selectTile.context.drawImage(tile, 0, 0);
  console.log(selectTile.context.test());
};
