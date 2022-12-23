#include <stdio.h>
#include <stdlib.h>
#define CUST_SIZE 2
typedef struct{
    int accno;
    char name[20];
    float balance;
}Customer;
void AddNewCustomer(Customer *customer);
void DisplayCustomer(Customer *customer);
//void DisplayCustomerBL200(Customer *customer);
void AddingBalance(Customer *Customer);
int main()
{

    Customer *customer[CUST_SIZE] ;
    AddNewEmployee(&customer);
    //DisplayCustomer(&customer);
    DisplayCustomerBL200(&customer);
    AddingBalance(&customer);
    return 0;
}

void AddNewEmployee(Customer *c){
    //EmpArr_of_Struct emp[EMP_SIZE];
    int i=0;
    for(i=0;i<CUST_SIZE;i++){
    printf("Enter Customer account no. of [%d]: \n",i);
    scanf("%d",&c[i].accno);
    printf("Enter Customer name of [%d]: \n",i);
    scanf("%s",c[i].name);
    printf("Enter Customer Balance of [%d]: \n",i);
    scanf("%f",&c[i].balance);
    }

}
void DisplayCustomer(Customer *c){
    int i=0;
        for(i=0;i<CUST_SIZE;i++){
            printf("%d . Customer accno. : %d, \n Customer Name : %s, \n Customer Balance = %f, \n",i+1,
                   c[i].accno,c[i].name,c[i].balance);
    }
}
//1 -Write a function to print the names of all the customers having balance less than $200.
void DisplayCustomerBL200(Customer *c){
    int i=0;
        for(i=0;i<CUST_SIZE;i++){
                if(c[i].balance < 200)
            printf("%d . Customer accno. : %d, \n Customer Name : %s, \n Customer Balance = %f, \n",i+1,
                   c[i].accno,c[i].name,c[i].balance);
    }
}
//2-Write a function to add $100 in the balance of all the customers having more than $1000 in their balance and then print the incremented value of their balance.
void AddingBalance(Customer *c){
    int i=0;
        for(i=0;i<CUST_SIZE;i++){
                if(c[i].balance > 1000){
                    c[i].balance +=100;
                printf("%d . Customer accno. : %d, \n Customer Name : %s, \n Customer Balance = %f, \n",i+1,
                   c[i].accno,c[i].name,c[i].balance);
                }

    }
}

