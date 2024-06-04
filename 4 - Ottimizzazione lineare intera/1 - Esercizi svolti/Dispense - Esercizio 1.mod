/* Primale */
var x;
var y;

maximize s: x + y;
c1: 2*x + y <= 5;
c2: x + 2*y <= 5;

/* Duale */
var a;
var b;

minimize z: 5*a + 5*b;
c3: 2*a + b >= 1;
c4: a + 2*b >= 1;

solve;
display x, y, s;
display a, b, z;

end;
