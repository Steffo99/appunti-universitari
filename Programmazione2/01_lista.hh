#pragma once

template <class T> struct Node {
    T value;
};

template <class T> struct PointerNode : public Node<T> {
    PointerNode<T>* next;
};

template <class T> struct DoublePointerNode : public PointerNode<T> {
    PointerNode<T>* previous;
};

template <class T> struct List {
    PointerNode<T>* start;
    
    bool empty();
    int length();
    PointerNode<T>* getNode(int position);
    T getValue(int position);
    void append(T value);
    void insert(T value, int position);
    PointerNode<T>* pop(int position = 0);
};
