
  
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
