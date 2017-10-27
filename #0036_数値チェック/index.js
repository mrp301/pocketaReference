//#0036

function check() {
  var str = document.myFORM.myValue.value;
  var flag = isNaN(str); //数値ならtrue、それ以外はfalseが帰ってくる。
  if(flag==true){
    alert("数値ではありません。");
  }else{
    alert("数値です。");
  }
}