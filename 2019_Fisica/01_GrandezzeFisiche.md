# Grandezze fisiche

Una _grandezza fisica_ è una proprietà misurabile di un fenomeno, **distinguibile qualitativamente** (grande, piccolo, etc) e **determinabile quanititativamente** (1 m³, 1 cm³, etc).

### Grandezze fondamentali

Sono _grandezze fondamentali_ quelle grandezze che sono definite attraverso delle costanti fondamentali della fisica.

Esse sono:

- Lunghezza (metro)
- Tempo (secondo)
- Massa (kilogrammo)
- Temperatura (kelvin)
- Intensità elettrica (ampere)
- Intensità luminosa (candela)
- Quantità di sostanza (mole)

### Grandezze derivate

Sono _grandezze derivate_ quelle grandezze che sono ricavate da operazioni matematiche tra le grandezze fondamentali.

Sono innumerevoli, alcuni esempi sono:

- Velocità (lunghezza / tempo)
- Accelerazione (lunghezza / tempo²)
- Forza (accelerazione * massa)
- ...

## Grandezze vettoriali

Le _grandezze vettoriali_ sono grandezze definite da un insieme di:

- intensità
- direzione
- verso

Vettori bidimensionali si possono descrivere anche con 2 scalari indicanti l'intensità nelle due direzioni cardinali:

- intensità x
- intensità y


Si potrebbero considerare come una struct in qualche linguaggio di programmazione:

```cs
public struct Vector2 {
    public double x;
    public double y;
}
```

### Scomposizione di vettore

Possiamo scomporre un vettore nelle sue componenti con l'ausilio del seno e del coseno:

```latex
\vec{v_x} = |v| \sin(\alpha)
\vec{v_y} = |v| \cos(\alpha)

\vec{v} = \vec{v_x} + \vec{v_y}
```

### Versore

Un _versore_ è un vettore con modulo unitario (è anche detto un **vettore normalizzato**).

### Somma di vettori

La _somma di vettori_ si effettua facendo la somma delle loro componenti cartesiane.

### Differenza di vettori

La _differenza di vettori_ si effettua sommando il sottraendo al vettore sottratto **con verso opposto**.

Rappresenta geometricamente il vettore che va da [todo...]
