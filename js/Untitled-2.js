</script><!--[if lte IE 9]><script src="//cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif]--><script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js"></script>
<script>
/*!
 * jQuery mousewheel 
 * Copyright OpenJS Foundation and other contributors
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(u){var f,d,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],w=Array.prototype.slice;if(u.event.fixHooks)for(var i=e.length;i;)u.event.fixHooks[e[--i]]=u.event.mouseHooks;var c=u.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n;u.data(this,"mousewheel-line-height",c.getLineHeight(this)),u.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;u.removeData(this,"mousewheel-line-height"),u.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=u(e),i=t["offsetParent"in u.fn?"offsetParent":"parent"]();return i.length||(i=u("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return u(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,i=e||window.event,n=w.call(arguments,1),o=0,l=0,s=0;if((e=u.event.fix(i)).type="mousewheel","detail"in i&&(s=-1*i.detail),"wheelDelta"in i&&(s=i.wheelDelta),"wheelDeltaY"in i&&(s=i.wheelDeltaY),"wheelDeltaX"in i&&(l=-1*i.wheelDeltaX),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in i&&(o=s=-1*i.deltaY),"deltaX"in i&&(l=i.deltaX,0===s&&(o=-1*l)),0!==s||0!==l){if(1===i.deltaMode){var a=u.data(this,"mousewheel-line-height");o*=a,s*=a,l*=a}else if(2===i.deltaMode){var h=u.data(this,"mousewheel-page-height");o*=h,s*=h,l*=h}if(t=Math.max(Math.abs(s),Math.abs(l)),(!d||t<d)&&g(i,d=t)&&(d/=40),g(i,t)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/d),l=Math[1<=l?"floor":"ceil"](l/d),s=Math[1<=s?"floor":"ceil"](s/d),c.settings.normalizeOffset&&this.getBoundingClientRect){var r=this.getBoundingClientRect();e.offsetX=e.clientX-r.left,e.offsetY=e.clientY-r.top}return e.deltaX=l,e.deltaY=s,e.deltaFactor=d,e.deltaMode=0,n.unshift(e,o,l,s),f&&window.clearTimeout(f),f=window.setTimeout(m,200),(u.event.dispatch||u.event.handle).apply(this,n)}}function m(){d=null}function g(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}u.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});
</script>
<script>
   if(window.location.pathname == "/meine-meinung"){
         var url = "https://www.instagram.com/graphql/query/?query_id=17888483320059182&variables={%22id%22:%221693185827%22,%22first%22:5}"
  $.getJSON(url, function (json) {
    
  json.data.user.edge_owner_to_timeline_media.edges.forEach(fetchInstaFeed)
});
  	  window.fbAsyncInit = function() {
    FB.init({
      appId      : '696599590870801',
      cookie     : true,
      xfbml      : true,
      version    : 'v5.0'
    });
      
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
FB.api('kluckert.daniela/feed', {access_token:'EAAJ5jbsqHxEBAJqFU9zMlbMS0vTph8ahZCtmBFD9igyZAoMypCXmmFDso9LZAHi6ZCcTxuQmiZCKKV6WUHkqolIdzeBHQaiM30fweCchwcGf22ZCCFPnRO9Mihel5J3CsR3rwguAbrDrfDPRZByX7Qh0S4L5DPMsh2ZBhYDgKYmDItoeO8oZAKaSY',fields: 'message,attachments,created_time,full_picture,permalink_url', limit: 5}, (response) => {

  $.each(response.data, function(ix,val){
    fetchFbFeed(val)
  })

});
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   function statusChangeCallback(response){
    if(response.status == "connected"){
    }else{
    }
   }
  }
 


</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.pjax/2.0.1/jquery.pjax.min.js"></script>



<script>

  
 $(".horizontal-scroll-div").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 1.3);
    
      event.preventDefault();

   });

  
  function fetchInstaFeed(item, index, arr) {

      var caption = ""
      var url = ""
      url = "https://instagram.com/p/"+item.node.shortcode
      caption = item.node.edge_media_to_caption.edges[0].node.text;
      caption = caption.split(' ').slice(0,19).join(' ');

      
    var myhtml = "<div class='insta-thumbnail-link'><div class='yellow-shadow'></div><a href='"+url+"' target='_blank'><img src='"+item.node.thumbnail_src+"'class='instagram-thumb img-fit'></a></div><div class='meinung-datetime-div mt-16'><p class='p-16'>"+moment.unix(parseInt(item.node.taken_at_timestamp)).format("DD.MM.YYYY")+"</p><p class='p-16'>Instagram</p></div><a href='"+url+"' target='_blank' class='no-decoration-link p-16 mt-16 mb-56'>"+caption+"...</a>"
    $(".div-meine-meinung-insta").append(myhtml)
    

}

function fetchFbFeed(feedObj){

var image = feedObj.full_picture
var url = feedObj.permalink_url
var text = feedObj.message
if(text.length > 10){
text = feedObj.message.split(' ').slice(0,19).join(' ') + "...";
}
var time = feedObj.created_time
time = moment(time).format("DD.MM.YYYY")

var myhtml = "<div class='insta-thumbnail-link' ><div class='yellow-shadow'></div><a href='"+url+"' target='_blank'><img src='"+image+"'class='instagram-thumb img-fit' ></a></div><div class='meinung-datetime-div mt-16'><p class='p-16'>"+time+"</p><p class='p-16'>Facebook</p></div><a href='"+url+"' target='_blank' class='no-decoration-link' ><p class='p-16' style='margin-bottom: 56px !important; margin-top: 16px;'>"+text+"</p></a>"
$(".div-meine-meinung-fb").append(myhtml)



}

  
  
  $('.meine-meinung-div').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
      }
    },
      
    {
    breakpoint: 479,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false
      }
    }]
      
  });
  
      
    $('.termin-cards-container').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
    arrows: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
      }
    },
      
    {
    breakpoint: 479,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false
      }
    }]
   

	});
  function sameTermineCardHeight() {
      var largestHeight = 0;
   $(".berlin-termin-collection-item").each(function(){
     console.log($(this).outerHeight(true))
   		if($(this).outerHeight(true) > largestHeight){
          largestHeight = $(this).outerHeight(true)
        }
    
   });
     
          $(".berlin-termin-collection-item").outerHeight(largestHeight) 
  }
  if(window.location.pathname == "/berlin"){
    sameTermineCardHeight()
    $(window).resize(function(){
    sameTermineCardHeight()
    console.log("ASD")
    })
    

     
   
   }

  
  
  $("#yum").on("click",function(){
  $('.horizontal-scroll-div').animate({scrollLeft: $('#laste').position().left}, 1000);

  })

  var sliderHomeTextArr = []
    var sliderHomeTitleArr = []
    var sliderHomeImgArr = []
    var currentShownSlider = 0;

  $.each($(".slider-text-hidden"),function(ix,val){
      sliderHomeTextArr.push($(this).html())
      sliderHomeTitleArr.push($(".slider-title-hidden").eq(ix).html())
      sliderHomeImgArr.push($(".img-slider-hidden").eq(ix).attr("src"))
  })
  
  sliderHomeTextArr = sliderHomeTextArr.reverse()
  sliderHomeTitleArr = sliderHomeTitleArr.reverse()
sliderHomeImgArr = sliderHomeImgArr.reverse()

        var homePageSlider = 1;
          $(".slider-title").text(sliderHomeTitleArr[homePageSlider-1]).css({'opacity':0}).animate({'opacity':1});
           $(".slider-text").text(sliderHomeTextArr[homePageSlider-1]).css({'opacity':0}).animate({'opacity':1});

   var set = false;
     $(".lottie-1").css("pointer-events", "none");
       $(".lottie-2").css("pointer-events", "none");
       $(".lottie-3").css("pointer-events", "none");
    $(document).ready(function() {
      setTimeout(()=>{
		 set = !set;
      $(".lottie-1").click();
      $("#abc").addClass(set ? "front" : "back");
      $("#abc").on("animationend", function() {
        set = !set;
        $("#abc").addClass(set ? "front" : "back");
        $("#abc").removeClass(set ? "back" : "front");
        if ($(".back").length > 0) {
        	if(homePageSlider <= 2){
              $(".lottie-"+homePageSlider).css("display", "none");
              homePageSlider++;
              $(".lottie-"+homePageSlider).css("display", "block");
              $(".lottie-"+homePageSlider).click();

            }else{
            	homePageSlider = 1;
              $(".lottie-1").css("display", "block");
              $(".lottie-3").css("display", "none");
              $(".lottie-1").click();
            }
          $(".p-slider-num-changes").text("0"+homePageSlider);
          $(".slider-title").text(sliderHomeTitleArr[homePageSlider-1]).css({'opacity':0}).animate({'opacity':1});
         	$(".slider-text").text(sliderHomeTextArr[homePageSlider-1]).css({'opacity':0}).animate({'opacity':1});

        }
      });
      },2000)
     
    });

    $(".yellow-btn--inside-out-go-next").click(function(){
      if(homePageSlider <= 2){
              $(".lottie-"+homePageSlider).css("display", "none");
              homePageSlider++;
              $(".lottie-"+homePageSlider).css("display", "block");
              $(".lottie-"+homePageSlider).click();

            }else{
            	homePageSlider = 1;
              $(".lottie-1").css("display", "block");
              $(".lottie-3").css("display", "none");
              $(".lottie-1").click();
            }
      	set = !set;
        $("#abc").addClass(set ? "front" : "back");
        $("#abc").removeClass(set ? "back" : "front");

        $(".p-slider-num-changes").text("0"+homePageSlider);
        $(".slider-title").text(sliderHomeTitleArr[homePageSlider-1]).css({'opacity':0}).animate({'opacity':1});
           $(".slider-text").text(sliderHomeTextArr[homePageSlider-1]).css({'opacity':0}).animate({'opacity':1});
    })
  
  $(".yellow-btn--inside-out-go-back").click(function(){
    
    if(homePageSlider >= 2){
              $(".lottie-"+homePageSlider).css("display", "none");
              homePageSlider--;
              $(".lottie-"+homePageSlider).css("display", "block");
              $(".lottie-"+homePageSlider).click();

            }else{
            	homePageSlider = 3;
              $(".lottie-3").css("display", "block");
              $(".lottie-1").css("display", "none");
              $(".lottie-3").click();
            }
    
    	set = !set;
        $("#abc").addClass(set ? "front" : "back");
        $("#abc").removeClass(set ? "back" : "front");

    
$(".p-slider-num-changes").text("0"+homePageSlider);
        $(".slider-title").text(sliderHomeTitleArr[homePageSlider-1]).css({'opacity':0}).animate({'opacity':1});
           $(".slider-text").text(sliderHomeTextArr[homePageSlider-1]).css({'opacity':0}).animate({'opacity':1});
    
  })


 
$(".yellow-btn").mouseover(function(){
$(this).find(".arrow-img-div").css("transform", "translateX(8px)")
})

$(".yellow-btn").mouseout(function(){
$(this).find(".arrow-img-div").css("transform", "translateX(0px)")
})

$(".div-termincard").mouseover(function(){
$(this).find(".div-termincard-container-correct").css("transform", "translate(4px, -4px)")
$(this).find(".yellow-shadow").css("transform", "translate(-4px, 4px)")

})

$(".div-termincard").mouseout(function(){
$(this).find(".div-termincard-container-correct").css("transform", "translate(0px, 0px)")
$(this).find(".yellow-shadow").css("transform", "translate(-0px, 0px)")

})

$(".berlin-termin-link-div").mouseover(function(){
$(this).find(".berlin-termin-div").css("transform", "translate(4px, -4px)")
$(this).find(".magenta-shadow").css("transform", "translate(-4px, 4px)")

})


$(".berlin-termin-link-div").mouseout(function(){
$(this).find(".berlin-termin-div").css("transform", "translate(0px, 0px)")
$(this).find(".magenta-shadow").css("transform", "translate(-0px, 0px)")

})



$(".werdegang-thumbnail-div").mouseover(function(){
$(this).find(".werdegang-thumbnail").css("transform", "translate(4px, -4px)")
$(this).find(".yellow-shadow--small").css("transform", "translate(-4px, 4px)")

})

$(".werdegang-thumbnail-div").mouseout(function(){
$(this).find(".werdegang-thumbnail").css("transform", "translate(0px, 0px)")
$(this).find(".yellow-shadow--small").css("transform", "translate(-0px, 0px)")

})

$(".thumbnail-link").mouseover(function(){
$(this).find(".thumbnail-img").css("transform", "translate(3px, -3px)")
$(this).find(".magenta-shadow").css("transform", "translate(-3px, 3px)")

})

$(".thumbnail-link").mouseout(function(){
$(this).find(".thumbnail-img").css("transform", "translate(0px, -0px)")
$(this).find(".magenta-shadow").css("transform", "translate(-0px, 0px)")

})

$(".video-thumbnail-link").mouseover(function(){
$(this).find(".thumbnail-img").css("transform", "translate(3px, -3px)")
$(this).find(".torquise-shadow").css("transform", "translate(-3px, 3px)")

})

$(".video-thumbnail-link").mouseout(function(){
$(this).find(".thumbnail-img").css("transform", "translate(0px, -0px)")
$(this).find(".torquise-shadow").css("transform", "translate(-0px, 0px)")

})

$(".div-meine-meinung-insta").mouseover(function(){
  $(this).find(".insta-thumbnail-link").mouseover(function(){
  	$(this).find(".instagram-thumb").css("transform", "translate(3px, -3px)")
$(this).find(".yellow-shadow").css("transform", "translate(-3px, 3px)")
  })


})

$(".div-meine-meinung-insta").mouseout(function(){
  $(this).find(".insta-thumbnail-link").mouseout(function(){
  $(this).find(".instagram-thumb").css("transform", "translate(0px, -0px)")
$(this).find(".yellow-shadow").css("transform", "translate(-0px, 0px)")
  })


})

$(".div-meine-meinung-fb").mouseover(function(){
  $(this).find(".insta-thumbnail-link").mouseover(function(){
  	$(this).find(".instagram-thumb").css("transform", "translate(3px, -3px)")
$(this).find(".yellow-shadow").css("transform", "translate(-3px, 3px)")
  })


})

$(".div-meine-meinung-fb").mouseout(function(){
  $(this).find(".insta-thumbnail-link").mouseout(function(){
  $(this).find(".instagram-thumb").css("transform", "translate(0px, -0px)")
$(this).find(".yellow-shadow").css("transform", "translate(-0px, 0px)")
  })


})

$(".insta-thumbnail-link").mouseout(function(){


})

$(".newsletter-submit-btn").val("")

var meineMeinungTitleArr = []
    var meineMeinungImgArr = []
    var meineMeinungUrlArr = []
    var currentShownSliderMeineMeinung = 0;
  
   $.each($(".slider-title-hidden"),function(ix,val){
      meineMeinungTitleArr.push($(".slider-title-hidden").eq(ix).html())
      meineMeinungImgArr.push($(".img-slider-hidden").eq(ix).attr("src"))
      meineMeinungUrlArr.push($(".slider-url-hidden").eq(ix).attr("href"))
  })
   
     meineMeinungTitleArr = meineMeinungTitleArr.reverse()
meineMeinungImgArr = meineMeinungImgArr.reverse()
meineMeinungUrlArr = meineMeinungUrlArr.reverse()

showMeineMeinungBlogPost(currentShownSliderMeineMeinung)

function showMeineMeinungBlogPost(ix){



   $('.blog-title-slider').animate({'opacity': 0}, 150, function(){
        $(this).html(meineMeinungTitleArr[ix]).animate({'opacity': 1}, 150);    
    });
     $('.artikel-thumbnail').animate({'opacity': 0}, 150, function(){
        $(this).attr("srcset",meineMeinungImgArr[ix]).animate({'opacity': 1}, 150);    
    });
   
   $('#blogpostArtikelLesen').attr("href", meineMeinungUrlArr[ix])
   var startingNum = parseInt(ix+1)
   if(startingNum <= 9){
   	startingNum = "0"+startingNum
   }
   if( meineMeinungTitleArr.length <= 9){
    $(".post-counter-text").html(startingNum + " / " + "0"+meineMeinungTitleArr.length);

}else{
    $(".post-counter-text").html(startingNum + " / " + meineMeinungTitleArr.length);

}
   
}

 $(".yellow-btn--inside-out-front-2").click(function(){
    if(currentShownSliderMeineMeinung < meineMeinungTitleArr.length-1){
 	currentShownSliderMeineMeinung++;
          }else{
           currentShownSliderMeineMeinung = 0
          }
   
   showMeineMeinungBlogPost(currentShownSliderMeineMeinung)

 })
 
 $(".yellow-btn--inside-out-back-2").click(function(){
    if(currentShownSliderMeineMeinung == 0){
     currentShownSliderMeineMeinung = meineMeinungTitleArr.length-1
    }else{
    currentShownSliderMeineMeinung--
    }
   
   showMeineMeinungBlogPost(currentShownSliderMeineMeinung)

 })
 
var t = $(".blogpost-summary").text()
t = t.split(' ').slice(0,19).join(' ');


$(".blogpost-summary").text(t + "...")
var t = $(".blogpost-summary").css("display", "block")

</script>


<script>
  
  $('.menu-link-div').click(function(){
    $('.menu-overlay').show();
    
    setTimeout(function(){
  	$('.menu-overlay').addClass('active');
    $('.menu-div').addClass('active');
    }, 10);
  });
  

  $('.close-menu-div').click(function(){
    $('.menu-overlay').removeClass('active');
    $('.menu-div').removeClass('active');

    setTimeout(function(){
          $('.menu-overlay').hide();
    }, 300);
  
    
  });
  
  $('.menu-closer').click(function(){
    $('.menu-overlay').removeClass('active');
    $('.menu-div').removeClass('active');

    setTimeout(function(){
          $('.menu-overlay').hide();
    }, 300);
  
    
  });
  
</script>


<script>
  
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    else return null;
}

function handleCookieNotice() {
  	
    var cookieNoticeAgreed = getCookie("cookieNoticeAgreed");
    var elCookieNotice = document.getElementById("cookie-notice-div");
  	if (!elCookieNotice) return;
    var cookieNoticeAgreeButton = document.getElementById("consent-accept");
    var cookieNoticeDeclineButton = document.getElementById("consent-decline");
    var cookieNoticeRevokeButton = document.getElementById("consent-revoke");

    if (cookieNoticeAgreed === "true") {
      elCookieNotice.style.display = "none"
    } else if (cookieNoticeAgreed === "false") {
      elCookieNotice.style.display = "none"
    } else {
      document.getElementById("cookie-notice-div").style.display = "block"
    };

    cookieNoticeAgreeButton.addEventListener("click", function () {
    	setCookie("cookieNoticeAgreed", "true", 365);
      location.reload()
   	});

    cookieNoticeDeclineButton.addEventListener("click", function () {
      setCookie("cookieNoticeAgreed", "false", 365);
      $(elCookieNotice).fadeToggle()
   	});
	  if(cookieNoticeRevokeButton){
             cookieNoticeRevokeButton.addEventListener("click", function () {
       setCookie("cookieNoticeAgreed", "false", 365);
      location.reload()
    });
      }

}
 

$(document).ready(function() {
 
    handleCookieNotice();
  
});
  

</script>