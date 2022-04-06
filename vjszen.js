$("video source").attr("src", window.atob(new URL(location.href).searchParams.get('s')));
$("#player").attr("poster", window.atob(new URL(location.href).searchParams.get('p')));
var fullscreen = new URL(location.href).searchParams.get('f');
  if (fullscreen == "fs"){
    $("video").css("object-fit","fill");
  }       
  else {
    $("video").css("object-fit","contain");
  }      
