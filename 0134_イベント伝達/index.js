function eventCancel(evt){
  if(window.event){
    window.event.cancelBubble = true;
  }else{
    evt.stopPropagation();
  }
}
