#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
/*
4. Continue Line Editor and make it with dynamic allocation,
   Update your single line editor to add "delete" & "backspace"
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
    int size=0;
    printf("Enter size :\n");
    scanf("%d",&size);
    int * lineArr;
    lineArr =  (int * )malloc(size*sizeof(int));
    char c;
    int i=0,x,y,last=0;
    HANDLE hStdOut = GetStdHandle(STD_OUTPUT_HANDLE);
    gotoxy(0,0);
    system("cls");
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
        }else if(c=127){//press Delete
            //x=0;
            system("cls");

            for(i=x;i<lineArr[i];i++){
                 lineArr[i]=lineArr[i+1];
            }
                 lineArr[i]='\0';
                 i++;
            for(i=0;i<lineArr[i];i++){
                 printf("%c",lineArr[i]);
            }
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
