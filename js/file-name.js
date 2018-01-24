//パスを取得
var path = location.pathname;
//「/」で区切って配列化
var pathinfo = path.split('/');
var length = pathinfo.length;
var filename = pathinfo[length];
length = length-2;
filename = decodeURI(pathinfo[length]);

document.getElementById("js-title").innerHTML = filename;
document.title = filename;
