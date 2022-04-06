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

