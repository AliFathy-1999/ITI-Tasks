#ifndef SQUARE_H
#define SQUARE_H
#include"Rectangle.h"

class Square : private Rectangle
{
    public:
        Square();
        Square(float);
        void setSquareD(float);
        float getSquareD();
        float calArea();
};

#endif // SQUARE_H
