---
aliases: ["SCT"]
---

[[procedura]] che deve essere seguita dalle [[certification authority]] che richiede che l'elenco dei [[certificato web|certificati web]] rilasciati sia consultabile da chiunque.

## Ruoli

Si identificano i seguenti ruoli in un sistema di *certificate transparency*:
- ***logger***: raccoglie l'elenco di tutti i certificati emessi
- ***monitor***: accede ai log e verifica l'assenza di anomalie generali nell'emissione di certificati
- ***auditor***: accede ai log e verifica l'assenza di anomalie specifiche all'emissione di certi certificati
- ***issuer***: emette certificati segnandoli sui log 
- ***owner***: riceve certificati e li utilizza
- ***client***: verificano la presenza dei certificati necessari nei log


## Vedi anche

- [Certificate Transparency](https://certificate.transparency.dev/)
- [RFC 6962](https://www.rfc-editor.org/rfc/rfc6962)