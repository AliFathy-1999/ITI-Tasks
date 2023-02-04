/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package MyException;

import MyException.testClass;
import java.util.Scanner;

/**
 *
 * @author alifathy99
 */
public class Main {
     public static void main(String[] args) throws RangeExceptionOutOf1to100, DividedByZeroException{

             Scanner input = new Scanner(System.in);
             System.out.print("Enter the value of number: ");
             int a = input.nextInt();
             testClass test1 = new testClass(a);
             test1.handleRange();
             testClass test2 = new testClass();
             System.out.print("Enter the value of first number: ");
             double num1 = input.nextDouble();
             System.out.print("Enter the value of second number: ");
             double num2 = input.nextDouble();
             test2.setValues(num1, num2);
             test2.DividedOperation();
  }
     }

