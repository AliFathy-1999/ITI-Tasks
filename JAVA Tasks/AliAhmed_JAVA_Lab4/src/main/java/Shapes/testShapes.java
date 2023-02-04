/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Shapes;
import java.util.ArrayList;
/**
 *
 * @author alifathy99
 */
public class testShapes {
        public static void drawAnyShapes(ArrayList<?extends Shape> shapes){
        for (Shape shape : shapes){
            shape.draw();
        }
    }
    
}
