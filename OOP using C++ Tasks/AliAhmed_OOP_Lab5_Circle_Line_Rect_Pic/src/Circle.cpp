#include "Circle.h"
#include <iostream>
using namespace std;
Circle::Circle():center(){
    radius=0;
    cout<<" At circle Constructor"<<endl;
}
Circle::Circle(int m,int n,int r):center(m,n){
    radius=r;
    cout<<" At circle Constructor"<<endl;
}
void Circle::draw(){
    //circle(center.getX(),center.getY(),radius);
}
