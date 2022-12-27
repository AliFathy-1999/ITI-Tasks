#include "Derived.h"

Derived::Derived():Base()
{
     c=0;
}
Derived::Derived(int n):Base(n)
{
    c=n;
}
Derived::Derived(int n1,int n2, int n3):Base(n1,n2)
{
    c=n3;
}
void Derived::setC(int newc){
    c=newc;
}
int Derived::getC(){
    return c;
}
int Derived::productABC(){
    return productAB() * c;
}
