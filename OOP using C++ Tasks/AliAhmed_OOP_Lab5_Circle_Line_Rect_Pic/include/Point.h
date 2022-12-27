#ifndef POINT_H
#define POINT_H


class Point
{
    int x;
    int y;

    public:
        Point();
        Point(int newx, int newy);
        void setX(int n);
        void setY(int n);
        int getX();
        int getY();
};

#endif // POINT_H
