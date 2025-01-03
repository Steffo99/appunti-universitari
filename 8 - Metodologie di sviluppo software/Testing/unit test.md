---
aliases: ["module test", "white box test"]
---

[[test]] che verifica il corretto funzionamento di una piccola parte (*unità*) di codice, conoscendo come essa si comporta internamente (*a scatola aperta* o *bianca*).

In linguaggi con elementi a [[visibilità]] variabile, solitamente gli unit test possono accedere agli [[elemento protetto|elementi protetti]] e [[elemento pubblico|pubblici]].

## Esempio

```python
def add(a, b):
    return a + b

def test_add_basic():
    assert add(1, 2) == 3
    assert add(10, 20) == 30

def test_add_zero():
    assert add(1, 0) == 1
    assert add(0, 0) == 0

def test_add_negative():
    assert add(-1, -2) == -3
    assert add(-1, 1) == 0     
```
