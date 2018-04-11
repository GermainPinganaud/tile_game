function getId(id) {
  return document.getElementById(id);
};
function ctx(canvasId) {
  return document.getElementById(canvasId).getContext("2d");
};


var tile = new Image();
tile.src = "graphics/basictiles.png";

window.onload = function() {
  getId("debugger").innerHTML = "JS is correctly linked";
  ctx("select-tile").drawImage(tile, 0, 0);
};
