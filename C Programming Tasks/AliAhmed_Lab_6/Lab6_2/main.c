#include <stdio.h>
#include <stdlib.h>
int PowerRec(int,int);
int main()
{
    //2) Recursive: Power.
    int base=0,power;
    printf("Enter base :\n");
    scanf("%d",&base);
    printf("Enter power :\n");
    scanf("%d",&power);
    printf("%d^%d = %d",base,power,PowerRec(base,power));
    return 0;
}

int PowerRec(int base,int power){
    if(power!=0){
        return  (base*PowerRec(base,power-1));
    }else {
        return 1;
    }
}
