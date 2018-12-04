#include <iostream>
using namespace std;
int main() {

	int a, b, c;
	cout << "a? ";
	cin >> a;
	cout << "b? ";
	cin >> b;
	cout << "c? ";
	cin >> c;
	cout << ((a < b) || (a < c)) << endl;
}
