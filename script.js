console.log("welcome")


//initialize the variable
let songIndex = 0
let audioElement = new Audio("music3.mp3")
let masterPlay = document.getElementById("masterPlay")
let myprogressBar = document.getElementById("myprogressBar")
let songItems = Array.from(document.getElementsByClassName("songItem"))

let songs = [
    {songName: "in the name of love",filePath:"music1.mp3",  coverPath:"jijiisd"},
    {songName: "in the name of love",filePath:"music2.mp3", coverPath:"jijiisd"},
    {songName: "in the name of love",filePath:"music3.mp3", coverPath:"jijiisd"},
    {songName: "in the name of love",filePath:"music2.mp3", coverPath:"jijiisd"},
    {songName: "in the name of love",filePath:"music3.mp3", coverPath:"jijiisd"},
    {songName: "in the name of love",filePath:"music2.mp3", coverPath:"jijiisd"},
    {songName: "in the name of love",filePath:"music2.mp3", coverPath:"jijiisd"},
    {songName: "in the name of love",filePath:"music3.mp3", coverPath:"jijiisd"},
    {songName: "in the name of love",filePath:"music2.mp3", coverPath:"jijiisd"}
    
]

songItems.forEach((element,i) => {
    // element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;

    
});

//    audioElement.play();

//handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause")
        masterPlay.classList.add("fa-play")
    }
})

//listen to event
audioElement.addEventListener("timeupdate", ()=>{

    //update seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressBar.value = progress;
    console.log(progress);

})

myprogressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})


// const makeAllPlays = ()=>{
    
//     Array.from(document.getElementsByClassName("songItemPlay")).forEach(element)=>{
//         element.classList.remove('fa-pause')
//         element.classList.add('fa-play')
//     }
// }

// Array.from(document.getElementsByClassName("songItemPlay")).forEach(element) => {
//     element.addEventListener('click', (e)=>{
//     console.log(e.target)
   
//         e.target.classList.remove('fa-play')
//         e.target.classList.add('fa-pause')
//     })
  
// }