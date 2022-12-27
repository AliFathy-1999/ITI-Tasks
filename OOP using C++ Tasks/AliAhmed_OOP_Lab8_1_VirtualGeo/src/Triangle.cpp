#include "Triangle.h"

Triangle::Triangle():GeoShape()
{
    d1=d2=0;
}
Triangle::Triangle(float dim1,float dim2):GeoShape(dim1,dim2){

}
float Triangle::calArea(){
    return 0.5 * d1 * d2;
}
