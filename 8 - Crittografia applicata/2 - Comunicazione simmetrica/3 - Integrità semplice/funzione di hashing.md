[[Funzione ideale]] che:

- **consuma** un [[testo]] di dimensione arbitraria
- **emette** un [[hash]]

Generalmente, le funzioni di hash si propongono di emettere output distribuiti uniformemente nel loro codominio, ma ciò non è sempre vero.

## Schema

```python
def hash_simple(text) -> hash:
	...
```