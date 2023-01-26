import java.util.StringTokenizer;
public class Lecture_Demo {

	public static void main(String args[]) {
        String str = "ali ahmed fathi ali";
		 String word = "ali";
        wordCount wc = new wordCount(str,word);
		System.out.println(wc.str);
		System.out.println("=====================CountFuncBySplit()=================");
		System.out.println(wc.CountFuncBySplit());
		System.out.println("=====================CountFuncByIndexOf()=================");
		System.out.println(wc.CountFuncByIndexOf());
	}
	
}