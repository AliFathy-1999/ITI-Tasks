#include <stdio.h>
#include <stdlib.h>
#define MAXSIZE 5
int* IncrementArray(int *,int);
int main()
{
    /*
    1. int* IncrementArray()
	- try to return fixed Array first, see what happened.
	- then rerun dynamically allocated array.
    */
    int size=0,i;
    printf("Enter The size of Array : ");
    scanf("%d",&size);
    int *ptr = (int *)malloc(size*sizeof(int));
    printf("Enter numbers in array : \n");
    for (i = 0; i < size; i++) {
        scanf("%d",&ptr[i]);
    }
    IncrementArray(ptr,size);
    for (i = 0; i <= size; i++) {
         printf("%d \n",ptr[i]);
    }
    return 0;
}
int * IncrementArray(int * array,int size){
     int value=0;
     printf("Enter increment data to an array : ");
     scanf("%d",&value);
     array[size]=value;
    return 0;
}
