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
        void setComplex(float paraReal,float paraImg){
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
        Complex operator + (Complex c);
        Complex operator - (Complex c);
        Complex operator + (float c);
        Complex operator - (float c);
        friend Complex operator + (float, Complex);
        friend Complex operator - (float x, Complex);
        int operator == (Complex);
        Complex operator += (Complex c);
        Complex operator++(int); //postfix
        Complex operator++(); //prefix
        operator float();
        ~Complex(){
                cout<<"Inside Destructor"<<endl;
        }
};
Complex Complex:: operator + (Complex c){
    Complex temp;
    temp.real = real + c.real;
    temp.img = img + c.img;
    return temp;
}
Complex Complex:: operator - (Complex c){
    Complex temp;
    temp.real = real - c.real;
    temp.img = img - c.img;
    return temp;
}
Complex Complex:: operator + (float c){
    Complex temp;
    temp.real = real + c;
    temp.img = img;
    return temp;
}
Complex Complex:: operator - (float c){
    Complex temp;
    temp.real = real - c;
    temp.img = img;
    return temp;
}
Complex operator + (float x,Complex c){
    Complex temp;
    temp.real = x + c.real;
    temp.img = x + c.img;
    return temp;
}
Complex operator - (float x,Complex c){
    Complex temp;
    temp.real = x - c.real;
    temp.img = x - c.img;
    return temp;
}
Complex::operator==(Complex c){
    if( this->real==c.real && img==c.img){
        cout<<"True"<<endl;
    }else{
        cout<<"False"<<endl;
    }
    return 0;
}
Complex Complex:: operator += (Complex c){
    this->real = this->real + c.real;
    this->img = this->img + c.img;
}
Complex Complex :: operator++(int){
    Complex temp = *this;
    real++;
    img++;
    return temp;
}
Complex Complex :: operator++(){
    real++;
    img++;
    Complex temp = *this;
    return temp;
}
Complex::operator float(){
    return real;
}
int main()
{
        float x,y,a,b;
        cout<<"Enter value of c1 real :"<<endl;
        cin>>x;
        cout<<"Enter value of c1 img :"<<endl;
        cin>>y;
        cout<<"Enter value of c2 real :"<<endl;
        cin>>a;
        cout<<"Enter value of c2 img :"<<endl;
        cin>>b;
        Complex c1(x,y),c2(a,b);
        Complex c3;
        /*c3 = c1 + c2;
        c3.print();

        c3 = c1 - c2;
        c3.print();

        c3 =c1+5;
        c3.print();

        c3 =c1-5;
        c3.print();

        c3=10+c1;
        c3.print();

        c3=10-c1;
        c3.print();
        */

        c1==c2;

        //c1+=c2;
        //c1.print();

        cout<<"postfix : ";
        c1++;
        c1.print();

        cout<<"prefix : ";
        ++c1;
        c1.print();
         cout<<"\n"<<(float) c1<<endl;
    return 0;
}
