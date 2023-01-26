import java.io.*;

public class Example3 {

	public static void main(String args[]) {
		int argNum=0;
		int argLen = args.length;
		if(argLen==2){
			try{
			argNum =  Integer.parseInt(args[0]);
				} catch (Exception e) {
				System.out.println("Invalid values");
			}
			for(int i=0;i<argNum;i++){
				System.out.println(args[1]);
			}
	}else{
			System.out.println("You can't add more than two arguments");
	}
}
}