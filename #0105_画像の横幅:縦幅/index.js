function check(){
  var myImage = document.querySelectorAll("img")[0];
  var h = "画像の表示縦幅 = " +myImage.height;　
  var w = "画像の表示横幅 = " +myImage.width;
  var nh = "画像のオリジナル縦幅 = " +myImage.naturalHeight;
  var nw = "画像のオリジナル横幅 = " +myImage.naturalWidth;
  var ele = document.getElementById("result");
  ele.innerHTML = w+"<br>"+h+"<br>"+nw+"<br>"+nh+"<br>";
}
