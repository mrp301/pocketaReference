//#0014_バインド

var sharp = { type:"mz",number:700 };
var nec = { type : "PC", number:6000 };

function machine(num){ //machineオブジェクト
  var mType = this.type; //指定したbindのtypeなので、[mz]か[PC]が入る
  var nNumber = (this.number + num); //指定したbindのnumberにnumを加える
  var pc = "新機種名:" +mType+ "-" +nNumber;
  document.getElementById("result").innerHTML += pc + "<br>";
}

var newMachine = machine.bind(sharp,31);
newMachine(31);
newMachine = machine.bind(nec,1);
newMachine(1);
