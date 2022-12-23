#include <stdio.h>
#include <stdlib.h>
#include "../TREE.h"
int main()
{
    tree t= {.root=NULL};
    AddTreeNode(&t,50);
    AddTreeNode(&t,40);
    AddTreeNode(&t,30);
    AddTreeNode(&t,60);
    AddTreeNode(&t,65);
    AddTreeNode(&t,35);
    AddTreeNode(&t,70);
    AddTreeNode(&t,80);
    AddTreeNode(&t,90);
    DisplayTree(t.root);
    printf("\n Max depth level = %d\n",GetMaxDepth(t.root));
    return 0;
}
