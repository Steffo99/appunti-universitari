[[operation framework deterministico]] per [[crittografia simmetrica]] con [[initialization vector]] (come un [[cifrario a blocchi]] in [[cipher block chaining operation mode]]).

Prevede i seguenti metodi:

```rust
trait EncryptorBlockByBlockWithInitializationVector<const BLOCK_SIZE, const KEY_SIZE> {
	fn keygen() -> [u8; KEY_SIZE];
	fn encrypt(key: &[u8; KEY_SIZE], iv: [u8; BLOCK_SIZE], plaintext: [u8; BLOCK_SIZE]) -> [u8; BLOCK_SIZE];
	fn decrypt(key: &[u8; KEY_SIZE], iv: [u8; BLOCK_SIZE], ciphertext: [u8; BLOCK_SIZE]) -> [u8; BLOCK_SIZE];
}
```
