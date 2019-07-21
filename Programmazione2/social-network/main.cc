#include <iostream>
#include <fstream>
using namespace std;
#include "grafi.hh"
#include "node.hh"

struct ContentGraph {
    node* content;
    graph connections;

    node get_node(int i) {
        return content[i - 1];
    }

    int dim() {
        return connections.dim;
    }
};

ContentGraph parse_file(ifstream& graph_file, ifstream& content_file) {
    ContentGraph cg;

    int size;
    graph_file >> size;
    cg.connections = new_graph(size);
    cerr << "Graph size " << size << " created.\n";

    //Create graph
    while(!graph_file.eof()) {
        int node_a;
        int node_b;
        graph_file >> node_a >> node_b;
        if(!graph_file.eof()) {
            add_arc(cg.connections, node_a, node_b, 1);
            cerr << "Arc " << node_a << "->" << node_b << " created.\n";
        }
    }

    //Create content
    cg.content = new node[size];
    cerr << "Content array created.\n";
    int count = 0;
    while(!content_file.eof()) {
        node n;
        content_file.getline(n.cont, 81);
        char tipo[2];
        content_file.getline(tipo, 2);
        n.tipo = tipo[0];
        cg.content[count++] = n;
        cerr << "Created node " << n.tipo << " " << n.cont << "\n";
    }

    return cg;
}

void print_graph(graph g) {
    for(int i = 1; i <= g.dim; i++) {
        adj_list alist = get_adjlist(g, i);
        while(alist != nullptr) {
            cout << i << "->" << get_adjnode(alist) << "\n";
            alist = get_nextadj(alist);
        }
    }
}

void print_graph_full(ContentGraph cg) {
    for(int i = 1; i <= cg.dim(); i++) {
        adj_list alist = get_adjlist(cg.connections, i);
        while(alist != nullptr) {
            node na = cg.get_node(i);
            node nb = cg.get_node(get_adjnode(alist));
            cout << na.cont;
            if(na.tipo == 'U' && nb.tipo == 'U') cout << " FOLLOW ";
            else if(na.tipo == 'U' && nb.tipo == 'T') cout << " LIKE ";
            else cout << " OWNER ";
            cout << nb.cont << "\n";
            alist = get_nextadj(alist);
        }
    }
}

int* total_likes(ContentGraph cg) {
    int* likes = new int[cg.dim()];
    for(int i = 0; i < cg.dim(); i++) {
        likes[i] = 0;
    }
        
    //Iterate on the graph
    for(int i = 1; i <= cg.dim(); i++) {
        adj_list alist = get_adjlist(cg.connections, i);
        while(alist != nullptr) {
            node na = cg.get_node(i);
            node nb = cg.get_node(get_adjnode(alist));
            if(na.tipo == 'U' && nb.tipo == 'T') {
                //It's a like, find the tweet owner
                adj_list twitlist = get_adjlist(cg.connections, get_adjnode(alist));
                node nc = cg.get_node(get_adjnode(twitlist));
                cerr << na.cont << " LIKE " << nb.cont << " FROM " << nc.cont << "\n";
                likes[twitlist->node] += 1;
            }
            alist = get_nextadj(alist);
        }
    }

    for(int i = 0; i < cg.dim(); i++) {
        cerr << "Likescore of " << cg.content[i].cont << ": " << likes[i] << "\n";;
    }
    
    return likes;
}

int main() {
    ifstream fg("sample_graph.txt"), fn("sample_nodes.txt");
    cerr << "fstream opened.\n";
    ContentGraph cg = parse_file(fg, fn);
    print_graph(cg.connections);
    print_graph_full(cg);
    total_likes(cg);
}
