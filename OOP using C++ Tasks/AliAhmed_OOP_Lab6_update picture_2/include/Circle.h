#ifndef CIRCLE_H
#define CIRCLE_H
#include "Point.h"
#include "Shape.h"
class Circle : public Shape
{
    Point center;
    int radius;
    public:
        Circle();
        Circle(int m,int n,int r,int color);
        void draw();
};

#endif // CIRCLE_H
