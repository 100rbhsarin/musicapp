console.log("welcome")


//initialize the variable
let songIndex = 0
let audioElement = new Audio("music3.mp3")
let masterPlay = document.getElementById("masterPlay")
let myprogressBar = document.getElementById("myprogressBar")
let songItems = Array.from(document.getElementsByClassName("songItem"))
const toggle = document.querySelector(".toggle")

toggle.addEventListener("click",(e) =>{
     let html = document.querySelector('body' )
    if(html.classList.contains("dark") ){
        html.classList.remove("dark")
        e.target.innerbody = "Dark mode"
        console.log("dark")
    }
    else{
        html.classList.add("dark")
        e.target.innerhtml = "light mode"
    }
 })

 toggle.addEventListener("click",(e) =>{
    let contaner = document.querySelector('.contaner' )
   if(contaner.classList.contains("dark") ){
    contaner.classList.remove("dark")
       e.target.innercontaner = "Dark mode"
       console.log("dark")
   }
   else{
    contaner.classList.add("dark")
       e.target.innercontaner = "light mode"
   }
})

toggle.addEventListener("click",(e) =>{
    let nav = document.querySelector('nav ul' )
   if(nav.classList.contains("dark") ){
    nav.classList.remove("dark")
       e.target.innerul = "Dark mode"
       console.log("dark")
   }
   else{
    nav.classList.add("dark")
       e.target.innerul = "light mode"
   }
})
toggle.addEventListener("click",(e) =>{
    let bottom = document.querySelector('.bottom' )
   if(bottom.classList.contains("dark") ){
    bottom.classList.remove("dark")
       e.target.innerbottom = "Dark mode"
       console.log("dark")
   }
   else{
    bottom.classList.add("dark")
       e.target.innerbottom = "light mode"
   }
})

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

// myprogressBar.addEventListener("change", ()=>{
//     audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
// })


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
