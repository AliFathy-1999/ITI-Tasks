#include <stdio.h>
#include <stdlib.h>
void checksCase(char);
int main()
{
    //6- Write C Function that converts the any letter from lowercase to uppercase.

    char ch=' ';
        printf("Enter Character :\n");
        scanf(" %c",&ch);
        checksCase(ch);
    return 0;
}

void checksCase(char ch){
    if ((ch >= 'a' && ch <= 'z')){
        printf("%c is Lowercase.", ch);
    }else if((ch >= 'A' && ch <= 'Z')){
        printf("%c is Uppercase.", ch);
    }
    else{
        printf("%c is not an alphabet.", ch);
    }

}

