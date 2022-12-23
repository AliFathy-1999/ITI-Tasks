#ifndef TREE_H_INCLUDED
#define TREE_H_INCLUDED
typedef struct Node Node;
struct Node{
    int Data;
    Node *left,*right;
};
typedef struct tree{
    Node *root;
}tree;
void AddTreeNode(tree *tree,int data){

    Node *newNode = malloc(sizeof(Node));
    newNode->Data=data;
    newNode->left=newNode->right=NULL;
    if(tree->root==NULL){
        tree->root=newNode;
    }else{
        Node *current = tree->root;
        Node *parent;
        while(current!=NULL){
            parent=current;
            if(data>current->Data){
                current=current->right;
            }else{
                current=current->left;
            }
        }
        if(data > parent->Data){
            parent->right=newNode;
        }else{
            parent->left=newNode;
        }
    }
}
void Add(tree *tree, int data)
{
    Node *newNode = malloc(sizeof(Node));
    newNode->Data = data;
    newNode->left = newNode->right = NULL;

    if(tree->root == NULL)
    {
        tree->root = newNode;
    }
    else
    {
        Node *current = tree->root;
        Node *parent;

        while(current != NULL)
        {
            parent = current;

            if(data > current->Data)
                current = current->right;
            else
                current = current->left;
        }

        if(data > parent->Data)
            parent->right = newNode;
        else
            parent->left = newNode;
    }
}
void DisplayTree(Node *node){
    if(node==NULL){
        return;
        }
    DisplayTree(node->left);
    printf("%d ",node->Data);
    DisplayTree(node->right);
}
int GetMaxDepth(Node *node)
{
    if (node==NULL){
        return 0;
    }
    else{
        int leftNode = GetMaxDepth(node->left);
        int rightNode = GetMaxDepth(node->right);
            if(leftNode > rightNode){
                return (leftNode+1);
            }
            else{
                return (rightNode+1);
            }
    }
}
#endif // TREE_H_INCLUDED
