#include <stdio.h>
#include <stdlib.h>

int main()
{
    do{
    printf("Enter character here : \n");
    char c = getch();

    if(c==-32){
        printf("Extended Key %d \n",c);
        c=getch();
    }else{
        printf("Normal Key %d \n",c);
    c=getch();
    }
    printf(" You Want Continue : press c \n");
    }while(getch() == 'c');

    return 0;
}
