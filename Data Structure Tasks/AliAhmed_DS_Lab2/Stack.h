#ifndef STACK_H_INCLUDED
#define STACK_H_INCLUDED

typedef struct Node Node;
struct Node
{
    int Data;
    Node  *Next;
};
typedef struct Stack
{
    int top;
}Stack;

Node *top = NULL;
int push_linkedList(Stack *stk, int data){
    Node *newStackNode = malloc(sizeof(Node));
        newStackNode->Data = data;
        newStackNode->Next=stk->top;
        stk->top=newStackNode;
}
int pop_linkedList(Stack *stk, int *data){
    Node *current = stk->top;
    *data = current->Data;
    stk->top=current->Next;
    return 1;
}
void DisplayStack(Stack *stk)
{
    Node *current = stk->top;
    while(current != NULL)
    {
        printf("%d   ", current->Data);
        current = current->Next;
    }
}
#endif // STACK_H_INCLUDED
