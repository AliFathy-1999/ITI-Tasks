#include "Circle.h"
#include <iostream>
using namespace std;
Circle::Circle():Shape(),center(){
    radius=0;
    cout<<" At circle Constructor"<<endl;
}
Circle::Circle(int m,int n,int r,int color):Shape(color),center(m,n){
    radius=r;
    cout<<" At circle Constructor and color : "<<color<<endl;
}
void Circle::draw(){
    //circle(center.getX(),center.getY(),radius);
}
