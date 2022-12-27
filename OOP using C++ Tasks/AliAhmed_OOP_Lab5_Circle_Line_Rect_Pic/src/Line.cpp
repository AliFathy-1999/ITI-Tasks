#include "Line.h"
#include <iostream>
using namespace std;
Line::Line():Start(),End(){
		cout<<"At Line Constructor"<<endl;
}

Line::Line(int x1,int y1,int x2,int y2):Start(x1,y1),End(x2,y2){
		cout<<"At Line Constructor"<<endl;
	}
void Line::draw(){
		//line(Start.getX(),Start.getY(),End.getX(),End.getY());
}
