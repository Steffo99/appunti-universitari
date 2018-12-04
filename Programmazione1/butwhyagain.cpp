#include <iostream>

int modexp(int base, int exp, int mod) {
    int current_value = 1;
    for(int i = 0; i < exp; i++)
    {
        current_value = (current_value * base) % mod;
    }
    return current_value;
}

int crypt(int text, int public_key, int mod) {
    return modexp(text, public_key, mod);
}

int decrypt(int ciphertext, int private_key, int mod) {
    return modexp(ciphertext, private_key, mod);
}

int main() {
    int public_key = 5;
    int private_key = 173;
    int mod = 323;
    int to_encrypt = 123;
    int encrypted = crypt(to_encrypt, public_key, mod);
    int decrypted = decrypt(encrypted, private_key, mod);
    std::cout << encrypted << "|" << decrypted << '\n';
    return 0;
}
