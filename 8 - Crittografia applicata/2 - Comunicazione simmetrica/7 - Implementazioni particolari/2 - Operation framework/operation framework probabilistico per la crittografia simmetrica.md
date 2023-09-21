[[operation framework probabilistico]] per [[crittografia simmetrica]] che astrae i meccanismi crittografici dall'utilizzatore per maggiore semplicità.

Prevede i seguenti metodi:

```rust
trait EncryptorBlockByBlockWithInitializationVector<const BLOCK_SIZE, const KEY_SIZE> {
	fn keygen() -> [u8; KEY_SIZE];
	
	fn encrypt(key: &[u8; KEY_SIZE], plaintext: Vec<u8>) -> Vec<u8>;

	fn decrypt(key: &[u8; KEY_SIZE], ciphertext: Vec<u8>) -> Vec<u8>;
}
```
