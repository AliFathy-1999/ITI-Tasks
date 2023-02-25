/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab5_task2;

/**
 *
 * @author alifathy99
 */
public class City {
    private int id;
    private String name;
    private int population;
    private String countryCode;
    public City(){
    
    }
    public City(int id, String name, int population, String countryCode) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.countryCode = countryCode;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getPopulation() {
        return population;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }
    @Override
    public String toString() {
        return "City id = " + id + ", name is " + name + ", population = " + population + ", Country code is " + countryCode;
    }        
}
