#include "Square.h"

Square::Square()
{
    d1=d2=0;
}
Square::Square(float newD):Rectangle(newD,newD){
}
void Square::setSquareD(float newD){
    d1=d2=newD;
}
float Square::getSquareD(){
    return d1;
}
float Square::calArea(){
    return Rectangle::calArea();
}
