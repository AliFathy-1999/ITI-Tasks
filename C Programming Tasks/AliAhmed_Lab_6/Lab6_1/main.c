#include <stdio.h>
#include <stdlib.h>
#define ARRAY_SIZE 5
void ReadNumbers(int *);
void PrintNumbers(int *);
int main()
{
    //1) Input and Output from Array using pointers:
    //C Program that have an Array of integers, read array data from user, Ptr -> Arr, print that array using Ptr.
 //(try to use "Array Notation while reading data" and "Pointer notation while printing data")

    int arr[50];
    //int *ptr= arr;
    ReadNumbers(&arr);
    PrintNumbers(&arr);

    return 0;
}
void ReadNumbers(int * arr){
    int i;
    int * const ptr = *arr;
    for(i=1;i<=ARRAY_SIZE;i++){
        printf("Enter number %d : \n",i);
        scanf("%d",(ptr+i));
    }
}
void PrintNumbers(int * arr){
    int i;
    const int *  ptr = *arr;
    for(i=1;i<=ARRAY_SIZE;i++){
        printf("Enter number %d :  its value is %d \n",i,*(ptr+i));
        //scanf("%d",*(ptr+i));
    }
}
