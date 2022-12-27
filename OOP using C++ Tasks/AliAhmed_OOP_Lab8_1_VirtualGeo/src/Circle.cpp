#include "Circle.h"

Circle::Circle()
{
    d1=d2=0;
}

Circle::Circle(float r){
    d1=d2=r;
}
void Circle::setRedius(float newR){
    d1=newR;
}
float Circle::getRedius(){
    return d1;
}
float Circle::calArea(){
    return (22/7) * d1 * d1;
}
