#include <stdio.h>
#include <stdlib.h>
#include <dos.h>
#include <dir.h>
#include <windows.h>
#define EMP_SIZE 2
int pos = 1;
int size=0;
typedef struct{
    int id;
    char name[20];
    float salary;
    float bonus;
    float deduction;
    float net_salary;
}EmpArr_of_Struct;
void gotoxy(int x,int y)
{
    COORD coord= {0,0};
    coord.X=x;
    coord.Y=y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),coord);
}

void SetColor(int ForgC)
{
    WORD wColor;

    HANDLE hStdOut = GetStdHandle(STD_OUTPUT_HANDLE);
    CONSOLE_SCREEN_BUFFER_INFO csbi;

    //We use csbi for the wAttributes word.
    if(GetConsoleScreenBufferInfo(hStdOut, &csbi))
    {
        //Mask out all but the background attribute, and add in the forgournd     color
        wColor = (csbi.wAttributes & 0xF0) + (ForgC & 0x0F);
        SetConsoleTextAttribute(hStdOut, wColor);
    }
    return;
}
void draw_line_num(int pos){
    gotoxy(50,0);
    SetColor(7);
    printf("Line Number : %d", pos);
}
void draw_New(int pos){
    gotoxy(50,5);
    SetColor(pos == 1 ? 10 : 7);
    printf("1. New");
}
void draw_Display(int pos){
    gotoxy(50,10);
    SetColor(pos == 2 ? 12 : 7);
    printf("2. Display");
}
void draw_exit(int pos){
    gotoxy(50,15);
    SetColor(pos == 3 ? 14 : 7);
    printf("3. EXIT");
}
void AddNewEmployee(EmpArr_of_Struct *e,int size){
    system("cls");
    gotoxy(50,10);
    printf("Add->New<-Employee : \n");
    int i=0;
    for(i=0;i<size;i++){
    printf("Enter Employee ID of [%d]: \n",i+1);
    scanf("%d",&e[i].id);
    printf("Enter Employee name of [%d]: \n",i+1);
    scanf("%s",e[i].name);
    printf("Enter Employee Salary of [%d]: \n",i+1);
    scanf("%f",&e[i].salary);
    printf("Enter Employee Bonus of [%d]: \n",i+1);
    scanf("%f",&e[i].bonus);
    printf("Enter Employee Deduction of [%d]: \n",i+1);
    scanf("%f",&e[i].deduction);
    e[i].net_salary = (e[i].salary + e[i].bonus - e[i].deduction);
    }
    //pos=2;
}
/*void DisplayFunc(EmpArr_of_Struct *e){
    system("cls");
    gotoxy(50,10);
    printf("Display Employee Data : \n");
        int i=0;
        for(i=0;i<EMP_SIZE;i++){
            printf("%d . Employee ID : %d, \t Employee Name : %s, \t Employee Salary = %f, \t Employee Bonus = %f, \t Employee deduction = %f, \t Employee Net Salary = %f . \n",i+1,
                   e[i].id,e[i].name,e[i].salary,e[i].bonus,e[i].deduction,e[i].net_salary);
        }
}*/

void DisplayFunc(EmpArr_of_Struct *e,int size){
    system("cls");
    gotoxy(50,10);
    printf("Display Employee Data : \n");
        int i=0;
        for(i=0;i<size;i++){
            printf("%d . Employee ID : %d, \t Employee Name : %s, \t Employee Salary = %f, \t Employee Bonus = %f, \t Employee deduction = %f, \t Employee Net Salary = %f . \n",i+1,
                   e[i].id,e[i].name,e[i].salary,e[i].bonus,e[i].deduction,e[i].net_salary);
        }
}
void ExitFunc(){
    exit(0);

}
int main()
{
    int i=0,size=0;
    int *ptr;


    //DisplayFunc(ptr,size);

    int input;
    //EmpArr_of_Struct *emp[EMP_SIZE] ;
    draw_line_num(pos);
    draw_New(pos);
    draw_Display(pos);
    draw_exit(pos);
    while(1){
        input = getche();
        //If press on arrow up key
        if(input==72 && pos>1){
            pos--;
        }
        //If press on arrow down key
        else if(input==80 && pos<3){
                pos++;
        }
        system("cls");
        draw_line_num(pos);
        draw_New(pos);
        draw_Display(pos);
        draw_exit(pos);
        //If press enter key
        if(input==13){
            system("cls");
            switch(pos){
            case 1:
                draw_New(pos);
                printf("Enter Size no. of Employees: \n");
                scanf("%d",&size);
                ptr =  (EmpArr_of_Struct * )malloc(size * sizeof(EmpArr_of_Struct));
                AddNewEmployee(ptr,size);
                //AddNewEmployee(&emp);
                break;
            case 2:
                draw_Display(pos);
                //DisplayFunc(&emp);
                DisplayFunc(ptr,size);
                break;
            case 3:
                ExitFunc();
                break;
            }
        }
    }
    return 0;
}
