#ifndef RECTANGLE_H
#define RECTANGLE_H

#include "Point.h"
#include "Shape.h"
class Rectangle : public Shape
{
    Point upperline;
    Point lowerline;
    public:
        Rectangle();
        Rectangle(int x1, int y1,int x2, int y2,int color);
        void draw();
};

#endif // RECTANGLE_H
