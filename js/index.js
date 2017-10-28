var element = document.getElementById('bm');

bodymovin.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  scaleMode: 'noScale',
  path: '../js/data.json' // the path to the animation json
});
