$(document).ready(function () {
var iramexs = "<iframe  allowfullscreen='true' frameborder='0' height='500px' scrolling='no' src='"+window.location.href+"' width='100%'></iframe>";
$('#matchatcoxs_player_share').text(iramexs);});
$('#reloadxs').click(function() {
location.reload();});

var btnsx = new URL(location.href).searchParams.get('b');
var refreashx = document.getElementById("reloadxs");
var sharex = document.getElementById("sharexs");
var webcx = document.getElementById("webcastxs");
var logotg = document.getElementById("lgotg");
  if (btnsx == "rf"){
    refreashx.style.display = "block";
  }       // تحديث
  else if (btnsx == "sh"){
    sharex.style.display = "block";
  }       // مشاركة
  else if (btnsx == "wb"){
    webcx.style.display = "block";
  }       // ويب كاست
  else if (btnsx == "tg"){
    logotg.style.display = "block";
  }       // تيلجرام
  else if (btnsx == "rf,sh"){
    refreashx.style.display = "block";
    sharex.style.display = "block";
  }       // تحديث & مشاركة
  else if (btnsx == "rf,wb"){
    refreashx.style.display = "block";
    webcx.style.display = "block";
  }       // تحديث & ويب كاست
  else if (btnsx == "rf,tg"){
    refreashx.style.display = "block";
    logotg.style.display = "block";
  }       // تحديث & تيلجرام
  else if (btnsx == "sh,wb"){
    sharex.style.display = "block";
    webcx.style.display = "block";
  }       // مشاركة & ويب كاست
  else if (btnsx == "sh,tg"){
    sharex.style.display = "block";
    logotg.style.display = "block";
  }       // مشاركة & تيلجرام
  else if (btnsx == "wb,tg"){
    logotg.style.display = "block";
    webcx.style.display = "block";
  }       // تيلجرام & ويب كاست
  else if (btnsx == "rf,sh,wb"){
    refreashx.style.display = "block";
    sharex.style.display = "block";
    webcx.style.display = "block";
  }       // تحديث & مشاركة & ويب كاست
  else if (btnsx == "rf,sh,wb,tg"){
    refreashx.style.display = "block";
    sharex.style.display = "block";
    webcx.style.display = "block";
    logotg.style.display = "block";
  }       // تحديث & مشاركة & ويب كاست & تيلجرام
  else {
     refreashx.style.display = "none";
     sharex.style.display = "none";
     webcx.style.display = "none";
     logotg.style.display = "none";
  }
