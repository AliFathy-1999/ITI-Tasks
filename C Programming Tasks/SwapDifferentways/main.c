#include <stdio.h>
#include <stdlib.h>

int main()
{
    int x=3,y=4;
    int a=3,b=4;
    //By Plus and minus
    x=x+y;//7
    y=x-y;//7-4=3
    x=x-y;//7-3=4

    a=a*b;//3*4=12
    b=a/b;//12/4=3
    a=a/b;//12/3=4
    printf("X = %d \n",x);
    printf("Y = %d \n",y);

    printf("A = %d \n",a);
    printf("B = %d \n",b);
    return 0;
}
