#include <stdio.h>
#include <stdlib.h>
int main()
{
    //1- Receive numbers from the user, and exit when the sum exceeds 100.

    /*int num=0,i=0,sum=0;
    for(i=0;sum<=100;i++){
    printf("Enter Your Number : ");
    scanf("%d",&num);
    sum+=num;

    }
    printf("Sum = %d",sum);*/

    //2- Simple Menu with 3 choices.
    int choice=0,menu=1;
    while(1){
    if(menu){
    system("cls");
    printf("\t\t\t\t\t\t Simple Menu App  \n");
    printf("------------------------------------------------------------------ \n");
    printf("1. First option.  \n");
    printf("2. Second option.  \n");
    printf("3. Third option.  \n");
    printf("4. Exit.  \n");
    printf("------------------------------------------------------------------ \n");
    printf("Enter Your Choice: \n");
    scanf("%d",&choice);
    }else if(menu==0){
        system("cls");
        exit(0);
    }
    switch(choice){
    case 1:
        system("cls");
        printf("First Option \n");
        break;
    case 2:
        system("cls");
        printf("Second Option \n");
        break;
    case 3:
        system("cls");
        printf("Third Option \n");
        break;
    case 4:
        system("cls");
        printf("There are no 4 choices, Only 3 choices \n");
        exit(0);
    default:
        printf("Invalid Option, please try again! \n");

    }
    //system("cls");
        printf("Back to menu ?? enter 1 and If you want to exit enter 0  \n");
        scanf("%d",&menu);

  }

    return 0;
}
