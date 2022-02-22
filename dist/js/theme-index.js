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
// Qurano v5.1
$(document).ready(function(){var curYear=new Date().getFullYear();$("#copyright-year").text(curYear);$("#footer-ins").html('<a href="/donate/" class="button button-primary" lang="en">Donate</a><p class="help"><small lang="en">Please support us by making a donation</small></p> <p> '+ curYear + ' <a href="https://qurano.com/">QuranO.com</a> - Quran O</p>');var num_ar=['0','1','2','3','4','5','6','7','8','9'];var num_ar_r=['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];$('.num-ar').text(function(i,val){return val.replace(/\d/g,function(m){return num_ar_r[num_ar.indexOf(m)];})});var num_ur=['0','1','2','3','4','5','6','7','8','9'];var num_ur_r=['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];$('.num-ur').text(function(i,val){return val.replace(/\d/g,function(m){return num_ur_r[num_ur.indexOf(m)];})});var num_bn=['0','1','2','3','4','5','6','7','8','9'];var num_bn_r=['০','১','২','৩','৪','৫','৬','৭','৮','৯'];$('.num-bn').text(function(i,val){return val.replace(/\d/g,function(m){return num_bn_r[num_bn.indexOf(m)];})});$('.closeButton').on('click', function(e) {$('#quran-info').slideUp();});function showDropdownMenu(e) {var menuContent = ".dropdown-content";$(menuContent).removeClass("show");$(e).next(menuContent).toggleClass("show");};$(".dropbtn").click(function() {showDropdownMenu(this);});window.onclick = function(event) {if (!event.target.matches(".dropbtn")) {var dropdowns = $(".dropdown-content");var i;for (i = 0; i < dropdowns.length; i++) {var openDropdown = dropdowns[i];if (openDropdown.classList.contains("show")) {openDropdown.classList.remove("show");}}}}});
// Qurano Select Aya v2.1
$(document).ready(function(){var html_lang = document.documentElement.lang,lang_id = ["ar","bn","de","en","id","ru","ta","tr","ur"],inputLang = "",inputSura = "",slug_value = "",aya_name = "",hreflang = "",SelectName = ["inputLang", "inputSura","inputAya"];for(var n = 0, el_label=""; n < SelectName.length; n++) {el_label += '<label class="select"><select name="' + SelectName[n] + '" id="' + SelectName[n] + '" class="form-control"></select></label>';};$(el_label).appendTo( $("<div/>", {"class": "row"}).appendTo( "#selectSura" ));for(var i = 0; i < lang_id.length; i++) {var isLang = lang_id[i] == html_lang ?  true : false;inputLang += '<option data-lang-id="'+ lang_id[i] + '" ' + (isLang ? "selected " : "") + 'value="'+(i+1)+'">'+lang_id[i].toUpperCase()+'</option>';};$('#inputLang').html(inputLang) ;function load_json(d_lang,isSelected) {hreflang = d_lang;$.ajax({dataType: "json",url: "/dist/data/sura_slug.json",success: function(data) {var html_markup = '';$.each(data, function(key, value) {switch(hreflang) {case "id":slug_value = value.id_slug;break;default:slug_value = value.en_slug;}var key_id = key+1,sura_slugify = hreflang=="id" ? value.id_slug : value.en_slug,value_aya_count = value.aya_count;html_markup += '<option data-lang="' + hreflang + '" data-sura-slug="' + sura_slugify + '" data-sura-count="'+ value_aya_count + '" ' + (slug_value == sura_dir && isSelected ? 'selected="selected"' : '') + 'value="'+key_id+'">'+key_id + ' - ' + value.name +'</option>';});$('#inputSura').append(html_markup) ;}});}function load_sura(slug,count,value,sura_lang,isSinglePage) {switch(sura_lang) {case "id":aya_name = "ayat";break;case "ar":aya_name = "aya";break;case "en":case "ta":case "ru":aya_name = "verse";break;default:aya_name = "ayah";};var sura_count = parseInt(count),sura_markup = "";if(number_aya==0){sura_markup += '<option value="0" selected>Select</option>';}for(var sura_item = 0; sura_item < sura_count; sura_item++) {sura_value = sura_item+1;sura_markup += '<option ' + (sura_value == number_aya && isSinglePage ? 'selected="selected"' : '') + ' data-uri="/' + sura_lang + '/'+value +'-' +slug +'/' + aya_name +'-' + sura_value + '/" value="'+ sura_value +'">'+ sura_value +'</option>';}$('#inputAya').append(sura_markup);}$('#inputLang').on('change', function () {var f_lang = $(this).find(':selected'),slug_lang = $(f_lang).attr("data-lang-id");$('#inputSura').html('<option value="0" selected>Select</option>');$('#inputAya').html('<option value="0" selected>Select</option>');load_json(slug_lang,false);});$('#inputSura').on('change', function () {var s_sura = $(this).find(':selected'),slug = $(s_sura).attr("data-sura-slug"),count = $(s_sura).attr("data-sura-count"),value = $(s_sura).attr("value"),sura_lang = $(s_sura).attr("data-lang");if(page_type == "surah_home"){$('#inputAya').html('');}else {$('#inputAya').html('<option value="0" selected>Select</option>');};load_sura(slug,count,value,sura_lang,false);return false;});$('#inputAya').on('change', function () {var url = $('option:selected',this).attr("data-uri");if (url) {window.location = url;}return false;});load_json(html_lang,true);load_sura(sura_dir,count_ayat,sura_id,html_lang,true);/* search */var searchEl = '<div class="row qh-cse" id="qhCse"><div class="search container"><input type="text" class="searchTerm" placeholder="Search..."><button type="submit" class="searchButton"><i class="fa fa-search"></i></button></div></div>';$(".header").after(searchEl);function searchCse(){query = encodeURIComponent($.trim($('.searchTerm').val()));if(!query){$('.searchTerm').addClass('warning');} else {$('.searchTerm').removeClass('warning');/*url ='/search.html?q='*/url ='https://cse.google.com/cse?cx=partner-pub-3288866780282962:trqd80zcgmk&q=' + query;window.location.href = url;}}$( ".searchButton" ).click(function() {searchCse();});$("input.searchTerm").keydown(function(e){if(e.which === 13){$(".searchButton").click();}}); });
/* update dark theme+ */
$(document).ready(function() {
    $('<div class="text-center"><div class="text-muted">QuranO Youtube Channel</div><div class="text-muted"><small>Word By Word Al-Quran Video:</small></div><a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCXOfzdqzVQkFGpEUOfwTG5A"><img width="64" height="64" class="button" src="/dist/img/youtube.svg"></a></div>').insertBefore("#footer-ins");
    
    if (!localStorage.getItem("qurano_mode")) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localStorage.setItem("qurano_mode", "dark-theme");            
        } else {
            localStorage.setItem("qurano_mode", "light-theme");
        }
    }

    if (localStorage.getItem("qurano_mode") == "dark-theme") {
        $("body").addClass("dark-theme");
        $("body").removeClass("light-theme");
        document.getElementById("theme_toggle").checked = true;
    } else {
        $("body").removeClass("dark-theme");
        $("body").addClass("light-theme");
        document.getElementById("theme_toggle").checked = false;
    }

    $("#theme_toggle").on("click", function() {
        if ($("body").hasClass("dark-theme")) {
            $("body").removeClass("dark-theme");
            $("body").addClass("light-theme");
            localStorage.setItem("qurano_mode", "light-theme");
        } else {
            $("body").addClass("dark-theme");
            $("body").removeClass("light-theme");
            localStorage.setItem("qurano_mode", "dark-theme");
        }
    });
});