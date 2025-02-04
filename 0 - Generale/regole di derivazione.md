$$
\def \a {{\color{violet} a}}
\def \b {{\color{mediumpurple} b}}

\def \x {{\color{darkorange} x}}

\def \f {{\color{lightgreen} \func[f]\par{x}}}
\def \g {{\color{lightskyblue} \func[g]\par{x}}}

\def \F {{\color{forestgreen} \func[f']\par{x}}}
\def \G {{\color{royalblue} \func[g']\par{x}}}

\a \quad \b \quad \x \quad \f \quad \g \quad \F \quad \G
$$

| Regola di derivazione                                                                      | Primitiva                                | Derivata                                                                                 | Note                |
| ------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------- |
| [[regola di derivazione delle costanti\|delle costanti]]                                   | $\a$                                     | $0$                                                                                      |                     |
| [[regola di derivazione delle variabili semplici\|delle variabili semplici]]               | $\a \cdot \x$                            | $\a$                                                                                     |                     |
| [[regola di derivazione dei polinomi\|dei polinomi]]                                       | $\x^\a$                                  | $\a \cdot \x ^ {\a - 1}$                                                                 |                     |
| [[regola di derivazione della radice quadrata\|della radice quadrata]]                     | $\sqrt{\x}$                              | $\frac{1}{2 \cdot \sqrt{\x}}$                                                            |                     |
| [[regola di derivazione della radice\|della radice]]                                       | $\sqrt[\a]{\x^\b}$                       | $\frac{\b}{\a} \cdot \sqrt[\a]{\x^{\b - \a}}$                                            |                     |
| [[regola di derivazione del valore assoluto\|del valore assoluto]]                         | $\abs{\x}$                               | $\frac{\x}{\abs{\x}}$                                                                    | Ovvero, $1$ e $-1$. |
| [[regola di derivazione del logaritmo naturale\|del logaritmo naturale]]                   | $\ln \par{\x}$                           | $\frac{1}{\x}$                                                                           |                     |
| [[regola di derivazione del logaritmo\|del logaritmo]]                                     | $\log_{\a} \par{\x}$                     | $\frac{1}{\x \ln \par{\a}}$                                                              |                     |
| [[di e]]                                                                                   | $e^\x$                                   | $e^\x$                                                                                   | Rimane uguale!      |
| [[regola di derivazione dell'esponenziale\|dell'esponenziale]]                             | $\a^\x$                                  | $\a^\x \cdot \ln \par{\a}$                                                               |                     |
| [[regola di derivazione dell'iperesponenziale\|dell'iperesponenziale]]                     | $\x^\x$                                  | $\x^\x \cdot \par{1 + \ln \par{\x}}$                                                     |                     |
| [[regola di derivazione del seno\|del seno]]                                               | $\sin \par{\x}$                          | $\cos \par{\x}$                                                                          | Una fase di 90°.    |
| [[regola di derivazione del coseno\|del coseno]]                                           | $\cos \par{\x}$                          | $- \sin \par{\x}$                                                                        | Una fase di 90°.    |
| [[regola di derivazione della tangente\|della tangente]]                                   | $\tan \par{\x}$                          | $+ 1 + \tan \par{2 \x}$                                                                  |                     |
| [[regola di derivazione della cotangente\|della cotangente]]                               | $\cot \par{\x}$                          | $- 1 - \cot \par{2 \x}$                                                                  |                     |
| [[regola di derivazione della secante\|della secante]]                                     | $\sec \par{\x}$                          | $\tan \par{x} \cdot \sec \par{\x}$                                                       |                     |
| [[regola di derivazione della cosecante\|della cosecante]]                                 | $\csc \par{\x}$                          | $-\cot \par{\x} \cdot \csc \par{\x}$                                                     |                     |
| [[regola di derivazione dell'arcoseno\|dell'arcoseno]]                                     | $\sin^{-1} \par{\x}$                     | $\frac{1}{\sqrt{1 - \x^2}}$                                                              |                     |
| [[regola di derivazione dell'arcocoseno\|dell'arcocoseno]]                                 | $\cos^{-1} \par{\x}$                     | $- \frac{1}{\sqrt{1 - \x^2}}$                                                            |                     |
| [[regola di derivazione dell'arcotangente\|dell'arcotangente]]                             | $\tan^{-1} \par{\x}$                     | $\frac{1}{\sqrt{1 + \x^2}}$                                                              |                     |
| [[regola di derivazione dell'arcocotangente\|dell'arcocotangente]]                         | $\cot^{-1} \par{\x}$                     | $\frac{-1}{\sqrt{1 - \x^2}}$                                                             |                     |
| [[regola di derivazione dell'arcosecante\|dell'arcosecante]]                               | $\sec^{-1} \par{\x}$                     | $\frac{1}{\abs{\x} \cdot \sqrt{1 - \x^2}}$                                               |                     |
| [[regola di derivazione dell'arcocosecante\|dell'arcocosecante]]                           | $\csc^{-1} \par{\x}$                     | $\frac{-1}{\abs{\x} \cdot \sqrt{1 - \x^2}}$                                              |                     |
| [[regola di derivazione della somma di funzioni\|della somma di funzioni]]                 | $\a \cdot \f + \b \cdot \g$              | $\a \cdot \F + \b \cdot \G$                                                              |                     |
| [[regola di derivazione del prodotto di funzioni\|del prodotto di funzioni]]               | $\f \cdot \g$                            | $\F \cdot \g + \f \cdot \G$                                                              |                     |
| [[regola di derivazione del quoziente di funzioni\|del quoziente di funzioni]]             | $\frac{\f}{\g}$                          | $\frac{\F \cdot \g - \f \cdot \G}{\g^2}$                                                 |                     |
| [[regola di derivazione della funzione reciproca\|della funzione reciproca]]               | $\frac{1}{\f}$                           | $\frac{\F}{\f^2}$                                                                        |                     |
| [[regola di derivazione della funzione inversa\|della funzione inversa]]                   | ${\color{lightgreen} \func[f]^{-1} (x)}$ | $\frac{1}{\color{forestgreen} \func[f'] \par{\color{lightgreen} \func[f]^{-1} \par{x}}}$ |                     |
| [[regola di derivazione della catena di funzioni\|della catena di funzioni]]               | $\color{lightgreen} \func[f] \par{ \g }$ | $\color{forestgreen} \func[f'] \par{ \g } \cdot \G$                                      |                     |
| [[regola di derivazione della potenza di funzioni\|della potenza di funzioni]]             | $\f ^ \g$                                | $\G \cdot \ln \par{\f} + \frac{\g \cdot \F}{\f}$                                         |                     |
## Per vettori

==TODO==