#include <iostream>
using namespace std;

int validate_input(int min, int max) {
	int input;
	do {
		cin >> input;
	} while(input < min || input > max);
	return input;
}

int main() {
	int anelli = 0;
	int rame1 = -1;
	int rame2 = -1;
	char selection;
	int position;
	while(true) {
		cout << "Seleziona un'operazione:\n1 - Aggiungi anello\n2 - Elimina anello\n3 - Stampa catena\n4 - Esci\n";
		cin >> selection;
		switch(selection) 
		{
			case '1':
				cout << "In che posizione vuoi aggiungere l'anello? (1-" << anelli+1 << ")\n";
				position = validate_input(1, anelli+1) - 1;
				cout << "Premi r per inserire un anello di rame, qualsiasi altro tasto per uno di ferro.\n";
				cin >> selection;
				if(selection == 'r') {
					if(position == rame1 || rame1 == -1)
					{
						rame1 = position;
					}
					else if(position == rame2 || rame2 == -1)
					{
						rame2 = position;
					}
					else
					{
						cerr << "Gli anelli di rame sono finiti.\n";
						continue;
					}
				}
				anelli++;
				if(rame1 >= position) rame1++;
				if(rame2 >= position) rame2++;
				break;
			case '2':
				cout << "Da che posizione vuoi togliere l'anello? (1|" << anelli << ")\n";
				position = validate_input(1, anelli) - 1;
				if(!(position == 0 || position == anelli))
				{
					cerr << "Rimozione anello impossibile.\n";
					continue;
				}
				anelli--;
				if(rame1 > position) rame1--;
				else if(rame1 == position) rame1 = -1;
				if(rame2 > position) rame2--;
				else if(rame2 == position) rame2 = -1;
				break;
			case '3':
				for(int i = 0; i < anelli; i++)
				{
					if(i == rame1-1 || i == rame2-1) cout << "R";
					else cout << "F";
				}
				cout << "\n";
				break;
			case '4':
				return 0;
			default:
				cout << "Input non valido\n";
				continue;
		}
	}
}
