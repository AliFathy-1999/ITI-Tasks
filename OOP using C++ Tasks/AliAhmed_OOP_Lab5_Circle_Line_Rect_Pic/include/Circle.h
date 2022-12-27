#ifndef CIRCLE_H
#define CIRCLE_H
#include "Point.h"

class Circle
{
    Point center;
    int radius;
    public:
        Circle();
        Circle(int m,int n,int r);
        void draw();
};

#endif // CIRCLE_H
