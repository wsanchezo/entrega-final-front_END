(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[826],{9627:(e,t,o)=>{"use strict";function a(){for(window_resize=$(window).width(),window_resize<=576?(feedColumns=2,columnWidth="50%"):window_resize>576&&window_resize<991?(feedColumns=3,columnWidth="33.33333333%"):window_resize>=992&&(feedColumns=5,columnWidth="20%"),$(".get-feed").html(""),i=0;i<feedColumns;i++)$(".get-feed").append('<li> <a target="_blank" href="'+photosFeeded[i].lnk+'" style="background-image: url('+photosFeeded[i].src+')"></a></li>');$(".get-feed li").css({width:columnWidth}),$(".get-feed li a").css({height:$(".get-feed li a").width()})}o(9826),o(5306),o(4916),o(2564),o(1249),o(8309),$(window).resize((function(){a()})),$(window).load((function(){document.getElementById("home-video-play").play(),document.getElementById("home-video-play").removeAttribute("controls"),$("#filters button:first-child").trigger("click"),$(".team-carousel .owl-item.active").first().find("img").trigger("click")})),$(document).ready((function(){$(".what-we-do .column").hover((function(){var e=$(this).find("img"),t=e.attr("src").replace(".png",".gif");e.attr("src",t)}),(function(){var e=$(this).find("img"),t=e.attr("src").replace(".gif",".png");e.attr("src",t)})),$(".header-carousel").owlCarousel({autoplay:!0,autoplayTimeout:15e3,autoplayHoverPause:!0,loop:!0,margin:10,nav:!0,responsive:{0:{items:1}}}),$(".chat-button").click((function(){$(".olark-launch-button").trigger("click")})),$(".scroll-to").click((function(e){var t=$(this).data("target"),o=$(t).position().top;$(window).width()>767&&(o-=$("header").height()),$("html,body").stop().animate({scrollTop:o},1800,"easeOutSine")})),$(".navbar-toggler").click((function(){$(".navbar-toggler-icon").toggleClass("open")}));var e=0;setInterval((function(){$(".astronaut").attr("src",location.protocol+"//"+location.host+"/static/img/home/our-powers/astronaut/astronaut_"+e+".png"),++e>47&&(e=0)}),40),$(".our-powers-carousel").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},400:{items:2},600:{items:3}}}),$(".phases-control .handle");var t=0,o=0;$(".phases-control").slider({orientation:"horizontal",range:"min",value:9,animate:!0,slide:function(e,a){var i=a.value;i<88?$(".phase").each((function(){var e=$(this).data("percent");i>e&&(t=$(this).data("slideTo"))})):t=4,t!=o&&($(".phase[data-slide-to='"+t+"']").click(),o=t)}}),$(".phase").click((function(){$(".phase").removeClass("active"),$(this).addClass("active");var e=$(this).data("percent"),t=$(this).data("file"),o=$(this).data("color");$(".phases-control").slider("value",e),$("#gradient-wave").attr("goto",o),$(".how-we-do-figure").stop().animate({top:"-200px",opacity:0},500,(function(){$(".how-we-do-figure img").attr("src",t),$(".how-we-do-figure").css("top","200px"),$(".how-we-do-figure").animate({top:0,opacity:1},500)}))}));var i=$(".grid").isotope({itemSelector:".project",layoutMode:"fitRows"});$("#filters").on("click","button",(function(){var e=$(this).attr("data-filter");i.isotope({filter:e})})),$(".button-group").each((function(e,t){var o=$(t);o.on("click","button",(function(){o.find(".is-checked").removeClass("is-checked"),$(this).addClass("is-checked")}))}));var n=$('<div class="hover-svg"><svg class="hover-team" data-name="Gradient hexagon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 366.01 407.01"><path class="cls-team" d="M644.91,166.88,497.47,82.07c-9.4-5.41-24.79-5.43-34.21-.06L315.49,166.26c-9.42,5.37-17.47,18.58-17.48,29.36-.09,42.26.08,126.79,0,169.07,0,10.79,7.65,24,17.06,29.44L462.5,478.92c9.4,5.41,24.81,5.44,34.22.08l147.75-84.27c9.42-5.36,17.47-18.58,17.49-29.36.08-42.27-.07-126.79,0-169.07C662,185.53,654.31,172.28,644.91,166.88Z" transform="translate(-296.98 -77)"/></svg></div>');$(".team-theme .item").prepend(n),$(".team-carousel").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},360:{items:2},400:{items:2},600:{items:3},1e3:{items:6}}}),$(".owl-next").click((function(){$(".owl-carousel").trigger("next.owl.carousel")})),$(".owl-prev").click((function(){$(".owl-carousel").trigger("prev.owl.carousel")})),$(".team-theme .item img").click((function(){var e=$(this).data("monkey"),t=$(this).data("url");$(".team-theme .item").removeClass("current"),$(this).parent().parent().addClass("current"),$(".wrapper-video").fadeOut((function(){$(".monkey-img").attr("src","static/video/team/loading.png"),$(".monkey").addClass("loader");var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="blob",e.onload=function(){var e=$('<video id="monkey-video-player" muted="muted" loop="loop" autoplay="autoplay" webkit-playsinline="true" playsinline="true"><source src="'+t+'" type="video/mp4"></video>').attr("src",t);$(".wrapper-video").html(e).fadeIn((function(){document.getElementById("monkey-video-player").play(),document.getElementById("monkey-video-player").removeAttribute("controls")})),$(".monkey").removeClass("loader")},e.onerror=function(){},e.send()})),$(".our-team-background").stop().animate({opacity:0,"background-position-y":"-300px"},300,(function(){$(".our-team-background").css({"background-image":'url("/media/users/'+e+'/background-picture.jpg")',"background-position-y":"300px"}).stop().animate({opacity:1,"background-position-y":"0"},300,(function(){}))})),$(".data-monkey").animate({opacity:0},200,(function(){$(".data-monkey").html($(".monkey-content[data-monkey='"+e+"']").html()),$(".data-monkey").animate({opacity:1},300)}))})),$(".team-theme .owl-stage .owl-item:first-child .item img").trigger("click");var s=new Instafeed({get:"user",target:"instafeed",limit:"40",resolution:"standard_resolution",userId:"36652627",accessToken:"36652627.1677ed0.8f65f338dc254d37bd56e708be95ef03",after:function(){photosFeeded=$.map($("#instafeed a img"),(function(e,t){return{src:$(e).attr("src"),lnk:$(e).parent().attr("href")}})),a(),setInterval((function(){photoPositon=Math.floor(Math.random()*feedColumns),photoFeed=Math.floor(Math.random()*photosFeeded.length),el=$(".get-feed li").eq(photoPositon),el.addClass("hover"),setTimeout((function(){el.find("a").css({"background-image":"url("+photosFeeded[photoFeed].src+")"}).attr("href",photosFeeded[photoFeed].lnk),el.removeClass("hover")}),400)}),2e3)}});function r(e){$(".full-loading").fadeOut((function(){$(this).remove(),$(".response-modal .modal-content").html(e),$(".response-modal").modal("show")}))}setTimeout((function(){s.run()}),2e3),$(".send-mail").submit((function(e){e.preventDefault();var t={};$(this).find(":input").not("button").map((function(e,o){return t[o.name]=$(o).val(),{name:o.name,type:o.type,value:$(o).val()}})),$("body").prepend($("<div class='full-loading'>").fadeIn()),$.ajax({type:"POST",url:"/send-mail",data:t,success:function(e){r(e.verbose)},error:function(e,t,o){r(response.verbose)}})})),$(".response-modal").click((function(){$(this).modal("hide")})),$(".modal").each((function(e){$(this).on("show.bs.modal",(function(e){var t=$(this).attr("data-easein");"shake"==t||"pulse"==t||"tada"==t||"flash"==t||"bounce"==t||"swing"==t?$(".modal-dialog").velocity("callout."+t):$(".modal-dialog").velocity("transition."+t)}))}))}));var n={x:-1,y:-1};$(document).mousemove((function(e){n.x=e.pageX,n.y=e.pageY;var t=100*n.x/$(window).width();n.y,$(window).height(),$(".Cyberium Kalho-quote").css({"background-position-x":-t})}));var s=$(".history-carousel").owlCarousel({loop:!1,nav:!1,responsive:{0:{items:1},680:{items:2},1050:{items:3}}});s.on("changed.owl.carousel",(function(e){$(".history-theme .owl-item .history").removeClass("active"),$(".history-theme .owl-item").eq(e.item.index).find(".history").addClass("active");var t=0;e.item.index+e.page.size==e.item.count&&(t=100),0==t&&(t=100*(e.item.index+1)/e.item.count),$(".history-progress .viewed").css({width:t+"%"})})),$(".history-next").click((function(){s.trigger("next.owl.carousel")})),$(".history-prev").click((function(){s.trigger("prev.owl.carousel")}))}},e=>{"use strict";e.O(0,[216],(()=>(9627,e(e.s=9627)))),e.O()}]);