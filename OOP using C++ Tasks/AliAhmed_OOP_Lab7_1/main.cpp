#include <iostream>

using namespace std;
class Base{
    public:
        int x;
    protected:
        int y;
    private:
        int z;
};
class Dervied3 : private Base
{
    void testTypeInh(){
        x=10;
        y=20;
        z=30;//Error
    }
};
class Dervied2 : protected Base
{
    void testTypeInh(){
        x=10;
        y=20;
       // z=30;//Error
    }
};
class Dervied : public Base
{
    void testTypeInh(){
        x=50;
        y=30;
     //   z=60;//error because it is private
    }
};
int main()
{
    Dervied2 dobj;
    //dobj.testTypeInh();
    dobj.x=4; //error (protected)
    //dobj.y=5; //error (protected)
   // dobj.z=6; //error (protected)
    //cout<<"x = "<<dobj.x<<"y = "<<dobj.y<<"z = "<<dobj.z;
    //cout<<"x = "<<dobj.x<<endl;

    Dervied3 dobj3;
    dobj3.testTypeInh(); //z (error)
    cout << "Hello world!" << endl;
    return 0;
}
