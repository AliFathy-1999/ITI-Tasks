#ifndef GEOSHAPE_H
#define GEOSHAPE_H


class GeoShape
{
    protected:
        float d1;
        float d2;
    public:
        GeoShape();
        GeoShape(float);
        GeoShape(float,float);
        void setD_1(float);
        void setD_2(float);
        float getD_1();
        float getD_2();
        virtual float calArea() = 0; //pure virtual Function (Abstraction)
};

#endif // GEOSHAPE_H
