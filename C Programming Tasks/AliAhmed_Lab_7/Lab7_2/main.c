#include <stdio.h>
#include <stdlib.h>
#define ARRAY_SIZE 5
void ReadNumbers(int *,int);
void PrintNumbers(int *,int);
int main()
{
    // Lab 7 Dynamic Array
    //1) Input and Output from Array using pointers:
    //C Program that have an Array of integers, read array data from user, Ptr -> Arr, print that array using Ptr.
 //(try to use "Array Notation while reading data" and "Pointer notation while printing data")
    int size = 0;
    printf("Enter size :\n");
    scanf("%d",&size);
    int * ptr;
    ptr =  (int * )malloc(size*sizeof(int));
    ReadNumbers(ptr,size);
    PrintNumbers(ptr,size);
    return 0;
}
void ReadNumbers(int * arr,int size){
    int i;
    int * const ptr = *arr;
    for(i=1;i<=size;i++){
        printf("Enter number %d : \n",i);
        scanf("%d",(ptr+i));
    }

}
void PrintNumbers(int * arr,int size){
    int i;
    const int * ptr = *arr;
    for(i=1;i<=size;i++){
        printf("Enter number %d : its value is %d \n",i,*(ptr+i));
    }
}
