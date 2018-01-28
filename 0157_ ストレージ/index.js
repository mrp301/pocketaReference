if(window.localStorage){
  document.getElementById("result1").innerHTML = "ローカルストレージは使えます";
}

if(window.sessionStorage){
  document.getElementById("result2").innerHTML = "セッションストレージは使えます";
}
