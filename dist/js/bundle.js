/**
 * tabs-to-accordion.js
 * https://github.com/schne324/responsive-tabs-to-accordion
 *
 * Licensed under the MIT license.
 */
 var $navlist=$("#navlist"),$tabContainer=$("#tab-container"),$panels=$("#panels");function findAdjacentTab(e,i,t){var a=37===t||38===t?"prev":"next",n="prev"===a?$(e.parentNode).prev()[0]:$(e.parentNode).next()[0];if(!n){var r=i.find("li")
;n="prev"===a?r[r.length-1]:r[0]}return $(n).find("a")[0]}function setActiveAndInactive(e,i){i.find("li").each(function(){var i=$(this).find("a").first().attr("aria-controls"),t=$(this).find("a")[0]
;this!==e.parentNode?($(this).removeClass("active"),t.tabIndex=-1,t.setAttribute("aria-selected","false"),$("#"+i).removeClass("current").attr("aria-hidden","true")):($(this).addClass("active"),t.tabIndex=0,
t.setAttribute("aria-selected","true"),$("#"+i).addClass("current").attr("aria-hidden","false"))})}$navlist.on("keydown","li a",function(e){var i=e.which,t=e.target;if($.inArray(i,[37,38,39,40])>-1){var a=findAdjacentTab(t,$navlist,i)
;a&&(e.preventDefault(),a.focus(),setActiveAndInactive(a,$navlist))}else if(13===i||32===i)e.preventDefault(),t.click();else if(34===i){e.preventDefault();var n=$("#"+this.getAttribute("aria-controls"));n&&n.prop("tabIndex",-1).focus()}}),
$(document.body).on("keydown",".panel",function(e){if(33===e.which){e.preventDefault();var i=$navlist.find("li.active a")[0];i&&i.focus()}}),$navlist.on("click","li a",function(e){e.preventDefault(),setActiveAndInactive(this,$navlist)})
;var isAccordionView=!1,isTabsView=!1;function determineView(){var e=$(window).width();if(e<=800&&!isAccordionView)$tabContainer.removeClass("tabs-view").addClass("accordion-view"),$panels.find(".panel").each(function(){
var e=this.id,i=e&&$('#navlist a[aria-controls="'+e+'"]')[0];i&&$(i.parentNode).append(this)}),isAccordionView=!0,isTabsView=!1;else if(e>800&&!isTabsView){var i=$tabContainer.hasClass("accordion-view")
;$tabContainer.removeClass("accordion-view").addClass("tabs-view"),i&&$navlist.find(".panel").each(function(){$panels.append(this)}),isTabsView=!0,isAccordionView=!1}}determineView(),function(e,i){jQuery.fn[i]=function(e){
return e?this.bind("resize",(t=e,function(){var e=this,i=arguments;r?clearTimeout(r):n&&t.apply(e,i),r=setTimeout(function(){n||t.apply(e,i),r=null},a||100)})):this.trigger(i);var t,a,n,r}}(jQuery,"smartresize"),
$(window).smartresize(determineView);
/**
 * author : İlker YILMAZ
 * url : https://github.com/kuantal/Multiple-circular-player
 * inspired by https://github.com/frumbert/circular-player
 */
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e:t.lunar=e()}(this,function(){"use strict";var t={hasClass:function(t,e){return new RegExp("(\\s|^)"+e+"(\\s|$)").test(t.attr("class"))
},addClass:function(e,s){!t.hasClass(e,s)&&e.attr("class",(e.getAttribute("class")?e.getAttribute("class")+" ":"")+s)},removeClass:function(e,s){var a=e.attr("class").replace(new RegExp("(\\s|^)"+s+"(\\s|$)","g"),"$2")
;t.hasClass(e,s)&&e.attr("class",a)},toggleClass:function(e,s){t[t.hasClass(e,s)?"removeClass":"addClass"](e,s)},className:function(t,e){t.attr("class",e),console.log("className",t)}};return t}),function(t){var e={cursorPoint:function(t,s){
e.settings.pt.x=t.clientX,e.settings.pt.y=t.clientY;var a=s.find("svg").attr("id");return a=document.getElementById(a),e.settings.pt.matrixTransform(a.getScreenCTM().inverse())},angle:function(t,e){var s=e-50,a=t-50,r=Math.atan2(s,a)
;return r*=180/Math.PI,(r+=90)<0&&(r=360+r),r},setGraphValue:function(s,a,r){var i=r.find(e.settings.audioObj),n=e.settings.pc,o=n-parseFloat(a/i[0].duration*n,10);t(s).css("strokeDashoffset",o),0===a&&(t(s).addClass(s,"done"),
s===t(e.settings.progress)&&t(s).attr("class","ended"))},reportPosition:function(t,s){var a=t.find(e.settings.progress);t.find(e.settings.audioObj);e.setGraphValue(a,s.currentTime,t)},stopAllSounds:function(){
document.addEventListener("play",function(e){for(var s=document.getElementsByTagName("audio"),a=0,r=s.length;a<r;a++)s[a]!=e.target&&s[a].pause(),s[a]!=e.target&&t(s[a]).parent("div").find(".playing").attr("class","paused")},!0)},
settings:{},init:function(s){
var a=['<svg viewBox="0 0 100 100" id="playable" version="1.1" xmlns="http://www.w3.org/2000/svg" width="34" height="34" data-play="playable" class="not-started playable">','<g class="shape">','<circle class="progress-track" cx="50" cy="50" r="47.45" stroke="#005C82" stroke-opacity="0.25" stroke-linecap="round" fill="none" stroke-width="5"/>','<circle class="precache-bar" cx="50" cy="50" r="47.45" stroke="#302F32" stroke-opacity="0.25" stroke-linecap="round" fill="none" stroke-width="5" transform="rotate(-90 50 50)"/>','<circle class="progress-bar" cx="50" cy="50" r="47.45" stroke="#005C82" stroke-opacity="1" stroke-linecap="round" fill="none" stroke-width="5" transform="rotate(-90 50 50)"/>',"</g>",'<circle class="controls" cx="50" cy="50" r="45" stroke="none" fill="#000000" opacity="0.0" pointer-events="all"/>','<g class="control pause">','<line x1="40" y1="35" x2="40" y2="65" stroke="#000000" fill="none" stroke-width="8" stroke-linecap="round"/>','<line x1="60" y1="35" x2="60" y2="65" stroke="#000000" fill="none" stroke-width="8" stroke-linecap="round"/>',"</g>",'<g class="control play">','<polygon points="45,35 65,50 45,65" fill="#005C82" stroke-width="0"></polygon>',"</g>",'<g class="control stop">','<rect x="35" y="35" width="30" height="30" stroke="#000000" fill="none" stroke-width="1"/>',"</g>","</svg>"]
;a=a.join(" "),t.each(this,function(e,s){var r=t(this).find("audio");r.attr("id","audio"+e),
a=(a=(a=a.replace('width="34"','width="'+r.data("size")+'"')).replace('height="34"','height="'+r.data("size")+'"')).replace('id="playable"','id="playable'+e+'"'),t(this).append(a)});var r=t(this).find("svg").attr("id")
;r=document.getElementById(r),e.defaults={this:this,thisSelector:this.selector.toString(),playObj:"playable",progress:".progress-bar",precache:".precache-bar",audioObj:"audio",controlsObj:".controls",pt:r.createSVGPoint(),
pc:298.1371428256714},lunar={},e.settings=t.extend({},e.defaults,s),t(e.settings.controlsObj).on("click",function(s){var a=t(s.currentTarget).closest(t(e.settings.thisSelector)),r={el:a,activeAudio:a.find(e.settings.audioObj),
playObj:a.find("[data-play]"),precache:a.find(e.settings.precache)};switch(r.class=r.playObj.attr("class"),r.class.replace("playable","").trim()){case"not-started":e.stopAllSounds(),r.activeAudio[0].play()
;var i=document.getElementById(r.activeAudio.attr("id"));i.addEventListener("timeupdate",function(t){e.reportPosition(a,i)}),r.playObj.attr("class","playing");break;case"playing":r.playObj.attr("class","playable paused"),
r.activeAudio[0].pause(),t(i).off("timeupdate");break;case"paused":r.playObj.attr("class","playable playing"),r.activeAudio[0].play();break;case"ended":r.playObj.attr("class","not-started playable"),
r.activeAudio.off("timeupdate",e.reportPosition)}}),t(e.defaults.audioObj).on("progress",function(s){if(this.buffered.length>0){
var a=this.buffered.end(this.buffered.length-1),r=t(s.currentTarget).parent().find(e.settings.precache),i=t(this).closest(t(e.settings.thisSelector));e.setGraphValue(r,a,i)}})}};t.fn.mediaPlayer=function(s){
return e[s]?e[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?void t.error("Method "+s+" does not exist on jQuery.mediaPlayer"):e.init.apply(this,arguments)}}(jQuery);
/* super-search
Author: Kushagra Gour (http://kushagragour.in)
MIT Licensed
*/
!function(){var e,t,n,i,s="/quran-"+document.getElementById("title").getAttribute("data-language")+".xml",r="",a=[];function o(e){var t=function e(t){var n={};3==t.nodeType&&(n=t.nodeValue)
;var i=[].slice.call(t.childNodes).filter(function(e){return 3===e.nodeType});if(t.hasChildNodes()&&t.childNodes.length===i.length)n=[].slice.call(t.childNodes).reduce(function(e,t){return e+t.nodeValue
},"");else if(t.hasChildNodes())for(var s=0;s<t.childNodes.length;s++){var r=t.childNodes.item(s),a=r.nodeName;if(void 0===n[a])n[a]=e(r);else{if(void 0===n[a].push){var o=n[a];n[a]=[],n[a].push(o)}n[a].push(e(r))}}return n}(e)
;return t.entry&&t.entry instanceof Array?t.entry:t.channel.item}function c(c){s=c.searchFile||s,e=document.querySelector(c.searchSelector||"#js-super-search"),t=document.querySelector(c.inputSelector||"#js-super-search__input"),
n=document.querySelector(c.resultsSelector||"#js-super-search__results");var l=new XMLHttpRequest;l.open("GET",s),l.onreadystatechange=function(){if(4==l.readyState&&(200==l.status||304==l.status)){
var e=(new DOMParser).parseFromString(l.responseText,"text/xml");e=e.children[0],a=o(e)}},l.send(),window.addEventListener("keyup",function(e){27===e.which&&toggleSearch()}),window.addEventListener("keypress",function(t){
47!==t.which||e.classList.contains("is-active")||toggleSearch()}),t.addEventListener("input",function(){!function(){var e;if(!(r=(t.value+"").toLowerCase())||r.length<3)return i="",void n.classList.add("is-hidden");n.style.offsetWidth
;var s=a.filter(function(e){if(-1!==(e.title+"").toLowerCase().indexOf(r)||-1!==((e.description||e.content)+"").toLowerCase().indexOf(r))return!0});s.length||n.classList.add("is-hidden"),e=s.reduce(function(e,t){return t.title+e},""),
s.length&&e!==i&&(n.classList.remove("is-hidden"),n.innerHTML=s.map(function(e){return new Date(e.pubDate),'<li><a href="'+e.link+'">'+e.title+"</a></li>"}).join("")),i=e}()})}window.toggleSearch=function(){e.classList.toggle("is-active"),
e.classList.contains("is-active")?t.value="":n.classList.add("is-hidden"),setTimeout(function(){t.focus()},210)},c.toggle=toggleSearch,window.superSearch=c}();
/**
 * Qurano v2
 */
$(document).ready(function(){$('.mediPlayer').mediaPlayer()});var curYear=new Date().getFullYear();$("#copyright-year").text(curYear);jQuery(document).ready(function($){var num_ar=['0','1','2','3','4','5','6','7','8','9'];var num_ar_r=['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];$('.num-ar').text(function(i,val){return val.replace(/\d/g,function(m){return num_ar_r[num_ar.indexOf(m)];})});var num_ur=['0','1','2','3','4','5','6','7','8','9'];var num_ur_r=['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];$('.num-ur').text(function(i,val){return val.replace(/\d/g,function(m){return num_ur_r[num_ur.indexOf(m)];})});var num_bn=['0','1','2','3','4','5','6','7','8','9'];var num_bn_r=['০','১','২','৩','৪','৫','৬','৭','৮','৯'];$('.num-bn').text(function(i,val){return val.replace(/\d/g,function(m){return num_bn_r[num_bn.indexOf(m)];})});});