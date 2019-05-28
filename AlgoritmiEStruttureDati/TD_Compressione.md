# Compressione

_Comprimere_ un file significa ridurne le dimensioni senza modificarne il significato.

Un file può essere compresso in modo _lossless_ (decomprimibile a una copia identica all'originale) o in modo _lossy_ (perdendo alcune informazioni non particolarmente interessanti).

> Immaginiamo un file che contiene solo le lettere `a, b, c, d, e, f`.
>
> Le lettere compaiono con questa frequenza:
> |a|b|c|d|e|f|
> |45%|13%|12%|16%|9%|5%|
>
> Possiamo codificare le lettere nel seguente modo:
> |a|b|c|d|e|f|
> |`0b0`|`0b100`|`0b101`|`0b111`|`0b1100`|`0b1101`|
>
> Scrivere `abacadae` richiederebbe 64 bits con la codifica ASCII estesa, ma in questo modo riusciamo a scriverlo con soli 17 bits!

Le codifiche di un file compresso devono rispettare la proprietà del _Codice a prefisso_, che dice che **nessun codice deve essere il prefisso di un altro codice**.

Si crea quindi un _albero di decodifica_:  
Esso è un albero binario che, leggendo uno ad uno i bit codificati, ci permette di arrivare al valore del codice presente sulle foglie dell'albero.