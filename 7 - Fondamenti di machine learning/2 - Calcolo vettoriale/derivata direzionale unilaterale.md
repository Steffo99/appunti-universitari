Concetto di [[derivata]] applicato ai [[array|vettori]].
$$
\Huge
\derivativeDirectionalSimple[f]{x}{s}
$$

È implicato che sia sempre la derivata positiva:
$$
\Large
\Huge
\derivativeDirectionalSimple[\color{lime} f]{{\color{cyan} x}}{{\color{orange} s}}
=
\lim_{\smol \to 0^+}
\frac{
	{\color{lime} f}({\color{cyan} x} + \smol \cdot {\color{orange} s}) - {\color{lime} f}({\color{cyan} x})
}{
	\smol
}
$$

La derivata negativa è invece definita come:
$$
\Large
-\derivativeDirectionalSimple[\color{lime} f]{{\color{cyan} x}}{{\color{orange} -s}}
=
\lim_{\smol \to 0^-}
\frac{
	{\color{lime} f}({\color{cyan} x} + \smol \cdot {\color{orange} s}) - {\color{lime} f}({\color{cyan} x})
}{
	\smol
}
$$
==Perchè così tante negazioni? La s non va negata?==
