#include <stdio.h>
#include <stdlib.h>
void CubeNumber(int);
int main()
{
    //7-Write a C Function that prints the cube of any number.

    int n=0;
        printf("Enter Number :\n");
        scanf("%d",&n);
        CubeNumber(n);
    return 0;
}

void CubeNumber(int x){
    x=x*x*x;
    if(x==0){
               printf("You don't enter valid data or you enter zero ,try again! ");

    }else{
         printf("Cube number of your entered value is %d",x);
    }

}

