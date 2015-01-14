window.addEventListener('load', function() {
  window.addEventListener('resize', resizeWallpaper, false);
  resizeWallpaper(); 
});

function randomHexColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16); 
}

function drawWallpaper(width, height) {
  var s = Snap('#wallpaper');
  var fillColors = ['white', randomHexColor(), randomHexColor(), randomHexColor()];
  s.clear(); 
  for(var i = 0; i < 101; i++) {
    for(var j = 0; j < 101; j++) {
      var x = i * width / 100; 
      var y = j * height / 100; 

      var c = Math.round(Math.pow(x, 2) + Math.pow(y,2)); 
      var choice = c % fillColors.length; 

      if (choice > 0) {
        var point = s.rect(x+'px', y+'px',width/100+'px',height/100+'px');
        point.attr({fill: fillColors[choice]});
      }
    }
  }
}

function resizeWallpaper() {
  var wallpaper = document.getElementById('wallpaper');
  wallpaper.style.width = window.innerWidth; 
  wallpaper.style.height = parseInt(window.innerHeight) + 4 + 'px';  // Trying 
  // to fix weird problem where body will be 4px higher than svg, weirdly fixed 
  // weirder problem where fullscreen (MacBook Pro) would appear as vertical bars  


  drawWallpaper(parseInt(wallpaper.style.width), parseInt(wallpaper.style.height));
}


