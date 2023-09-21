---
aliases: ["coverage", "copertura"]
---

Metrica che consiste nella percentuale di righe di codice attraversate durante l'esecuzione dei [[test]] relative alle righe di codice totali.

## Esempio

```python
def yes_or_no(b: bool) -> str:
	if b:
		return "yes"
	else:
		return "no"

def test_yes():
	assert yes_or_no(True) == "yes"
```

```diff
@ La funzione yes_or_no è stata chiamata
+  def yes_or_no(b: bool) -> str:
@ Il ramo "yes" è stato attraversato
+     if b:
+         return "yes"
@ Il ramo "no" non è stato attraversato
-     else:
-         return "no"

@ Il coverage è del 60% delle righe di codice.
```

