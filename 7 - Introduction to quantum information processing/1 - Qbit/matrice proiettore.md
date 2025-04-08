---
aliases:
  - proiettore
---
[[matrice]] [[numero complesso|complesse]] con proprietà speciali.

È sia [[matrice Hermitiana|Hermitiane]] che [[matrice idempotente|idempotenti]]:
$$
\Large
\mathbf{M} = \mathbf{M}^\dagger = \mathbf{M}^2
$$

Effettua una [[proiezione]] lungo una [[retta]].

> [!Tip]
> La [[misura]] altera lo stato come un proiettore.

## Quantum

In quantum computing, sono spesso scritte come [[ket-bra]]:
$$
\Large
\ket{x}\bra{x}
$$

> [!Example]
> Ad esempio, il proiettore sull'[[asse X]] $\qAX$ della [[sfera di Bloch]], avente $\axisX{\ket{+}}$ come [[semiasse]] positivo, è scritto:
> $$
> \Large
> \ket{\axisX{+}} \bra{\axisX{+}}
> $$

> [!Tip]
> Sono spesso applicate a uno o più [[qbit]]:
> $$
> \Large
> \ket{x} \braket{x|\phi}
> $$

## [[autovalore|Autovalori]]

Hanno sempre autovalori $0$ e $1$.

> [!Tip]
> Di conseguenza, i relativi autostati sono $\ket{0}$ e $\ket{1}$, e quindi sempre [[vettori ortogonali|ortogonali]].