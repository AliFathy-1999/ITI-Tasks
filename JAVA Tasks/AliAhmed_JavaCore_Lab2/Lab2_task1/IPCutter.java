public class IPCutter{
    public String cmdLine;
	public String[] StringArr;
	public String[] numberStrs;
	public int[] numbers;


    public IPCutter(String cmdLine){
        this.cmdLine=cmdLine;
    }
    public int[] doIPSplit(){
		numberStrs = cmdLine.split("\\.");
		 numbers = new int[numberStrs.length];
		//StringArr=cmdLine.split("\\.");
		for(int i=0;i<numbers.length;i++){
			numbers[i]=Integer.parseInt(numberStrs[i]);
			//System.out.println(numbers[i]);
		}
		return numbers;
	}
}
