#ifndef QUEUE_H_INCLUDED
#define QUEUE_H_INCLUDED

typedef struct QNode QNode;
struct QNode
{
    int Data;
    QNode  *Next;
};
typedef struct Queue
{
    QNode *front,*rear;
}Queue;

void EnQueue(Queue *q, int data){
    QNode *newQueueNode = malloc(sizeof(QNode));
    newQueueNode->Data=data;
    newQueueNode->Next=NULL;
    if(q->front == NULL && q->rear == NULL)
        q->front = q->rear = newQueueNode;
    q->rear->Next= newQueueNode;
    q->rear = newQueueNode;

}
int DeQueue(Queue *q, int *data){
    Node *current = q->front;
    if(q->front == NULL && q->rear == NULL)
        return 0;
    *data = current->Data;
     q->front=current->Next;
    return 1;
}
void DisplayQueue(Queue *q)
{
    QNode *current = q->front;
    while(current != NULL)
    {
        printf("%d   ", current->Data);
        current = current->Next;
    }
}
#endif // QUEUE_H_INCLUDED
