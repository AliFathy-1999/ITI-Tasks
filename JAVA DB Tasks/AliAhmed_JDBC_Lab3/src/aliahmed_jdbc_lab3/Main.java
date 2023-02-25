/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aliahmed_jdbc_lab3;
import java.io.IOException;
import java.sql.* ;
import java.util.Scanner;
/**
 *
 * @author alifathy99
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws SQLException, IOException {
        ContactDAO conDB = new ContactDAO();
        //System.out.println(conDB.getContactsUsingRowSet());
        System.out.println(conDB.getContactsUsingWebSet());
        
       
    }
    
}
