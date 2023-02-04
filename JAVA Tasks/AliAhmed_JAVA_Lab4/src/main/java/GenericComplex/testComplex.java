/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package GenericComplex;
import GenericComplex.Complex;
import MyException.DividedByZeroException;
/**
 *
 * @author alifathy99
 */
public class testComplex implements Complex<Double>{
    private double real;
    private double imagine;

    public testComplex() {
        this.real = 0;
        this.imagine = 0;
    }
    
    @Override
    public Double getReal() {
        return real;
    }

    @Override
    public Double getImaginary() {
        return imagine;
    }
    @Override
    public void setReal(double x) {
        this.real=x;
    }

    @Override
    public void setImaginary(double y) {
        this.imagine = y;
    }
    @Override
    public Complex<Double> add(Complex<Double> z) {
      testComplex temp = new testComplex();
      temp.real = this.real + z.getReal();
      temp.imagine = this.imagine + z.getImaginary();
      return temp;
    }

    @Override
    public Complex<Double> subtract(Complex<Double> z) {
      testComplex temp = new testComplex();
      temp.real = this.real - z.getReal();
      temp.imagine = this.imagine - z.getImaginary();
      return temp;
    }

    @Override
    public Complex<Double> product(Complex<Double> z) {
      testComplex temp = new testComplex();
      temp.real = this.real * z.getReal();
      temp.imagine = this.imagine * z.getImaginary();
      return temp;    
    }

    @Override
    public Complex<Double> div(Complex<Double> z) {
      testComplex temp = new testComplex();
      temp.real = this.real / z.getReal();
      temp.imagine = this.imagine / z.getImaginary();
      return temp; 
    }
    @Override
    public void Display(){
        if(imagine<0){
            System.out.println(real +"-"+ imagine+"i");
        }else
        {
            System.out.println(real +"+"+ imagine+"i");
        }
    }
}
