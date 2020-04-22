//stampa di tutti i numeri da 1 a 100

for (var i = 1; i <= 100; i++) {

// individualizzazione dei numeri moltipli dei 3 e 5

  if (i % 3 == 0 && i % 5 == 0 ) {
    console.log("fizzbuzz");
  }
if ( i % 3 == 0 ) {console.log("fizz");}
// individualizzazione dei numeri moltipli dei 3
else if ( i % 5 == 0 ) {console.log("buzz");}
// individualizzazione dei numeri moltipli dei 5
else {console.log(i);}




}
