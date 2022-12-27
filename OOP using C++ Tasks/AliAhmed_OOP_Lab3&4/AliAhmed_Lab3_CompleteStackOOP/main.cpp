#include <iostream>

using namespace std;
class Stack{
    private:
        int Size;
        int *arr ;
        int top;
    public:
        static int Count;
        Stack(Stack &z);
        Stack(int s){
            Size=s;
            top=0;
            arr = new int[Size];

        }
        void push(int num){
            if(top==Size){
                cout<<"Stack is full ."<<endl;
            }else{
                arr[top]=num;
                top++;
                Count++;
            }
        }
        int pop(){
            int value;
            if(top==0){
                cout<<"Stack is empty"<<endl;
            }else{
                top--;
                value=arr[top];
            }
            return value;
        }
        friend void viewContent(Stack s);
        //friend void viewContent(Stack &s);
        ~Stack(){
            delete[] arr;
            Count--;
        }

};
int Stack::Count=0;
//1. viewContent function once call by reference.
/*void viewContent(Stack &s){
    int temp=s.top;
    while(temp!=0){
        cout<< s.arr[--temp] <<endl;
    }
}*/
//2. viewContent function once call by value and without copy constructor .
void viewContent(Stack s){
    int temp=s.top;
    while(temp!=0){
        cout<< s.arr[--temp] <<endl;
    }
}
//3. viewContent function once call by value and with copy constructor
Stack::Stack(Stack &z){
    top=z.top;
    Size=z.Size;
    arr=new int[Size];
    for(int i=0;i<top;i++){
        arr[i]=z.arr[i];
    }
    Count++;
}
int main()
{
    Stack s(5);
    s.push(5);
    s.push(6);
    s.push(7);
    s.push(8);
    /*cout << "Number of Objects in stack : " << Stack::Count <<endl;
    cout << "value deleted from stack : " << s.pop() << endl;

    Stack s2(1);
    s2.push(10);
    //s2.push(20);*/

    viewContent(s);
    cout << "Number of Objects in stack : " << Stack::Count <<endl;
    return 0;
}
