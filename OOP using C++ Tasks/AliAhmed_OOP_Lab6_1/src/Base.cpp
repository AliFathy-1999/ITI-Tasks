#include "Base.h"
Base::Base()
{
    a=b=0;
}
Base::Base(int num)
{
    a=b=num;
}
Base::Base(int num1,int num2)
{
    a=num1;
    b=num2;
}
void Base::setA(int newA){
    a=newA;
}
void Base::setB(int newB){
    b=newB;
}
int Base::getA(){
    return a;
}
int Base::getB(){
    return b;
}
int Base::productAB(){
    return a*b;
}

