#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main()
{
    //4) C Program to take firstName and lastName from user, then displays fullName.
    char fname[20],lname[20];
    printf("Enter First name : \n");
    scanf("%s",fname);
    printf("Enter Second name : \n");
    scanf("%s",lname);
    printf("Full name : %s",strcat(fname,lname));
    return 0;
}
