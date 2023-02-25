/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package lab5_task1;
import java.util.function.BiPredicate;
/**
 *
 * @author alifathy99
 */
public class StringUtils {

    public static String betterString(String s1, String s2, BiPredicate<String, String> p){
        if(p.test(s1, s2)){
            System.out.println(s1 + " is better than "+s2);
            return s1;
        }else{
            System.out.println(s2 + " is better than "+s1);
            return s2;
        }
        
    }
}
