/*
A warehouse has to store n boxes in a rack with m shelves.
The first m1 shelves have length L1, while the remaining have length L2.
Each box j = 1..n has length l_j and a frequency of usage f_j.
Write a linear programming model that helps the warehouse to decide how to store the boxes, 
so that the sum of the frequencies of the boxes stored in the first m1 shelves is maximized.
(N.B. It is not known if all the boxes can be stored.)
*/

# Set casse
param nCasse >= 1;
set CASSE := 1..nCasse;

# Set scaffali
param nScaffali >= 1;
set SCAFFALI := 1..nScaffali;

# Parametri cassa
param dimensione{c in CASSE} >= 0;
param frequenza{c in CASSE} >= 0;

# Parametri scaffali
param spazioA >= 0;
param spazioB >= 0;
param cutoff >= 1, <= nScaffali + 1;  # Tutti gli scaffali maggiori o uguali a questo numero saranno considerati nel set B
param spazio{s in SCAFFALI} := if s >= cutoff then spazioB else spazioA;
set SCAFFALI_A := 1..cutoff;
set SCAFFALI_B := cutoff + 1 ..nScaffali;

# Vincoli
var suScaffale{c in CASSE, s in SCAFFALI} binary;
c1{c in CASSE}: sum{s in SCAFFALI} suScaffale[c, s] == 1;
c2{s in SCAFFALI}: sum{c in CASSE} dimensione[c] * suScaffale[c, s] <= spazio[s];

# Funzione obiettivo
maximize z: sum{c in CASSE, s in SCAFFALI_A} suScaffale[c, s] * frequenza[c];

solve;
end;
