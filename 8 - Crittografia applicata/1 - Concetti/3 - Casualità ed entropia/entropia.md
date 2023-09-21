[[Quantificazione]] della [[casualità crittografica]] presente all'interno di un'[[informazione]] relativamente ad un sistema.

## Definizione

Un [[insieme]] ha *entropia* uguale alla sua [[cardinalità]].
$$
entropy = log_2 ( possible )
$$
Il [[risultato]] di una [[funzione]] ha *entropia* uguale al minimo di entropia tra il suo dominio e il suo codominio.
$$ 
entropy(f : \mathrm{D} \rightarrow \mathrm{C}) = 
\min
\left( 
	entropy(\mathrm{D}),
	entropy(\mathrm{C}) 
\right)
$$

## Esempi

Una funzione che consuma 1 bit ed emette 128 bytes in base ha **1 bit** di *entropia*, perchè i valori possibili che può emettere sono $2$, e quindi $log_2(2) = 1$.

```rust
fn func(data: bool) -> [u8; 128] {
	match data {
		true => [1; 128],
		false => [0; 128],
	}
}
```

Una funzione che consuma 128 bytes ed emette 1 bit ha **1 bit** di entropia, perchè i valori possibili che può emettere sono $2$, e quindi $log_2(2) = 1$.

```rust
fn func(data: [u8; 128]) -> bool {
	data.iter().all(|v| *v != 0)
}
```


## #Extra Relazioni con altri concetti

È l'inverso del [[fattore di compressione]] di un'[[informazione]]: più entropia essa ha, meno è possibile comprimerla.