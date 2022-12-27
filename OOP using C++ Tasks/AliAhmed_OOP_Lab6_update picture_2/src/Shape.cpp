#include "Shape.h"

Shape::Shape()
{
    color=0;
}
Shape::Shape(int newColor)
{
    color=newColor;
}
int Shape::getColor(){
    return color;
}
void Shape::setColor(int newColor){
    color=newColor;
}

