/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package GenericComplex;

/**
 *
 * @author alifathy99
 */
public interface Complex<T> {
    T getReal();
    T getImaginary();
    void setReal(double x);
    void setImaginary(double y);
    void Display();
    Complex<T> add(Complex<T> z);
    Complex<T> subtract(Complex<T> z);
    Complex<T> product(Complex<T> z);
    Complex<T> div(Complex<T> z);

}
