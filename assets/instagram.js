var ig_userid = '183013695';
var ig_clientid = '3e6943731fae404f94a18dcc6df40fa3';
var ig_websiteurl = 'http://www.venessaarizaga.com';
var ig_redirecturi = 'http://www.venessaarizaga.com';
var ig_accesstoken = '183013695.3e69437.d233d71a4a3c4c66b0d8bafdaa8dcce4';

function toScreen(json){
  console.log(json);
  /*
  $.each(json.data, function(index, photo){
    caption_text = photo.caption.text;
    link = photo.link;
    photo_url = photo.images.standard_resolution.url;
    photo_imgtag = '<img src="'+ photo_url + '" alt="'+ caption_text + '" class="pure-img" />';
    $('div#socialstream .pure-g').append('<div class="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-4"><article class="image"><a href="'+ link + '" target="_blank">'+photo_imgtag+'</a></article></div>');
  });
  */
}

function fetchInstagramApi() {
  //V1 is deprecated
  //var url = 'https://api.instagram.com/v1/users/' + ig_userid + '/media/recent?callback=?&access_token=' + ig_accesstoken + '';
  var url = 'https://www.instagram.com/venessaarizaga/?__a=1';
  $.getJSON(url, toScreen);
}
jQuery(document).ready(function($) {
  fetchInstagramApi();
});