#include <iostream>
#include "Derived.h"
using namespace std;

int main()
{
    /*
    Derived Dobj;
    Dobj.setA(5);
    Dobj.setB(2);
    Dobj.setC(10);
    Derived Dobj2(3,4,1);
    Derived Dobj3(5);
    cout<<"Dobj A*B = "<<Dobj.productAB()<<endl;
    cout<<"Dobj = "<<Dobj.productABC()<<endl;
    cout<<"Dobj2 = "<<Dobj2.productABC()<<endl;
    cout<<"Dobj3 = "<<Dobj3.productABC()<<endl;
    */
   /* Base b(3,4);
    b.setA(5);
    b.setB(10);
    b.setC(12); //error
    cout<<"b A*B = "<<b.productAB()<<endl;
    cout<<"b = "<<b.productABC()<<endl; //error
    */
    /*
    Base bo(5,4);
    Derived obj;
    bo.a; //error private
    bo.b; //error protected
    obj.b; //error protected
    */
    Derived obj(30,50,10);
    Base *Baseptr=&obj;
    cout<<obj.productAB()<<endl; //Dervied
    cout<< obj.Base::productAB()<<endl; //Base
    cout<<Baseptr->productAB()<<endl;//Base

    return 0;
}
