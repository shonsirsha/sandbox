<script>
        var fbFeeds = [];
        var fbFeedsImg = [];
        var fbFeedsTime = [];
 window.fbAsyncInit = function() {  
    FB.init({
      appId      : '212643456539288',
      cookie     : true,
      xfbml      : true,
      version    : 'v5.0'
    });
      
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
FB.api('Oetjen.Jan.Christoph/feed', {access_token:'EAADBZAemw2pgBAG10gtXBSabHLlOcEhO7L4lkIunJrd3wjAyKGPoAKCKFdfV4cHFEb2Ww9I9swniCBYdc4cetcdkaVTohL4mocZAsmuZAZB2i9XAH8HRuvAntWk2mIFTcmNKvvPSyHLjt6o9xc2GUwgb9UsfKNAMxwuigi66hykZAKqnHNrhS2M97ZB7bqFb8ZD',fields: 'message,attachments,created_time,full_picture,permalink_url', limit: 5}, (response) => {
  $.each(response.data, function(ix,val){
      if(val.full_picture != ""){
          fbFeeds.push(val.message);
          fbFeedsImg.push(val.full_picture);
          fbFeedsTime.push(val.created_time)
      }
   
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
   }
  console.log(fbFeeds);
  console.log(fbFeedsTime);
  console.log(fbFeedsTime);
//    function fetchFbFeed(feedObj){
//     var image = feedObj.full_picture
//     var url = feedObj.permalink_url
//     var text = feedObj.message
//     console.log(feedObj);
//     // if(text.length > 10){
//     // text = feedObj.message.split(' ').slice(0,19).join(' ') + "...";
//     // }
//     // var time = feedObj.created_time
//     // time = moment(time).format("DD.MM.YYYY")
//     // var myhtml = "<div class='insta-thumbnail-link' ><div class='yellow-shadow'></div><a href='"+url+"' target='_blank'><img src='"+image+"'class='instagram-thumb img-fit' ></a></div><div class='meinung-datetime-div mt-16'><p class='p-16'>"+time+"</p><p class='p-16'>Facebook</p></div><a href='"+url+"' target='_blank' class='no-decoration-link' ><p class='p-16' style='margin-bottom: 56px !important; margin-top: 16px;'>"+text+"</p></a>"
//     // $(".div-meine-meinung-fb").append(myhtml)
//     }
</script>
<script>
    $(".politics-column-inner-div").on("click", function() {
    if(!$(this).hasClass('active')){
    if(isMobile()){
        $(".politics-hero-column-div").removeClass("active");
        $(".politics-column-inner-div").removeClass("active");
        $(".politics-column-category-div").removeClass("active-3");
        $(".politics-column-category-div").removeClass("active-2");
        $(".politics-column-category-div").removeClass("active");
        $(".politics-column-title").removeClass("active");
        setTimeout(()=>{
            var y =  $(this).parent()
            $(this).parent().addClass("active");
            $(this).addClass("active");
            var x = $(this).parent().find(".politics-column-category-div");
            x.addClass("active");
            $.when(x.addClass("active-2")).then(function() {
                setTimeout(() => {
                    x.addClass("active-3")
                }, 350)
            })
            $(this).find(".politics-column-title").addClass("active");
        },450)
    }else{
        $(".politics-hero-column-div").removeClass("active");
        $(".politics-column-category-div").removeClass("active-3");
        $(".politics-column-category-div").removeClass("active-2");
        $(".politics-column-category-div").removeClass("active");
          
          setTimeout(()=>{
                $(".politics-column-inner-div").removeClass("active");
          },300)
        setTimeout(()=>{
             var y =  $(this).parent()
            $(this).addClass("active");
           var x = $(this).parent().find(".politics-column-category-div");
            x.addClass("active");
          setTimeout(()=>{
            x.addClass("active-2")
          },100)
          setTimeout(()=>{
              x.addClass("active-3")
          },100)
          setTimeout(()=>{
                  y.addClass("active")
          },100)
        },500)   
    }
    }else{
        if(isMobile() && $(window).width() < 992){
            $(".politics-hero-column-div").removeClass("active");
        $(".politics-column-inner-div").removeClass("active");
        $(".politics-column-category-div").removeClass("active-3");
        $(".politics-column-category-div").removeClass("active-2");
        $(".politics-column-category-div").removeClass("active");
        $(".politics-column-title").removeClass("active");
       
        }
    }
    });
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-fetcher/18.0.3/js/twitterFetcher_min.js"></script>
    <script>
    function isMobile(){  
            var a = navigator.userAgent||navigator.vendor||window.opera;
    return /Mobi|Android/i.test(navigator.userAgent);
    };
    var currentWidth = $(window).width()
    classRemover(currentWidth);
    $(window).resize(function() {
      // This will execute whenever the window is resized
     var width = $(window).width(); // New width
     if(currentWidth !== width){
        classRemover(width)
     }
    })
    
    
    function classRemover(width){
     if(isMobile()){ 
    if(width >= 992){ //ipad pro
    if(!$('.politics-hero-column-div').hasClass('active')){
        $('.politics-hero-column-div').eq(0).addClass('active')
    $('.politics-column-inner-div').eq(0).addClass('active');
    $('.politics-column-category-div').eq(0).addClass('active')
    $('.politics-column-category-div').eq(0).addClass('active-2')
    $('.politics-column-category-div').eq(0).addClass('active-3')
    }
        
    }else{

    $('.politics-hero-column-div').removeClass('active')
    $('.politics-column-inner-div').removeClass('active');
    $('.politics-column-category-div').removeClass('active')
    $('.politics-column-category-div').removeClass('active-2')
    $('.politics-column-category-div').removeClass('active-3')  

    }
        
    }else{
    if(!$('.politics-hero-column-div').hasClass('active')){
        $('.politics-hero-column-div').eq(0).addClass('active')
    $('.politics-column-inner-div').eq(0).addClass('active');
    $('.politics-column-category-div').eq(0).addClass('active')
    $('.politics-column-category-div').eq(0).addClass('active-2')
    $('.politics-column-category-div').eq(0).addClass('active-3')
    }
    }
    }
    
    
    $(".switch-frame-div").on("click", function() {
        switchPage();
    })
    $(".nav-div").on("click",function(){
        switchPage();
    
    })
    function switchPage(){
      if($(".switch-inner").hasClass("active")){ // switch to themen
          $(".switch-inner").removeClass("active");
              $(".socmed-div").fadeOut(500);
    
    
          $(".politik-div").addClass("active");
        setTimeout(()=>{
                $(".politik-div").addClass("active2");
        },500)
    
      }else{ //switch to social media
           $(".switch-inner").addClass("active");
         setTimeout(()=>{
             $(".politik-div").removeClass("active2");
        },500)
        
          $(".politik-div").removeClass("active");
         
    setTimeout(()=>{
        $('.social-embed-list-div').packery({
          // options
          itemSelector: '.social-embed-item-div',
          gutter: 10
        });
        
    },200)
           $(".socmed-div").fadeIn(900);
    
      }
    }
    var unsortedFeeds = []; // mixed feeds
    var allTweetsLoaded = false
    var tweets = [];
    var urls = [];
    var time = [];

    
      var configProfile = {
      "profile": {"screenName": "jcoetjen"},
      "domId": 'ex-1', // MAKE SURE TO HAVE THIS DOM IN THE WEBSITE (ANYWHERE) & DISPLAY NONE
      "maxTweets": 4,
      "showTime": true,
      "showImages": false,
      "enableLinks": true, 
      "showUser": false,
      "showRetweet": false,
      "showInteraction": false,
      "lang": 'en',
    };
    
    twitterFetcher.fetch(configProfile);
    
    var checkExist = setInterval(function() {
       if ($('.tweet').length) {
          clearInterval(checkExist);   
          allTweetsLoaded = true;
          if(allTweetsLoaded){
    
          $(".tweet").each(function(){
           tweets.push($(this).html());
          })
    
          $(".timePosted").each(function(ix,val){
          let url = $(this).find('a').attr('href')
           let postDate = moment($(this).find('a').html().replace('Posted on ', '')).unix(); // this is using momentjs, it turns date into epoch for easier sorting later
                   unsortedFeeds.push({content: tweets[ix], url: url, postDate: postDate, type: "twitter"})
          });
       
       var sortedFeeds = unsortedFeeds.slice(0);
        sortedFeeds.sort(function(a,b) {
            return b.postDate - a.postDate;
        }); // sort by date from the arr of objs
        
        $.each(sortedFeeds, function(ix,val){
          //modify dom here, e.g: generate cards.. etc.
           let formattedDate = moment.unix(parseInt(sortedFeeds[ix].postDate)).format("DD.MM.YYYY") // formatted into proper date, e.g: 31.12.2020
           let content = sortedFeeds[ix].content
           content = content.replace(/(<([^>]+)>)/ig,"").slice(0,90) + " ..."
           
           let injectedHTML = "<div class='social-embed-item-div'><div class='collection-artikel-info-div'> <p class='collection-artikel-description-text'>"+content+"</p><div class='social-embed-info-div'><div class='social-embed-date'><div class='collection-artikel-date'>"+formattedDate+"</div></div><a href='"+sortedFeeds[ix].url+"' class='main-button twitter w-inline-block'><div class='button-text small'>" + (sortedFeeds[ix].type === 'twitter' ? "Twitter": "Facebook") + "</div><img src='https://uploads-ssl.webflow.com/5ddd4f2fdff62476bf8619b4/5ddd542fbe5e66a3284ac2ca_arrow-right.svg' alt='' class='button-img small'></a></div></div></div>"
          $(".social-embed-list-div").append(injectedHTML)
          console.log(content);
        })
        
        $(".collection-artikel-description-text").find('a').contents().unwrap();
          } 
       }
    }, 500);
    </script>