var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/image/true.png");
         document.title = '(╥╯^╰╥)页面好像出错了~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/image/true.png");
         document.title = '(o´ω`o)ﾉ页面又好了~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
