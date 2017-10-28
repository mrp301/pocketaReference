//#0041

var txt = "文字のタイプ = " +typeof("文字")+ "<br>";
txt += "new Date()のタイプ = " +typeof(new Date())+ "<br>";
txt += "1919.810のタイプ = " +typeof(1919,810)+ "<br>";  
txt += "Arrayのタイプ = " +typeof([1,2,3])+ "<br>";
txt += "Girlのタイプ = " +typeof(Girl)+ "<br>";
document.getElementById("result").innerHTML = txt;