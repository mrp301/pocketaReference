//#0004_関数定義

function name(str){
  return "あなたの名前:"+str;
}

var data=prompt("名前を教えてください","ダイアログの初期値");//入力ダイアログを表示。入力した内容がdata変数に格納される。
document.write(name(data));//name関数を呼び出して名前を出力する