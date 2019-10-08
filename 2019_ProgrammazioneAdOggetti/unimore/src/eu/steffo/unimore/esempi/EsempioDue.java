package eu.steffo.unimore.esempi;

//Qui creo una nuova classe che eredita da Esempio
//Ha tutti gli attributi e metodi di Esempio, e in più ce ne posso aggiungere altri
public class EsempioDue extends Esempio {
    //Definisco un nuovo attributo
    private int unNuovoInizio;

    //Definisco un nuovo metodo
    public int getUnNuovoInizio() {
        return unNuovoInizio;
    }

    //Override: posso modificare metodi della classe superiore, cambiandone il comportamento
    @Override
    public int getUnNumeroACaso() {
        //Faccio qualcosa prima dell'esecuzione della funzione
        volteCheHoFattoGet += 1;
        //Se sono coperti da qualcosa di questa classe, posso accedere ai metodi della classe superiore usando super
        int result = super.getUnNumeroACaso();
        //Faccio qualcosa dopo l'esecuzione della funzione
        volteCheHoFattoGet += 1;

        return result;
    }

    //I costruttori non vengono ereditati; devo farne comunque uno nuovo
    public EsempioDue() {
        //Posso però invocarli con super
        super();
        //Aggiungo qualcosa
        unNuovoInizio = 321;
    }
}
