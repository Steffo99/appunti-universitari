#include <iostream>
using namespace std;

#include "coda.hh"

static elem *new_elem(tipo_inf inf)
{
	elem *p = new elem;
	p->inf = inf;
	p->pun = NULL;
	return p;
}

coda enqueue(coda c, tipo_inf i)
{
	elem *e = new_elem(i);

	if (c.tail != NULL)
		c.tail->pun = e;
	c.tail = e;
	if (c.head == NULL)
		c.head = c.tail;
	return c;
}

tipo_inf dequeue(coda &c)
{
	tipo_inf ris;
	ris = c.head->inf;
	lista app = c.head;
	c.head = (c.head)->pun;
	delete app;
	return ris;
};

tipo_inf first(coda c)
{
	return (c.head)->inf;
};

bool isEmpty(coda c)
{
	if (c.head == NULL)
		return true;
	return false;
}

coda newQueue()
{
	coda c = {NULL, NULL};
	return c;
}
