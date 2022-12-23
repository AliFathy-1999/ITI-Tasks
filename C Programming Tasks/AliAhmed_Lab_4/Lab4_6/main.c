#include <stdio.h>
#include <stdlib.h>
int main()
{
    //6) C Program to Copy String Without Using strcpy()
    char strArr1[20],strArr2[20];
    int i;
    printf("Enter String 1: \n");
    gets(strArr1);
    for(i=0;strArr1[i]!='\0';i++){
        strArr2[i]=strArr1[i];
    }
    printf("Second String : %s",strArr2);
    return 0;
}
