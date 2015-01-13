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
  for(var i = 1; i < 101; i++) {
    for(var j = 1; j < 101; j++) {
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
  wallpaper.style.height = window.outerHeight; 

  var larger = Math.max(parseInt(wallpaper.style.width), parseInt(wallpaper.style.height)); 
  drawWallpaper(parseInt(wallpaper.style.width), parseInt(wallpaper.style.height));
}