function c2cbxx(){document.getElementById("embedxs").select(),document.execCommand("copy")};
function webcast(){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=window.atob(new URL(location.href).searchParams.get('s'))}else{location.href="wvc-x-callback://open?url="+window.atob(new URL(location.href).searchParams.get('s'))+"&secure_uri=true"}};
function wbc() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
$("#lgotg").attr("href", window.atob(new URL(location.href).searchParams.get('tg')));
$(document).ready(function () {
    var idBlog = "5077358129217622564"; // معرف المدونة التي وضعت عليها لوحة التفعيل
    $(function () {
        "use strict";
        $.ajax({
            dataType: "json",
            url: "https://www.blogger.com/feeds/" + idBlog + "/posts/default?alt=json-in-script",
            method: "GET",
            dataType: "jsonp",
            success: function (e) {
                var t;
                for (t = 0; t < e.feed.entry.length; t += 1) {
                    var n = $(e.feed.entry[t].content.$t);
                    if (0 === t && !$("body").hasClass("error_page")) {
                        for (var o = n.find("li"), d = [], a = 0; a < o.length; a += 1) d.push($(o[a]).text());
                        var r,
                            i = window.location.hostname.toLowerCase(),
                            f = window.location.href.toLowerCase(),
                            s = d.length - 1;
                        for (r = 0; r < d.length; r += 1) {
                            if (-1 != i.indexOf(d[r])) {
                                var l = $(e.feed.entry[t].content.$t).find("script"),
                                    p = $(e.feed.entry[t].content.$t).find("style");
                                $("head").append(p), $("head").append(l);
                                break;
                            }
                            r == s &&
                                -1 == f.indexOf("post-preview") &&
                                -1 == f.indexOf("www.blogger") &&
                                -1 == f.indexOf("b/layout-preview") &&
                                -1 == f.indexOf("b/preview") &&
                                -1 == f.indexOf("translate.google") &&
                                -1 == f.indexOf("webcache.googleusercontent") &&
                                -1 == f.indexOf("template-editor") &&
                                $("html").html(n.find(".redirect").html());
                        }
                    }
                    if (1 === t) {
                        p = $(e.feed.entry[t].content.$t).find("style");
                        $("head").append(p);
                    }
                }
            },
        });
    });
});
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(r){var t,e,o,a,h,c,n,d="",C=0;for(r=Base64._utf8_encode(r);C<r.length;)a=(t=r.charCodeAt(C++))>>2,h=(3&t)<<4|(e=r.charCodeAt(C++))>>4,c=(15&e)<<2|(o=r.charCodeAt(C++))>>6,n=63&o,isNaN(e)?c=n=64:isNaN(o)&&(n=64),d=d+this._keyStr.charAt(a)+this._keyStr.charAt(h)+this._keyStr.charAt(c)+this._keyStr.charAt(n);return d},decode:function(r){var t,e,o,a,h,c,n="",d=0;for(r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<r.length;)t=this._keyStr.indexOf(r.charAt(d++))<<2|(a=this._keyStr.indexOf(r.charAt(d++)))>>4,e=(15&a)<<4|(h=this._keyStr.indexOf(r.charAt(d++)))>>2,o=(3&h)<<6|(c=this._keyStr.indexOf(r.charAt(d++))),n+=String.fromCharCode(t),64!=h&&(n+=String.fromCharCode(e)),64!=c&&(n+=String.fromCharCode(o));return n=Base64._utf8_decode(n)},_utf8_encode:function(r){r=r.replace(/\r\n/g,"\n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):(127<o&&o<2048?t+=String.fromCharCode(o>>6|192):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128)),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)(o=r.charCodeAt(e))<128?(t+=String.fromCharCode(o),e++):191<o&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}};
document.writeln(" <a id=\"lgotg\" style=\"display: none;bottom: 56px; height: 40px; left: 12px; position: fixed; width: 40px; z-index: 999;\" target=\"_blank\"> <img src=\"https://media4.giphy.com/media/ZcdZ7ldgeIhfesqA6E/giphy.gif\" style=\"height: 100%; width: 100%;\"></a> "); 
document.writeln(" <div class='matchatcoxs_videos_channel'> "); 
document.writeln(" <a style='display: none;' id='reloadxs'>تحديث</a> ");
document.writeln(" <a onclick=\"webcast();wbc();\" style='display: none;' id='webcastxs'>W Cast</a> ");
document.writeln(" <div id=\"snackbar\">يرجي تحميل تطبيق Web Cast</div> ");
document.writeln(" <div id='showshare' style='display: block;' title='مشاركة'><span href='javascript:void(0)' onclick='document.getElementById(\"showother\").style.display=\"block\";document.getElementById(\"showshare\").style.display=\"none\"'><div id='sharexs' style='display: none;' class='button share'>مشاركة</div></span></div> "); 
document.writeln(" <div class='showother' id='showother' style='display: none;'><span href='javascript:void(0)' onclick='document.getElementById(\"showother\").style.display=&#39;none&#39;;document.getElementById(\"showshare\").style.display=\"block\"' title='إغلاق'><div class='button close'>إغلاق</div></span><div id='matchatcoxs_share_channel'><div class='share-channel'><div class=\"matchatcoxs_share_title\">كود البث للاضافة على موقعك</div><textarea id='matchatcoxs_player_share' onclick='this.select();' onfocus='this.select();'></textarea><button class=\"custom-btn\" onclick=\"document.querySelector('#matchatcoxs_player_share').select();document.execCommand('copy');\">نسخ الكود</button></div></div></div> "); 
document.writeln("                     </div> ");
