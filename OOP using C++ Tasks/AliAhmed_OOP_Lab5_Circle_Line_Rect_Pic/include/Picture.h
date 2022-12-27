#ifndef PICTURE_H
#define PICTURE_H
#include "Point.h"
#include "Line.h"
#include "Rectangle.h"
#include "Circle.h"

class Picture
{
    Circle *ptrCircle;
    Rectangle *ptrRect;
    Line *ptrLine;
    int circleNum,RectNum,LineNum;
    public:
        Picture();
        Picture(int cNum, int rNum, int lNum, Circle *ptrC, Rectangle *ptrR,Line *ptrL);
        void setCircles(int n,Circle *ptrC);
        void setRects(int n,Rectangle *ptrR);
        void setLines(int n,Line *ptrL);
        void paint();
};

#endif // PICTURE_H
