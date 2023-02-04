/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package quadraticEquationPkg;
import java.util.function.Function;
import static java.lang.Math.*;
/**
 *
 * @author alifathy99
 */
public class quadraticEq implements Function<Double,Double>{
    public double a;
    public double b;
    public double c;
    public double d;
    public quadraticEq(double newA,double newB,double newC){
        this.a=newA;
        this.b=newB;
        this.c=newC;
    }
    @Override
    public Double apply(Double t){
        d =  (b) * (b) - 4.0 * (a) * (c);  
        if(d > 0){
            double root1 = ((-(b) + Math.pow(d, 0.5)) / (2.0 * (a)));  
            double root2 = ((-(b) - Math.pow(d, 0.5)) / (2.0 * (a)));  
            System.out.println("The roots are " + root1 + " and " + root2); 
        }else if(d<0){
            double sqrtval=sqrt(abs(d)); ;
            System.out.println(-b / (2 * a) + " + i"+ sqrtval + "\n"+ - b / (2 * a)+ " - i" + sqrtval);  
        }else if(d==0){
            double root1 = (-(b)/ (2.0 * (a)));  
            System.out.println("The root is " + root1);  
        }
        return t;
    }
}
