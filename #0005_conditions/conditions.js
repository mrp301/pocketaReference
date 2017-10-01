//#0005_条件分岐

var data = prompt("数値を入力してください","0");
if(!data){
  alert("データを入力してください");
}else{
  switch (data) {
    case "1":alert("1です。");
    break;
    case "2":alert("4です。");
    break;
    case "3":alert("3です。");
    break;
    default:alert("1,2,3意外ですね");
    break;
  }
}
