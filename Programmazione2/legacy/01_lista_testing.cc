#include <iostream>
#include "01_lista.hh"
using namespace std;

int main(int argc, char* argv[]) {
    List<int> lista;
    lista.append(1);
    lista.append(2);
    lista.append(3);
    cout << lista.pop() << '\n';
    cout << lista.pop() << '\n';
    cout << lista.pop() << '\n';
}