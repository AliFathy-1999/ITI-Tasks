public class wordCount{
    public String str;
	public String[] strArr; 
	public int counter;
	public int counter2;
	public String word;
    public wordCount(String sentence, String word){
        this.str=sentence;
		this.word=word;
		this.counter=0;
		this.counter2=0;
    }
	public int CountFuncBySplit(){
		strArr = str.split(" ");
		if(word.length()==0 || str.length()==0){
            return -1;
		}else{
			for(int i=0;i<strArr.length;i++){
				if(strArr[i].equals(word)){
					counter++;
				}
			}
		}
		return counter;
	}
	public int CountFuncByIndexOf(){
		int wordIndex=0;
		 if(word.length()==0 || str.length()==0){
            return -1;
		}else{
			while(true){
				wordIndex = str.indexOf(word,wordIndex);
					if(wordIndex!=-1){
						counter2++;
						wordIndex+=word.length();
					}else{
						break;
					}
			}
		return counter2;
		}
	}
}
