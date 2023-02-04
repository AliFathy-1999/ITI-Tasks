/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Shapes;

import MyException.*;
import java.util.ArrayList;
import Shapes.testShapes;
import Shapes.Circle;
import Shapes.Rectangle;
import Shapes.Shape;
/**
 *
 * @author alifathy99
 */
public class Main {
     public static void main(String[] args){
        testShapes tshape = new testShapes();
        ArrayList<Rectangle> rectArr= new ArrayList<Rectangle>();
        rectArr.add(new Rectangle());
        rectArr.add(new Rectangle());
        ArrayList<Circle> circleArr= new ArrayList<Circle>();
        circleArr.add(new Circle());
        tshape.drawAnyShapes(rectArr);
        tshape.drawAnyShapes(circleArr);
     }
}
