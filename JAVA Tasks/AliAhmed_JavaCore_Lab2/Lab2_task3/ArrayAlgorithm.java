public class ArrayAlgorithm{
    public int max;
    public int min;
    public ArrayAlgorithm(){
        this.max=0;
        this.min=0;
    }
    public int maxElement(int [] arrayNum){
        for(int i=0;i<arrayNum.length;i++){
            if(arrayNum[i]>max){
                max=arrayNum[i];
            }
        }
        return max;
    }
    public int minElement(int [] arrayNum){
            min=arrayNum[0];
        for(int i=0;i<arrayNum.length;i++){
            if(arrayNum[i]<min){
                min=arrayNum[i];
            }
        }
        return min;
    }
public void binarySearch(int[] arrayNum, int SearchData)
    {
        int first = 0, last = arrayNum.length - 1;

        while (last - first > 1) {
            int middle = (last + first) / 2;
            if(arrayNum[middle] < SearchData) {
                first = middle + 1;
            }else {
                last = middle;
            }
        }
        if(arrayNum[first] == SearchData) {
            System.out.println("It Found in array and its index = " + first );
        }else if (arrayNum[last] == SearchData) {
            System.out.println("It Found in array and its index = " + last );
        }else {
            System.out.println("Not Found");
        }
    }
}