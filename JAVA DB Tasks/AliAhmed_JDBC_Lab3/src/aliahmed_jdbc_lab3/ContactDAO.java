/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aliahmed_jdbc_lab3;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import javax.sql.rowset.JdbcRowSet;
import javax.sql.rowset.RowSetFactory;
import javax.sql.rowset.RowSetProvider;
import javax.sql.rowset.WebRowSet;
/**
 *
 * @author alifathy99
 */
public class ContactDAO {
    private Connection con;
    private Boolean conflag;
    public ContactDAO(){
       
    }
    public void closeConn(){
        try{ 
            this.con.close();
            this.conflag=false;
            System.out.println("Connection Closed");
        }catch (SQLException e) {
            System.out.println(e);
            
        }
    }
    private ContactPerson createContactPerson(ResultSet rs){
        ContactPerson cp = new ContactPerson();
        try{ 
           cp.setId(rs.getInt("id"));
           cp.setName(rs.getString("name"));
           cp.setNickName(rs.getString("nick_name"));
           cp.setAddress(rs.getString("address"));
           cp.setHomePhone(rs.getString("home_phone"));
           cp.setWorkPhone(rs.getString("work_phone"));
           cp.setCellPhone(rs.getString("cell_phone"));
           cp.setEmail(rs.getString("email"));
           cp.setBirthDate(rs.getDate("birthday"));
           cp.setWebSite(rs.getString("web_site"));
           cp.setProfession(rs.getString("profession"));
        }catch (SQLException e) {
            System.out.println(e);
        }        
        return cp;
    }
    public List<ContactPerson> getContactsUsingRowSet(){
         List<ContactPerson> personsList = new ArrayList<>();
         String queryString = "select * from contact";  
        try{  
                JdbcRowSet rowSet = RowSetProvider.newFactory().createJdbcRowSet();        
                rowSet.setUrl("jdbc:mysql://localhost:3306/addressbook");
                rowSet.setUsername("root");
                rowSet.setPassword("iti43");
                rowSet.setCommand(queryString);
                rowSet.execute();
                this.conflag=true;
                while(rowSet.next()){
                    ContactPerson cp =  createContactPerson(rowSet);
                    personsList.add(cp);
                }
            
        }catch (SQLException e) {
            System.out.println(e);
        }      
        return personsList;
    }
    public List<ContactPerson> getContactsUsingWebSet() throws IOException{
         List<ContactPerson> personsList = new ArrayList<>();
         String queryString = "select * from contact";  
        try{  
                WebRowSet rowSet = RowSetProvider.newFactory().createWebRowSet();  
                rowSet.setUrl("jdbc:mysql://localhost:3306/addressbook");
                rowSet.setUsername("root");
                rowSet.setPassword("iti43");
                rowSet.setCommand(queryString);
                rowSet.execute();
                
                //Write in xml file
                
                //FileOutputStream saveinXML = new FileOutputStream("mycontact.xml");
                //rowSet.writeXml(saveinXML);
                
                //Read in xml file
                
                FileInputStream viewXML = new FileInputStream("mycontact.xml");
                rowSet.readXml(viewXML);
                
                this.conflag=true;
                while(rowSet.next()){
                    ContactPerson cp =  createContactPerson(rowSet);
                    personsList.add(cp);
                }
        }catch (SQLException | FileNotFoundException e) {
            System.out.println(e);
        }      
        return personsList;
    }
}
