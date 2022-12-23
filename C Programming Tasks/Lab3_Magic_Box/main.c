#include <stdio.h>
#include <stdlib.h>
#include<windows.h>
#include <time.h>

void gotoxy(int x,int y)
{
    COORD coord= {0,0};
    coord.X=x;
    coord.Y=y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),coord);
}
void delay(int number_of_seconds)
{
    // Converting time into milli_seconds
    int milli_seconds = 1000 * number_of_seconds;

    // Storing start time
    clock_t start_time = clock();

    // looping till required time is not achieved
    while (clock() < start_time + milli_seconds);
}


int main(){

    int row, col,i = 0;
    int size = 0;
    printf("Enter size of Magic Box,Note:Enter Odd number: ");
    scanf("%d", &size);
    int max=size*size;
    row = 1;
    col = (size+1)/2;
    for(i=1;i <= max ; i++){
        gotoxy(col * 5, row);
        printf("%d", i);
            if(i % size== 0){
                row++;
            }
            else{
                row--;
                col--;
            }
            if (row == 0){
                row = size;
            }
            if (col == 0){
                col = size;
            }
    }

    return 0;
}
