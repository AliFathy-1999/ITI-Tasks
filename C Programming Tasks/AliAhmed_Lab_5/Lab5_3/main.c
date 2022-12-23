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

void AddNewEmployee(EmpArr_of_Struct *emp);
void DisplayEmployee(EmpArr_of_Struct *emp);
int main()
{
    EmpArr_of_Struct *emp[EMP_SIZE] ;

    //3- Employee with Functions (try to divide Ass#2 into 2 functions): struct Employee AddNewEmployee(); void DisplayEmployee(struct Employee);
    AddNewEmployee(&emp);
    DisplayEmployee(&emp);
    return 0;
}

void AddNewEmployee(EmpArr_of_Struct *e){
    //EmpArr_of_Struct emp[EMP_SIZE];
    int i=0;
    for(i=0;i<EMP_SIZE;i++){
    printf("Enter Employee ID of [%d]: \n",i);
    scanf("%d",&e[i].id);
    printf("Enter Employee name of [%d]: \n",i);
    scanf("%s",e[i].name);
    printf("Enter Employee Salary of [%d]: \n",i);
    scanf("%f",&e[i].salary);
    printf("Enter Employee Bonus of [%d]: \n",i);
    scanf("%f",&e[i].bonus);
    printf("Enter Employee Deduction of [%d]: \n",i);
    scanf("%f",&e[i].deduction);
    e[i].net_salary = (e[i].salary + e[i].bonus - e[i].deduction);
    }

}
void DisplayEmployee(EmpArr_of_Struct *e){
    int i=0;
        for(i=0;i<EMP_SIZE;i++){
            printf("%d . Employee ID : %d, \n Employee Name : %s, \n Employee Salary = %f, \n Employee Bonus = %f, \t Employee deduction = %f, \n Employee Net Salary = %f . \n",i+1,
                   e[i].id,e[i].name,e[i].salary,e[i].bonus,e[i].deduction,e[i].net_salary);
    }
}
