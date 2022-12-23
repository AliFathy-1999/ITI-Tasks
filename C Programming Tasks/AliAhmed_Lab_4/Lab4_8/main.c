#include <stdio.h>
#include <stdlib.h>
void removeChExAlpabitic(char str[]);
int main()
{
    //8) C Program to Remove all Characters in a String Except Alphabet
    char str[20];
    printf("Enter String : ");
    gets(str);
    removeChExAlpabitic(str);
    return 0;
}
void removeChExAlpabitic(char str[]){
    int i;
    for(i=0;str[i]!='\0';i++){
        if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')){
            printf("%c",str[i]);
        }
    }

}
