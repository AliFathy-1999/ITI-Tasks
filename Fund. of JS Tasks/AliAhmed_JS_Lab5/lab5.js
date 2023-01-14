let randomCode=document.getElementById("randomCode");
let StartBtn=document.getElementById("StartBtn");
let clockcounter = document.getElementById("clock-counter");
let chessTable = document.getElementById("chess-table");
let scoreCount= document.getElementById("score-count");
let blockanswer= document.getElementById("block-answer");
let answers = document.getElementById("answers-style");
let charArr=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var RightChoice = 0;
function generateRandom(min,max){
        let difference = max - min;
        let rand = Math.random();
        rand = Math.floor( rand * difference);
        rand = rand + min;
        return rand;
}

var RandCode=`${charArr[generateRandom(1,8)]}${generateRandom(1,9)}`;
randomCode.innerHTML= RandCode;
let GenrandomCode = ()=>{
  var RandCode=`${charArr[generateRandom(1,8)]}${generateRandom(1,9)}`;
  randomCode.innerHTML= RandCode;
}

let getValueOfBlock = (event)=>{
    var block = event.target;
    let blockid = block.getAttribute('id');
    answers.style.display="block";
    if(randomCode.textContent==blockid){
      GenrandomCode();
      RightChoice++;
      scoreCount.innerHTML=RightChoice;
      let myblock = document.createElement('div');
      let icon = document.createElement('i');
      icon.setAttribute("class", "fa-solid fa-circle-check rightchoice");
      let p = document.createElement('p');
      p.innerHTML=blockid;
      myblock.appendChild(icon);
      myblock.appendChild(p);
      answers.append(myblock);
      myblock.style.cssText="padding:5px"
      answers.style.cssText="display:flex;"
    }else{
      let myblock = document.createElement('div');
      let icon = document.createElement('i');
      icon.setAttribute("class", "fa-solid fa-circle-xmark wrongchoice");
      let p = document.createElement('p');
      p.innerHTML=blockid;
      myblock.appendChild(icon);
      myblock.appendChild(p);
      answers.append(myblock);
      myblock.style.cssText="padding:5px"
      answers.style.display="flex"
    }
    
}
chessTable.removeEventListener("click",getValueOfBlock)
function startGame(event){
  chessTable.addEventListener("click",getValueOfBlock)
  Gstatus=true;
  let counter=30;
  StartBtn.style.display="none";
  answers.style.display="none";
  answers.innerHTML="";
  RightChoice=0;
  scoreCount.innerHTML=RightChoice;
  let timer = setInterval(function () 
  {
    counter--;
    if(counter<0){
      clearInterval(timer);
      randomCode.style.display="none";
      StartBtn.style.display="block";
    }else{
      clockcounter.innerHTML = `${counter}s`;
    }
  },1000);
  randomCode.style.display="block";
}

StartBtn.addEventListener("click",startGame)



