
public class Lecture_Demo {

	public static void main(String args[]) {

		int[] numbers={23,92,56,39,93,80,123,152,70,60,90,5,88,66,77,33};
        ArrayAlgorithm AA = new ArrayAlgorithm();
		long startTime = System.nanoTime();   
		System.out.println("Max = " + AA.maxElement(numbers));
		System.out.println("Min = " + AA.minElement(numbers));
		long endTime = System.nanoTime();  
		System.out.println("Time estimated to find max and min: "+ (endTime-startTime));
		long startTimeBS = System.nanoTime(); 
		AA.binarySearch(numbers,152);
		long endTimeBS = System.nanoTime(); 
		System.out.println("Time estimated using binary search to search on data: "+ (endTimeBS-startTimeBS));
	}
	
}