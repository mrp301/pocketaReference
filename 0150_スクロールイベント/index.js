function check(){
  var y = self.pageYOffset;
  document.getElementById("result").innerHTML = y;
}

window.onscroll = check;
