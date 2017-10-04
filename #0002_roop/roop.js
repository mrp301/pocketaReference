//#0002_ループ制御

for(var i=0; i<9; i++){
  if(i<7){
    continue;//ループの先頭に戻す
  }
  document.write('a:'+i+'<br>');
}

for(i=0; i<9; i++){
  if(i>7){
    break;//処理を抜ける
  }
  document.write('b:'+i+'<br>');
}

for(i=0; i<9; i++){
  document.write('c:');
  jump://jum(label)とは一体？
  for(var j=0; j<10; j++){
    if(i==2) break jump;
      document.write((i*10+j)+',');
  }
    document.write('<br>');
}
