#ifndef SECONDDERIVED_H
#define SECONDDERIVED_H
#include "Derived.h"

class SecondDerived : public Derived
{
    private:
        int d;
    public:
        SecondDerived();
        SecondDerived(int);
        SecondDerived(int, int,int, int);
        void setD(int);
        int getD();
        int product();


};

#endif // SECONDDERIVED_H
