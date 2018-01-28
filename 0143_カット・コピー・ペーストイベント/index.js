function evtOnBeforeCut(){
  alert("onBeforeCut発生");
}

function evtOnCut(){
  alert("onCut発生");
}

function evtOnBeforeCopy(){
  alert("onBeforeCopy発生");
}

function evtOnCopy(){
  alert("onCopy発生");
}

function evtOnBeforePaste(){
  alert("onBeforePaste発生");
}

function evtOPaste(){
  alert("onPaste発生");
}

//イベントハンドラ設定

document.body.onBeforecut = evtOnBeforeCut;
document.body.oncut = evtOnCut;

document.body.onBeforecopy = evtOnBeforeCopy;
document.body.oncopy = evtOnCopy;

document.body.onBeforepaste = evtOnBeforePaste;
document.body.onpaste = evtOnBeforePaste;
