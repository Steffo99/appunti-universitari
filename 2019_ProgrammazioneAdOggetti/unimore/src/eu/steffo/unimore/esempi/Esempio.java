//Questo è il nome del package
package eu.steffo.unimore.esempi;

//Qui dico a IntelliJ di stare zitto
@SuppressWarnings("All")
//Qui dichiaro una classe visibile dall'esterno del package e che quindi può essere usata in altri programmi
public class Esempio {
    //Qui aggiungo attributi alla classe

    //Questo attributo è pubblico e può essere letto / modificato dall'esterno della classe
    public int numeroDellEsempio;
    //Questo attributo è privato e può essere letto / modificato SOLO da questa classe
    private int unNumeroACaso;
    //Questo attributo è protetto e può essere letto / modificato SOLO da questa classe o classi che estendono questa
    protected int volteCheHoFattoGet;
    //Questo attributo è amichevole ^_^ e può essere letto / modificato SOLO da classi in questo package
    //E' quello che succede se non si specifica un livello di protezione
    /*friendly*/ int amicizia;

    //Questo attributo è statico e condiviso tra tutte le istanze della classe, ed è inizializzato a 0
    private static int numeroTotaleDiEsempi = 0;

    //Questo attributo non può essere modificato fuori dal costruttore
    private final int sembraUnBossFinale;

    //Questo attributo è una costante
    private static final int PI = 3;

    //Questo è un metodo pubblico ed è il collante tra gli attributi privati e gli altri programmi
    //In questo caso, posso vedere il valore di unNumeroACaso ma non modificarlo
    public int getUnNumeroACaso() {
        volteCheHoFattoGet += 1;
        return unNumeroACaso;
    }

    //Overload: se definisco più funzioni con lo stesso nome ma argomenti diversi, Java mi userà automaticamente quella
    //corretta
    public int getUnNumeroACaso(int contaComeVolte) {
        volteCheHoFattoGet += contaComeVolte;
        return unNumeroACaso;
    }

    //Questo è il costruttore, è una funzione speciale che viene chiamato quando la classe sta per essere creata
    public Esempio(int a, int sembraUnBossFinale) {
        numeroDellEsempio = a;
        unNumeroACaso = -a;
        volteCheHoFattoGet = 0;
        numeroTotaleDiEsempi += 1;

        //Se un parametro copre il nome di un attributo, posso comunque accedere all'attributo con la parola chiave this
        this.sembraUnBossFinale = sembraUnBossFinale;
    }

    //Posso fare l'overload anche dei costruttori
    public Esempio() {
        numeroDellEsempio = 0;
        unNumeroACaso = 0;
        volteCheHoFattoGet = 0;
        numeroTotaleDiEsempi += 1;
        sembraUnBossFinale = 123;
    }
}
