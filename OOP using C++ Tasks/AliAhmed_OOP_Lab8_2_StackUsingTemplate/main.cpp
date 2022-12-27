#include <iostream>

using namespace std;
template <class T>
class Stack{
    private:
        int Size;
        T *arr ;
        int top;
    public:
        //Stack(Stack &z);
        static int Count;
        Stack(int s){
            Size=s;
            top=0;
            arr = new T[Size];

        }
        Stack();
        void push(T);
        T pop();

        void operator = (const Stack s);
        //friend void viewContent(Stack s);
       void viewContent(Stack s);
        ~Stack(){
            delete[] arr;
            Count--;
        }

};
template <class T>
int Stack<T>::Count=0;
template <class T>
Stack<T>::Stack()
{
    top=0;
    Size= 10;
    arr = new T[Size];
    Count++;

}
template <class T>
void Stack<T>::push(T num){
            if(top==Size){
                cout<<"Stack is full ."<<endl;
            }else{
                arr[top]=num;
                top++;
                Count++;
            }
        }
template <class T>
T Stack<T>::pop(){
    int value;
    if(top==0){
        cout<<"Stack is empty"<<endl;
    }else{
        top--;
        value=arr[top];
    }
    return value;
}
template <class T>
void Stack<T>::operator = (const Stack s){
    delete[] this->arr;
    this->Size=s.Size;
    this->top=s.top;
    this->arr=new int[Size];
    for(int i=0;i<top;i++){
        this->arr[i]=s.arr[i];
    }
 }
 template <class T>
void Stack<T>::viewContent(Stack s){
    int temp=s.top;
    while(temp!=0){
        cout<< s.arr[--temp] <<endl;
    }
}
int main()
{
    Stack <int> s1(5);
    s1.push(1);
    s1.push(2);
    s1.viewContent(s1);
    cout << "Number of Objects in stack : " << Stack<int>::Count <<endl;
    cout << "value deleted from stack : " << s1.pop() << endl;
    Stack <char> s2(3);
    s2.push('I');s2.push('L');s2.push('A');
    s2.viewContent(s2);

    return 0;
}
