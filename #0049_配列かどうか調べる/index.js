//#0049

var ele = document.getElementById("result");
ele.innerHTML = "new Array = " +Array.isArray(new Array());
ele.innerHTML += "<by>Array = " +Array.isArray(Array);
ele.innerHTML += "<br>[] = " + Array.isArray([]);
ele.innerHTML += "<br>{} = " +Array.isArray({});
ele.innerHTML += "<br>[{a:1}] = " +Array.isArray([{a:1}]);
ele.innerHTML += "<br>Array.prototype = " +Array.isArray(Array.prototype); 