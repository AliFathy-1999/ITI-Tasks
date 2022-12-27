#include <iostream>
#include"Rectangle.h"
#include"Circle.h"
#include"Square.h"
#include"GeoShape.h"
#include"Triangle.h"
using namespace std;

int main()
{
    float x,y;
    cout<<"Enter x"<<endl;
    cin>>x;
    cout<<"Enter y"<<endl;
    cin>>y;
    //Rectangle r1(x,y);
    //cout<<"Area of Rectangle : "<<r1.calArea()<<endl;
    //Circle c1(x);
    Circle c1;
    //c1.d1=5; //error to solve this error use setRedius
    //c1.setD_1(5); //Error it is not accessible
    //c1.getD_1();
    c1.setRedius(x); //it works
    cout<<"r = "<<c1.getRedius()<<endl;
    cout<<"Area of Circle : "<<c1.calArea()<<endl;
    Square s1;
    //s1.d1=5; //error because it is type of inher is private and variables are protected
    //cout << "square d1 = " <<s1.getD_1()<< endl; //error because it is type of inher is private and variables are protected
    s1.setSquareD(x);
    cout << "square d1 = " <<s1.getSquareD()<< endl;
    return 0;
}
