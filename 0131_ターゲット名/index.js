for (var i=0; i<document.links.length; i++) {
  if (document.links[i].href.indexOf("http://") > -1) {
    document.links[i].target = "newWin";
  }
}
