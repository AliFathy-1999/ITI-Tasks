#include <stdio.h>
#include <stdlib.h>

int main()
{
    //2) Receive character by character and then place the string terminator upon pressing enter, then display the string.
    char strArr[20];
    printf("Enter your Keyword : ");
    gets(strArr);
    //scanf("%s",strArr);
        for (int i = 0; strArr[i] != '\0'; i++) {
                /*if(strArr[i]!=' '){
                    continue;
                }*/
            printf("%c",strArr[i]);
    }
    return 0;
}
