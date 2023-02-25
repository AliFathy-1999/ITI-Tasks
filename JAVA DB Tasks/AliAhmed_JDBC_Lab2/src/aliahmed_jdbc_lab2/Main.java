/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aliahmed_jdbc_lab2;
import java.sql.* ;
import java.util.Scanner;
import javafx.application.Application;
/**
 *
 * @author alifathy99
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws SQLException {
        ContactDAO conDB = new ContactDAO();
        ContactPerson p1 = new ContactPerson();
        Date Datep1 = new java.sql.Date(1996,01,10);
        p1.setName("Mohamed Mamdouh");
        p1.setNickName("Youssef");
        p1.setAddress("21-Rabaa street");
        p1.setHomePhone("+2011113412");
        p1.setWorkPhone("+2012214213");
        p1.setCellPhone("+2013233315");
        p1.setBirthDate(Datep1);
        p1.setEmail("mohamedmamdouh@yahoo.com");
        p1.setWebSite("mohamedmamdouh.com");
        p1.setProfession("Full-stack Developer");
        Scanner sc = new Scanner(System.in);
        conDB.insertContactPerson(p1);
        /*
        System.out.println("1. update name \n 2. update Nick name \n 3. update address \n 4. update Home phone \n 5. update Work phone \n 6. update Cell phone \n 7. update email\n 8. update Birthdate \n 9. update Website \n 10. update profession \n");
        
        
        System.out.println("Enter id, you want to update it : ");
        int id = sc.nextInt();
        System.out.println("Enter number of column you want to update it : ");
        int colNum = sc.nextInt();
        System.out.println("Enter value : ");
        sc.nextLine();
        String value = sc.nextLine();
        conDB.updateByIdContactPerson(id, colNum, value);
        */
        
        /*System.out.println("1. Delete by ID \n 2. Delete by name \n 3. Delete by Nick name \n 4. Delete by address \n 5. Delete by Home phone \n 6. Delete by Work phone \n 7. Delete by Cell phone \n 8. Delete by email\n 9. Delete by Birthdate \n 10. Delete by Website \n 11. Delete by profession \n");
        System.out.println("Enter number of column you want to delete it : ");
        int DcolNum = sc.nextInt();
        System.out.println("Enter value : ");
        sc.nextLine();
        String Dvalue = sc.nextLine();
        conDB.deleteContactPerson(DcolNum, Dvalue);*/
        
        //System.out.println(conDB.getContacts());
        //System.out.println(conDB.getContactsForName("Ali"));
        //conDB.updateUserEmail("Ali", "Mustafa", "aliahmedfathi37@gmail.com", "ali_ahmed_1999@hotmail.com");
        Application.launch(ContactGUI.class, args);
    
        conDB.closeConn();
       
    }
    
}
