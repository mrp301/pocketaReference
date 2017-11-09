//#0052

var myArray = new Array("MZ","PC","FM");
function thePush(data){ myArray.push(data); check(); }
function thePop(){ myArray.pop(); check(); }
function check(){
  str = "配列内容: \n";
  for(i=0;i<myArray.length;i++) str += myArray[i]+"\n";
  alert(str);
}