
public class Example2 {

	public static void main(String args[]) {
			int argsLen = args.length;
			if(argsLen>0){
				if(args[0] .equals("CoreJava")){
					System.out.println("True value "+args[0]);
				}else{
					System.out.println("Invalid input, False value Not "+args[0]);
				}
			}else{
				System.out.println("Invalid input, please try again!");
			}
		
	}
}