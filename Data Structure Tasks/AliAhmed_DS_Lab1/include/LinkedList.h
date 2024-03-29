#ifndef LINKEDLIST_H
#define LINKEDLIST_H

typedef struct Node Node;

struct Node
{
    int Data;
    Node *Prev, *Next;
};

typedef struct LinkedList
{
    Node *head, *tail;

}LinkedList;

Node *head = NULL, *tail = NULL;

/*void Add(LinkedList *L, int data)
{
    L->head
}*/

void Add(int data)
{
    Node *newNode = malloc(sizeof(Node));
    newNode->Data = data;
    newNode->Prev = newNode->Next = NULL;

    if(head == NULL)
    {
        head = tail = newNode;
    }
    else
    {
        tail->Next = newNode;
        newNode->Prev = tail;
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

Node* GetNodeByData(int data)
{
    Node *current = head;

    while(current != NULL)
    {
        if(data == current->Data)
            return current;

        current = current->Next;
    }

    return NULL;
}

void Remove(int data)
{
    Node *node = GetNodeByData(data);

    if(node == NULL)
        return;

    if(node == head)
    {
        if(head == tail)
        {
            head = tail = NULL;
        }
        else
        {
            head = head->Next;
            head->Prev = NULL;
        }
    }
    else if(node == tail)
    {
        tail = tail->Prev;
        tail->Next = NULL;
    }
    else
    {
        /*Node *A = node->Prev;
        Node *B = node->Next;

        A->Next = B;
        B->Prev = A;*/

        node->Prev->Next = node->Next;
        node->Next->Prev = node->Prev;
    }

    free(node);
}

void InsertAfter(int data, int afterData){
    Node *node = GetNodeByData(afterData);
    Node *newNode = malloc(sizeof(Node));
    newNode->Data = data;

    if(node==tail){
        Add(data);
    } else{
        newNode->Next=node->Next;
        newNode->Prev=node;
        node->Next=newNode;
        node->Next->Prev=newNode;
    }
}

int GetCount(){
    int Nodecounter=0;
    Node* current = head;
    while(current!=NULL){
        Nodecounter++;
        current=current->Next;
    }
    return Nodecounter;
}

int GetDataByIndex(int index){
    int Nodecounter=0;
    Node* current = head;
        while (current != NULL) {
        if (Nodecounter == index){
            return (current->Data);
        }
        Nodecounter++;
        current = current->Next;
    }
}

#endif // LINKEDLIST_H
