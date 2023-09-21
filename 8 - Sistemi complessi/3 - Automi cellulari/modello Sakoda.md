[[automa cellulare]] che modella le interazioni sociali dei prigioneri americano-giapponesi durante la seconda guerra mondiale.

## Caratteristiche

- tre [[stato di una cella|stati]]:
	- <span style="color: gray;">spazio vuoto</span>
	- <span style="color: royalblue;">individuo del primo gruppo</span>
	- <span style="color: orangered;">individuo del secondo gruppo</span>
- [[reticolo di un automa cellulare|reticolo]]
	- [[reticolo 2D|2D]]
	- [[reticolo quadrato|quadrato]]
	- [[vicinato di Moore]]
- [[regola di transizione]]
	- ad ogni iterazione, ogni <span style="color: royalblue;">individuo del primo gruppo</span> e ogni <span style="color: orangered;">individuo del secondo gruppo</span> valuta quanto sono attrattive le celle vicine in base al valore che danno alle celle nei vari stati e alla distanza a cui esse si trovano dalla cella ispezionata
		- se gli <span style="color: royalblue;">individui di un gruppo</span> valutano negativamente gli <span style="color: orangered;">individui dell'altro</span>, e positivamente gli <span style="color: royalblue;">individui del proprio</span>, si crea **segregazione**
		- se gli <span style="color: royalblue;">individui di un gruppo</span> valutano neutralmente gli <span style="color: orangered;">individui dell'altro</span>, e positivamente gli <span style="color: royalblue;">individui del proprio</span>, si crea **sospetto**
	- *eww, è $O(n^2)$*
