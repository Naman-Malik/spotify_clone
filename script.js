let songIndex = 0;
let audioElement = new Audio('joji.mp3');
let masterPlay = document.getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.querySelector(".gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let playSong = Array.from(document.getElementsByClassName('playSong'));

let songs = [
    {songName: "Your Man ",filePath: "joji.mp3",coverPath: "joji.jpg"},
    {songName: "promises",filePath: "promises.mp3",coverPath: "promises.jpg"},
    {songName: "turn around",filePath: "turn around.mp3",coverPath: "turn around.jpg"},
    {songName: "circles",filePath: "circles.mp3",coverPath: "circles.jpg"},
    {songName: "crew love",filePath: "crew love.mp3",coverPath: "crew love.jpg"},
    {songName: "human",filePath: "human.mp3",coverPath: "human.jpg"},
    {songName: "Your Man",filePath: "joji.mp3",coverPath: "joji.jpg"},
]

songItems.forEach((element,i)=>{
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    // element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
}) 

const makeAllPlays = ()=>{
    playSong.forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

playSong.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        // index = e.target.id;
        audioElement.src = e.target.id+'.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})
document.getElementsById('previous')