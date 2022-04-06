var fullscreen = new URL(location.href).searchParams.get('f');
var fsradiant = 'stretch1';
  if (fullscreen == "fs"){
    fsradiant = 'stretch'
  }       
  else {
    fullscreen = 'ds';
    fsradiant = 'stretch1';
  }       
        var src = {
    hls: window.atob(new URL(location.href).searchParams.get('s'))

    };
    var settings = {
      licenseKey: window.atob(radiantkey),
      src: src,
      skinBackgroundColor: "rgba(255, 255, 255, 1.00)", 
      skinAccentColor: "rgba(0, 130, 128, 1.00)",
      scaleMode: fsradiant,
      automaticFullscreenOnLandscape: true,
      width: 640,
      height: 360,
      skin: radiantskin,
      contentMetadata: {poster: [window.atob(new URL(location.href).searchParams.get('p'))]
      }};
    var elementID = 'rmpPlayer';
    var rmp = new RadiantMP(elementID);
    rmp.init(settings);
