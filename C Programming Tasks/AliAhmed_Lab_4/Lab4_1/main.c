#include <stdio.h>
#include <stdlib.h>
void swapFunc(int *,int *);
int main()
{
    //1) C Program to swap 2 integer values. (Swap function, calling by address)
    //printf("Enter First Number");
    //scanf("%d")
    int x=5,y=10;
    swapFunc(&x,&y);
    return 0;
}
void swapFunc(int * ptr1,int * ptr2){
    int temp = *ptr1;
    *ptr1=*ptr2;
    *ptr2=temp;

    printf("X = %d , Y = %d",*ptr1,*ptr2);
}
