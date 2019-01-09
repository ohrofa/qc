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
// custom
var curYear = new Date().getFullYear();$( "#copyright-year" ).text( curYear );
jQuery( document ).ready( function( $ ) {
var f = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var r = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
$('.number').text(function(i, val) {
  return val.replace(/\d/g, function(m) {
    return r[f.indexOf(m)];
  })
});

});
