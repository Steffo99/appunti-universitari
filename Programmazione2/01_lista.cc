#include "01_lista.hh"

template <class T>
bool List<T>::empty() {
    return start == nullptr;
} 

template <class T>
int List<T>::length() {
    int count = 0;
    PointerNode<T>* current = start;
    while(current != nullptr) {
        count++;
        current = current->next;
    }
    return count;
}

template <class T>
PointerNode<T>* List<T>::getNode(int position) {
    PointerNode<T>* current = start;
    while(position > 0) {
        position--;
        current = current->next;
    }
    return current;
}

template <class T>
T List<T>::getValue(int position) {
    return getNode(position)->value;
}

template <class T>
void List<T>::append(T value) {
    PointerNode<T>* temp = new PointerNode<T>();
    temp->value = value;
    temp->next = start;
    start = temp;
}

template <class T>
void List<T>::insert(T value, int position) {
    PointerNode<T>* current = getNode(position);
    PointerNode<T>* temp = new PointerNode<T>();
    temp->value = value;
    temp->next = current->next;
    current->next = temp;
}

template <class T>
PointerNode<T>* List<T>::pop(int position) {
    PointerNode<T>* current;
    if(position == 0) {
        current = start;
        start = start->next;
    }
    PointerNode<T>* previous = getNode(position - 1);
    current = previous->next;
    PointerNode<T>* next = current->next;
    previous->next = next;
    return current;
}

