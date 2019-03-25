# La Torre di Hanoi

```python
def hanoi(dischi, partenza, arrivo, appoggio):
    # Caso base
    if dischi == 1:
        move(partenza, arrivo)
    # Caso ricorsivo
    else:
        hanoi(dischi - 1, partenza, appoggio, arrivo)
        move(partenza, arrivo)
        hanoi(dischi - 1, appoggio, arrivo, partenza)
```