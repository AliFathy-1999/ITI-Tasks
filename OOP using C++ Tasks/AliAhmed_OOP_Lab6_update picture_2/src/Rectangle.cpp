#include "Rectangle.h"
#include <iostream>
using namespace std;
Rectangle::Rectangle():Shape(),upperline(),lowerline()
{
    cout<<"At Rectangle Constructor"<<endl;
}

Rectangle::Rectangle(int x1, int y1,int x2, int y2,int color):Shape(color),upperline(x1,y1),lowerline(x2,y2){
            cout<<"At Rectangle Constructor"<<endl;
}
void Rectangle::draw(){
            //rectangle(upperline.getX(),upperline.getY(),lowerline.getX(),lowerline.getY());
}
