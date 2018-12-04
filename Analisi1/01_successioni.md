

### Proposizione
Una successione _definitivamente_ limitata e' (sempre) **limitata**.

##### Ipotesi
a(n) definitivamente limitata

Esistono `M` e `p` tale che, per ogni n maggiore di p, a(n) <= M.

`\exists M, p | \forall n \geq p, a(n) \leq M`

##### Tesi
a(n) limitata

Esiste `M'` tale che, per ogni n appartenente ai naturali, a(n) <= M'.

`\exists M' | \forall n \in N, a(n) \leq M`

##### Dimostrazione
Sia A l'insieme dei risultati di a(n) per tutti i numeri naturali minori di p.  
A e' non-vuoto; ha un numero finito di elementi: dunque, esiste `max A = M'`.  
Se `n >= p`, `a(n) \leq M \leq M'`.  
Se `n < p`, `a(n) \leq M'`.  
In generale, quindi, `a(n) \leq M`.  

### Successione convergente (__fondamentale per l'esame__)
Una successione a(n) e' **convergente** se `\exists l \in R | \forall \epsilon > 0, \exists m : \forall n \geq m, abs(a(n) - l) < \epsilon`, ovvero `l - \epsilon < a(n) < l + \epsilon`
