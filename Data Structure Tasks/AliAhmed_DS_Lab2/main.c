#include <stdio.h>
#include <stdlib.h>
#include "Stack.h"
#include "Queue.h"
int main()
{
    Stack stk;
    Queue que;
    que.front=NULL;
    que.rear=NULL;
    int num;
    push_linkedList(&stk,14);
    push_linkedList(&stk,10);
    push_linkedList(&stk,15);
     printf("\n------------- Before pop (Push only)------------\n");
    DisplayStack(&stk);
    pop_linkedList(&stk,&num);
    printf("\n------------------ After pop ---------------------\n");
    DisplayStack(&stk);
    printf("\n------------------ Before deQueue (EnQueue only)-------------------\n");
    EnQueue(&que,1);
    EnQueue(&que,2);
    EnQueue(&que,3);
    DisplayQueue(&que);
    printf("\n------------------------After deQueue------------------------\n");
    DeQueue(&que,&num);
    DisplayQueue(&que);
    return 0;
}
