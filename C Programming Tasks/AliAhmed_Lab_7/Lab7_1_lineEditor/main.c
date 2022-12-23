#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
/*
    scan character by character and highlighted as a string
    if we press Back space delete
    handle right and left arrows
        (home button ) go to the first of the string
        (insert button) go to last of the string
        ( Enter ) print the string
*/

void gotoxy(int x,int y)
{
    COORD coord= {0,0};
    coord.X=x;
    coord.Y=y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),coord);
}

int main()
{
    char lineArr[50],c;
    int i=0,x,y,last=0;
    HANDLE hStdOut = GetStdHandle(STD_OUTPUT_HANDLE);
    gotoxy(0,0);
 while(c!=13){
    c=getch();
    if(c==-32){
        c=getch();
        if(c==71){//press Home
                 x=0;
                 gotoxy(x,y);

        }else if(c==79){//press end
                 x=i;
                 gotoxy(x,y);

        }else if(c==77){ //press arrow right
                 x++;
                 gotoxy(x,y);
        }else if(c==75){ //press arrow left
                 x--;
                 gotoxy(x,y);
        }
    }else if(c==8){//press backspace
                 system("cls");
            for(last=x-1;last<i-1;last++){
                 lineArr[last]=lineArr[last+1];
            }
                 lineArr[last]='\0';
                 x--;
                 i--;
            for(i=0;i<lineArr[i];i++){
                 printf("%c",lineArr[i]);
            }
                 gotoxy(x,y);
    }else if(c==13){ //press enter
            system("cls");
            printf("The words you enter : ");
                for(i=0;i<lineArr[i];i++){
                  printf("%c",lineArr[i]);
                }
    }else{
        SetConsoleTextAttribute(hStdOut, 240);
            printf("%c",c);
            lineArr[x]=c;
            x++;
            if(x>i){
                i++;
            }
                lineArr[x+1]='\0';
    }
 }

    return 0;

}
