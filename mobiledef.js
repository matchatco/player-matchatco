document.getElementById('player').src = window.atob(new URL(location.href).searchParams.get('s')); 
$("#player").attr("poster", window.atob(new URL(location.href).searchParams.get('p')));
var fullscreen = new URL(location.href).searchParams.get('f');
  if (fullscreen == "fs"){
    $("video").css("object-fit","fill");
  }       
  else {
    $("video").css("object-fit","contain");
  }       
setTimeout(function(){
var html = '<div class="video" style="font-size: 13px;width: 100%;float: center;position: absolute;bottom: 40px;color: #8c8c8c;text-align: center;left: 0;z-index: 1;">www.your-site.com</div>';
$('#player').after(html);
},100);
