//#0003_繰り返し

var n=1;

//do while
document.write("do whileの繰り返し: ");//nが5未満なら繰り返す。判定が最後にあるので最低１回は繰り返す。
do{
  document.write(n+',');
  n++;
}while(n<5)

//while
document.write("<br>whileの繰り返し:");//nが5未満のとき繰り返す。判定が手前になるので何も執行しない場合もある。
n=1;
while(n<5){
  document.write(n+",");
  n++;
}

//for
document.write("<br>forの繰り返し:");//nが10未満のとき繰り返す。
for(n=6;n<10;n++){
  document.write(n+",");
}

//for in
var object = {
  name:"ひし",
  old:22,
  address:"愛知県",
  email:"hogehoge@a-tm.co.jp"
}

document.write("<br>for inの繰り返し:");//objectのプロパティ数分繰り返す
for(n in object){
  document.write(n +"="+ object[n] +"<br>");
}
