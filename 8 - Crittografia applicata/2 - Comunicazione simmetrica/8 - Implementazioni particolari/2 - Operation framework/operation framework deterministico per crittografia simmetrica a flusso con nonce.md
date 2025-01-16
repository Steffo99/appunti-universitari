[[operation framework deterministico]] per [[crittografia simmetrica]] con [[nonce]] (come un [[cifrario a flusso]]).

Prevede i seguenti metodi:
```rust
trait EncryptorStreamBasedWithNonce<const KEY_SIZE> {
	fn keygen() -> [u8; KEY_SIZE];
	fn encrypt(key: &[u8; KEY_SIZE], nonce: usize, plaintext: Iterator<u8>) -> Iterator<u8>;
	fn decrypt(key: &[u8; KEY_SIZE], nonce: usize, ciphertext: Iterator<u8>) -> Iterator<u8>;
}
```
