/*
Un grossista gestisce nel suo magazzino P tipi di prodotti differenti.
- [x] Ogni prodotto k = 1..P ha un volume di v_k unit�.
- [x] Ogni prodotto ha una domanda stimata, per le prossime T settimane, pari a d_{tk} (t = 1..T).
- [x] L'approvigionamento di ogni prodotto k � limitato a un massimo di m_k unit� per settimana.
- [x] Il volume totale disponibile nel magazzino � pari a V.
- [x] Ogni prodotto k non pu� occupare pi� di V_k unit� di spazio in magazzino.
- [x] Alla settimana t = 0 il magazzino dispone di I_{0k} unit� di ogni prodotto k.
- [x] Alla fine della settimana T devono rimanere in magazzino s_k unit� di ogni prodotto k.
- [x] In ogni settimana si pu� ordinare (o meno) ogni prodotto k al rispettivo fornitore.
- [x] Il prodotto viene consegnato al magazzino nella stessa settimana.
- [x] Ogni ordine di prodotto k non pu� essere inferiore a una data quantit� minima q_k.

Si scriva un modello di programmazione lineare per aiutare l'azienda a definire una politica di approvigionamento che permetta di soddisfare la domanda, nel rispetto di tutti i vincoli e minimizzando la giacenza media delle T settimane.
*/

# Numero di prodotti
param P;

# Numero di settimane
param T;

# Domanda per ogni prodotto
param domanda{1 .. P, 1 .. T}, >= 0;

# Offerta per ogni prodotto
param approvigionamento{1 .. P}, >= 0;

# Quantit� in magazzino di ogni prodotto alla settimana 0
param quantitaIniziale{1 .. P}, >= 0;

# Capacit� in magazzino massima di ogni prodotto
param capacita{1 .. P}, >= 0;

# Capacit� massima in totale
param capacitaTotale, >= 0;

# Quantit� minima di ogni prodotto che deve rimanere in magazzino alla fine dell'ultima settimana
param safety{1 .. P}, >= 0;

# Dimensione minima di un ordine
param ordineMinimo{1 .. P}, >= 0;

# Quantit� da ordinare ogni settimana di ogni prodotto
var ordine{1 .. P, 1 .. T}, >= 0;

# Quantit� in magazzino di ogni prodotto
var quantita{1 .. P, 1 .. T}, >= 0;

# Quantit� totale di prodotti in magazzino
var quantitaTotale{1 .. T}, >= 0;


# All'ultima settimana, la quantit� deve essere almeno safety
c1{p in 1 .. P}: safety[p] <= quantita[p, T];

# La quantit� di ogni prodotto deve sempre essere minore della capacit� e la safety.
c2{p in 1 .. P, t in 1 .. T}: quantita[p, t] <= capacita[p];

# Ci possono essere massimo X prodotti in magazzino.
c3{t in 1 .. T}: quantitaTotale[t] == sum{p in 1 .. P} quantita[p, t];
c4{t in 1 .. T}: quantitaTotale[t] <= capacitaTotale;

# Si pu� ordinare al minimo X e al massimo Y prodotti ogni settimana
c5{p in 1 .. P, t in 1 .. T}: ordine[p, t] >= ordineMinimo[p];
c6{p in 1 .. P, t in 1 .. T}: ordine[p, t] <= approvigionamento[p];

# La quantit� � uguale alla somma degli ordini e della quantit� iniziale
c7{p in 1 .. P, t in 1 .. T}: quantita[p, t] == quantitaIniziale[p] + sum{u in 1 .. t} ordine[p, u] - sum{u in 1 .. t} domanda[p, u];

# Funzione obiettivo
minimize sol: sum{t in 1 .. T} quantitaTotale[t];
solve;

end;
