Concetto di [[derivata]] applicato ai [[array|vettori]].
$$
\Huge
\derivativeDirectionalOf{x}{s}
$$

È implicato che sia sempre la derivata positiva:
$$
\Large
\Huge
\derivativeDirectionalOf
	[\color{lime} \mathrm{f}]
	{\color{cyan} x}
	{\color{orange} +s}
=
\lim_{\smol \to 0^{\color{orange} +}}
\frac
	{
		{\color{lime} \mathrm{f}} 
			\par{
				{\color{cyan} x} + \smol \cdot {\color{orange} s}
			}
		- 
		{\color{lime} \mathrm{f}} 
		\par{
			{\color{cyan} x}
		}
}{
	\smol
}
$$

La derivata negativa è invece definita come:
$$
\Large
\derivativeDirectionalOf[\color{lime} -f]{{\color{cyan} x_0}}{{\color{orange} -s}}
=
\lim_{\smol \to 0^{\color{orange} -}}
\frac
	{
		{\color{lime} \mathrm{f}} 
			\par{
				{\color{cyan} x} + \smol \cdot {\color{orange} s}
			}
		- 
		{\color{lime} \mathrm{f}} 
		\par{
			{\color{cyan} x}
		}
}{
	\smol
}
$$
