[[Funzione]] di [[key rotation]] nel [[double ratchet]] che garantisce [[forward secrecy]].

## Funzionamento

Cambia la [[chiave simmetrica]] ad ogni messaggio, fornendola ogni volta a una [[key derivation function]] che ne genera una nuova.

Associa un contatore ad ogni messaggio, permettendo l'elaborazione di messaggi out-of-order.

## Implementazione

Implementato con [[HMAC]].
