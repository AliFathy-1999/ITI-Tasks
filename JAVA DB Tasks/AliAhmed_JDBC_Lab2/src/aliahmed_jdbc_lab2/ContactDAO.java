/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aliahmed_jdbc_lab2;


import com.mysql.cj.jdbc.MysqlDataSource;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 *
 * @author alifathy99
 */
public class ContactDAO {
    private Boolean conflag;
    private Connection con;
    public ContactDAO() throws SQLException { 
       connect();
    }
    private Boolean connect(){
        Properties props = new Properties();
        FileInputStream fis = null;
        MysqlDataSource mysqlDS = new MysqlDataSource();
        try{
            fis = new FileInputStream("/home/alifathy99/ITI OS/26. Java JDBC/Java_JDBC_Day2/AliAhmed_JDBC_Lab2/src/aliahmed_jdbc_lab2/DBRopFile.properties");
            props.load(fis);
            mysqlDS.setURL(props.getProperty("DB_URL"));
            mysqlDS.setUser(props.getProperty("USER"));
            mysqlDS.setPassword(props.getProperty("PASS"));
            this.con = mysqlDS.getConnection();
            if(this.con !=null){
                this.conflag=true;
                 
                System.out.println("Conncetion Opened");
                return true;
            }
        }catch (SQLException | IOException e) {
            System.out.println(e);
        }
        return false;
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
    public List<ContactPerson> getContacts() throws SQLException{
         List<ContactPerson> personsList = new ArrayList<>();
         Statement stmt = con.createStatement();
        try{ 
            if(conflag){
                
                String queryString = new String("select * from contact");
                ResultSet rs = stmt.executeQuery(queryString) ;
                while(rs.next()){
                    ContactPerson cp =  createContactPerson(rs);
                    personsList.add(cp);
                }
            }
        }catch (SQLException e) {
            System.out.println(e);
        }finally{
            stmt.close();
        }     //finally stmt.close() or trywithresources           

        return personsList;
    }

    public List<ContactPerson> getContactsForName(String name){
        List<ContactPerson> personsList = new ArrayList<>();
        try{ 
            if(conflag){
                PreparedStatement pstmt = con.prepareStatement("select * from contact where name=?") ;
                pstmt.setString(1, name);
                ResultSet rs = pstmt.executeQuery() ;
                while(rs.next()){
                    ContactPerson cp =  createContactPerson(rs);
                    personsList.add(cp);
                }
                //pstmt.close();
            }
        }catch (SQLException e) {
            System.out.println(e.getMessage());
        }                

        return personsList;
    }    
    public Boolean insertContactPerson(ContactPerson cp){
        
        try{ 
            if(conflag){
                PreparedStatement pstmt = con.prepareStatement("INSERT INTO contact (id,name,nick_name,address,home_phone,work_phone,cell_phone,email,birthday,web_site,profession)"
                        + "VALUES (?,?,?,?,?,?,?,?,?,?,?)") ;
                pstmt.setInt(1, cp.getId());
                pstmt.setString(2, cp.getName());
                pstmt.setString(3, cp.getNickName());
                pstmt.setString(4, cp.getAddress());
                pstmt.setString(5, cp.getHomePhone());
                pstmt.setString(6, cp.getWorkPhone());
                pstmt.setString(7, cp.getCellPhone());
                pstmt.setString(8, cp.getEmail());
                pstmt.setDate(9, (Date) cp.getBirthDate());
                pstmt.setString(10, cp.getWebSite());
                pstmt.setString(11, cp.getProfession());
                if(pstmt.executeUpdate() !=0){
                    System.out.println("Data inserted Successfully in database !!!");
                    return true;
                }
                //pstmt.close();
            }
        }catch (SQLException e) {
            System.out.println(e.getMessage());
        }                            
        return false;        
    }  
    
    public Boolean updateByIdContactPerson(int id,int colNum,String value){
        try{ 
            PreparedStatement pstmt;
            if(conflag){
                switch(colNum){
                    case 1:
                       pstmt = con.prepareStatement("UPDATE contact SET name=? where id=? ") ;
                       break;
                    case 2:
                       pstmt = con.prepareStatement("UPDATE contact SET nick_name=? where id=? ") ;
                       break;
                    case 3:
                       pstmt = con.prepareStatement("UPDATE contact SET address=? where id=? ") ;
                       break;
                    case 4:
                       pstmt = con.prepareStatement("UPDATE contact SET home_phone=? where id=? ") ;
                       break;  
                    case 5:
                       pstmt = con.prepareStatement("UPDATE contact SET work_phone=? where id=? ") ;
                       break;
                    case 6:
                       pstmt = con.prepareStatement("UPDATE contact SET cell_phone=? where id=? ") ;
                       break;
                    case 7:
                       pstmt = con.prepareStatement("UPDATE contact SET email=? where id=? ") ;
                       break;
                    case 8:
                       pstmt = con.prepareStatement("UPDATE contact SET birthday=? where id=? ") ;
                       break;
                    case 9:
                       pstmt = con.prepareStatement("UPDATE contact SET web_site=? where id=? ") ;
                       break;
                    case 10:
                       pstmt = con.prepareStatement("UPDATE contact SET profession=? where id=? ") ;
                       break; 
                    default:
                        pstmt = con.prepareStatement("UPDATE contact SET name=? where id=? ") ;
                }
                pstmt.setInt(2, id);
                pstmt.setString(1, value);
                
                if(pstmt.executeUpdate() !=0){
                    System.out.println("Data updated Successfully!!!");
                    return true;
                }
                //pstmt.close();
            }
        }catch (SQLException e) {
            System.out.println(e.getMessage());
        }                          
        return false; 
    }    
    public Boolean deleteContactPerson(int colNum,String value){
        try{
            if(conflag && value!=""){
                PreparedStatement pstmt;
                switch(colNum){
                    case 1:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE id=?") ;
                       break;
                    case 2:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE name=?") ;
                       break;
                    case 3:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE nick_name=? ") ;
                       break;
                    case 4:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE address=?") ;
                       break;  
                    case 5:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE home_phone=?") ;
                       break;
                    case 6:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE work_phone=?") ;
                       break;
                    case 7:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE cell_phone=?") ;
                       break;
                    case 8:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE email=?") ;
                       break;
                    case 9:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE birthday=?") ;
                       break;
                    case 10:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE web_site=?") ;
                       break; 
                    case 11:
                       pstmt = con.prepareStatement("DELETE FROM contact WHERE profession=?") ;
                       break;
                    default:
                        pstmt = con.prepareStatement("DELETE FROM contact WHERE id=?") ;
                }
                
                pstmt.setString(1, value);
                
                if(pstmt.executeUpdate() !=0){
                    System.out.println("Data deleted Successfully!!!");
                    return true;
                }
             //   pstmt.close();
            }
        }catch (SQLException e) {
            System.out.println(e.getMessage());
        }                            
        return false; 
    }   
    public boolean updateUserEmail(String name1, String name2, String mail1, String mail2)
    { 
        String queryString1 = "UPDATE contact SET email ='" + mail1 + "' WHERE name='" + name1 + "'";
        String queryString2 = "UPDATE contact SET email ='" + mail2 + "' WHERE name='" + name2 + "'";
            try (Statement stmt = con.createStatement())
            {
                System.out.println("test!!!");
                //Statement stmt = con.createStatement();
                if (conflag)
                    {
                        con.setAutoCommit(false);
                        stmt.addBatch(queryString1);
                        stmt.addBatch(queryString2);
                        stmt.executeBatch();
                        con.commit();
                        con.setAutoCommit(true);
                        System.out.println("Emails updated Successfully!!!");
                        //return true;
                    }
                //stmt.close();
          }
          catch(SQLException e)
          {
                System.out.println(e);
          }
   
        return false;
    }  
        public Boolean updateById(int id,String name,String email,String cellphone){
        try{       
            if(conflag){
                PreparedStatement pstmt= con.prepareStatement("UPDATE contact SET name=? , email=? , cell_phone=? where id=? ") ;
                pstmt.setInt(4, id);
                pstmt.setString(1, name);
                pstmt.setString(2, email);
                pstmt.setString(3, cellphone);
                if(pstmt.executeUpdate() !=0){
                    System.out.println("Data updated Successfully!!!");
                    return true;
                }
                //pstmt.close();
            }
        }catch (SQLException e) {
            System.out.println(e.getMessage());
        }                          
        return false; 
    }  
        public Boolean deleteById(int id){
        try{       
            if(conflag){
                PreparedStatement pstmt= con.prepareStatement("DELETE FROM contact WHERE id=?") ;
                pstmt.setInt(1, id);
                if(pstmt.executeUpdate() !=0){
                    System.out.println("Data deleted Successfully!!!");
                    return true;
                }
                //pstmt.close();
            }
        }catch (SQLException e) {
            System.out.println(e.getMessage());
        }                          
        return false; 
    } 
}
