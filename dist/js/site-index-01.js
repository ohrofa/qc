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
// Qurano v5
$(document).ready(function(){var curYear=new Date().getFullYear();$("#copyright-year").text(curYear);jQuery(document).ready(function($){var num_ar=['0','1','2','3','4','5','6','7','8','9'];var num_ar_r=['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];$('.num-ar').text(function(i,val){return val.replace(/\d/g,function(m){return num_ar_r[num_ar.indexOf(m)];})});var num_ur=['0','1','2','3','4','5','6','7','8','9'];var num_ur_r=['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];$('.num-ur').text(function(i,val){return val.replace(/\d/g,function(m){return num_ur_r[num_ur.indexOf(m)];})});var num_bn=['0','1','2','3','4','5','6','7','8','9'];var num_bn_r=['০','১','২','৩','৪','৫','৬','৭','৮','৯'];$('.num-bn').text(function(i,val){return val.replace(/\d/g,function(m){return num_bn_r[num_bn.indexOf(m)];})});$('.closeButton').on('click', function(e) {$('#quran-info').slideUp();});});});
// Qurano Select box
$(document).ready(function(){var html_lang = document.documentElement.lang,lang_id = ["ar","bn","de","en","id","ru","tr","ur"],inputLang = "",inputSura = "",slug_value = "",aya_name = "",hreflang = "",SelectName = ["inputLang", "inputSura","inputAya"];for(var n = 0, el_label=""; n < SelectName.length; n++) {el_label += '<label class="select"><select name="' + SelectName[n] + '" id="' + SelectName[n] + '" class="form-control"></select></label>';};$(el_label).appendTo( $("<div/>", {"class": "row"}).appendTo( "#selectSura" ));for(var i = 0; i < lang_id.length; i++) {var isLang = lang_id[i] == html_lang ?  true : false;inputLang += '<option data-lang-id="'+ lang_id[i] + '" ' + (isLang ? "selected " : "") + 'value="'+(i+1)+'">'+lang_id[i].toUpperCase()+'</option>';};$('#inputLang').html(inputLang) ;function load_json(d_lang) {hreflang = d_lang;$.ajax({dataType: "json",url: "/sura_json.json",success: function(data) {var html_markup = '';$.each(data, function(key, value) {switch(hreflang) {case "id":slug_value = value.id_slug;break;default:slug_value = value.en_slug;};var isSura = slug_value == sura_dir ?  true : false,key_id = key+1,sura_slugify = hreflang=="id" ? value.id_slug : value.en_slug,value_aya_count = value.aya_count;html_markup += '<option data-lang="' + hreflang + '" data-sura-slug="' + sura_slugify + '" data-sura-count="'+ value_aya_count + '" ' + (isSura ? 'selected="selected"' : '') + 'value="'+key_id+'">'+key_id + ' - ' + value.name +'</option>';});$('#inputSura').append(html_markup) ;}});}function load_sura(slug,count,value,sura_lang,isSinglePage) {switch(sura_lang) {case "id":aya_name = "ayat";break;case "ar":aya_name = "aya";break;case "en":case "ru":aya_name = "verse";break;default:aya_name = "ayah";};var sura_count = parseInt(count),sura_markup = "";if(number_aya==0){sura_markup += '<option value="0" selected>Select</option>';}for(var sura_item = 0; sura_item < sura_count; sura_item++) {sura_value = sura_item+1;sura_markup += '<option ' + (sura_value == number_aya && isSinglePage ? 'selected="selected"' : '') + ' data-uri="/' + sura_lang + '/'+value +'-' +slug +'/' + aya_name +'-' + sura_value + '/" value="'+ sura_value +'">'+ sura_value +'</option>';}$('#inputAya').append(sura_markup);}$('#inputLang').on('change', function () {var f_lang = $(this).find(':selected'),slug_lang = $(f_lang).attr("data-lang-id");$('#inputSura').html('<option value="0" selected>Select</option>');$('#inputAya').html('<option value="0" selected>Select</option>');load_json(slug_lang);});$('#inputSura').on('change', function () {var s_sura = $(this).find(':selected'),slug = $(s_sura).attr("data-sura-slug"),count = $(s_sura).attr("data-sura-count"),value = $(s_sura).attr("value"),sura_lang = $(s_sura).attr("data-lang");if(page_type == "surah_home"){$('#inputAya').html('');}else {$('#inputAya').html('<option value="0" selected>Select</option>');};load_sura(slug,count,value,sura_lang,false);});$('#inputAya').on('change', function () {var url = $('option:selected',this).attr("data-uri");if (url) {window.location = url;}return false;});load_json(html_lang);load_sura(sura_dir,count_ayat,sura_id,html_lang,true);});