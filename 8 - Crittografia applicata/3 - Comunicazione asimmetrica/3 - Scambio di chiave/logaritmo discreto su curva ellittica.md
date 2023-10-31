---
aliases: ["crittografia su curva ellittica", "elliptic-curve cryptography"]
---

[[8 - Crittografia applicata/1 - Concetti/1 - Trovare soluzioni crittografiche/problema]] relativo alle [[gruppo additivo|somme]] tra punti di [[curva ellittica|curve ellittiche]]:
$$
\LARGE 
{\color{orange} \mathbf{A}}
=
{\color{lime} a} \cdot \mathbf{G} \mod p
$$
Dati:
- $\mathbf{G}$ (un [[generatore di un gruppo ciclico]] [[sicurezza dei generatori dei sottogruppi nelle curve ellittiche|sicuro]])
- $p$ (un [[numero primo]])
- $\color{orange} \mathbf{A}$ (la [[chiave pubblica]])

Si vuole determinare:
- $\color{lime} a$ (la [[chiave privata]])
