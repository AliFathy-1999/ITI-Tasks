#include "GeoShape.h"

GeoShape::GeoShape()
{
    //ctor
}
GeoShape::GeoShape(float newD){
    d1=d2=newD;
}
GeoShape::GeoShape(float newD1,float newD2){
    d1=newD1;
    d2=newD2;
}
void GeoShape::setD_1(float newD1){
    d1=newD1;
}
void GeoShape::setD_2(float newD2){
    d2=newD2;
}
float GeoShape::getD_1(){
    return d1;
}
float GeoShape::getD_2(){
    return d2;
}
float GeoShape::calArea(){
    return 0;
}
