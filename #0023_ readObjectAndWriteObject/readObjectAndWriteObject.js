//#0023_オブジェクトの読み出し/書き込み処理

var obj = {
  id:200,
  name:"Sweet",
  get userID(){ return "IDは"+this.id; }, //userIDが呼び出された時に発火。
  set userID(value){
    this.id += value; //userIDに書き込み処理が発生した際に発火。id(200)を加算した値を返す
  },
  get userName(){ return this.name }, //userNameが呼び出された時に発火。自分自身のオブジェクトのnameプロパティを返す
  set userName(value){ throw "ReadOnly!!"; } //userNameに書き込み処理が発生した際に発火。明示的にエラーを発生させ書き込みを無効化している
};

obj.userID = 15;
document.getElementById("result").innerHTML = obj.userID +"<br>"+ obj.userName;
obj.userName = "Mint";
