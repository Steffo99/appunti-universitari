var w >= 0;
var x >= 0;
var y >= 0;
var z >= 0;

maximize sol: 3*w - 2*x + z;
c1: w - x + 3*y >= 8;
c2: 4*x + 5*z <= 12;
c3: 3*w - 4*y + z >= 15;

solve;
display sol, w, x, y, z;
end;
