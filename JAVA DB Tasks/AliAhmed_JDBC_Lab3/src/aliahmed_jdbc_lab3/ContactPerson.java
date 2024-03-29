/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aliahmed_jdbc_lab3;

import java.util.Date;

/**
 *
 * @author alifathy99
 */
public class ContactPerson {
    private int id;
    private String name;
    private String nickName;
    private String address;
    private String homePhone;
    private String workPhone;
    private String cellPhone;
    private String email;
    private Date birthDate;
    private String webSite;
    private String profession;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getHomePhone() {
        return homePhone;
    }

    public void setHomePhone(String homePhone) {
        this.homePhone = homePhone;
    }

    public String getWorkPhone() {
        return workPhone;
    }

    public void setWorkPhone(String workPhone) {
        this.workPhone = workPhone;
    }

    public String getCellPhone() {
        return cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getWebSite() {
        return webSite;
    }

    public void setWebSite(String webSite) {
        this.webSite = webSite;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }
    @Override
    public String toString() {
        return "id: " + id + " | Name : " + name +" | Nick name : " + nickName + "| address : " + address + " | Home phone : " + homePhone + " | Work phone : " + workPhone + " | Cell phone : " + cellPhone + ", | Email : " + email 
                + " | BirthDate : " + birthDate +  "| Website : " + webSite +  "| Profession : " + profession + " \n";
    }           
}
