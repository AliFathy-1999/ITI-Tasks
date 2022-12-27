#ifndef TRIANGLE_H
#define TRIANGLE_H
#include "GeoShape.h"

class Triangle : public GeoShape
{
    public:
        Triangle();
        Triangle(float,float);
        float calArea();
};

#endif // TRIANGLE_H
