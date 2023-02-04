/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package MyException;

/**
 *
 * @author alifathy99
 */
public class DividedByZeroException extends Exception{
    public DividedByZeroException(){
        super("This is an error : you can't divide number over zero");
    }
}
