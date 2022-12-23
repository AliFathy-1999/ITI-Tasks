#include <stdio.h>
#include <stdlib.h>
#include <dos.h>
#include <dir.h>
#include <windows.h>
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
void newFunc(){
    system("cls");
    printf("This is First Option ->New<-");
}
void DisplayFunc(){
    system("cls");
    printf("This is Second Option ->Display<-");
}
void ExitFunc(){
    exit(0);

}
int main()
{
    int pos = 1;
    int input;
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
                newFunc();
                break;
            case 2:
                draw_Display(pos);
                DisplayFunc();
                break;
            case 3:
                ExitFunc();
                break;
            }
        }
    }
    return 0;
}
