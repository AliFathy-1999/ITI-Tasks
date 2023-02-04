/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package MyException;

/**
 *
 * @author alifathy99
 */
public class testClass  {
    private int num;
    private double a,b;
    public testClass() {
        this.num = 0;
    }
    public testClass(int num) {
        this.num = num;
    }
    public void setValues(double num1,double num2) {
        this.a = num1;
        this.b = num2;
    }   
    public void handleRange() throws RangeExceptionOutOf1to100{
            if(1 <= num && num <= 100)
                System.out.println("This number between 1 and 100");
            else
               throw new RangeExceptionOutOf1to100();
            
    }
    public void DividedOperation() throws DividedByZeroException{
            if(b!=0)
                System.out.println("Result = "+(a/b));
            else
               throw new DividedByZeroException();     
    }
}
