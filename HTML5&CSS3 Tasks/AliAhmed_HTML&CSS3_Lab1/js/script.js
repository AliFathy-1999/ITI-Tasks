let myaudio = document.getElementById("myaudio");
let testaudio = document.getElementById("audio-div");
let songsDiv = document.getElementById("songs-div");
let buttonsDiv=document.getElementById("buttons-div");
let shuffleBtn = document.getElementById("shuffle");
let repeatBtn = document.getElementById("repeat");
let playBtn = document.getElementById("play");
var audioSrc = "./audio/song1.mp3";
let thisTime=0;
var audioFiles = ["./audio/song1.mp3","./audio/song2.mp3","./audio/song3.mp3","./audio/song4.mp3"]
songsDiv.addEventListener("click",(e)=>{
    if(e.target.id === "songBtn1"){
        audioSrc= "./audio/song1.mp3";
        playSong("./audio/song1.mp3");
    }else if(e.target.id === "songBtn2"){
        audioSrc= "./audio/song2.mp3";
        playSong("./audio/song2.mp3");
    }else if(e.target.id === "songBtn3"){
        audioSrc= "./audio/song3.mp3";
        playSong("./audio/song3.mp3");
    }else{
        audioSrc= "./audio/song4.mp3";
        playSong("./audio/song4.mp3");
    }
    
})

function playSong(audiosrc){
    myaudio.src = audiosrc;
    myaudio.play();
}

playBtn.addEventListener("click",(e)=>{
    console.log(audioSrc)
        playSong(audioSrc);
})
repeatBtn.addEventListener("click",()=>{
    myaudio.addEventListener("ended", ()=>{
        playSong(audioSrc);
    })
})

shuffleBtn.addEventListener("click",(e)=>{

    myaudio.addEventListener("ended", (e)=>{
        var random_file = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        console.log(random_file)
        playSong(random_file);
    })
})
