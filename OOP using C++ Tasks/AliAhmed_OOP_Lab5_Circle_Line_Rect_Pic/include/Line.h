#ifndef LINE_H
#define LINE_H
#include "Point.h"

class Line
{
    Point Start;
    Point End;
    public:
        Line();
        Line(int x1,int y1,int x2,int y2);
        void draw();
};

#endif // LINE_H
