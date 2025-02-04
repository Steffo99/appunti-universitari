[[perdita]] per [[deep learning]].

$$
\displaylines{
	\func[p] \par{x} 
	= 
	\frac{1}{1 + e^{- \func \par{x}}}
	\\
	\\
	\Large
	\loss \par{y, x}
	=
	- \par{
		{\color{springgreen} y \cdot \log \par{ \func[p] \par{x} }}
		+ 
		{\color{tomato} \par{1 - y} \cdot \log \par{ 1 - \func[p] \par{x} }}
	} 
}
$$
