#include <stdio.h>
#include <stdlib.h>

#include "LinkedList.h"

int main()
{
    /*LinkedList myList = {.head = NULL, .tail = NULL};
    Add(&myList, 3);*/

    Add(3);
    Add(5);
    Add(7);
    Add(9);
    InsertAfter(2,5);
    Display();
    printf("\n Count = %d",GetCount());
    printf("\n GetDataByIndex = %d",GetDataByIndex(0));
    return 0;
}
