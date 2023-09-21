[[8 - Crittografia applicata/1 - Concetti/2 - Dimostrare la validità delle soluzioni/debolezza]] crittografica di alcuni [[hypervisor]] che usano un [[pseudo-random number generator]] e poi effettuano un [[clone]] della macchina in esecuzione.

Le macchine clonate avranno lo stesso [[stato di un pseudo-random number generator|stato]], emettendo quindi valori duplicati e infrangendo la [[casualità crittografica]].

## Prevenzione

Si può prevenire effettuando un [[update dello stato di un pseudo-random number generator|update]] al momento del resume della macchina.