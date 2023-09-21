---
aliases: ["HOTP"]
---

[[one-time credential]] ideata da [[Initiative for Open Authentication|OATH]] che fa uso di [[HMAC]].

## Funzionamento

1. 🖥️ Il servizio di autenticazione [[challenge-response|sfida]] l'user agent con un [[nonce]].
2. 👤 L'user agent calcola l'[[HMAC]] con quel [[nonce]] e la sua [[chiave simmetrica]].
3. 👤 L'user agent [[challenge-response|risponde]] al servizio di autenticazione con il valore calcolato.
4. 🖥️ Il servizio di autenticazione calcola esso stesso l'[[HMAC]].
5. 🖥️ Il servizio di autenticazione verifica che l'[[HMAC]] calcolato coincida con quello inviato dall'user agent.
