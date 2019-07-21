typedef int tipo_inf;

struct elem
{
       tipo_inf inf;
       elem *pun;
};

typedef elem *lista;

typedef struct
{
       lista head;
       elem *tail;
} coda;

coda enqueue(coda, tipo_inf);
tipo_inf dequeue(coda &);
tipo_inf first(coda);
bool isEmpty(coda);
coda newQueue();

static elem *new_elem(tipo_inf);
