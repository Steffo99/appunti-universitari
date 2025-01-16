---
aliases: ["AEAD"]
---

[[operation framework]] per [[crittografia simmetrica autenticata]] che permette di [[autenticazione|autenticare]] dati aggiuntivi oltre al [[plaintext]].

Prevede i seguenti metodi:
```rust
trait AuthenticatedEncryptorWithAssociatedData<const KEY_SIZE, Data> {
	fn keygen() -> [u8; KEY_SIZE];
	fn encrypt(key: &[u8; KEY_SIZE], plaintext: Iterator<u8>, data: Data) -> Iterator<u8>;
	fn decrypt(key: &[u8; KEY_SIZE], ciphertext: Iterator<u8>, data: Data) -> Iterator<u8>;
}
```
