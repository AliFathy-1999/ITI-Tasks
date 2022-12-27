#include <iostream>
#include<math.h>
using namespace std;
class Complex{
    private:
        float real;
        float img;
    public:
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
};
int main()
{
    Complex c1,c2,result;
    float r,i,r2,i2;
    cout <<"Enter value of real 1 value :"<<endl;
    cin >> r ;
    cout <<"Enter value of Image 2 value :"<<endl;
    cin >> i ;
    c1.setReal(r);
    c1.setImg(i);
    cout <<"Enter value of real 2 value :"<<endl;
    cin >> r2 ;
    cout <<"Enter value of Image 2 value :"<<endl;
    cin >> i2 ;
    c2.setReal(r2);
    c2.setImg(i2);
    result = c1.add(c2);
    result.print();
    result = c1.sub(c2);
    result.print();
    return 0;
}
