import java.util.StringTokenizer;
public class Lecture_Demo {

	public static void main(String args[]) {
        String str = "163.121.12.30";
        IPCutter cut = new IPCutter(str);
		StringTokenizer stTo = new StringTokenizer(str, ".");
			while (stTo.hasMoreTokens()) {
				System.out.println(stTo.nextToken());
			}
		System.out.println("========By Split() down================");
		int[] out = cut.doIPSplit();
        for(int i=0;i<out.length;i++){
			System.out.println(out[i]);
		}

	}
	
}