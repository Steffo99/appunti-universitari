Misura **qualitativa** [[microscopico|microscopica]] che aiuta ad anticipare le possibili [[classe di complessità di Wolfram|classi di complessità]] di un [[automa cellulare totalistico]] [[1D]] a partire dalla [[regola di transizione]].

## Formula

$$
\def \varK {{\color{lime} k}}
\def \varN {{\color{royalblue} n}}
\def \varNQ {{\color{green} n_q}}

\Large
\lambda = 1 - \frac{\varNQ}{\varK ^ \varN}
$$
Dove:
- $\color{royalblue} n$ · numero di [[cella di un automa cellulare|celle]] nel [[vicinato di un automa cellulare|vicinato]]
- $\color{green} n_q$ · numero di [[stato di una cella|stati]] output quiescienti della [[regola di transizione]]
- $\color{lime} k$ · numero di [[stato di una cella|stati]] totali della [[regola di transizione]]

## Output

- Valori bassissimi indicano una probabile [[classe 1 di Wolfram]]
- Valori bassi indicano una probabile [[classe 2 di Wolfram]]
- Valori medi indicano una probabile [[classe 2 di Wolfram]], [[classe 3 di Wolfram]], o una possibile **[[classe 4 di Wolfram]]**
- Valori alti indicano una probabile [[classe 3 di Wolfram]]
