//#0015_ジェネレータ
//fire foxのみ
function moveChar(){
  var x=0;
  while(true){
    x=x+5;
    if(x>window.innerWidth){
      x=0;
    }
    var chr=document.getElementById("myChar");
    chr.style.left=x+"px"; //左に5ピクセル移動する
    var flag=yield x; //一旦処理を中断。flagはsend()から
    if(flag){
      x=0;
    }
  }
}
var mc=moveChar();
