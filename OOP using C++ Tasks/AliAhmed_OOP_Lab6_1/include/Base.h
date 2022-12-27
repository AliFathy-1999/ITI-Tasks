#ifndef BASE_H
#define BASE_H


class Base
{
    private:
        int a;
    protected:
        int b;
    public:
        Base();
        Base(int);
        Base(int, int);
        void setA(int);
        void setB(int);
        int getA();
        int getB();
        int productAB();
};

#endif // BASE_H
