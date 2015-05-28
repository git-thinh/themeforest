/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
!function($){"use strict";$.fn.fitVids=function(t){var e={customSelector:null};if(!document.getElementById("fit-vids-style")){var i=document.createElement("div"),r=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],a="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";i.className="fit-vids-style",i.id="fit-vids-style",i.style.display="none",i.innerHTML=a,r.parentNode.insertBefore(i,r)}return t&&$.extend(e,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];e.customSelector&&t.push(e.customSelector);var i=$(this).find(t.join(","));i=i.not("object object"),i.each(function(){var t=$(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var e="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),r=e/i;if(!t.attr("id")){var a="fitvid"+Math.floor(999999*Math.random());t.attr("id",a)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*r+"%"),t.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);