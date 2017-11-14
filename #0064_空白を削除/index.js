//#0064

var ele = document.getElementById("result");
//先頭に半角空白が4つ、末尾に全角空白が3つ入っている。
str = "    K  .   FuRuhata　　　";
ele.innerHTML = "元データ = " +str+ "(" +escape(str)+ ")<br>";
ele.innerHTML += "trim = " +str.trim()+ "(" +escape(str.trim)+ ")<br>";//前後の空白を削除
ele.innerHTML += "trimLeft = " +str.trim()+ "(" +escape(str.trimLeft())+ ")<br>";//前の空白を削除
ele.innerHTML += "trimLeft = " +str.trim()+ "(" +escape(str.trimRight())+ ")<br>";//後の空白を削除