#include <iostream>

using namespace std;
class Stack{
    private:
        int Size;
        int *arr ;
        int top;
    public:
        Stack(Stack &z);
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
        void operator = (const Stack &s);
        friend void viewContent(Stack &s);
        ~Stack(){
            delete[] arr;
            Count--;
        }

};
int Stack::Count=0;
 void Stack::operator = (const Stack &s){
    delete[] this->arr;
    this->Size=s.Size;
    this->top=s.top;
    this->arr=new int[Size];
    for(int i=0;i<top;i++){
        this->arr[i]=s.arr[i];
    }
 }
 void viewContent(Stack &s){
    int temp=s.top;
    while(temp!=0){
        cout<< s.arr[--temp] <<endl;
    }
}
int main()
{
    Stack s1(5);
    s1.push(5);
    s1.push(6);
    s1.push(7);
    s1.push(8);
    /*cout << "Number of Objects in stack : " << Stack::Count <<endl;
    cout << "value deleted from stack : " << s.pop() << endl;*/

    Stack s2(4);
    s2.push(10);
    s2.push(20);
    s2.push(30);
    s2.push(40);
    s2=s1;
    viewContent(s2);
    //s2.push(20);
    return 0;
}
