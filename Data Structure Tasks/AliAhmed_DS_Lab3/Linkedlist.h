#ifndef LINKEDLIST_H_INCLUDED
#define LINKEDLIST_H_INCLUDED

typedef struct Node Node;

struct Node
{
    int Data;
    Node  *Next;
};

Node *head = NULL, *tail = NULL;

void Add(int data)
{
    Node *newNode = malloc(sizeof(Node));
    newNode->Data = data;
    newNode->Next = NULL;

    if(head == NULL)
    {
        head = tail = newNode;
    }
    else
    {
        tail->Next = newNode;
        tail = newNode;
    }
}

void Display()
{
    Node *current = head;

    while(current != NULL)
    {
        printf("%d   ", current->Data);
        current = current->Next;
    }
}

void swapList(Node *first,Node *second){
    int temp = first->Data;
    first->Data=second->Data;
    second->Data = temp;
}
void BubbleSort(Node *node)
{
    Node * current = head;
    Node * NextOfcurrent = current->Next;
    int IsSwapped=1;
    while(IsSwapped==1){
            IsSwapped=0;
    while(current->Next !=NULL){
        if(current->Data > NextOfcurrent->Data){
            swapList(current,NextOfcurrent);
            IsSwapped=1;
        }
        current=NextOfcurrent;
        NextOfcurrent=NextOfcurrent->Next;
    }
    current=head;
    NextOfcurrent=current->Next;
}
}
Node *MiddleElement(Node *start,Node *last)
{
    Node *current = start;
    Node * NextOfCurrent = start->Next;
    while(NextOfCurrent != last){
        NextOfCurrent=NextOfCurrent->Next;
        if(NextOfCurrent!=last){
            current = current->Next;
            NextOfCurrent=NextOfCurrent->Next;
        }
    }
    return current;
}

int BinarySearch(int data)
{
    Node *current=head;
    Node *End = NULL;
    while(End != current){
        Node *middlelment  = MiddleElement(current,End);
        if(middlelment->Data == data)
            return data;
        else if(middlelment->Data < data)
            current=middlelment->Next;
        else
            End=middlelment;
    }
    return -1;
}
#endif // LINKEDLIST_H_INCLUDED
