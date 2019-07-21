#include <iostream>

int main() {
    //Auto
    auto a_intero = 1;
    auto a_stringa = "Ciao";
    auto a_carattere = 'C';
    auto a_galleggiante = 1.0f;
    auto a_doppio = 2.0;
    const auto a_COSTANTE = 3.14;

    //Foreach
    int foreach_array[5] = {1, 2, 3, 4, 5};
    for(auto foreach_element : foreach_array) {
        //Do stuff
    }

    //Ternary operator (as right value)
    auto ternary_result = (a_stringa == "Ciao" ? "è ciao" : "non è ciao");

    //Ternary operator (as left value)
    bool ternary_is_ciao = false;
    bool ternary_is_not_ciao = false;
    (a_stringa == "Ciao" ? ternary_is_ciao : ternary_is_not_ciao) = true;

    //Rename a namespace
    namespace better_std = std;
    better_std::cout << "Haha.";
}