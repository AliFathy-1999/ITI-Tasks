#ifndef RECTANGLE_H
#define RECTANGLE_H

#include "Point.h"
class Rectangle
{
    Point upperline;
    Point lowerline;
    public:
        Rectangle();
        Rectangle(int x1, int y1,int x2, int y2);
        void draw();
};

#endif // RECTANGLE_H
