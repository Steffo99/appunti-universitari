---
aliases: ["DAEAD"]
---

[[authenticated encryption with associated data]] in un [[operation framework deterministico]].

Prevede i seguenti metodi:
```rust
trait AuthenticatedEncryptorWithAssociatedData<const KEY_SIZE, Data> {
	fn keygen() -> [u8; KEY_SIZE];
	fn encrypt(key: &[u8; KEY_SIZE], nonce: usize, plaintext: Iterator<u8>, data: Data) -> Iterator<u8>;
	fn decrypt(key: &[u8; KEY_SIZE], nonce: usize, ciphertext: Iterator<u8>, data: Data) -> Iterator<u8>;
}
```
