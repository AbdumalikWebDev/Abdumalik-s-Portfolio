const lineMainIllustrator = new Image();
const lines1 = new Image();
const mainUserImage = new Image();
const mainIllustatorBg = new Image();
const waveImage = new Image();
(function () {
  window.addEventListener("scroll", function () {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.scrollY;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute("data-depth");
      movement = -(topDistance * depth);
      translate3d = "translate3d(0, " + movement + "px, 0)";
      layer.style["-webkit-transform"] = translate3d;
      layer.style["-moz-transform"] = translate3d;
      layer.style["-ms-transform"] = translate3d;
      layer.style["-o-transform"] = translate3d;
      layer.style.transform = translate3d;
    }
  });
}).call(this);
