[[problema di minimizzazione]].

Si vuole determinare un [[classificatore]] che minimizzi una [[perdita|funzione perdita]] e una [[complessità]].

$$
\Large
\fmlModel 
=
\min_{\fmlClassifier \in \fmlHypothesisSpace}
\par{
	\sum_{i=1}^N
	\fmlLoss(\fmlOutput, \fmlClassifier(\fmlInput))
	+
	\par{
		\fmlComplexityCoefficient
		\cdot
		\fmlComplexity(\fmlClassifier)
	}
}
$$

Per scegliere il modello, vengono usati [[campione|campioni]] di coppie [[input]]-[[output]] conosciute, detti [[data set per supervised learning|data set]].

$$
\Large
\fmlDataset \in (\fmlInputField, \fmlOutputField)^{\fmlDatasetSize} 
$$

Il [[campo matematico]] di tutti i modelli possibili è detto [[spazio delle ipotesi]].
$$
\Large
f \in \fmlHypothesisSpace
$$
