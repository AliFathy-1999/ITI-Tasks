#include <stdio.h>
#include <stdlib.h>
int main()
{
    //5) C Program to Find the Frequency of Characters in a String
    char strArr[20],ch;
    int counter=0;
    printf("Enter Word : \n");
    scanf("%s",strArr);

    printf("Enter a character to find its frequency: \n");
    scanf(" %c", &ch);

        for (int i = 0; strArr[i] != '\0'; i++) {
            if (strArr[i] == ch) {
                counter++;
        }
    }
    printf("Frequency of Character =  %d \n",counter);
    return 0;
}
