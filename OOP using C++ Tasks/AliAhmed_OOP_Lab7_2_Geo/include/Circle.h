#ifndef CIRCLE_H
#define CIRCLE_H
#include "GeoShape.h"

class Circle : private GeoShape
{
    public:
        Circle();
        Circle(float);
        void setRedius(float);
        float getRedius();
        float calArea();
};

#endif // CIRCLE_H
