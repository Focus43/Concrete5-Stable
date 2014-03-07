/*! concrete5_project - Build v0.0.6 (2014-03-07) */
var jscolor={dir:"/packages/flexry/images/jscolor/",bindClass:"color-choose",binding:!0,preloading:!0,install:function(){jscolor.addEvent(window,"load",jscolor.init)},init:function(){jscolor.binding&&jscolor.bind(),jscolor.preloading&&jscolor.preload()},getDir:function(){if(!jscolor.dir){var a=jscolor.detectDir();jscolor.dir=a!==!1?a:"jscolor/"}return jscolor.dir},detectDir:function(){for(var a=location.href,b=document.getElementsByTagName("base"),c=0;c<b.length;c+=1)b[c].href&&(a=b[c].href);for(var b=document.getElementsByTagName("script"),c=0;c<b.length;c+=1)if(b[c].src&&/(^|\/)jscolor\.js([?#].*)?$/i.test(b[c].src)){var d=new jscolor.URI(b[c].src),e=d.toAbsolute(a);return e.path=e.path.replace(/[^\/]+$/,""),e.query=null,e.fragment=null,e.toString()}return!1},bind:function(){for(var a=new RegExp("(^|\\s)("+jscolor.bindClass+")\\s*(\\{[^}]*\\})?","i"),b=document.getElementsByTagName("input"),c=0;c<b.length;c+=1){var d;if(!b[c].color&&b[c].className&&(d=b[c].className.match(a))){var e={};if(d[3])try{e=new Function("return ("+d[3]+")")()}catch(f){}b[c].color=new jscolor.color(b[c],e)}}},preload:function(){for(var a in jscolor.imgRequire)jscolor.imgRequire.hasOwnProperty(a)&&jscolor.loadImage(a)},images:{pad:[181,101],sld:[16,101],cross:[15,15],arrow:[7,11]},imgRequire:{},imgLoaded:{},requireImage:function(a){jscolor.imgRequire[a]=!0},loadImage:function(a){jscolor.imgLoaded[a]||(jscolor.imgLoaded[a]=new Image,jscolor.imgLoaded[a].src=jscolor.getDir()+a)},fetchElement:function(a){return"string"==typeof a?document.getElementById(a):a},addEvent:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},fireEvent:function(a,b){if(a)if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0),a.dispatchEvent(c)}else if(document.createEventObject){var c=document.createEventObject();a.fireEvent("on"+b,c)}else a["on"+b]&&a["on"+b]()},getElementPos:function(a){var b=a,c=a,d=0,e=0;if(b.offsetParent)do d+=b.offsetLeft,e+=b.offsetTop;while(b=b.offsetParent);for(;(c=c.parentNode)&&"BODY"!==c.nodeName.toUpperCase();)d-=c.scrollLeft,e-=c.scrollTop;return[d,e]},getElementSize:function(a){return[a.offsetWidth,a.offsetHeight]},getRelMousePos:function(a){var b=0,c=0;return a||(a=window.event),"number"==typeof a.offsetX?(b=a.offsetX,c=a.offsetY):"number"==typeof a.layerX&&(b=a.layerX,c=a.layerY),{x:b,y:c}},getViewPos:function(){return"number"==typeof window.pageYOffset?[window.pageXOffset,window.pageYOffset]:document.body&&(document.body.scrollLeft||document.body.scrollTop)?[document.body.scrollLeft,document.body.scrollTop]:document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[0,0]},getViewSize:function(){return"number"==typeof window.innerWidth?[window.innerWidth,window.innerHeight]:document.body&&(document.body.clientWidth||document.body.clientHeight)?[document.body.clientWidth,document.body.clientHeight]:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?[document.documentElement.clientWidth,document.documentElement.clientHeight]:[0,0]},URI:function(a){function b(a){for(var b="";a;)if("../"===a.substr(0,3)||"./"===a.substr(0,2))a=a.replace(/^\.+/,"").substr(1);else if("/./"===a.substr(0,3)||"/."===a)a="/"+a.substr(3);else if("/../"===a.substr(0,4)||"/.."===a)a="/"+a.substr(4),b=b.replace(/\/?[^\/]*$/,"");else if("."===a||".."===a)a="";else{var c=a.match(/^\/?[^\/]*/)[0];a=a.substr(c.length),b+=c}return b}this.scheme=null,this.authority=null,this.path="",this.query=null,this.fragment=null,this.parse=function(a){var b=a.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);return this.scheme=b[3]?b[2]:null,this.authority=b[5]?b[6]:null,this.path=b[7],this.query=b[9]?b[10]:null,this.fragment=b[12]?b[13]:null,this},this.toString=function(){var a="";return null!==this.scheme&&(a=a+this.scheme+":"),null!==this.authority&&(a=a+"//"+this.authority),null!==this.path&&(a+=this.path),null!==this.query&&(a=a+"?"+this.query),null!==this.fragment&&(a=a+"#"+this.fragment),a},this.toAbsolute=function(a){var a=new jscolor.URI(a),c=this,d=new jscolor.URI;return null===a.scheme?!1:(null!==c.scheme&&c.scheme.toLowerCase()===a.scheme.toLowerCase()&&(c.scheme=null),null!==c.scheme?(d.scheme=c.scheme,d.authority=c.authority,d.path=b(c.path),d.query=c.query):(null!==c.authority?(d.authority=c.authority,d.path=b(c.path),d.query=c.query):(""===c.path?(d.path=a.path,d.query=null!==c.query?c.query:a.query):("/"===c.path.substr(0,1)?d.path=b(c.path):(d.path=null!==a.authority&&""===a.path?"/"+c.path:a.path.replace(/[^\/]+$/,"")+c.path,d.path=b(d.path)),d.query=c.query),d.authority=a.authority),d.scheme=a.scheme),d.fragment=c.fragment,d)},a&&this.parse(a)},color:function(a,b){function c(a,b,c){var d=Math.min(Math.min(a,b),c),e=Math.max(Math.max(a,b),c),f=e-d;if(0===f)return[null,0,e];var g=a===d?3+(c-b)/f:b===d?5+(a-c)/f:1+(b-a)/f;return[6===g?0:g,f/e,e]}function d(a,b,c){if(null===a)return[c,c,c];var d=Math.floor(a),e=d%2?a-d:1-(a-d),f=c*(1-b),g=c*(1-b*e);switch(d){case 6:case 0:return[c,g,f];case 1:return[g,c,f];case 2:return[f,c,g];case 3:return[f,g,c];case 4:return[g,f,c];case 5:return[c,f,g]}}function e(){delete jscolor.picker.owner,document.getElementsByTagName("body")[0].removeChild(jscolor.picker.boxB)}function f(b,c){function d(){var a=q.pickerInsetColor.split(/\s+/),b=a.length<2?a[0]:a[1]+" "+a[0]+" "+a[0]+" "+a[1];k.btn.style.borderColor=b}if(!jscolor.picker){jscolor.picker={box:document.createElement("div"),boxB:document.createElement("div"),pad:document.createElement("div"),padB:document.createElement("div"),padM:document.createElement("div"),sld:document.createElement("div"),sldB:document.createElement("div"),sldM:document.createElement("div"),btn:document.createElement("div"),btnS:document.createElement("span"),btnT:document.createTextNode(q.pickerCloseText)};for(var e=0,f=4;e<jscolor.images.sld[1];e+=f){var j=document.createElement("div");j.style.height=f+"px",j.style.fontSize="1px",j.style.lineHeight="0",jscolor.picker.sld.appendChild(j)}jscolor.picker.sldB.appendChild(jscolor.picker.sld),jscolor.picker.box.appendChild(jscolor.picker.sldB),jscolor.picker.box.appendChild(jscolor.picker.sldM),jscolor.picker.padB.appendChild(jscolor.picker.pad),jscolor.picker.box.appendChild(jscolor.picker.padB),jscolor.picker.box.appendChild(jscolor.picker.padM),jscolor.picker.btnS.appendChild(jscolor.picker.btnT),jscolor.picker.btn.appendChild(jscolor.picker.btnS),jscolor.picker.box.appendChild(jscolor.picker.btn),jscolor.picker.boxB.appendChild(jscolor.picker.box)}var k=jscolor.picker;if(k.box.onmouseup=k.box.onmouseout=function(){a.focus()},k.box.onmousedown=function(){s=!0},k.box.onmousemove=function(a){(v||w)&&(v&&m(a),w&&n(a),document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges(),o())},"ontouchstart"in window){var l=function(a){var b={offsetX:a.touches[0].pageX-x.X,offsetY:a.touches[0].pageY-x.Y};(v||w)&&(v&&m(b),w&&n(b),o()),a.stopPropagation(),a.preventDefault()};k.box.removeEventListener("touchmove",l,!1),k.box.addEventListener("touchmove",l,!1)}k.padM.onmouseup=k.padM.onmouseout=function(){v&&(v=!1,jscolor.fireEvent(t,"change"))},k.padM.onmousedown=function(a){switch(r){case 0:0===q.hsv[2]&&q.fromHSV(null,null,1);break;case 1:0===q.hsv[1]&&q.fromHSV(null,1,null)}w=!1,v=!0,m(a),o()},"ontouchstart"in window&&k.padM.addEventListener("touchstart",function(a){x={X:a.target.offsetParent.offsetLeft,Y:a.target.offsetParent.offsetTop},this.onmousedown({offsetX:a.touches[0].pageX-x.X,offsetY:a.touches[0].pageY-x.Y})}),k.sldM.onmouseup=k.sldM.onmouseout=function(){w&&(w=!1,jscolor.fireEvent(t,"change"))},k.sldM.onmousedown=function(a){v=!1,w=!0,n(a),o()},"ontouchstart"in window&&k.sldM.addEventListener("touchstart",function(a){x={X:a.target.offsetParent.offsetLeft,Y:a.target.offsetParent.offsetTop},this.onmousedown({offsetX:a.touches[0].pageX-x.X,offsetY:a.touches[0].pageY-x.Y})});var p=g(q);k.box.style.width=p[0]+"px",k.box.style.height=p[1]+"px",k.boxB.style.position="absolute",k.boxB.style.clear="both",k.boxB.style.left=b+"px",k.boxB.style.top=c+"px",k.boxB.style.zIndex=q.pickerZIndex,k.boxB.style.border=q.pickerBorder+"px solid",k.boxB.style.borderColor=q.pickerBorderColor,k.boxB.style.background=q.pickerFaceColor,k.pad.style.width=jscolor.images.pad[0]+"px",k.pad.style.height=jscolor.images.pad[1]+"px",k.padB.style.position="absolute",k.padB.style.left=q.pickerFace+"px",k.padB.style.top=q.pickerFace+"px",k.padB.style.border=q.pickerInset+"px solid",k.padB.style.borderColor=q.pickerInsetColor,k.padM.style.position="absolute",k.padM.style.left="0",k.padM.style.top="0",k.padM.style.width=q.pickerFace+2*q.pickerInset+jscolor.images.pad[0]+jscolor.images.arrow[0]+"px",k.padM.style.height=k.box.style.height,k.padM.style.cursor="crosshair",k.sld.style.overflow="hidden",k.sld.style.width=jscolor.images.sld[0]+"px",k.sld.style.height=jscolor.images.sld[1]+"px",k.sldB.style.display=q.slider?"block":"none",k.sldB.style.position="absolute",k.sldB.style.right=q.pickerFace+"px",k.sldB.style.top=q.pickerFace+"px",k.sldB.style.border=q.pickerInset+"px solid",k.sldB.style.borderColor=q.pickerInsetColor,k.sldM.style.display=q.slider?"block":"none",k.sldM.style.position="absolute",k.sldM.style.right="0",k.sldM.style.top="0",k.sldM.style.width=jscolor.images.sld[0]+jscolor.images.arrow[0]+q.pickerFace+2*q.pickerInset+"px",k.sldM.style.height=k.box.style.height;try{k.sldM.style.cursor="pointer"}catch(u){k.sldM.style.cursor="hand"}k.btn.style.display=q.pickerClosable?"block":"none",k.btn.style.position="absolute",k.btn.style.left=q.pickerFace+"px",k.btn.style.bottom=q.pickerFace+"px",k.btn.style.padding="0 15px",k.btn.style.height="18px",k.btn.style.border=q.pickerInset+"px solid",d(),k.btn.style.color=q.pickerButtonColor,k.btn.style.font="12px sans-serif",k.btn.style.textAlign="center";try{k.btn.style.cursor="pointer"}catch(u){k.btn.style.cursor="hand"}switch(k.btn.onmousedown=function(){q.hidePicker()},k.btnS.style.lineHeight=k.btn.style.height,r){case 0:var y="hs.png";break;case 1:var y="hv.png"}k.padM.style.backgroundImage="url('"+jscolor.getDir()+"cross.gif')",k.padM.style.backgroundRepeat="no-repeat",k.sldM.style.backgroundImage="url('"+jscolor.getDir()+"arrow.gif')",k.sldM.style.backgroundRepeat="no-repeat",k.pad.style.backgroundImage="url('"+jscolor.getDir()+y+"')",k.pad.style.backgroundRepeat="no-repeat",k.pad.style.backgroundPosition="0 0",h(),i(),jscolor.picker.owner=q,document.getElementsByTagName("body")[0].appendChild(k.boxB)}function g(a){var b=[2*a.pickerInset+2*a.pickerFace+jscolor.images.pad[0]+(a.slider?2*a.pickerInset+2*jscolor.images.arrow[0]+jscolor.images.sld[0]:0),a.pickerClosable?4*a.pickerInset+3*a.pickerFace+jscolor.images.pad[1]+a.pickerButtonHeight:2*a.pickerInset+2*a.pickerFace+jscolor.images.pad[1]];return b}function h(){switch(r){case 0:var a=1;break;case 1:var a=2}var b=Math.round(q.hsv[0]/6*(jscolor.images.pad[0]-1)),c=Math.round((1-q.hsv[a])*(jscolor.images.pad[1]-1));jscolor.picker.padM.style.backgroundPosition=q.pickerFace+q.pickerInset+b-Math.floor(jscolor.images.cross[0]/2)+"px "+(q.pickerFace+q.pickerInset+c-Math.floor(jscolor.images.cross[1]/2))+"px";var e=jscolor.picker.sld.childNodes;switch(r){case 0:for(var f=d(q.hsv[0],q.hsv[1],1),g=0;g<e.length;g+=1)e[g].style.backgroundColor="rgb("+100*f[0]*(1-g/e.length)+"%,"+100*f[1]*(1-g/e.length)+"%,"+100*f[2]*(1-g/e.length)+"%)";break;case 1:var f,h,i=[q.hsv[2],0,0],g=Math.floor(q.hsv[0]),j=g%2?q.hsv[0]-g:1-(q.hsv[0]-g);switch(g){case 6:case 0:f=[0,1,2];break;case 1:f=[1,0,2];break;case 2:f=[2,0,1];break;case 3:f=[2,1,0];break;case 4:f=[1,2,0];break;case 5:f=[0,2,1]}for(var g=0;g<e.length;g+=1)h=1-1/(e.length-1)*g,i[1]=i[0]*(1-h*j),i[2]=i[0]*(1-h),e[g].style.backgroundColor="rgb("+100*i[f[0]]+"%,"+100*i[f[1]]+"%,"+100*i[f[2]]+"%)"}}function i(){switch(r){case 0:var a=2;break;case 1:var a=1}var b=Math.round((1-q.hsv[a])*(jscolor.images.sld[1]-1));jscolor.picker.sldM.style.backgroundPosition="0 "+(q.pickerFace+q.pickerInset+b-Math.floor(jscolor.images.arrow[1]/2))+"px"}function j(){return jscolor.picker&&jscolor.picker.owner===q}function k(){t===a&&q.importColor(),q.pickerOnfocus&&q.hidePicker()}function l(){t!==a&&q.importColor()}function m(a){var b=jscolor.getRelMousePos(a),c=b.x-q.pickerFace-q.pickerInset,d=b.y-q.pickerFace-q.pickerInset;switch(r){case 0:q.fromHSV(c*(6/(jscolor.images.pad[0]-1)),1-d/(jscolor.images.pad[1]-1),null,B);break;case 1:q.fromHSV(c*(6/(jscolor.images.pad[0]-1)),null,1-d/(jscolor.images.pad[1]-1),B)}}function n(a){var b=jscolor.getRelMousePos(a),c=b.y-q.pickerFace-q.pickerInset;switch(r){case 0:q.fromHSV(null,null,1-c/(jscolor.images.sld[1]-1),A);break;case 1:q.fromHSV(null,1-c/(jscolor.images.sld[1]-1),null,A)}}function o(){if(q.onImmediateChange){var a;a="string"==typeof q.onImmediateChange?new Function(q.onImmediateChange):q.onImmediateChange,a.call(q)}}this.required=!0,this.adjust=!0,this.hash=!1,this.caps=!0,this.slider=!0,this.valueElement=a,this.styleElement=a,this.onImmediateChange=null,this.hsv=[0,0,1],this.rgb=[1,1,1],this.minH=0,this.maxH=6,this.minS=0,this.maxS=1,this.minV=0,this.maxV=1,this.pickerOnfocus=!0,this.pickerMode="HSV",this.pickerPosition="bottom",this.pickerSmartPosition=!0,this.pickerButtonHeight=20,this.pickerClosable=!1,this.pickerCloseText="Close",this.pickerButtonColor="ButtonText",this.pickerFace=10,this.pickerFaceColor="ThreeDFace",this.pickerBorder=1,this.pickerBorderColor="ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight",this.pickerInset=1,this.pickerInsetColor="ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow",this.pickerZIndex=1e4;for(var p in b)b.hasOwnProperty(p)&&(this[p]=b[p]);this.hidePicker=function(){j()&&e()},this.showPicker=function(){if(!j()){var b,c,d,e=jscolor.getElementPos(a),h=jscolor.getElementSize(a),i=jscolor.getViewPos(),k=jscolor.getViewSize(),l=g(this);switch(this.pickerPosition.toLowerCase()){case"left":b=1,c=0,d=-1;break;case"right":b=1,c=0,d=1;break;case"top":b=0,c=1,d=-1;break;default:b=0,c=1,d=1}var m=(h[c]+l[c])/2;if(this.pickerSmartPosition)var n=[-i[b]+e[b]+l[b]>k[b]?-i[b]+e[b]+h[b]/2>k[b]/2&&e[b]+h[b]-l[b]>=0?e[b]+h[b]-l[b]:e[b]:e[b],-i[c]+e[c]+h[c]+l[c]-m+m*d>k[c]?-i[c]+e[c]+h[c]/2>k[c]/2&&e[c]+h[c]-m-m*d>=0?e[c]+h[c]-m-m*d:e[c]+h[c]-m+m*d:e[c]+h[c]-m+m*d>=0?e[c]+h[c]-m+m*d:e[c]+h[c]-m-m*d];else var n=[e[b],e[c]+h[c]-m+m*d];f(n[b],n[c])}},this.importColor=function(){t?this.adjust?!this.required&&/^\s*$/.test(t.value)?(t.value="",u.style.backgroundImage=u.jscStyle.backgroundImage,u.style.backgroundColor=u.jscStyle.backgroundColor,u.style.color=u.jscStyle.color,this.exportColor(y|z)):this.fromString(t.value)||this.exportColor():this.fromString(t.value,y)||(u.style.backgroundImage=u.jscStyle.backgroundImage,u.style.backgroundColor=u.jscStyle.backgroundColor,u.style.color=u.jscStyle.color,this.exportColor(y|z)):this.exportColor()},this.exportColor=function(a){if(!(a&y)&&t){var b=this.toString();this.caps&&(b=b.toUpperCase()),this.hash&&(b="#"+b),t.value=b}a&z||!u||(u.style.backgroundImage="none",u.style.backgroundColor="#"+this.toString(),u.style.color=.213*this.rgb[0]+.715*this.rgb[1]+.072*this.rgb[2]<.5?"#FFF":"#000"),a&A||!j()||h(),a&B||!j()||i()},this.fromHSV=function(a,b,c,e){null!==a&&(a=Math.max(0,this.minH,Math.min(6,this.maxH,a))),null!==b&&(b=Math.max(0,this.minS,Math.min(1,this.maxS,b))),null!==c&&(c=Math.max(0,this.minV,Math.min(1,this.maxV,c))),this.rgb=d(null===a?this.hsv[0]:this.hsv[0]=a,null===b?this.hsv[1]:this.hsv[1]=b,null===c?this.hsv[2]:this.hsv[2]=c),this.exportColor(e)},this.fromRGB=function(a,b,e,f){null!==a&&(a=Math.max(0,Math.min(1,a))),null!==b&&(b=Math.max(0,Math.min(1,b))),null!==e&&(e=Math.max(0,Math.min(1,e)));var g=c(null===a?this.rgb[0]:a,null===b?this.rgb[1]:b,null===e?this.rgb[2]:e);null!==g[0]&&(this.hsv[0]=Math.max(0,this.minH,Math.min(6,this.maxH,g[0]))),0!==g[2]&&(this.hsv[1]=null===g[1]?null:Math.max(0,this.minS,Math.min(1,this.maxS,g[1]))),this.hsv[2]=null===g[2]?null:Math.max(0,this.minV,Math.min(1,this.maxV,g[2]));var h=d(this.hsv[0],this.hsv[1],this.hsv[2]);this.rgb[0]=h[0],this.rgb[1]=h[1],this.rgb[2]=h[2],this.exportColor(f)},this.fromString=function(a,b){var c=a.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);return c?(6===c[1].length?this.fromRGB(parseInt(c[1].substr(0,2),16)/255,parseInt(c[1].substr(2,2),16)/255,parseInt(c[1].substr(4,2),16)/255,b):this.fromRGB(parseInt(c[1].charAt(0)+c[1].charAt(0),16)/255,parseInt(c[1].charAt(1)+c[1].charAt(1),16)/255,parseInt(c[1].charAt(2)+c[1].charAt(2),16)/255,b),!0):!1},this.toString=function(){return(256|Math.round(255*this.rgb[0])).toString(16).substr(1)+(256|Math.round(255*this.rgb[1])).toString(16).substr(1)+(256|Math.round(255*this.rgb[2])).toString(16).substr(1)};var q=this,r="hvs"===this.pickerMode.toLowerCase()?1:0,s=!1,t=jscolor.fetchElement(this.valueElement),u=jscolor.fetchElement(this.styleElement),v=!1,w=!1,x={},y=1,z=2,A=4,B=8;if(jscolor.addEvent(a,"focus",function(){q.pickerOnfocus&&q.showPicker()}),jscolor.addEvent(a,"blur",function(){s?s=!1:window.setTimeout(function(){s||k(),s=!1},0)}),t){var C=function(){q.fromString(t.value,y),o()};jscolor.addEvent(t,"keyup",C),jscolor.addEvent(t,"input",C),jscolor.addEvent(t,"blur",l),t.setAttribute("autocomplete","off")}switch(u&&(u.jscStyle={backgroundImage:u.style.backgroundImage,backgroundColor:u.style.backgroundColor,color:u.style.color}),r){case 0:jscolor.requireImage("hs.png");break;case 1:jscolor.requireImage("hv.png")}jscolor.requireImage("cross.gif"),jscolor.requireImage("arrow.gif"),this.importColor()}};jscolor.install(),$(function(){function a(){$(".inner","#imageSelections").sortable({handle:".icon-move",items:".item",cursor:"move",containment:"parent",opacity:.65,tolerance:"pointer"})}function b(){var a=[],b=!1;$('input[type="hidden"]',"#imageSelections").each(function(c,d){var e=$(d),f=e.val();-1===a.indexOf(f)?a.push(f):(b=!0,e.parent(".item").remove())}),$("#tabPaneImages").toggleClass("dups",b)}function c(){switch(+$(".fileSourceMethod.active").attr("data-method")){case 0:a();break;case 1:$("#fileSetPicker").chosen()}jscolor.bind()}$("#chooseImg").on("click",function(){var c,d=[];ccm_chooseAsset=function(e){d.push(e),clearTimeout(c),c=setTimeout(function(){$.each(d,function(a,b){var c=$('<div class="item" />');c.append('<i class="icon-minus-sign"></i><i class="icon-move"></i><input type="hidden" name="fileIDs[]" value="'+b.fID+'" />'),c.css("background-image","url("+b.thumbnailLevel2+")"),$(".inner","#imageSelections").append(c)}),a(),b()},250)},ccm_alLaunchSelectorFileManager()}),$("#chooseImg, .show-tooltip").tooltip({animation:!1,placement:"bottom"}),$(".show-popover").popover({animation:!1,placement:"top"}),$("#imageSelections").on("click",".item",function(a){var b=$(this);$(a.target).hasClass("icon-minus-sign")?b.remove():$.fn.dialog.open({width:650,height:450,title:"File Properties",href:"/tools/required/files/properties?fID="+$("input",b).val()})}),$(".close",".dups-warning").on("click",function(){$("#tabPaneImages").removeClass("dups")}),$("#flexryClearAll").on("click",function(a){a.preventDefault(),confirm("This will remove all images and reset your selections. Continue?")&&$(".item","#imageSelections").remove()}),$("a",".nav-tabs").on("click",function(){var a=$(this),b=$(a.attr("data-tab"));a.parent("li").add(b).addClass("active").siblings().removeClass("active"),$("#flexryOptionsRight").toggle("#tabPaneImages"===a.attr("data-tab"))}),$("#fullUseOriginal").on("change",function(){$(this).is(":checked")?$("#fullWidth, #fullHeight, #fullCrop").attr("disabled","disabled"):$("#fullWidth, #fullHeight, #fullCrop").removeAttr("disabled")}).trigger("change"),$(".enableLightboxCheckbox").on("change",function(){$(".flexry-lightbox-settings").toggle($(this).is(":checked"))}).trigger("change"),$("#fileSourceMethod").on("change",function(){var a=$(this).val(),b=$("#chooseImg");$(".fileSourceMethod","#flexryGallery").removeClass("active").filter("[data-method="+a+"]").addClass("active"),b.toggle(+a===+b.attr("data-method")),c()}).trigger("change"),$("#flexryTemplateHandle").on("change",function(){var a=$(this).val();$(".template-form","#tabPaneTemplates").removeClass("active").filter('[data-tmpl="'+a+'"]').addClass("active")}),c()});