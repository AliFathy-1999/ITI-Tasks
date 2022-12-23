#include <stdio.h>
#include <stdlib.h>
int Strlength(char strArr[]);
int main()
{
    //7) C Program to Find the Length of a String without Using strlen()
    char strArr[20];
    printf("Enter String 1: \n");
    scanf("%s",strArr);
    printf("Length of String = %d \n",Strlength(strArr));
    return 0;
}
int Strlength(char strArr[]){
    int counter=0,i=0;
    for(i=0;i<strArr[i]!='\0';i++){
         counter++;
    }
   return counter;
}
