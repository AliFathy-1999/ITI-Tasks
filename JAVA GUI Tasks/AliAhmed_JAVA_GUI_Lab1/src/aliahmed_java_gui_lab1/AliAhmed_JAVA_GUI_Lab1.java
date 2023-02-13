/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/javafx/FXMain.java to edit this template
 */
package aliahmed_java_gui_lab1;

import java.io.File;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.effect.Reflection;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.paint.CycleMethod;
import javafx.scene.paint.LinearGradient;
import javafx.scene.paint.Stop;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Text;
import javafx.stage.Stage;

/**
 *
 * @author alifathy99
 */
public class AliAhmed_JAVA_GUI_Lab1 extends Application {
    
    @Override
    public void start(Stage primaryStage) {
        StackPane root = new StackPane();
        
        Reflection reflection = new Reflection();
        reflection.setFraction(0.6);
        
        Text text = new Text("Hello World");
        text.setId("textStyle");
        text.setStyle("-fx-fill:red;"+"-fx-font-size: 40px;");
        text.setEffect(reflection);
        
        Stop[] stops = new Stop[] { new Stop(0, Color.BLACK), new Stop(.5, Color.WHITE), new Stop(1, Color.BLACK)};
        LinearGradient lg = new LinearGradient(0,1,0,0, true, CycleMethod.NO_CYCLE, stops);
        
        Rectangle rectangle = new Rectangle(0,0,500,350);
        rectangle.setId("rectStyle");
        rectangle.setFill(lg);
            
        root.getChildren().add(rectangle);
        root.getChildren().add(text);       

        Scene scene = new Scene(root, 500, 350);
        scene.getStylesheets().add(getClass().getResource("RectangleStyle.css").toExternalForm());
        primaryStage.setTitle("Hello World!");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}
