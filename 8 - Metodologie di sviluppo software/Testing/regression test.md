[[test]] che verifica la corretta risoluzione di un dato [[bug]] o [[errore]], e l'assenza di [[regressione|regressioni]] in versioni future della [[soluzione]].

```
from calculator import div

# Bugfix: La calcolatrice dava errore quando veniva diviso per zero, ma il cliente voleva che restituisse -1, quindi l'abbiamo sistemato
def test_zerodiv():
	assert div(1, 0) == -1
```
