/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.aliahmed_java_lab3;
import  TemperatureConvertPkg.TemperatureConvert;
import java.util.Scanner;
import quadraticEquationPkg.quadraticEq;
import java.util.function.Function;
/**
 *
 * @author alifathy99
 */
public class AliAhmed_JAVA_Lab3 {

    public static void main(String[] args) {
        float temp = 30;
        float Innertemp = 20;
        TemperatureConvert tempCon = new TemperatureConvert();
        System.out.println("Temp = " + temp + "C or " + tempCon.apply(temp) + " F");
        
        float InnerClass = new Function<Float,Float>(){
            @Override
            public Float apply(Float t){
                return ((t*9)/5)+32 ;
            }
        }.apply(Innertemp);
        System.out.println("(Inner) Temp = " + Innertemp + "C or " + InnerClass + " F");
        Scanner input = new Scanner(System.in);  
        System.out.print("Enter the value of a: ");  
        double a = input.nextDouble();  
        System.out.print("Enter the value of b: ");  
        double b = input.nextDouble();  
        System.out.print("Enter the value of c: ");  
        double c = input.nextDouble();  
        quadraticEq qE = new quadraticEq(a,b,c);
        qE.apply(4.7);
    }
}
