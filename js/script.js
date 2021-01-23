console.log("%c Github %c","background:#333333; color:#ffffff","","https://github.com/izhaoo/hexo-theme-zhaoo");(function($){"use strict";var fn={showMenu:function(){$(".menu").fadeIn(300);$("body").addClass("lock-screen");fn.hideFab()},hideMenu:function(){$(".menu").fadeOut(300);$("body").removeClass("lock-screen")},activeFab:function(){$(".fab-up").addClass("fab-up-active");$(".fab-plus").addClass("fab-plus-active");$(".fab-daovoice").addClass("fab-daovoice-active");$(".fab-tencent-chao").addClass("fab-tencent-chao-active")},freezeFab:function(){$(".fab-up").removeClass("fab-up-active");$(".fab-plus").removeClass("fab-plus-active");$(".fab-daovoice").removeClass("fab-daovoice-active");$(".fab-tencent-chao").removeClass("fab-tencent-chao-active")},showFab:function(){$(".fab").removeClass("fab-hide").addClass("fab-show")},hideFab:function(){$(".fab").addClass("fab-hide").removeClass("fab-show")},scroolFab:function(){var o=$(window).height();var a=$(window).scrollTop();if(a>o){fn.showFab()}else{fn.freezeFab();fn.hideFab()}},scroolToTop:function(){$("body,html").animate({scrollTop:"0px"},800)},navbar:{mobile:function(){$(".navbar").addClass("hide");$(window).on("scroll",ZHAOO.utils.throttle(function(){var o=$(this).scrollTop();$(window).on("scroll",function(){var a=$(this).scrollTop();if(o>a&&a>300){$(".navbar").removeClass("hide")}else if(o<a||a<300){$(".navbar").addClass("hide")}o=a})},500))},desktop:function(){function o(){if($(window).scrollTop()>60){$(".navbar .center").addClass("hide")}else{$(".navbar .center").removeClass("hide")}}o();$(window).on("scroll",ZHAOO.utils.throttle(function(){o();var a=$(this).scrollTop();$(window).on("scroll",function(){var o=$(this).scrollTop();if(a>o){$(".navbar").removeClass("hide")}else if(a<o){$(".navbar").addClass("hide")}a=o})},500))}},motto:function(){if(!CONFIG.preview.motto.api)return;var o=CONFIG.preview.motto.data_contents&&JSON.parse(CONFIG.preview.motto.data_contents);$.get(CONFIG.preview.motto.api,function(a){if(o.length>0){o.forEach(function(o){a=a[o]})}a&&$("#motto").text(a)})},background:function(){if(!CONFIG.preview.background.api)return;$(".preview-image").css("background-image","url("+CONFIG.preview.background.api+")")}};var action={smoothScroll:function(){$(".smooth-scroll, .toc-link").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(decodeURIComponent(this.hash));o=o.length&&o||$("[name="+this.hash.slice(1)+"]");if(o.length){var a=o.offset().top;$("html,body").animate({scrollTop:a},500);location.hash=this.hash;return false}}})},loading:function(){$(".loading").delay(500).fadeOut(300);$("body").removeClass("lock-screen")},fab:function(){$(".fab-plus").on("click",function(){if($(this).hasClass("fab-plus-active")){fn.freezeFab()}else{fn.activeFab()}});$(".fab-daovoice").on("click",function(){daovoice("openMessages")});$(".fab-up, .fab-daovoice, fab-tencent-chao").on("click",function(){fn.freezeFab()});if(CONFIG.fab.always_show){fn.showFab()}else{$(window).scroll(fn.scroolFab)}},menu:function(){$(".menu-close").on("click",function(){fn.hideMenu();$(".navbar").removeClass("hide")})},scroolToTop:function(){$(".fab-up").on("click",function(){fn.scroolToTop()})},fancybox:function(){$(".fancybox").fancybox();$(".article .content img").each(function(){var o=document.createElement("a");$(o).attr("data-fancybox","images");$(o).attr("href",$(this).attr("src"));$(this).wrap(o)})},pjax:function(){$(function(){$(document).pjax("a:not(.menu *)","#main",{fragment:"#main",timeout:6e3})});$(document).on("pjax:complete",function(){CONFIG.fancybox&&action.fancybox()})},donate:function(){$(".donate .icon").on("mouseover",function(){$("#qrcode-donate").show()});$(".donate .icon").children("a").on("mouseover",function(){$("#qrcode-donate img").attr("src",eval("CONFIG.donate."+$(this).attr("id")))});$(".donate .icon").on("mouseout",function(){$("#qrcode-donate").hide()})},lazyload:function(){$("img.lazyload").lazyload({effect:"fadeIn",threshold:200})},fixLazyloadFancybox:function(){$(document).find(".article img[data-original]").each(function(){$(this).parent().attr("href",$(this).attr("data-original"))})},carrier:function(){$(".j-carrier-btn").on("click",ZHAOO.utils.throttle(function(){$(".j-carrier-data").select();document.execCommand("Copy");ZHAOO.zui.message({text:"已复制到剪切板",type:"success"})},1e3))},navbar:function(){$(window).resize(ZHAOO.utils.throttle(function(){ZHAOO.utils.isDesktop()&&fn.navbar.desktop();ZHAOO.utils.isMobile()&&!CONFIG.isHome&&fn.navbar.mobile()},1e3)).resize();$(".j-navbar-menu").on("click",function(){fn.showMenu();$(".navbar").addClass("hide");$(".qrcode").fadeOut(300)});$(".j-navbar-qrcode").on("click",function(){if($("#qrcode-navbar").is(":hidden")){$("#qrcode-navbar").fadeIn(300)}else{$("#qrcode-navbar").fadeOut(300)}})},preview:function(){fn.background();fn.motto()},qrcode:function(){if(CONFIG.qrcode.type==="url"){$("#qrcode-navbar").qrcode({text:window.location.href,width:150,height:150})}else if(CONFIG.qrcode.type==="image"){$("#qrcode-navbar").append('<img src="'+CONFIG.qrcode.image+'" alt="qrcode" />')}},toc:function(){var o=[];var a=new Map;$("article .content h1,h2,h3,h4,h5,h6").each(function(){var o=$(this).attr("id");var n=$(this).offset().top;a.set(n,o)});$(window).on("scroll",n);function n(){var n=$(this).scrollTop()||$(window).scrollTop();for(var e of a){if(e[0]>=n){o=e;break}}$(".toc-link").removeClass("active");$(".toc-link[href='#"+o[1]+"']").addClass("active")}n()},scrollbar:function(){var o=$(document).height();var a=$(window).height();$(window).on("scroll",n);function n(){var n=o-a;var e=$(document).scrollTop();var t=e/n*100;$(".j-scrollbar-current").css("height",t+"%")}n();$(".j-scrollbar").mousedown(function(n){var e=n.offsetY*o/100;$("html,body").animate({scrollTop:e},300);$(document).mousemove(function(n){var e=(1-(a-n.clientY)/a)*o;$("html,body").scrollTop(e);$("html,body").css({"user-select":"none",cursor:"move"})});$(document).mouseup(function(){$(document).off("mousemove");$("html,body").css({"user-select":"auto",cursor:"default"})})})},notification:function(){if(!CONFIG.notification.list)return;var o=CONFIG.notification.page_white_list&&JSON.parse(CONFIG.notification.page_white_list);var a=CONFIG.notification.page_black_list&&JSON.parse(CONFIG.notification.page_black_list);var n=window.location.pathname;if(o&&o.indexOf(n)<0||a&&a.indexOf(n)>=0)return;var e=CONFIG.notification.delay;var t=JSON.parse(CONFIG.notification.list);var i=t.filter(function(o){return o.enable&&ZHAOO.utils.isDuringDate(o.startTime,o.endTime)&&o});i.forEach(function(o){ZHAOO.zui.notification({title:o.title,content:o.content,delay:e})})}};$(function(){action.smoothScroll();action.loading();action.fab();action.navbar();action.menu();action.scroolToTop();action.preview();CONFIG.fancybox&&action.fancybox();CONFIG.pjax&&action.pjax();CONFIG.lazyload.enable&&action.lazyload();CONFIG.donate.enable&&action.donate();CONFIG.lazyload&&CONFIG.fancybox&&action.fixLazyloadFancybox();CONFIG.carrier.enable&&action.carrier();CONFIG.qrcode.enable&&action.qrcode();CONFIG.toc.enable&&action.toc();CONFIG.scrollbar.model==="simple"&&action.scrollbar();CONFIG.notification.enable&&action.notification()})})(jQuery);