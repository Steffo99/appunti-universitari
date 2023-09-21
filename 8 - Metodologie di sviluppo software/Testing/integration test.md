---
aliases: ["sub-system test", "system test", "black box test"]
---

[[test]] che verifica la corretta connessione (*integrazione*) tra più parti di codice, senza conoscere come esse si comportano internamente (*a scatola chiusa* o *nera*).

#Extra In linguaggi con elementi a [[visibilità]] variabile, solitamente gli integration test possono accedere soltanto agli [[elemento pubblico|elementi pubblici]].

## Esempio

```python
from calculator.add import add
from calculator.sub import sub
from calculator.mul import mul
from calculator.div import div

def test_calculator():
    assert add(sub(3, 2), 1) == 2
    assert mul(2, div(2, 2)) == 2
```
