/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package lab5_task1;
import lab5_task1.StringUtils;
/**
 *
 * @author alifathy99
 */
public class AliAhmed_JAVA_Lab5 {

    public static void main(String[] args) {
        String s1= new String("Ali");
        String s2= new String("Ahmed");
        String stest = StringUtils.betterString(s1, s2, (string1,string2)-> string1.length() > string2.length());
        String first = StringUtils.betterString(s1, s2, (string1,string2)-> true);
    }
}
