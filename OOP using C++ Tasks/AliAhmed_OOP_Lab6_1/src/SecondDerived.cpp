#include "SecondDerived.h"
#include"Derived.h"
SecondDerived::SecondDerived(): Derived()
{
    d=0;
}
SecondDerived::SecondDerived(int n) : Derived(n)
{
    d=n;
}
SecondDerived::SecondDerived(int n1,int n2,int n3,int n4) : Derived(n1,n2,n3)
{
    d=n4;
}
void SecondDerived::setD(int newD){
    d=newD;
}
int  SecondDerived::getD(){
    return d;
}
//overriding
int SecondDerived::product(){
    return Derived::productABC() * d ;
}
