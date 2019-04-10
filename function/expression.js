var expr = function() {
  console.log("Ini contoh function expression di js");
}

function decl(){
  console.log("Ini contoh function declaration di js");
}

var cons = new Function('console.log("Ini contoh function constructor di js")');

expr();
decl();
cons();
