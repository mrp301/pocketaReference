//#0025_プロトタイプの作成

//汎用的な関数はpurototypeに宣言する
var baseObject = function(){}
var func1 = function msg(){ alert("こんにちは"); }
var func2 = function msg(){ alert("こんばんは"); }
baseObject.prototype.ok = func1;
baseObject.ok = func2 //baseオブジェクトのみ継承されない
myObj = new baseObject(); //prototypeで継承された ok が継承
myObj.ok(); //func2が呼び出される
baseObject.ok();