#include <stdio.h>
#include <stdlib.h>
#include "Linkedlist.h"
int main()
{
    Node *Node1;
    Add(5);
    Add(3);
    Add(2);
    Add(6);
    Add(1);
    BubbleSort(Node1);
    Display();
    printf("\n Your entered value is existed : %d",BinarySearch(5));
    return 0;
}
