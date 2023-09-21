---
aliases: ["benchmark", "bench"]
---

[[test]] che misura e verifica l'efficienza della [[soluzione]].

## Esempio

```python
from time import time_ns
from .calculator import add

def bench_add_1000():
	start = time_ns()
	for i in range(1000):
		add(i, i)
	end = time_ns()
	return end - start
```
