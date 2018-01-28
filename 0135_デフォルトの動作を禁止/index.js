document.forms[0].onsubmit = function(evt){
  evt.preventDefault();
  alert("デフォルトイベントをキャンルするので送信しません");
}
