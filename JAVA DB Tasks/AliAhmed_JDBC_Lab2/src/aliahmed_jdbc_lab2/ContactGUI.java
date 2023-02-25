/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/javafx/FXMain.java to edit this template
 */
package aliahmed_jdbc_lab2;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.*;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.scene.text.*;
import javafx.stage.Stage;
import java.sql.SQLException;
import java.util.*;import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.event.Event;
import javafx.event.Event;
/**
 *
 * @author alifathy99
 */
public class ContactGUI extends Application{
    Label nameLabel,emailIdLabel,cellPhoneLabel;
    Text ContactViewtext,StatusMessage;
    BorderPane borderP;
    GridPane gridPane;
    StackPane root;
    TextField nameField,emailField,cellPhoneField;
    Button firstBtn,prevBtn,nextBtn,lastBtn,updateBtn,deleteBtn;
    int curContact = 0;
    int Contid;
    @Override
    public void init() throws Exception {
        super.init();
        borderP = new BorderPane();
        gridPane = new GridPane();
        root = new StackPane();
        ContactViewtext = new Text("Contact View");
        StatusMessage = new Text("");
        nameLabel = new Label("Name :");
        emailIdLabel = new Label("Email :");
        cellPhoneLabel = new Label("Cell phone :");
        nameField = new TextField();
        emailField = new TextField();
        cellPhoneField = new TextField();
        gridPane.addColumn(0, nameLabel,emailIdLabel,cellPhoneLabel);
        gridPane.addColumn(1, nameField,emailField,cellPhoneField);
        gridPane.setPadding(new Insets(30, 30, 30, 30)); 
        gridPane.setVgap(20); 
        gridPane.setHgap(20); 
        firstBtn = new Button("First");
        prevBtn = new Button("Previous");
        nextBtn = new Button("Next");
        lastBtn = new Button("Last");
        updateBtn = new Button("Update");
        deleteBtn = new Button("Delete");
    }
    @Override
    public void start(Stage primaryStage) throws SQLException {
        HBox hbox = new HBox(firstBtn,prevBtn,nextBtn,lastBtn,updateBtn,deleteBtn);
        hbox.setAlignment(Pos.CENTER);
        hbox.setSpacing(15);
        ContactViewtext.setStyle("-fx-font-size:24px;");
        StatusMessage.setStyle("-fx-font-size:16px;"+"-fx-fill:green;");
        VBox vbox = new VBox(ContactViewtext,gridPane,StatusMessage,hbox);
        vbox.setAlignment(Pos.CENTER);
        gridPane.setAlignment(Pos.CENTER);
        ContactDAO myContact = new ContactDAO();
        List<ContactPerson> contactList = myContact.getContacts();
        Contid=contactList.get(curContact).getId();
        nameField.setText(contactList.get(curContact).getName());
        emailField.setText(contactList.get(curContact).getEmail());
        cellPhoneField.setText(contactList.get(curContact).getCellPhone());
        firstBtn.setOnAction(new EventHandler() {
            @Override
            public void handle(Event event) {
                    curContact = 0;
                    Contid = contactList.get(curContact).getId();
                    nameField.setText(contactList.get(curContact).getName());
                    emailField.setText(contactList.get(curContact).getEmail());
                    cellPhoneField.setText(contactList.get(curContact).getCellPhone());
            }
        });
       prevBtn.setOnAction(new EventHandler() {
            @Override
            public void handle(Event event) {
                if(curContact > 0){
                    curContact--;
                    Contid = contactList.get(curContact).getId();
                    nameField.setText(contactList.get(curContact).getName());
                    emailField.setText(contactList.get(curContact).getEmail());
                    cellPhoneField.setText(contactList.get(curContact).getCellPhone());
                }else{
                    curContact=0;
                    Contid = contactList.get(curContact).getId();
                    nameField.setText(contactList.get(curContact).getName());
                    emailField.setText(contactList.get(curContact).getEmail());
                    cellPhoneField.setText(contactList.get(curContact).getCellPhone());
                }   
            }
        });
            nextBtn.setOnAction(new EventHandler() {
            @Override
            public void handle(Event event) {
                if(curContact < contactList.size()-1){
                    curContact++;
                    Contid = contactList.get(curContact).getId();
                    nameField.setText(contactList.get(curContact).getName());
                    emailField.setText(contactList.get(curContact).getEmail());
                    cellPhoneField.setText(contactList.get(curContact).getCellPhone());
                }else{
                    curContact=0;
                    Contid = contactList.get(curContact).getId();
                    nameField.setText(contactList.get(curContact).getName());
                    emailField.setText(contactList.get(curContact).getEmail());
                    cellPhoneField.setText(contactList.get(curContact).getCellPhone());
                }
            }
        });
            lastBtn.setOnAction(new EventHandler() {
            @Override
            public void handle(Event event) {
                    curContact = contactList.size()-1;
                    Contid = contactList.get(curContact).getId();
                    nameField.setText(contactList.get(curContact).getName());
                    emailField.setText(contactList.get(curContact).getEmail());
                    cellPhoneField.setText(contactList.get(curContact).getCellPhone());
            }
        });
       updateBtn.setOnAction(new EventHandler() {
            @Override
            public void handle(Event event) {
               String name = nameField.getText();
               String email = emailField.getText();
               String cellphone = cellPhoneField.getText();
               myContact.updateById(Contid, name, email, cellphone);
               StatusMessage.setText("Data updated Successfully !!!");
            }
        });
        deleteBtn.setOnAction(new EventHandler() {
            @Override
            public void handle(Event event) {
               if(!contactList.isEmpty()){
                    myContact.deleteById(Contid);
                    StatusMessage.setText("Data deleted Successfully !!!");            
               }else{
                    StatusMessage.setText("There is no data to delete it!!!"); 
               }
            }
        });

        root.getChildren().addAll(vbox);
        Scene scene = new Scene(root, 600, 450);
     
        primaryStage.setTitle("Database View");
        primaryStage.setScene(scene);
        primaryStage.show();
    }



    
}
