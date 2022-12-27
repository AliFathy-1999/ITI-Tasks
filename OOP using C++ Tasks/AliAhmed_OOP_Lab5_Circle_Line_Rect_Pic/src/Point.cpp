#include "Point.h"
#include <iostream>
using namespace std;
Point::Point()
{
    x=0;
    y=0;
}
Point::Point(int newx,int newy)
{
    x=newx;
    y=newy;
}

void Point::setX(int newx){
    x=newx;
}
void Point::setY(int newy){
    y=newy;
}
int Point::getX(){
    return x;
}
int Point::getY(){
    return y;
}

