#include <stdio.h>
#include <stdlib.h>
#define EMP_SIZE 5
typedef struct{
    int id;
    char name[20];
    float salary;
    float bonus;
    float deduction;
    float net_salary;
}EmpArr_of_Struct;
int main()
{
    //2- C Program to take information of Array of 5 Employees, then display their data. (EmpArr_of_Struct)
    EmpArr_of_Struct emp[EMP_SIZE];
    int i=0;
    //float net_salary = 0;
    for(i=0;i<EMP_SIZE;i++){
    printf("Enter Employee ID of [%d]: \n",i);
    scanf("%d",&emp[i].id);
    printf("Enter Employee name of [%d]: \n",i);
    scanf("%s",emp[i].name);
    printf("Enter Employee Salary of [%d]: \n",i);
    scanf("%f",&emp[i].salary);
    printf("Enter Employee Bonus of [%d]: \n",i);
    scanf("%f",&emp[i].bonus);
    printf("Enter Employee Deduction of [%d]: \n",i);
    scanf("%f",&emp[i].deduction);
    emp[i].net_salary = (emp[i].salary + emp[i].bonus - emp[i].deduction);
    }
    for(i=0;i<EMP_SIZE;i++){
            printf("%d . Employee ID : %d, \t Employee Name : %s, \t Employee Salary = %f, \t Employee Bonus = %f, \t Employee deduction = %f, \t Employee Net Salary = %f . \n",i,emp[i].id,emp[i].name,emp[i].salary,emp[i].bonus,emp[i].deduction,emp[i].net_salary);
    }
    return 0;
}
