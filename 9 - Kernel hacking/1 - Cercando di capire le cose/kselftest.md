Utilty di [[integration test|integration testing]] per il [[kernel Linux]].

Eseguita da *dentro* il kernel compilato.

## Esecuzione

È possibile compilare ed eseguire la suite completa di [[test]] con:
```bash
make kselftest
```

> [!Tip]
> Usando [[virtme-ng]], l'utility va avviata con:
> ```bash
> vng --rw --user root -- make kselftest
> ```

L'output viene emesso su [[standard output]] in formato [[Test Anywhere Protocol]].

> [!Tip]
> Per non perdere i risultati del test, si suggerisce di:
> ```bash
> mkdir .tmp_kselftest
> ... | tee .tmp_kselftest/output_kselftest.log
> ```

> [!Note]
> Apparentemente un sacco di test falliscono su [[virtme-ng]] perchè non possono andare su macchina virtuale...
> 
> Eppure `/sys/module/kvm_amd/parameters/nested` per la virtualizzazione innestata è `1`?

## Directory

I test sono collocati in `tools/testing/selftests`.
