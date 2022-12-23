#include <stdio.h>
#include <stdlib.h>

int main()
{
    //1- Write a C program to check whether a given number is positive or negative or zero

    /*int num=0;
    printf("Enter the number :\n");
    scanf("%d",&num);
    if(num>0){
            printf("This number %d is positive",num);
    }else if(num<0){
            printf("This number %d is negative",num);
    }else{
    printf("This number %d is 0",num);
    }*/

    //2- Write a C program to check whether a given number is even or odd
    /*int num=0;
    printf("Enter the number :\n");
    scanf("%d",&num);

    if(num%2 == 0 ){
            printf("This number %d is even",num);
    }else if(num%2 != 0){
            printf("This number %d is odd",num);
    }else{
            printf("Error");
    }*/
    //3- C Program to Find the Largest Number Among Three Numbers
    /*int num1=0,num2=0,num3=0;
        printf("Enter the First number :\n");
        scanf("%d",&num1);
        printf("Enter the Second number :\n");
        scanf("%d",&num2);
        printf("Enter the Third number :\n");
        scanf("%d",&num3);
        if(num1 > num2 && num1 > num3){
            printf("The First number is largest number %d \n",num1);
        }else if(num2 > num1 && num2 > num3){
            printf("The Second number is largest number %d \n",num2);
        }else if(num3 > num1 && num3 > num2){
            printf("The Third number is largest number %d \n",num3);
        }else {
            printf("Error \n");
        }*/

        //4- Write a program that reads a student grade percentage and prints "Excellent" if his grade is greater than or equal 85, "Very Good" for 75 or greater; "Good" for 65, "Pass" for 50, "Fail" for less than 50

        /*int num=0;
        printf("Enter your grade number :\n");
        scanf("%d",&num);
        if(num >= 85 && num <=100){
            printf("Excellent \n");
        }else if(num >= 75 && num <85){
            printf("Very Good \n");
        }else if(num >= 65 && num <75){
            printf("Good \n");
        }else if(num == 50 && num <65){
            printf("Pass \n");
        }else if(num <50 && num>=0){
            printf("Fail \n");
        }else {
            printf("Error, your entered a negative number");
        }*/

        //5-Write a program to make a simple calculator using switch-case. The calculator takes the operation (+ or – or * or /) and takes the two input arguments and print the results
        float num1=0,num2=0,result=0;

        char op;

        printf("Enter your First number :\n");
        scanf("%f",&num1);
        printf("Enter your Second number :\n");
        scanf("%f",&num2);
        printf("Enter operator :\n");
        scanf(" %c",&op);
        switch(op){
        case '+':
            result=num1+num2;
            printf("result = %f \n",result);
            break;
        case '-':
            result=num1-num2;
            printf("result = %f \n",result);
             break;
        case '*':
            result=num1*num2;
            printf("result = %f \n",result);
             break;
        case '/':
            result=num1/num2;
            printf("result = %f \n",result);
            break;
        default:
            printf("Error");

        }
    return 0;
}
