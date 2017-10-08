//#0020_オブジェクトの変更を禁止

var ele = document.getElementById("result");
var obj = { data:"foot" };
ele.innerHTML = obj.data+"<br>";
obj.data = "body";
ele.innerHTML += obj.data+"<br>";
obj = Object.freeze(obj); //変更を禁止
obj.data = "head"; //変更は無効
ele.innerHTML += obj.data+"<br>";

