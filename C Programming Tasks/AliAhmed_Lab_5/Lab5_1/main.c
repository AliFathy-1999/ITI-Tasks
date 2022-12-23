#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int id;
    char name[20];
    float salary;
    float bonus;
    float deduction;
}Emp_Struct;
int main()
{
    //1- C Program to take single Employee's information(ID, Name, Salary, Bonus, Deduction) , and display his code, name along with his net salary. (Emp_Struct)
    Emp_Struct emp;

    printf("Enter Employee ID : \n");
    scanf("%d",&emp.id);
    printf("Enter Employee name : \n");
    scanf("%s",emp.name);
    printf("Enter Employee Salary : \n");
    scanf("%f",&emp.salary);
    printf("Enter Employee Bonus : \n");
    scanf("%f",&emp.bonus);
    printf("Enter Employee Deduction : \n");
    scanf("%f",&emp.deduction);
    float net_salary = (emp.salary + emp.bonus - emp.deduction);
    printf("Employee ID : %d \t Employee Name : %s \t Employee Net Salary %f ",emp.id,emp.name,net_salary);

    return 0;
}
