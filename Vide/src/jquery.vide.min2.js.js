!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery)}(this,function(a){"use strict";function e(a){var c,d,e,f,g,h,i,b={};for(g=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),i=0,h=g.length;i<h&&(d=g[i],d.search(/^(http|https|ftp):\/\//)===-1&&d.search(":")!==-1);i++)c=d.indexOf(":"),e=d.substring(0,c),f=d.substring(c+1),f||(f=void 0),"string"==typeof f&&(f="true"===f||"false"!==f&&f),"string"==typeof f&&(f=isNaN(f)?f:+f),b[e]=f;return null==e&&null==f?a:b}function f(a){a=""+a;var e,f,g,b=a.split(/\s+/),c="50%",d="50%";for(g=0,e=b.length;g<e;g++)f=b[g],"left"===f?c="0%":"right"===f?c="100%":"top"===f?d="0%":"bottom"===f?d="100%":"center"===f?0===g?c="50%":d="50%":0===g?c=f:d=f;return{x:c,y:d}}function g(b,c){var d=function(){c(this.src)};a('<img src="'+b+'.jpg">').on("load",d)}function h(b,f,g){if(this.$element=a(b),"string"==typeof f&&(f=e(f)),g?"string"==typeof g&&(g=e(g)):g={},"string"==typeof f)f=f.replace(/\.\w*$/,"");else if("object"==typeof f)for(var h in f)f.hasOwnProperty(h)&&(f[h]=f[h].replace(/\.\w*$/,""));this.settings=a.extend({},c,g),this.path=f;try{this.init()}catch(a){if(a.message!==d)throw a}}var b="vide",c={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},d="Not implemented";h.prototype.init=function(){var n,o,c=this,e=c.path,h=e,i="",j=c.$element,k=c.settings,l=f(k.position),m=k.posterType;o=c.$wrapper=a("<div>").addClass(k.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":k.bgColor,"background-repeat":"no-repeat","background-position":l.x+" "+l.y}),"object"==typeof e&&(e.poster?h=e.poster:e.mp4?h=e.mp4:e.webm?h=e.webm:e.ogv&&(h=e.ogv)),"detect"===m?g(h,function(a){o.css("background-image","url("+a+")")}):"none"!==m&&o.css("background-image","url("+h+"."+m+")"),"static"===j.css("position")&&j.css("position","relative"),j.prepend(o),"object"==typeof e?(e.mp4&&(i+='<source src="'+e.mp4+'.mp4" type="video/mp4">'),e.webm&&(i+='<source src="'+e.webm+'.webm" type="video/webm">'),e.ogv&&(i+='<source src="'+e.ogv+'.ogv" type="video/ogg">'),n=c.$video=a("<video>"+i+"</video>")):n=c.$video=a('<video><source src="'+e+'.mp4" type="video/mp4"><source src="'+e+'.webm" type="video/webm"><source src="'+e+'.ogv" type="video/ogg"></video>');try{n.prop({autoplay:k.autoplay,loop:k.loop,volume:k.volume,muted:k.muted,defaultMuted:k.muted,playbackRate:k.playbackRate,defaultPlaybackRate:k.playbackRate})}catch(a){throw new Error(d)}n.css({margin:"auto",position:"absolute","z-index":-1,top:l.y,left:l.x,"-webkit-transform":"translate(-"+l.x+", -"+l.y+")","-ms-transform":"translate(-"+l.x+", -"+l.y+")","-moz-transform":"translate(-"+l.x+", -"+l.y+")",transform:"translate(-"+l.x+", -"+l.y+")",visibility:"hidden",opacity:0}).one("canplaythrough.vide",function(){c.resize()}).one("playing.vide",function(){n.css({visibility:"visible",opacity:1}),o.css("background-image","none")}),j.on("resize.vide",function(){k.resizing&&c.resize()}),o.append(n)},h.prototype.getVideoObject=function(){return this.$video[0]},h.prototype.resize=function(){if(this.$video){var a=this.$wrapper,b=this.$video,c=b[0],d=c.videoHeight,e=c.videoWidth,f=a.height(),g=a.width();g/e>f/d?b.css({width:g+2,height:"auto"}):b.css({width:"auto",height:f+2})}},h.prototype.destroy=function(){delete a[b].lookup[this.index],this.$video&&this.$video.off(b),this.$element.off(b).removeData(b),this.$wrapper.remove()},a[b]={lookup:[]},a.fn[b]=function(c,d){var e;return this.each(function(){e=a.data(this,b),e&&e.destroy(),e=new h(this,c,d),e.index=a[b].lookup.push(e)-1,a.data(this,b,e)}),this},a(document).ready(function(){var c=a(window);c.on("resize.vide",function(){for(var e,c=a[b].lookup.length,d=0;d<c;d++)e=a[b].lookup[d],e&&e.settings.resizing&&e.resize()}),c.on("unload.vide",function(){return!1}),a(document).find("[data-vide-bg]").each(function(c,d){var e=a(d),f=e.data("vide-options"),g=e.data("vide-bg");e[b](g,f)})})});