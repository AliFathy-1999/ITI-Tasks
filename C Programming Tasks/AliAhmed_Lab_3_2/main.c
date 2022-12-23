#include <stdio.h>
#include <stdlib.h>
void LargestNumber(int,int,int);
int main()
{
    //4- Write a function takes 3 numbers as parameter, and returns the largest one among them... write a program to test it.

    int num1=0,num2=0,num3=0;
        printf("Enter the First number :\n");
        scanf("%d",&num1);
        printf("Enter the Second number :\n");
        scanf("%d",&num2);
        printf("Enter the Third number :\n");
        scanf("%d",&num3);
        LargestNumber(num1,num2,num3);
    return 0;
}
//4- Write a function takes 3 numbers as parameter, and returns the largest one among them... write a program to test it.
void LargestNumber(int num1,int num2,int num3){
        if(num1 > num2 && num1 > num3){
            printf("The First number is largest number %d \n",num1);
        }else if(num2 > num1 && num2 > num3){
            printf("The Second number is largest number %d \n",num2);
        }else if(num3 > num1 && num3 > num2){
            printf("The Third number is largest number %d \n",num3);
        }else {
            printf("Error \n");
        }
}
//5- Write a C Function that takes one character and checks if it alphabet or not.
