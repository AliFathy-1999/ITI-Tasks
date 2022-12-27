#include "Rectangle.h"

Rectangle::Rectangle()
{
    d1=d2=0;
}
Rectangle::Rectangle(float a,float b):GeoShape(a,b){

}
float Rectangle::calArea(){
    return d1*d2;
}
