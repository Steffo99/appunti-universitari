//Proto challenge
#include <iostream>
#include <math.h>
#define MAX 100000
using namespace std;

const int prime_list[] = {};

void sottodivisori(int numero, int divisore, int& somma, int& sqrt_numero)
{
    //Se il numero non è divisore, puoi ignorarlo
    if(numero % divisore) return;
    somma += divisore;
    //Se il numero è divisore, controlla tutti i suoi multipli minori della sqrt del numero
    //Si può rendere ricorsivo, poi lo faccio
    int limite = (sqrt_numero / divisore) + 1;
    for(int i = 1; i < limite; i++)
    {
        int multiplo = (divisore * i);
        if(numero % multiplo)
        {
            somma += multiplo;
        }
    }
}

int divisori(int numero) {
    //Tutti i numeri sono divisibili per 1...
    int somma = 1;
    //Cerca tutti i divisori, chiamando la funzione sottodivisori per ogni primo...
    //for primo in prime_list
    //sottodivisori(...) 
    return somma;
}
