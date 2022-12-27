#include <iostream>

using namespace std;
class Stack{
    private:
        int Size;
        int *arr ;
        int top;
    public:
        static int Count;
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
        ~Stack(){
            delete[] arr;
            Count--;
        }

};
int Stack::Count=0;
int main()
{
    Stack s(5);
    s.push(5);
    s.push(6);
    s.push(7);
    s.push(8);
    cout << "Number of Objects in stack : " << Stack::Count <<endl;
    cout << "value deleted from stack : " << s.pop() << endl;

    Stack s2(1);
    s2.push(10);
    //s2.push(20);
    return 0;
}
