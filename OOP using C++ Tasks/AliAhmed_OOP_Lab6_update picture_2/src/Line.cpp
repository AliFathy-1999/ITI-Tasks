#include "Line.h"
#include <iostream>
using namespace std;
#include "Shape.h"
Line::Line():Shape(),Start(),End(){
		cout<<"At Line Constructor"<<endl;
}

Line::Line(int x1,int y1,int x2,int y2, int color):Shape(color),Start(x1,y1),End(x2,y2){

		cout<<"At Line Constructor and its color is : "<<color<<endl;
}
void Line::draw(){
    //line(Start.getX(),Start.getY(),End.getX(),End.getY());
}
