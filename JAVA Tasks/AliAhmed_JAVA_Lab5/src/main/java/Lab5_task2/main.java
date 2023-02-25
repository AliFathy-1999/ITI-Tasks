/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab5_task2;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.*;
import static java.util.stream.Collectors.toList;

/**
 *
 * @author alifathy99
 */
/*
    • Find the highest populated city of each country
    • Find the most populated country of each continent
    • Find the highest populated capital city        
*/
public class main {
    
    public static void main(String[] args) throws FileNotFoundException, IOException {

        List<Country> CountryList = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader("Countries.csv"))) {
            String line;
            while ((line = br.readLine()) != null) {
                String COMMA_DELIMITER = ",";
                String[] values = line.split(COMMA_DELIMITER);
                CountryList.add(new Country(values[0],values[1],values[2],Double.parseDouble(values[3]),(int) Double.parseDouble(values[4]),Double.parseDouble(values[5]),Integer.parseInt(values[6])));
            }
        }
        List<City> CityList = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader("Cities.csv"))) {
            String line;
            while ((line = br.readLine()) != null) {
                String COMMA_DELIMITER = ",";
                String[] values = line.split(COMMA_DELIMITER);
                CityList.add(new City(Integer.parseInt(values[0]),values[1],Integer.parseInt(values[2]),values[3]));
            }
        }
        //• Find the highest populated city of each country
        for(Country country : CountryList){
            System.out.println(CityList.stream()
                .filter(city -> city.getCountryCode().trim().equals(country.getCode()))
                .max(Comparator.comparingInt(City::getPopulation))
                );
        }
        //• Find the most populated country of each continent
        List<String> ContinentList = new ArrayList<>();        
        for(Country country : CountryList){
            String c = country.getContinent().trim();
                   if(!ContinentList.contains(c)) {
                        ContinentList.add(c);
                    }    
        }
        for(String continent : ContinentList){
            System.out.println(CountryList.stream().filter(country-> country.getContinent().trim().equals(continent))
            .max(Comparator.comparingInt(Country::getPopulation)));
        }
        //  • Find the highest populated capital city  
        int initmax = 0;
        List<Integer> CapitalList;
            for (Country country : CountryList) {
                CapitalList = CityList.stream().filter(city->city.getId() == country.getCapital()).map(c -> c.getPopulation()).collect(toList());
                if (!CapitalList.isEmpty()) {
                    if(CapitalList.get(0)>initmax){
                        initmax = CapitalList.get(0);
                    }
                }
            
            }
            int finalmax = initmax;
            System.out.println(
                 CityList
                  .stream()
                  .filter(c-> c.getPopulation() == finalmax)
                  .collect(toList())
            );
        
    }
}
