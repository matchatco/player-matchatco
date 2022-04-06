
jwplayer('player').setup({      
file: window.atob(new URL(location.href).searchParams.get('s')),   
image: window.atob(new URL(location.href).searchParams.get('p')),
aspectratio: "16:9",
aboutlink: 'matchatco.com',          
controls: 'true',          
title: '  ',          
width: '100%',          
height: '100%',          
stretching: fsradiant,          
autostart: 'false',          
primary: 'flash',   
skin: 'glow',   
androidhls: 'true',   
logo: {                  
file: '',                  
link: '',                  
position: 'bottom-left',                  
hide: 'false',                  
margin: '30',                  
linktarget: '',                  
hide: 'false',                  
over: '15',                  
out: '30'                  
},     
});

var fullscreen = new URL(location.href).searchParams.get('f');
var fsradiant = 'exactfit1';
  if (fullscreen == "fs"){
    fsradiant = 'exactfit'
  }       
  else {
    fullscreen = 'ds';
    fsradiant = 'exactfit1';
  }       
