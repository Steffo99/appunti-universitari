---
aliases:
  - discrete Fourier transform
  - DFT
---


[[funzione]] che prende in input un'altra [[funzione]] $\func$ e restituisce una [[0 - Generale/funzione|funzione]] $\func[g] \par{x} : [0, N]$ che restituisce l'[[ampiezza di un'onda|ampiezza dell'onda]] di [[frequenza]] $x$.

$$
\func[Fourier_{Discrete}] \par{\func \par{x}} 
\quad = \quad
\frac{1}{\sqrt{N}} \cdot \sum_{y = 0}^{N - 1} \par{ 
	\func \par{y} \cdot e^{- \frac{2 \pi \i \cdot x \cdot y}{N}}
}
$$

## [[costo computazionale]]

Per determinare tutti i possibili valori di $\func[Fourier_{Discrete}] \par{\func \par{x}}$ è necessario eseguirla $N$ volte.

Visto che ogni esecuzione di $\func[Fourier_{Discrete}] \par{\func \par{x}}$ esegue $\func \par{y}$ $N$ volte, il costo computazionale di determinarla è:
$$
\Huge
O \par{ N^2 }
$$
