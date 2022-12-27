#include <iostream>
#include<math.h>
using namespace std;
class Complex{
    private:
        float real;
        float img;
    public:
        Complex(){
            real=0;
            img=0;
        }
        Complex(float r){
            real=r;
        }
        Complex(float r,float i){
            real=r;
            img=i;
        }
        void setComplex(float paraReal,float paraImg=0){
            real=paraReal;
            img=paraImg;
        }
        void setComplex(float same){
            real=img=same;
        }
        void setReal(float num){
            real=num;
        }
        void setImg(float num){
            img=num;
        }
        float getReal(){
            return real;
        }
        float getImg(){
            return img;
        }
        Complex add(Complex c){
            Complex temp;
            temp.real =real+c.real;
            temp.img =img+c.img;
            return temp;
        }
        Complex sub(Complex c){
            Complex temp;
            temp.real =real-c.real;
            temp.img =img-c.img;
            return temp;
        }
        void print(){
            if(img<0){
                cout<<real<<" - "<<fabs(img)<<"i"<<endl;
            }else
            {
                cout<<real<<" + "<<img<<"i"<<endl;
            }
        }
        ~Complex(){
                cout<<"Inside Destructor"<<endl;
        }
};
int main()
{
    Complex c1,c4;
    cout<<" real of c1 : "<<c1.getReal() <<endl;

    float x,a,b;
    cout<<"Enter value of c2 real :"<<endl;
    cin>>x;
    Complex c2(x);
    cout<<" real of c2 :"<< c2.getReal() <<endl;

    cout<<"Enter value of c3 real :"<<endl;
    cin>>a;
    cout<<"Enter value of c3 img :"<<endl;
    cin>>b;
    Complex c3(a,b);
    cout<<" real of c3 :"<<c3.getReal() <<endl<<" Img of c3 : " << c3.getImg() <<endl;

    c4.setComplex(10);
    c4.print();
    c4.setComplex(10,20);
    c4.print();


    return 0;
}
