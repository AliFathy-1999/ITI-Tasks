/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package GenericComplex;
import GenericComplex.testComplex;
/**
 *
 * @author alifathy99
 */
public class Main {
     public static void main(String[] args){
        testComplex c1 = new testComplex();
        c1.setReal(4.5);
        c1.setImaginary(1.5);
        testComplex c2 = new testComplex();
        c2.setReal(2.0);
        c2.setImaginary(3.0);
        Complex<Double> result = new testComplex();
        result=c1.add(c2);
        result.Display();

     }
}
