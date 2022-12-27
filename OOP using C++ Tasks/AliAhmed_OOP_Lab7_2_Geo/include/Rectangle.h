#ifndef RECTANGLE_H
#define RECTANGLE_H
#include "GeoShape.h"

class Rectangle : public GeoShape
{
    public:
        Rectangle();
        Rectangle(float,float);
        float calArea();
};

#endif // RECTANGLE_H
