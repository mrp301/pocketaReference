//#0010_例外処理

try{
  WINDOWS("VISTA?");
}catch(e){ //エラーの内容はeに格納される
  alert("エラーは" +e+ "です。");
}finally{ //エラーが発生した際に必ず処理される
  alert("エラーが発生した際、ついでに呼び出されます。");
}

var a=1;
var b=eval(prompt("数字を入れてください",0));
try{
  if(b==0){
    throw "zero"; //throwを使うことでエラーじゃなくてもエラーにできる。throwの値がeに格納される。
  }
  if(b<0){
    "minus";
  }
}catch(e){
  if(e=="zero"){
    alert("ゼロは除算できません");
    b=1;
  }
  if(e=="minus"){
    alert("マイナスの除算もできません");
    b=Math.abs(b); //絶対値を返す
  }
}

document.write("a/b=" +a/b);
