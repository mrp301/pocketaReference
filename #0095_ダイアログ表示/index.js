//#0094

function dlg(){
  var yourName = prompt("名前を入れてください","");
  if(yourName == "Mark"){
    alert("Zuckerberg!?");
  }
  var flag = confirm("名前は「"+yourName+"」ですか？");
  if(flag == true){
    alert("あなたは"+yourName+"です。");
  }else{
    alert("あなたは一体誰ですか？");
  }
}
