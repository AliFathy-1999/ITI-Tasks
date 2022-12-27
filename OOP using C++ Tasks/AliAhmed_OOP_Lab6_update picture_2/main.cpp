#include <iostream>
#include "Line.h"
#include "Circle.h"
#include "Rectangle.h"
#include "Picture.h"

using namespace std;

int main()
{
    Picture pict;
    //To draw
    Line LineArr[2]={Line(30,20,10,15,1),Line(100,80,60,50,0)};
    Circle cirArr[2]={Circle(30,20,10,5),Circle(100,80,60,7)};
    Rectangle RectArr[2]={Rectangle(30,20,10,40,12),Rectangle(100,80,60,40,13)};
    pict.setLines(2,LineArr);
    pict.setCircles(2,cirArr);
    pict.setRects(2,RectArr);
    pict.paint();
    //static allocation
    Point P1(200,50);
    Point P2(300,100);
    Circle cirArr2[3]={Circle(50,50,50,2),Circle(200,100,100,3),Circle(420,50,30,4)};
    //dynamic allocation
    Line *LineArr2;
    LineArr2=new Line[2];
    LineArr2[0] = Line(420,50,300,300,1);
    LineArr2[1] = Line(100,20,400,200,0);
    pict.setLines(2,LineArr2);
    pict.paint();
    delete[] LineArr;
    return 0;
}
