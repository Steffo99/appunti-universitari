# Meltdown

Esempio circa comprensibile:

```c++
int meltdown() {
    bool array[2] = {false, true};

    if( qualcosa_che_restituisce_false() ) {
        //Questo viene predetto
        //Durante le predizioni non ci sono segfault!
        int protetto = *(indirizzo_bersaglio);
        //Se il primo bit di protetto è 1, verrà caricato "true" in cache, altrimenti, verrà caricato "false", ANCHE SE E' SOLO UNA PREDIZIONE!
        //Dopo essere stato caricato, NON VIENE RIMOSSO, anche se la predizione è sbagliata.
        int caricato = array[protetto & 1];
    }

    if( in_cache(true) ) cout << "Il primo bit del bersaglio è 1.\n";
    else cout << "Il primo bit del bersaglio è 0.\n";
}
```