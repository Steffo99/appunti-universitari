[[test]] che verifica la soddisfazione di un dato [[requisito]] da parte della [[soluzione]] realizzata.

## Esempio

```python
from random import randint
from calculator import add, sub, mul, div

def circonference(radius):
    return mul(radius, 3.141)

# Requisito: La calcolatrice deve poter calcolare la circonferenza di un cerchio di qualsiasi raggio tra 1 e 100
def test_circle():
	for radius in range(100):
	    assert circonference(radius) == radius * 3.141
```
