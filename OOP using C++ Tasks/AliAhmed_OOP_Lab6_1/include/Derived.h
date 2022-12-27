#ifndef DERIVED_H
#define DERIVED_H
#include "Base.h"
class Derived : public Base
{
    private:
        int c;
    public:
        Derived();
        Derived(int);
        Derived(int, int, int);
        void setC(int);
        int getC();
        int productABC();

};

#endif // DERIVED_H
