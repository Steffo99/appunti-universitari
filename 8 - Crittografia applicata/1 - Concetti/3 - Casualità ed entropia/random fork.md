[[8 - Crittografia applicata/1 - Concetti/2 - Dimostrare la validità delle soluzioni/debolezza]] crittografica di alcuni [[software]] che usano un [[pseudo-random number generator]] e poi effettuano un [[fork]].

Riguarda lo [[stato di un pseudo-random number generator|stato]]: se entrambi i processi fanno uso dello stesso stato, duplicato dal [[fork]], emetteranno valori duplicati, infrangendo la [[casualità crittografica]].

## Prevenzione

Si può prevenire effettuando un [[update dello stato di un pseudo-random number generator|update]] al momento del fork.