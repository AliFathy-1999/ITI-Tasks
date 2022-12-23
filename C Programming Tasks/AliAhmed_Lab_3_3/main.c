#include <stdio.h>
#include <stdlib.h>
void checksAlphabet(char);
int main()
{
    //5- Write a C Function that takes one character and checks if it alphabet or not.

    char ch=' ';
        printf("Enter Character :\n");
        scanf(" %c",&ch);
        checksAlphabet(ch);
    return 0;
}

void checksAlphabet(char ch){
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
           printf("%c is an alphabet.", ch);
    }
    else{
        printf("%c is not an alphabet.", ch);
    }

}

